import styles from './footer.module.scss';

import Link from "next/link";

import { TfiHome } from "react-icons/tfi";
import { CiBookmark } from "react-icons/ci";
import { CiStar } from "react-icons/ci";
import { CiSettings } from "react-icons/ci";

export default function Footer() {
  return (
    <footer className= { styles.footer }>
      <nav>
        <ul className= { styles.ul }>
            <li className={ styles.li }><Link className={ styles.a } href="/"><TfiHome className={ styles.icon } /> Home</Link></li>
            <li className={ styles.li }><Link className={ styles.a } href="/archive"><CiBookmark className={ styles.icon } />Archive</Link></li>
            <li className={ styles.li }><Link className={ styles.a } href="/popular"><CiStar className={ styles.icon } /> Popular</Link></li>  
            <li className={ styles.li }><Link className={ styles.a } href="/settings"><CiSettings className={ styles.icon }/>Settings</Link></li>
        </ul>
      </nav>
    </footer>
  );
}