'use client';
import { use } from 'react';

export function ClientGreetingPromiseProp(props: {
  promise: Promise<{ greeting: string }>
}) {
  const data = use(props.promise)
  
  return <div>{data.greeting}</div>;
}
