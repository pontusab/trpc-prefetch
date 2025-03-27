import {
    defaultShouldDehydrateQuery,
    QueryClient,
  } from '@tanstack/react-query';
  import superjson from 'superjson';
  
  export function makeQueryClient() {
    return new QueryClient({
      defaultOptions: {
        queries: {
          staleTime: 30 * 1000,
        },
        dehydrate: {
          // serializeData: superjson.serialize,
          // include pending queries in dehydration
          shouldDehydrateQuery: (query) =>
            defaultShouldDehydrateQuery(query) ||
            query.state.status === 'pending',
          shouldRedactErrors: (error) => {
            // We should not catch Next.js server errors
            // as that's how Next.js detects dynamic pages
            // so we cannot redact them.
            // Next.js also automatically redacts errors for us
            // with better digests.
            return false
          },
        },
        hydrate: {
          // deserializeData: superjson.deserialize,
        },
      },
    });
  }