"use client";

import { useActionState, useId } from "react";
import { joinWaitlist } from "./actions";
import { ArrowIcon, CheckIcon, LockIcon, UsersIcon } from "./icons";
import { initialWaitlistState } from "./waitlist";

const benefits = [
  "An exclusive founder’s discount when we launch",
  "A chance to be part of our small beta testing group",
  "The opportunity to share feedback and help shape Strolla",
];

const CARD =
  "rounded-[22px] border border-line bg-card p-[clamp(16px,2.4svh,24px)] shadow-[0_1px_2px_rgba(75,52,44,0.05),0_6px_16px_-8px_rgba(75,52,44,0.14),0_28px_56px_-24px_rgba(75,52,44,0.34)]";

/* 44px minimum on touch, so every control clears the tap-target guidance. */
const FIELD_H = "h-11 lg:h-[clamp(38px,5svh,44px)]";
/* White on #C38381 measures 3.05:1. WCAG treats >=18.66px bold as large text,
   which needs only 3:1 - so a 19px extrabold label keeps the exact brand
   colour AND clears AA. The taller button gives that label room to breathe. */
const BUTTON_H = "h-12 lg:h-[clamp(42px,5.4svh,48px)]";

export function WaitlistForm() {
  const [state, formAction, pending] = useActionState(
    joinWaitlist,
    initialWaitlistState
  );

  if (state.status === "success") {
    return (
      <div role="status" className={CARD}>
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-line text-accent">
          <CheckIcon className="h-5 w-5" />
        </div>
        <h2 className="mt-4 text-xl font-extrabold tracking-[-0.02em] text-ink">
          You&rsquo;re on the list
          {state.values?.firstName ? `, ${state.values.firstName}` : ""}.
        </h2>
        <p className="mt-2 text-[14.5px] leading-relaxed text-ink/90">
          We&rsquo;ll email{" "}
          <span className="font-semibold text-ink">{state.values?.email}</span>{" "}
          the moment early access opens &mdash; and nothing in between.
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} noValidate className={CARD}>
      {/* Benefits sit beside the fields from lg up — it keeps the card short
          enough that the whole page clears the fold on a laptop. */}
      <div className="grid gap-4 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1fr)] lg:gap-7">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-line text-accent">
              <UsersIcon className="h-[18px] w-[18px]" />
            </span>
            <h2 className="text-[clamp(15px,2svh,17px)] font-extrabold tracking-[-0.02em] text-ink">
              Join the waitlist for:
            </h2>
          </div>

          <ul className="mt-3 space-y-[clamp(5px,0.9svh,8px)]">
            {benefits.map((benefit) => (
              <li
                key={benefit}
                className="flex items-start gap-2.5 text-[clamp(12.5px,1.6svh,13.5px)] leading-[1.35] text-ink"
              >
                <CheckIcon className="mt-px h-4 w-4 shrink-0 text-accent" />
                {benefit}
              </li>
            ))}
          </ul>
        </div>

        <div className="border-t border-line pt-4 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-7">
          <div className="grid gap-3 sm:grid-cols-2">
            <Field
              name="firstName"
              label="First name"
              placeholder="Sarah"
              autoComplete="given-name"
              enterKeyHint="next"
              defaultValue={state.values?.firstName}
              error={state.errors?.firstName}
            />
            <Field
              name="phone"
              type="tel"
              inputMode="tel"
              label="Phone"
              hint="optional"
              placeholder="555 012 3456"
              autoComplete="tel"
              enterKeyHint="next"
              defaultValue={state.values?.phone}
              error={state.errors?.phone}
            />
            <div className="sm:col-span-2">
              <Field
                name="email"
                type="email"
                inputMode="email"
                label="Email address"
                placeholder="sarah@example.com"
                autoComplete="email"
                autoCapitalize="off"
                autoCorrect="off"
                spellCheck={false}
                enterKeyHint="go"
                defaultValue={state.values?.email}
                error={state.errors?.email}
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={pending}
            className={`group mt-3 flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-5 text-[19px] font-extrabold tracking-[-0.015em] text-white transition-[background-color,transform] hover:bg-accent-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-600 active:translate-y-px disabled:cursor-progress disabled:opacity-70 ${BUTTON_H}`}
          >
            {pending ? "Joining…" : "Join the waitlist"}
            <ArrowIcon className="h-[18px] w-[18px] transition-transform group-hover:translate-x-1" />
          </button>

          <p className="mt-2.5 flex items-center justify-center gap-2 text-[12px] text-muted">
            <LockIcon className="h-3.5 w-3.5 shrink-0" />
            No spam. One email when Strolla launches.
          </p>
        </div>
      </div>
    </form>
  );
}

function Field({
  name,
  label,
  hint,
  error,
  type = "text",
  ...props
}: {
  name: string;
  label: string;
  hint?: string;
  error?: string;
  type?: string;
} & React.InputHTMLAttributes<HTMLInputElement>) {
  const id = useId();
  const errorId = `${id}-error`;

  return (
    <div>
      <label
        htmlFor={id}
        className="flex items-baseline gap-1 text-[12px] font-bold text-ink"
      >
        {label}
        {hint ? <span className="font-medium text-muted">({hint})</span> : null}
      </label>
      <input
        {...props}
        id={id}
        name={name}
        type={type}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : undefined}
        /* 16px on touch: anything smaller makes iOS Safari zoom on focus. */
        className={`mt-1 w-full rounded-xl border bg-line px-3 text-[16px] text-ink transition-[background-color,border-color,box-shadow] placeholder:text-muted/75 focus:bg-canvas focus:outline-none focus:ring-4 lg:text-[14px] ${FIELD_H} ${
          error
            ? "border-accent-600 ring-accent-600/15"
            : "border-transparent focus:border-accent focus:ring-accent/18"
        }`}
      />
      {error ? (
        <p
          id={errorId}
          role="alert"
          className="mt-1 text-[12px] font-semibold text-accent-600"
        >
          {error}
        </p>
      ) : null}
    </div>
  );
}
