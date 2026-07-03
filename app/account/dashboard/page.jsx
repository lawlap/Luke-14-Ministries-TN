import Link from 'next/link';

export const metadata = { title: 'Dashboard' };

export default function DashboardPage() {
  return (
    <section className="bg-neutral-50 min-h-[70vh] py-12">
      <div className="container-site">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold">Welcome back, Sample Family!</h1>
            <p className="text-neutral-500">
              Sample dashboard — this is what families and volunteers will see
              after logging in.
            </p>
          </div>
          <Link href="/account" className="btn-outline !py-2">
            Log Out
          </Link>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-lg bg-white border border-neutral-200 shadow-sm p-6 lg:col-span-2">
            <h2 className="text-xl font-bold mb-4">My Camp Registrations</h2>
            <div className="rounded border border-neutral-200 p-4 flex flex-wrap justify-between gap-3">
              <div>
                <p className="font-semibold">
                  Camp Celebrate 2026 — Week 2 (July 27–31)
                </p>
                <p className="text-neutral-600 text-sm">
                  4 family members · Balance due: $245 of $495
                </p>
              </div>
              <span className="self-center rounded-full bg-amber-100 text-amber-800 px-3 py-1 text-sm font-semibold">
                Deposit Paid
              </span>
            </div>
            <div className="mt-4 flex flex-wrap gap-3">
              <button className="btn-primary !py-2">Pay Balance</button>
              <button className="btn-outline !py-2">Edit Registration</button>
              <Link href="/register/family" className="btn-outline !py-2">
                New Registration
              </Link>
            </div>
          </div>

          <div className="rounded-lg bg-white border border-neutral-200 shadow-sm p-6">
            <h2 className="text-xl font-bold mb-4">My Household</h2>
            <ul className="space-y-2 text-neutral-700">
              <li>Jane Sample — Parent/Guardian</li>
              <li>John Sample — Parent/Guardian</li>
              <li>Alex Sample — Camper (14)</li>
              <li>Riley Sample — Sibling (11)</li>
            </ul>
            <button className="btn-outline !py-2 mt-4 w-full">
              Manage Household
            </button>
          </div>

          <div className="rounded-lg bg-white border border-neutral-200 shadow-sm p-6 lg:col-span-2">
            <h2 className="text-xl font-bold mb-4">My Giving</h2>
            <table className="w-full text-left">
              <thead>
                <tr className="text-sm text-neutral-500 border-b">
                  <th className="py-2">Date</th>
                  <th>Fund</th>
                  <th>Type</th>
                  <th className="text-right">Amount</th>
                </tr>
              </thead>
              <tbody className="text-neutral-700">
                <tr className="border-b">
                  <td className="py-2">Jun 1, 2026</td>
                  <td>Camp Celebrate</td>
                  <td>Monthly</td>
                  <td className="text-right">$50.00</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2">May 1, 2026</td>
                  <td>Camp Celebrate</td>
                  <td>Monthly</td>
                  <td className="text-right">$50.00</td>
                </tr>
                <tr>
                  <td className="py-2">Mar 14, 2026</td>
                  <td>General Operating Fund</td>
                  <td>One-time</td>
                  <td className="text-right">$100.00</td>
                </tr>
              </tbody>
            </table>
            <div className="mt-4 flex flex-wrap gap-3">
              <button className="btn-outline !py-2">
                Manage Recurring Gift
              </button>
              <button className="btn-outline !py-2">
                Download Giving Statement
              </button>
            </div>
          </div>

          <div className="rounded-lg bg-white border border-neutral-200 shadow-sm p-6">
            <h2 className="text-xl font-bold mb-4">Account Settings</h2>
            <ul className="space-y-2 text-brand underline cursor-pointer">
              <li>Update contact information</li>
              <li>Change password</li>
              <li>Email preferences</li>
              <li>Payment methods</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
