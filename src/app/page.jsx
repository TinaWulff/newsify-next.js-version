import CategoryList from './components/CategoryList';
import fetchHomeNews from './utilities/home-fetch';

export default async function Home() {
  // Definer de kategorier du vil vise
  const categories = ['world', 'health', 'arts', 'technology', 'sports'];
  
  // Fetch data for hver kategori
  const categoryData = await Promise.all(
    categories.map(async (category) => {
      try {
        const data = await fetchHomeNews(category);
        return {
          category,
          articles: data.results || []
        };
      } catch (error) {
        console.error(`Failed to fetch ${category}:`, error);
        return {
          category,
          articles: []
        };
      }
    })
  );

  return (
    <section>
      <nav>
        <ul>
          {categoryData.map(({ category, articles }) => (
            <CategoryList
              key={category} 
              category={category} 
              articles={articles}
            />
          ))}
        </ul>
      </nav>
    </section>
  )
}
