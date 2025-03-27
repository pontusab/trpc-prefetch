import { getQueryClient, trpc } from '@/trpc/server';
import { Suspense } from 'react';
import { ClientGreetingPromiseProp } from '@/components/client-greeting-promiseProp';
 
export default function Home() {
  const promise = getQueryClient().ensureQueryData(
    trpc.hello.queryOptions({ text: 'world' })
  )
  
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ClientGreetingPromiseProp promise={promise} />
    </Suspense >
  );
}