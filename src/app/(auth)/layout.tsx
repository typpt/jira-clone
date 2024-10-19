'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { buttonVariants } from '@/components/ui/button';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isAuthPath = pathname === '/sign-in';

  return (
    <main className='bg-neutral-100 min-h-screen'>
      <div className='mx-auto max-w-screen-2xl p-5'>
        <nav className='flex items-center justify-between'>
          <Image src='/logo.svg' alt='Logo' width={152} height={56} />
          <Link
            className={buttonVariants({ variant: 'secondary', size: 'lg' })}
            href={isAuthPath ? '/sign-up' : '/sign-in'}
          >
            {isAuthPath ? 'Sign up' : 'Login'}
          </Link>
        </nav>
        <div className='flex items-center justify-center pt-4 md:pt-14'>
          {children}
        </div>
      </div>
    </main>
  );
}
