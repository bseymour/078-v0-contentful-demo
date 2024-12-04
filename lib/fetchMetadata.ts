import { parse } from 'node-html-parser';

export async function fetchMetadata(url: string) {
  try {
    const response = await fetch(url);
    const html = await response.text();
    const root = parse(html);

    const title = root.querySelector('meta[property="og:title"]')?.getAttribute('content') ||
                  root.querySelector('title')?.text ||
                  'No title available';

    const description = root.querySelector('meta[property="og:description"]')?.getAttribute('content') ||
                        root.querySelector('meta[name="description"]')?.getAttribute('content') ||
                        'No description available';

    const image = root.querySelector('meta[property="og:image"]')?.getAttribute('content') ||
                  '/placeholder.svg?height=630&width=1200';

    return { title, description, image };
  } catch (error) {
    console.error('Error fetching metadata:', error);
    return {
      title: 'Error fetching metadata',
      description: 'Unable to load website information',
      image: '/placeholder.svg?height=630&width=1200'
    };
  }
}

