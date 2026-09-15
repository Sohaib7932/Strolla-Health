// Shared between the server action and the client form.
// Kept out of actions.ts because a "use server" file may only export
// async functions — exporting a plain object from it throws at runtime.

export type WaitlistValues = {
  firstName: string;
   email: string;
  phone: string;
};

export type WaitlistState = {
  status: "idle" | "error" | "success";
  errors?: Partial<Record<keyof WaitlistValues, string>>;
  values?: WaitlistValues;
};

export const initialWaitlistState: WaitlistState = { status: "idle" };
