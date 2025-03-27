import { HydrateClient, prefetch, trpc } from '@/trpc/server';
import { Suspense } from 'react';
import { ClientGreetingUseSuspenseQuery } from '@/components/client-greeting-useSuspenseQuery';
 
export default function Home() {
  prefetch(trpc.hello.queryOptions({ text: 'world' }));
  
  return (
    <HydrateClient>
         <Suspense fallback={<div>Loading...</div>}>
          <ClientGreetingUseSuspenseQuery />
        </Suspense>
     </HydrateClient>
  );
}