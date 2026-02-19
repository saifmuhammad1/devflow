import z from "zod";

export const TaskMaangerSchema = z.object({
  taskType: z.string(),
  comment: z.string(),
  deadline: z.string(),
  title: z.string(),
});
