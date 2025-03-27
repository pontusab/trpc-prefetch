'use client';

import { useTRPC } from '@/trpc/client';
import { useQueryClient, useSuspenseQuery } from '@tanstack/react-query';

export function ClientGreeting() {
  const trpc = useTRPC(); 
  const queryClient = useQueryClient();
  
  const options = trpc.hello.queryOptions({ text: 'world' })

  console.log('before suspense: rendering with state', queryClient.getQueryState(options.queryKey))
  const { data } = useSuspenseQuery(options);
  console.log('after suspense: rendering with state', queryClient.getQueryState(options.queryKey))
  
  return <div>{data.greeting}</div>;
}