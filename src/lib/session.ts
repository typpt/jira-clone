import {
  Client,
  Account,
  Databases,
  Storage,
  Models,
  Users,
  type Account as AccountType,
  type Databases as DatabasesType,
  type Storage as StorageType,
  type Users as UsersType,
} from 'node-appwrite';

import { getCookie } from 'hono/cookie';
import { createMiddleware } from 'hono/factory';

type AdditionalType = {
  Variables: {
    account: AccountType;
    databases: DatabasesType;
    storage: StorageType;
    users: UsersType;
    user: Models.User<Models.Preferences>;
  };
};

export const sessionMiddleware = createMiddleware<AdditionalType>(
  async (c, next) => {
    const client = new Client()
      .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
      .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT!);

    const session = getCookie(c, 'JIRA_COOKIE');

    if (!session) {
      return c.json({ error: 'Anauthorized' }, 401);
    }

    client.setSession(session);

    const account = new Account(client);
    const databases = new Databases(client);
    const storage = new Storage(client);

    const user = await account.get();

    c.set('account', account);
    c.set('databases', databases);
    c.set('storage', storage);
    c.set('user', user);

    await next();
  }
);
