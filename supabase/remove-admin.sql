-- Run once in Supabase SQL Editor to remove the old manager system.
-- Existing pending visitor reviews are published so they are not stranded.
begin;

drop policy if exists "Admins moderate reviews" on public.tourist_reviews;
drop policy if exists "Public read approved reviews" on public.tourist_reviews;
drop policy if exists "Visitors submit own reviews" on public.tourist_reviews;
drop policy if exists "Profiles readable by owner or admin" on public.profiles;
drop policy if exists "Users update own display name" on public.profiles;
drop policy if exists "Admins add sites" on public.sites;
drop policy if exists "Admins edit sites" on public.sites;
drop policy if exists "Admins remove sites" on public.sites;
drop function if exists public.is_admin();
alter table public.profiles drop column if exists role;

update public.tourist_reviews set status = 'approved' where status = 'pending';
alter table public.tourist_reviews alter column status set default 'approved';
alter table public.tourist_reviews drop constraint if exists tourist_reviews_status_check;
alter table public.tourist_reviews add constraint tourist_reviews_status_check check (status in ('approved','rejected'));

create policy "Public read approved reviews" on public.tourist_reviews for select to anon, authenticated using (status = 'approved');
create policy "Visitors submit reviews" on public.tourist_reviews for insert to authenticated with check (user_id = auth.uid() and status = 'approved');

create policy "Users read own profile" on public.profiles for select to authenticated using (id = auth.uid());
create policy "Users update own display name" on public.profiles for update to authenticated using (id = auth.uid()) with check (id = auth.uid());

create or replace function public.handle_new_user()
returns trigger language plpgsql security definer set search_path = public
as $$ begin
  insert into public.profiles (id, display_name)
  values (new.id, coalesce(new.raw_user_meta_data->>'display_name', ''))
  on conflict (id) do nothing;
  return new;
end; $$;

commit;
