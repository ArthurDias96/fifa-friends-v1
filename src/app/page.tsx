import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";
import styles from "./page.module.scss";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Header />

      <section className={`${styles.hero} section`}>
        <div className="container">
          <div className={styles.heroContent}>
            <h1>O Melhor Patch para FIFA</h1>
            <p>
              Atualize seu jogo com as últimas transferências, uniformes e faces
              realistas
            </p>
            <a
              href="https://lastlink.com/patch-fifa-friends"
              className={styles.ctaButton}
            >
              Ver Patches Disponíveis
            </a>
          </div>
        </div>
      </section>

      <section className={`${styles.features} section`}>
        <div className="container">
          <h2>Por que escolher nossos patches?</h2>
          <div className={styles.featureGrid}>
            <div className={styles.featureCard}>
              <Image
                src="/icons/update.svg"
                alt="Atualizações"
                width={48}
                height={48}
              />
              <h3>Sempre Atualizado</h3>
              <p>
                Receba as últimas transferências e atualizações do mundo do
                futebol
              </p>
            </div>
            <div className={styles.featureCard}>
              <Image
                src="/icons/quality.svg"
                alt="Qualidade"
                width={48}
                height={48}
              />
              <h3>Alta Qualidade</h3>
              <p>
                Faces e uniformes em alta resolução para uma experiência
                realista
              </p>
            </div>
            <div className={styles.featureCard}>
              <Image
                src="/icons/support.svg"
                alt="Suporte"
                width={48}
                height={48}
              />
              <h3>Suporte Premium</h3>
              <p>Atendimento rápido e tutorial completo de instalação</p>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.testimonials} section`}>
        <div className="container">
          <h2>O que dizem nossos clientes</h2>
          <div className={styles.testimonialGrid}>
            <div className={styles.testimonialCard}>
              <p>
                "Melhor patch que já usei! Super completo e fácil de instalar."
              </p>
              <div className={styles.testimonialAuthor}>
                <Image
                  src="/avatars/user1.jpg"
                  alt="João Silva"
                  width={40}
                  height={40}
                />
                <span>João Silva</span>
              </div>
            </div>
            <div className={styles.testimonialCard}>
              <p>
                "Atualização constante e suporte excelente. Recomendo muito!"
              </p>
              <div className={styles.testimonialAuthor}>
                <Image
                  src="/avatars/user2.jpg"
                  alt="Pedro Santos"
                  width={40}
                  height={40}
                />
                <span>Pedro Santos</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
