// const url = `https://api.nytimes.com/svc/news/v3/content/all/${section}.json?api-key=${apiKey}`;

export default async function fetchPopularNews(category) {
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;
    const url = new URL(`${category}.json`,`https://api.nytimes.com/svc/topstories/v2/`);
    url.searchParams.append("api-key", apiKey);
  const res = await fetch(url, { next: { revalidate: 5 } });
  if (!res.ok) throw new Error('Failed to fetch news');
  return res.json();
}