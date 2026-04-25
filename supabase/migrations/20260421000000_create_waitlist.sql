create table public.waitlist (
  id uuid primary key default gen_random_uuid(),
  email text not null,
  ip text,
  source text,
  user_agent text,
  list_key text not null,
  verification_token text,
  verification_sent_at timestamptz,
  email_verified boolean not null default false,
  verified_at timestamptz,
  created_at timestamptz not null default now(),
  constraint waitlist_email_list_key_unique unique (email, list_key)
);

create index waitlist_verification_token_idx
  on public.waitlist (verification_token);

alter table public.waitlist enable row level security;

comment on table public.waitlist is
  'Waitlist signups across multiple products, partitioned by list_key. RLS is enabled with no policies, so only the service_role key (which bypasses RLS) can read/write.';
