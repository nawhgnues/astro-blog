import { indexCollection } from "./schema/indexSchema";
import { blogCollection } from "./schema/blogSchema";
import { experienceCollection } from "./schema/experienceSchema";

export const collections = {
  index: indexCollection,
  blog: blogCollection,
  experience: experienceCollection,
};
