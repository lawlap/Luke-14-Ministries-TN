'use client';

import { useState } from 'react';
import Link from 'next/link';

const weeks = [
  'Week 1: July 20–24, 2026',
  'Week 2: July 27–31, 2026',
];

const emptyMember = {
  name: '',
  age: '',
  role: 'Camper with disability',
  needs: '',
  diet: '',
};

function Steps({ step }) {
  const labels = ['Family Info', 'Family Members', 'Week & Needs', 'Review'];
  return (
    <ol className="flex flex-wrap gap-2 mb-8">
      {labels.map((l, i) => (
        <li
          key={l}
          className={`rounded-full px-4 py-1.5 text-sm font-semibold ${
            i === step
              ? 'bg-brand text-white'
              : i < step
              ? 'bg-brand-light text-brand-dark'
              : 'bg-neutral-100 text-neutral-400'
          }`}
        >
          {i + 1}. {l}
        </li>
      ))}
    </ol>
  );
}

const input = 'w-full rounded border border-neutral-300 px-4 py-2.5';
const label = 'block font-semibold mb-1.5 mt-4 first:mt-0';

export default function FamilyWizard() {
  const [step, setStep] = useState(0);
  const [family, setFamily] = useState({
    contact: '',
    email: '',
    phone: '',
    address: '',
    church: '',
  });
  const [members, setMembers] = useState([{ ...emptyMember }]);
  const [week, setWeek] = useState(weeks[0]);
  const [notes, setNotes] = useState('');
  const [done, setDone] = useState(false);

  const setF = (k) => (e) => setFamily({ ...family, [k]: e.target.value });
  const setM = (i, k) => (e) => {
    const next = members.map((m, j) => (j === i ? { ...m, [k]: e.target.value } : m));
    setMembers(next);
  };

  if (done) {
    return (
      <div className="rounded-lg border-2 border-brand bg-brand-light p-8 text-center">
        <h2 className="text-2xl font-bold text-brand-dark">
          Registration submitted (preview only)
        </h2>
        <p className="mt-3 text-lg">
          In the live version this saves your registration, emails a
          confirmation, and takes you to secure payment of the $495 camp fee
          (deposit or pay-in-full) through Stripe. Camp staff would see your
          family in their admin dashboard immediately.
        </p>
        <Link href="/account/dashboard" className="btn-primary mt-6">
          View Sample Dashboard
        </Link>
      </div>
    );
  }

  return (
    <div className="rounded-lg border border-neutral-200 shadow bg-white p-6 sm:p-8">
      <Steps step={step} />

      {step === 0 && (
        <div>
          <label className={label}>Primary contact name</label>
          <input className={input} value={family.contact} onChange={setF('contact')} />
          <label className={label}>Email</label>
          <input type="email" className={input} value={family.email} onChange={setF('email')} />
          <label className={label}>Phone</label>
          <input type="tel" className={input} value={family.phone} onChange={setF('phone')} />
          <label className={label}>Home address</label>
          <input className={input} value={family.address} onChange={setF('address')} />
          <label className={label}>Home church (optional)</label>
          <input className={input} value={family.church} onChange={setF('church')} />
        </div>
      )}

      {step === 1 && (
        <div className="space-y-6">
          {members.map((m, i) => (
            <div key={i} className="rounded border border-neutral-200 p-4">
              <div className="flex justify-between items-center">
                <h3 className="font-bold">Family member {i + 1}</h3>
                {members.length > 1 && (
                  <button
                    type="button"
                    className="text-red-600 text-sm underline"
                    onClick={() => setMembers(members.filter((_, j) => j !== i))}
                  >
                    Remove
                  </button>
                )}
              </div>
              <div className="grid sm:grid-cols-2 gap-4 mt-2">
                <div>
                  <label className={label}>Full name</label>
                  <input className={input} value={m.name} onChange={setM(i, 'name')} />
                </div>
                <div>
                  <label className={label}>Age</label>
                  <input type="number" className={input} value={m.age} onChange={setM(i, 'age')} />
                </div>
              </div>
              <label className={label}>Role</label>
              <select className={input} value={m.role} onChange={setM(i, 'role')}>
                <option>Camper with disability</option>
                <option>Parent/Guardian</option>
                <option>Sibling</option>
                <option>Caregiver</option>
              </select>
              <label className={label}>
                Disability / support needs (buddies, mobility, medical)
              </label>
              <textarea className={input} rows={2} value={m.needs} onChange={setM(i, 'needs')} />
              <label className={label}>Dietary needs / allergies</label>
              <input className={input} value={m.diet} onChange={setM(i, 'diet')} />
            </div>
          ))}
          <button
            type="button"
            className="btn-outline !py-2"
            onClick={() => setMembers([...members, { ...emptyMember }])}
          >
            + Add family member
          </button>
        </div>
      )}

      {step === 2 && (
        <div>
          <label className={label}>Choose your week</label>
          <div className="space-y-2 mt-2">
            {weeks.map((w) => (
              <label
                key={w}
                className="flex items-center gap-3 rounded border border-neutral-300 p-3 cursor-pointer has-[:checked]:border-brand has-[:checked]:bg-brand-light"
              >
                <input
                  type="radio"
                  name="week"
                  checked={week === w}
                  onChange={() => setWeek(w)}
                />
                <span className="font-semibold">{w}</span>
              </label>
            ))}
          </div>
          <label className={label}>
            Anything else camp staff should know?
          </label>
          <textarea
            className={input}
            rows={4}
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
          <div className="mt-4 rounded bg-brand-light p-4">
            <p className="font-semibold">Camp fee: $495 per family</p>
            <p className="text-sm text-neutral-600">
              Payment (deposit or pay-in-full) happens on the next screen in
              the live version. Scholarships available — contact
              camp@luke14ministries.net.
            </p>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="space-y-4">
          <h3 className="text-xl font-bold">Review</h3>
          <p>
            <strong>Contact:</strong> {family.contact || '—'} ·{' '}
            {family.email || '—'} · {family.phone || '—'}
          </p>
          <p>
            <strong>Week:</strong> {week}
          </p>
          <div>
            <strong>Family members ({members.length}):</strong>
            <ul className="list-disc pl-6 mt-1">
              {members.map((m, i) => (
                <li key={i}>
                  {m.name || 'Unnamed'} ({m.age || '?'}) — {m.role}
                </li>
              ))}
            </ul>
          </div>
          {notes && (
            <p>
              <strong>Notes:</strong> {notes}
            </p>
          )}
          <p className="rounded bg-brand-light p-4">
            <strong>Total: $495</strong> — payment collected at the next step
            in the live version.
          </p>
        </div>
      )}

      <div className="mt-8 flex justify-between">
        <button
          type="button"
          className="btn-outline !py-2 disabled:opacity-40"
          disabled={step === 0}
          onClick={() => setStep(step - 1)}
        >
          Back
        </button>
        {step < 3 ? (
          <button
            type="button"
            className="btn-primary !py-2"
            onClick={() => setStep(step + 1)}
          >
            Continue
          </button>
        ) : (
          <button
            type="button"
            className="btn-gold !py-2"
            onClick={() => setDone(true)}
          >
            Submit &amp; Continue to Payment
          </button>
        )}
      </div>
    </div>
  );
}
