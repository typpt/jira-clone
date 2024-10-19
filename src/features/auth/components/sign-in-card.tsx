'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema, SignIn } from '../schema/login-schema';

import { FcGoogle } from 'react-icons/fc';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Separator } from '@/components/ui/separator';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function SignInCard() {
  const form = useForm<SignIn>({
    mode: 'all',
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  function onSubmit(values: SignIn) {
    console.log(values);
  }

  return (
    <Card className='h-full w-full shadow-none border-none'>
      <CardHeader className='text-center p-5'>
        <CardTitle className='text-2xl'>Welcome back</CardTitle>
      </CardHeader>
      <div className='px-10'>
        <Separator />
      </div>
      <CardContent className='p-5 space-y-6'>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
            <FormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      type='email'
                      placeholder='jhon@example.com'
                      disabled={false}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='password'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      type='password'
                      placeholder='******'
                      disabled={false}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type='submit' disabled={false} size='lg' className='w-full'>
              Login
            </Button>
          </form>

          <div className='mx-24'>
            <Separator />
          </div>

          <Button
            type='button'
            variant='secondary'
            size='lg'
            disabled={false}
            className='w-full flex items-center gap-x-5'
          >
            <FcGoogle size={20} />
            <span>Login with Google</span>
          </Button>

          <p className='text-sm'>
            <span className='text-muted-foreground'>
              Don&apos;t have an Account?
            </span>{' '}
            <Link href='/sign-up' className='text-sky-600 hover:underline'>
              Sign up
            </Link>
          </p>
        </Form>
      </CardContent>
    </Card>
  );
}
