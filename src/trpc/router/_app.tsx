import { z } from 'zod';
import { baseProcedure, createTRPCRouter } from '../init';
import { setTimeout } from 'node:timers/promises';

export const appRouter = createTRPCRouter({
  hello: baseProcedure
    .input(
      z.object({
        text: z.string(),
      }),
    )
    .query(async (opts) => {
      console.log('running hello');
      await setTimeout(1000);
      return {
        greeting: `hello ${opts.input.text}`,
      };
    }),
});

// export type definition of API
export type AppRouter = typeof appRouter;