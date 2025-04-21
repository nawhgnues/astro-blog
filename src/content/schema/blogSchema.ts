import { defineCollection, z } from "astro:content";

export const blogCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      publishedDate: z.date(),
      cover: image(),
      coverAlt: z.string().optional(),
      category: z.string(),
      tags: z.array(z.string()),
    }),
});
