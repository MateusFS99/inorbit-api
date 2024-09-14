import type { FastifyPluginAsyncZod } from "fastify-type-provider-zod";
import { deleteGoalCompletion } from "../../services/delete-goal-completion";
import z from "zod";

export const deleteCompletionRoute: FastifyPluginAsyncZod = async (app) => {
  app.delete(
    "/completions",
    {
      schema: {
        body: z.object({
          completionId: z.string(),
        }),
      },
    },
    async (req) => {
      const { completionId } = req.body;

      return await deleteGoalCompletion({ completionId });
    }
  );
};
