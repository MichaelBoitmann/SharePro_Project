import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: '3mrnf6hx',
  dataset: 'production',
  apiVersion: '2023-06-21',
  useCdn: true,
  token: 'skNUHOqJpYkLRvETxbQwJfo0jiZMMBiPdky59rDtzfBUyE3El9Jlx5CoFqTjLRVXBEhcgMUJzQcJbycZKDUeeKFmUuZR039YpVwxMoE0HCCf0SRIBrGKImLcZ17wvSzofrtIoRI3pi9wdVFCKecrGz21qKPY5eTG8hWCkBpCg8Muha1oxroA',
});



const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
