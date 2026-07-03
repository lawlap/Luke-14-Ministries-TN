'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  return (
    <form
      className="rounded-lg border border-neutral-200 shadow bg-white p-6 sm:p-8"
      onSubmit={(e) => {
        e.preventDefault();
        router.push('/account/dashboard/');
      }}
    >
      <h2 className="text-2xl font-bold mb-1">Log In</h2>
      <p className="text-sm text-neutral-500 mb-5">
        Preview build: any email and password will open the sample dashboard.
      </p>
      <label className="block font-semibold mb-1.5">Email</label>
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full rounded border border-neutral-300 px-4 py-2.5 mb-4"
      />
      <label className="block font-semibold mb-1.5">Password</label>
      <input
        type="password"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full rounded border border-neutral-300 px-4 py-2.5 mb-6"
      />
      <button type="submit" className="btn-primary w-full">
        Log In
      </button>
      <div className="mt-5 text-center text-neutral-600">
        <p>
          New to Luke 14 Ministries?{' '}
          <Link href="/account/signup" className="text-brand underline">
            Create an account
          </Link>
        </p>
        <p className="mt-2 text-sm">
          <span className="underline cursor-pointer">Forgot password?</span>{' '}
          (available in live version)
        </p>
      </div>
    </form>
  );
}
