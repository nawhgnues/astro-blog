import { defineCollection, z } from "astro:content";

export const experienceCollection = defineCollection({
  type: "data",
  schema: z.object({
    title: z.string(),
    center: z.boolean(),
    sections: z.object({
      education: z.object({
        heading: z.string(),
        items: z.array(
          z.object({
            school: z.string(),
            description: z.string(),
          })
        ),
      }),
      certifications: z.object({
        heading: z.string(),
        items: z.array(
          z.object({
            title: z.string(),
            description: z.string(),
          })
        ),
      }),
      experience: z.object({
        heading: z.string(),
        company: z.string(),
        description: z.string(),
        projects: z.array(
          z.object({
            title: z.string(),
            description: z.string(),
          })
        ),
      }),
    }),
  }),
});
