import { Card, CardHeader, CardTitle } from '@/components/ui/card';

export default function SignUpCard() {
  return (
    <Card className='h-full w-full shadow-none border-none'>
      <CardHeader className='text-center p-5'>
        <CardTitle className='text-2xl'>Welcome back!</CardTitle>
      </CardHeader>
    </Card>
  );
}
