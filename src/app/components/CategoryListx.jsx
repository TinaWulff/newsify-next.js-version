
'use client'

import Image from 'next/image';
import Article from './article';
import { useState } from 'react';

export default function CategoryList({ category, articles }) {
  const [open, setOpen] = useState(false);


  return (
    <>
    <li onClick={() => setOpen(!open)}
    style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px'}}
    >
      <Image src="/imgs/newsify_logo.svg" alt="Logo" width={50} height={100} />
      <h4>{category.charAt(0).toUpperCase() + category.slice(1)}</h4>
    </li>
    {open && (
      <ul style={{ display: 'flex', flexDirection: 'column' }}
      className="articles-container">  {/* section til at hente artikler ind i */}
        {articles && articles.length > 0 ? (
          articles.slice(0, 5).map((article, index) => (
            <Article key={index} article={article} />
          ))
        ) : (
          <p>No articles available for {category}</p>
        )}
      </ul>
    )}
    </>
  );
}

   