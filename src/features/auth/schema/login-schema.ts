import * as z from 'zod';

export const loginSchema = z.object({
  email: z
    .string()
    .email()
    .transform((value) => value.toLowerCase()),
  password: z.string().min(6).trim(),
});

export type SignIn = z.infer<typeof loginSchema>;
