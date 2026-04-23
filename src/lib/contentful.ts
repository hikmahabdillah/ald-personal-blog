import { createClient } from "contentful";

export const contentfulClient = createClient({
  space: import.meta.env.CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.CONTENTFUL_DELIVERY_ACCESS_TOKEN,
});
