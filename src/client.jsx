import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: '3mrnf6hx',
  dataset: 'production',
  apiVersion: '2023-06-29',
  useCdn: true,
  token: 'skf1krDQ96MtSf1zmVvViuOglrWDZuOhiKiwBc4Ax6yCbAdxVv3MIPqmxcGns2JAh1ekBaybaHbIqUoN4BNExJLjOFccOWAjmUEcgqpyJ4xoW8V9jrDtsXOrFi3hISwS7XzwHjJg95IKJqU8hLukYAb8dRiINNOFHtEY5fzNaFxYRo3sP30L',
});



const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
