import Link from "next/link";
import styles from "./Footer.module.scss";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h3>Patch FIFA Friends</h3>
            <p>Os melhores patches e atualizações para FIFA</p>
          </div>

          <div className={styles.footerSection}>
            <h3>Links Rápidos</h3>
            <nav className={styles.footerNav}>
              <Link href="/">Início</Link>
              <Link href="/loja">Loja</Link>
              <Link href="/duvidas">Dúvidas</Link>
              <Link href="/politicas">Políticas</Link>
            </nav>
          </div>

          <div className={styles.footerSection}>
            <h3>Contato</h3>
            <div className={styles.contactInfo}>
              <a href="mailto:suporte@fifafriends.com">
                suporte@fifafriends.com
              </a>
              <a href="https://wa.me/5511999999999">WhatsApp</a>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p>
            &copy; {new Date().getFullYear()} Patch FIFA Friends. Todos os
            direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
