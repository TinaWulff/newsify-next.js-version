import CategoryList from '../components/CategoryList';
import fetchPopularNews from '../utilities/popular-fetch';

export default async function Popular() {
  // Definer de kategorier du vil vise 
  const categories = ['world', 'health', 'arts', 'technology', 'sports'];
  
  // Fetch data for hver kategori 
  const categoryData = await Promise.all(
    categories.map(async (category) => {
      try {
        const data = await fetchPopularNews(category);
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

// Denne side og home-siden bør laves mere dynamisk med en if else statement på route i forhold til fetcet, da de ellers er ens */