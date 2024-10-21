import { Hono } from 'hono';
import { zValidator } from '@hono/zod-validator';
import { registerSchema } from '../schema/register-schema';
import { loginSchema } from '../schema/login-schema';
import { ID } from 'node-appwrite';
import { createAdminClient } from '@/lib/appwrite';
import { setCookie } from 'hono/cookie';

const app = new Hono()
  .post('/register', zValidator('form', registerSchema), async (c) => {
    const { name, email, password } = c.req.valid('form');

    const { account } = await createAdminClient();

    await account.create(ID.unique(), email, password, name);

    const session = await account.createEmailPasswordSession(email, password);

    setCookie(c, 'JIRA_COOKIE', session.secret, {
      path: '/',
      httpOnly: true,
      secure: true,
      sameSite: 'strict',
      maxAge: 60 * 60 * 24 * 30,
    });

    return c.json({ succsess: true });
  })
  .post('/login', zValidator('form', loginSchema), async (c) => {
    const { email, password } = c.req.valid('form');

    const { account } = await createAdminClient();

    const session = await account.createEmailPasswordSession(email, password);

    setCookie(c, 'JIRA_COOKIE', session.secret, {
      path: '/',
      httpOnly: true,
      secure: true,
      sameSite: 'strict',
      maxAge: 60 * 60 * 24 * 30,
    });

    return c.json({ succsess: true });
  });

export default app;
