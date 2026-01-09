import Image from 'next/image';
import Link from 'next/link';
// import styles from './article.module.scss';

export default function Article({ article }) {
  // Brug billedet fra artiklen eller et fallback //conditional (ternary) operator
  const imageUrl = article.multimedia && article.multimedia.length > 0 
    ? article.multimedia[0].url 
    : '/imgs/newsify_logo.svg';
  
  return (
    <li style={{ marginBottom: '1em' }}>
    <article >
      <Link style={{ textDecoration: 'none', color: 'black', display: 'flex', gap : '1em' }}
       href={article.url} target="_blank">
        <Image 
          src={imageUrl} 
          alt="article image" 
          width={120} 
          height={120}
          style={{ objectFit: 'cover', borderRadius: '15px' }}
        />
        <div  style={{ alignContent: 'center' }}>
        <h3 style={{ marginBottom: '1em' }}>
            {article.title}
        </h3>
        <p>
            {article.abstract}...
        </p>
        </div>
      </Link>
    </article>
    </li>
  );
}
      {/*className={styles.articleImg} //ret klassenavn i styles-fil */}