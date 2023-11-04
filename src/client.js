import  {createClient} from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
    projectId: '',
    dataset: 'production',
    apiVersion: '2023-10-31',
    useCdn: true,
    token: '',
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);