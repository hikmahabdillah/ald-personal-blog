import { createClient } from "contentful";

type ContentfulClient = ReturnType<typeof createClient>;

export const contentfulClient: ContentfulClient = createClient({
  space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.VITE_CONTENTFUL_DELIVERY_ACCESS_TOKEN,
});
