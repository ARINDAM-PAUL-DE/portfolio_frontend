import  {createClient} from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
    projectId: 'jlog9dwv',
    dataset: 'production',
    apiVersion: '2023-10-31',
    useCdn: true,
    token: 'sk6OHNZJv4FAhbKE8qKBv6ZRSuNpQWUMXHN2grSN6048xXf1kOdyuwtsuKD3siNTXemc1Ia8GRRhYwURgWLM9obkRpF0rGw76VUGaWNwFyI8XcXGgZ8zJedbT17WGaLFMMAkLWH5L5Ha30yLi2aU2CUkyK4Foos8u6J026myNpJasNVL89wl',
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);