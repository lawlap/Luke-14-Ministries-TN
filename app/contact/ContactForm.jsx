'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="block font-semibold mb-1">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="w-full rounded border border-neutral-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand"
        />
      </div>
      <div>
        <label htmlFor="email" className="block font-semibold mb-1">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full rounded border border-neutral-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand"
        />
      </div>
      <div>
        <label htmlFor="subject" className="block font-semibold mb-1">
          Subject
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          required
          className="w-full rounded border border-neutral-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand"
        />
      </div>
      <div>
        <label htmlFor="message" className="block font-semibold mb-1">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          className="w-full rounded border border-neutral-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand"
        />
      </div>
      <button type="submit" className="btn-primary">
        Send Message
      </button>
      {submitted && (
        <p
          role="status"
          className="rounded bg-brand-light border border-brand px-4 py-3 text-brand-dark font-semibold"
        >
          This is a preview build &mdash; form not yet connected.
        </p>
      )}
    </form>
  );
}
