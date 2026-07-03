'use client';

import { useState } from 'react';

const presets = [25, 50, 100, 250, 500];
const funds = [
  'General Operating Fund',
  'Camp Celebrate',
  'Luke 14 Party',
  'The Hazelnut Movement',
  'Wheels for Kenya',
];

export default function GivingForm() {
  const [amount, setAmount] = useState(50);
  const [custom, setCustom] = useState('');
  const [frequency, setFrequency] = useState('one-time');
  const [fund, setFund] = useState(funds[0]);
  const [submitted, setSubmitted] = useState(false);

  const effective = custom ? Number(custom) : amount;

  if (submitted) {
    return (
      <div className="rounded-lg border-2 border-brand bg-brand-light p-8 text-center">
        <h3 className="text-2xl font-bold text-brand-dark">
          Preview only — no charge was made
        </h3>
        <p className="mt-3 text-lg">
          In the live version, this will open a secure Stripe checkout for a{' '}
          <strong>
            {frequency === 'monthly' ? 'monthly' : 'one-time'} gift of $
            {effective}
          </strong>{' '}
          designated to <strong>{fund}</strong>, with a receipt emailed
          automatically and donor login for managing recurring gifts.
        </p>
        <button
          className="btn-outline mt-6"
          onClick={() => setSubmitted(false)}
        >
          Back
        </button>
      </div>
    );
  }

  return (
    <form
      className="rounded-lg border border-neutral-200 shadow p-6 sm:p-8 bg-white"
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
    >
      <h3 className="text-2xl font-bold mb-5">Give Online</h3>

      <div className="flex rounded overflow-hidden border border-brand mb-5">
        {['one-time', 'monthly'].map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setFrequency(f)}
            className={`flex-1 py-2.5 font-semibold ${
              frequency === f ? 'bg-brand text-white' : 'bg-white text-brand'
            }`}
          >
            {f === 'one-time' ? 'One-Time' : 'Monthly'}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-5 gap-2 mb-3">
        {presets.map((p) => (
          <button
            key={p}
            type="button"
            onClick={() => {
              setAmount(p);
              setCustom('');
            }}
            className={`rounded border py-2.5 font-semibold ${
              !custom && amount === p
                ? 'bg-brand text-white border-brand'
                : 'border-neutral-300 hover:border-brand'
            }`}
          >
            ${p}
          </button>
        ))}
      </div>
      <input
        type="number"
        min="1"
        placeholder="Custom amount"
        value={custom}
        onChange={(e) => setCustom(e.target.value)}
        className="w-full rounded border border-neutral-300 px-4 py-2.5 mb-5"
      />

      <label className="block font-semibold mb-1.5">Designate my gift to</label>
      <select
        value={fund}
        onChange={(e) => setFund(e.target.value)}
        className="w-full rounded border border-neutral-300 px-4 py-2.5 mb-6"
      >
        {funds.map((f) => (
          <option key={f}>{f}</option>
        ))}
      </select>

      <button type="submit" className="btn-gold w-full text-lg">
        Give ${effective || 0} {frequency === 'monthly' ? 'Monthly' : ''}
      </button>
      <p className="mt-3 text-sm text-neutral-500 text-center">
        Preview build — payments are not connected yet. The live site will use
        Stripe secure checkout.
      </p>
    </form>
  );
}
