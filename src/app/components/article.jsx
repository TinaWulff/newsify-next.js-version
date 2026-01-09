import Image from 'next/image';
import Link from 'next/link';
// import styles from './article.module.scss';

export default function Article({ article }) {
  // Brug billedet fra artiklen eller et fallback //conditional (ternary) operator
  const imageUrl = article.multimedia && article.multimedia.length > 0 
    ? article.multimedia[0].url 
    : '/imgs/newsify_logo.svg';
  
  return (
    <article>
      <Link href={article.url} target="_blank">
        <Image 
          src={imageUrl} 
          alt="article image" 
          width={300} 
          height={200}
          style={{ objectFit: 'cover' }} // tilføj til stylesfil i stedet?
        />
        <h3>{article.title}</h3>
        <p>{article.abstract}...</p>
      </Link>
    </article>
  );
}
      {/*className={styles.articleImg} //ret klassenavn i styles-fil */}