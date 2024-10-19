import * as z from 'zod';

export const registerSchema = z
  .object({
    name: z.string().min(3),
    email: z
      .string()
      .email()
      .transform((value) => value.toLowerCase()),
    password: z.string().min(6).trim(),
    confirmPassword: z.string().min(6).trim().optional(),
  })
  .superRefine(({ password, confirmPassword }, { addIssue }) => {
    if (password !== confirmPassword)
      addIssue({
        code: 'custom',
        message: 'the password is not the same',
        path: ['confirmPassword'],
      });
  });

export type SignUp = z.infer<typeof registerSchema>;
