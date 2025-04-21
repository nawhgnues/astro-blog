import { defineCollection, z } from "astro:content";

export const indexCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    intro: z.object({
      greeting: z.string(),
      name: z.string(),
      description: z.string(),
    }),
    "important-title": z.string(),
    points: z.array(z.string()),
    center: z.boolean(),
  }),
});
