


import Image from 'next/image';
import Article from './article';

export default function CategoryList({ category, articles }) {
  return (
    <li>
      <Image src="/imgs/newsify_logo.svg" alt="Logo" width={50} height={100} />
      <h4>{category.charAt(0).toUpperCase() + category.slice(1)}</h4>
      <section className="articles-container"> {/* section til at hente artikler ind i */}
        {articles && articles.length > 0 ? (
          articles.slice(0, 5).map((article, index) => (
            <Article key={index} article={article} />
          ))
        ) : (
          <p>No articles available for {category}</p>
        )}
      </section>
    </li>
  );
}

     // Fetch artikler
            // let articles;
            // if (route === "#popular") {
            //     articles = await fetchPopularData(key);
            // } else if (route === "" || route === "#home") {
            //     articles = await fetchlatestNews(key); 
            // } else if (route === "#archive") {
            //     const savedArticles = JSON.parse(localStorage.getItem("savedArticles")) || [];
            //     // Filtrér kun artikler der matcher den aktuelle kategori
            //     articles = savedArticles.filter(article => article.category === key);
            // } else {
            //     console.warn("Ukendt route, ingen fetch udført");
            //     return;
            // }