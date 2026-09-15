"use server";

import type { WaitlistState, WaitlistValues } from "./waitlist";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export async function joinWaitlist(
  _prevState: WaitlistState,
  formData: FormData
): Promise<WaitlistState> {
  const values: WaitlistValues = {
    firstName: String(formData.get("firstName") ?? "").trim(),
    email: String(formData.get("email") ?? "").trim(),
    phone: String(formData.get("phone") ?? "").trim(),
  };

  const errors: NonNullable<WaitlistState["errors"]> = {};

  if (values.firstName.length < 2) {
    errors.firstName = "Enter your first name.";
  }
  if (!EMAIL_PATTERN.test(values.email)) {
    errors.email = "Enter a valid email address.";
  }
  if (values.phone && values.phone.replace(/\D/g, "").length < 7) {
    errors.phone = "That number looks too short.";
  }

  if (Object.keys(errors).length > 0) {
    return { status: "error", errors, values };
  }

  // TODO: persist the signup — database row, Resend/Mailchimp audience, etc.
  console.log("[waitlist]", values);

  return { status: "success", values };
}
