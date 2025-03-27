import { HydrateClient, prefetch, trpc } from '@/trpc/server';
import { Suspense } from 'react';
import { ClientGreeting } from '@/components/client-greeting';
 
export default function Home() {
  prefetch(trpc.hello.queryOptions({ text: 'world' }));
  
  return (
    <HydrateClient>
         <Suspense fallback={<div>Loading...</div>}>
          <ClientGreeting />
        </Suspense>
     </HydrateClient>
  );
}