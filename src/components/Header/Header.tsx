import Link from "next/link";
import styles from "./Header.module.scss";
import Image from "next/image";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.headerContainer}`}>
        <Link href="/" className={styles.logo}>
          <Image
            src="/logo.png"
            alt="Patch FIFA Friends"
            width={180}
            height={50}
            priority
          />
        </Link>

        <nav className={styles.nav}>
          <Link href="/" className={styles.navLink}>
            Início
          </Link>
          <Link href="/loja" className={styles.navLink}>
            Loja
          </Link>
          <Link href="/duvidas" className={styles.navLink}>
            Dúvidas
          </Link>
          <Link href="/politicas" className={styles.navLink}>
            Políticas
          </Link>
        </nav>
      </div>
    </header>
  );
}
