import styles from './header.module.scss';

import Image from 'next/image';


export default function Header() {
  return (
    <header className={ styles.header }>
        <Image className={ styles.logo } src="/imgs/newsify_logo.svg" alt="Logo" width={50} height={100} />
      <h1 className={ styles.headline }>Newsify</h1>
    </header>
  );
}