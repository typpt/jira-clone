import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className='bg-neutral-100 min-h-screen'>
      <div className='mx-auto max-w-screen-2xl p-5'>
        <nav className='flex items-center justify-center'>
          <Image src='/loto.svg' alt='Logo' width={152} height={56} />
          <Button variant='secondary' size='lg'>
            Sign up
          </Button>
        </nav>
        <div className='flex items-center justify-center pt-4 lg:pt-14'>
          {children}
        </div>
      </div>
    </main>
  );
}
