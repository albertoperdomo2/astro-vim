import { getCollection } from 'astro:content';

export async function get() {
  const blogEntries = await getCollection('blog');
  const posts = blogEntries.map(entry => ({
    title: entry.data.title,
    content: entry.body,
    path: `/blog/${entry.slug}`,
  }));

  return new Response(JSON.stringify(posts), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
