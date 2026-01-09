// Mit første forsøg, derefter rettet til med ai hjælp:
//  export default async function HomePage() {
//   const apiKey = process.env.NEXT_PUBLIC_API_KEY;

//   const res = await fetch(`https://api.nytimes.com/svc/news/v3/content/all/${section}.json`, { next: { revalidate: 5 }});
//   url.searchParams.append("api-key", apiKey);
//   const data = await res.json();

//   console.log('fetching latest news from', url.href);
//     return <section>{data.results}</section>;
// }

// src/app/utilities/home-fetch.js
export default async function fetchHomeNews(section) {
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;
  const url = `https://api.nytimes.com/svc/news/v3/content/all/${section}.json?api-key=${apiKey}`;
  const res = await fetch(url, { next: { revalidate: 5 } });
  if (!res.ok) throw new Error('Failed to fetch news');
  return res.json();
}