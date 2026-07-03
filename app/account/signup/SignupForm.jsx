'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function SignupForm() {
  const [form, setForm] = useState({
    first: '',
    last: '',
    email: '',
    phone: '',
    password: '',
    type: 'family',
  });
  const router = useRouter();
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  return (
    <form
      className="rounded-lg border border-neutral-200 shadow bg-white p-6 sm:p-8"
      onSubmit={(e) => {
        e.preventDefault();
        router.push(
          form.type === 'volunteer' ? '/register/volunteer/' : '/register/family/'
        );
      }}
    >
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block font-semibold mb-1.5">First name</label>
          <input required value={form.first} onChange={set('first')} className="w-full rounded border border-neutral-300 px-4 py-2.5" />
        </div>
        <div>
          <label className="block font-semibold mb-1.5">Last name</label>
          <input required value={form.last} onChange={set('last')} className="w-full rounded border border-neutral-300 px-4 py-2.5" />
        </div>
      </div>
      <label className="block font-semibold mb-1.5 mt-4">Email</label>
      <input type="email" required value={form.email} onChange={set('email')} className="w-full rounded border border-neutral-300 px-4 py-2.5" />
      <label className="block font-semibold mb-1.5 mt-4">Phone</label>
      <input type="tel" value={form.phone} onChange={set('phone')} className="w-full rounded border border-neutral-300 px-4 py-2.5" />
      <label className="block font-semibold mb-1.5 mt-4">Password</label>
      <input type="password" required minLength={8} value={form.password} onChange={set('password')} className="w-full rounded border border-neutral-300 px-4 py-2.5" />

      <label className="block font-semibold mb-2 mt-6">
        I&rsquo;m creating an account to…
      </label>
      <div className="space-y-2">
        <label className="flex items-start gap-3 rounded border border-neutral-300 p-3 cursor-pointer has-[:checked]:border-brand has-[:checked]:bg-brand-light">
          <input
            type="radio"
            name="type"
            value="family"
            checked={form.type === 'family'}
            onChange={set('type')}
            className="mt-1"
          />
          <span>
            <strong>Register my family for Camp Celebrate</strong>
            <br />
            <span className="text-sm text-neutral-600">
              For campers with disabilities and their family members
            </span>
          </span>
        </label>
        <label className="flex items-start gap-3 rounded border border-neutral-300 p-3 cursor-pointer has-[:checked]:border-brand has-[:checked]:bg-brand-light">
          <input
            type="radio"
            name="type"
            value="volunteer"
            checked={form.type === 'volunteer'}
            onChange={set('type')}
            className="mt-1"
          />
          <span>
            <strong>Volunteer at Camp Celebrate</strong>
            <br />
            <span className="text-sm text-neutral-600">
              Serve as a buddy or on a support team (STM)
            </span>
          </span>
        </label>
      </div>

      <button type="submit" className="btn-primary w-full mt-6">
        Create Account &amp; Continue
      </button>
      <p className="mt-4 text-center text-neutral-600 text-sm">
        Already have an account?{' '}
        <Link href="/account" className="text-brand underline">
          Log in
        </Link>
      </p>
      <p className="mt-2 text-center text-xs text-neutral-400">
        Preview build — no account is actually created.
      </p>
    </form>
  );
}
