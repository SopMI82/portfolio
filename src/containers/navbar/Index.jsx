import Link from 'next/link';
import styles from "./index.module.scss";

const NavBar = () => {
    return (
        <nav className={styles.nav}>
            <p>navbar</p>
            <Link href="/">Accueil</Link>
            <Link href="/about">A propos</Link>
            <Link href="/skills">Compétences</Link>
            <Link href="/projects">Projets</Link>
            <Link href="/contact">Contact</Link>
        </nav>
    );
};

export default NavBar;