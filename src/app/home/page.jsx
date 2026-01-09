export default async function HomePage() {
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;

  const res = await fetch(`https://api.nytimes.com/svc/news/v3/content/all/${section}.json`, { next: { revalidate: 5 }});
  url.searchParams.append("api-key", apiKey);
  const data = await res.json();

  console.log('fetching latest news from', url.href);

  return <section>{data}</section>;

  console.log(data);  
}