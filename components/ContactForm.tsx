"use client";

import { useState } from "react";

export default function ContactForm() {
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);
  const left = 250 - message.length;

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="grid gap-4 sm:grid-cols-2"
    >
      <input
        required
        placeholder="Name"
        className="rounded-xl border border-line bg-white px-4 py-3 text-ink outline-none transition focus:border-brand"
      />
      <input
        required
        placeholder="Phone"
        className="rounded-xl border border-line bg-white px-4 py-3 text-ink outline-none transition focus:border-brand"
      />
      <input
        type="email"
        required
        placeholder="Email"
        className="rounded-xl border border-line bg-white px-4 py-3 text-ink outline-none transition focus:border-brand sm:col-span-2"
      />
      <select
        defaultValue=""
        className="rounded-xl border border-line bg-white px-4 py-3 text-slate outline-none transition focus:border-brand sm:col-span-2"
      >
        <option value="" disabled>
          Referral type
        </option>
        <option>Facebook</option>
        <option>Google</option>
        <option>Other</option>
      </select>
      <div className="sm:col-span-2">
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value.slice(0, 250))}
          maxLength={250}
          rows={4}
          placeholder="How can we help you?"
          className="w-full resize-none rounded-xl border border-line bg-white px-4 py-3 text-ink outline-none transition focus:border-brand"
        />
        <p className="mt-1 text-right text-xs text-slate">
          You have {left} characters left.
        </p>
      </div>
      <div className="sm:col-span-2">
        <button
          type="submit"
          className="rounded-pill bg-brand px-8 py-3.5 font-semibold text-white shadow-soft transition hover:bg-brand-dark"
        >
          {sent ? "Thank you — we'll be in touch!" : "Send"}
        </button>
        <p className="mt-4 text-sm text-slate">
          <span className="font-semibold text-brand-deep">100% Secure!</span> We
          respect your privacy. Your information will not be shared.
        </p>
      </div>
    </form>
  );
}
