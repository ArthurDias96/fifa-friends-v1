import styles from "./page.module.scss";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";
import { LastlinkButton } from "@/components/LastlinkButton/LastlinkButton";

export default function Shop() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <section className={styles.hero}>
          <h1>Nossa Loja</h1>
          <p>Escolha o melhor pacote para você</p>
        </section>

        <section className={styles.products}>
          <div className={styles.productCard}>
            <h3>Pacote Básico</h3>
            <p>Camisas, shorts e chuteiras</p>
            <LastlinkButton productId="fifa-friends-basico" price="R$ 19,90" />
          </div>

          <div className={styles.productCard}>
            <h3>Pacote Completo</h3>
            <p>Todos os itens do básico + estádios e bolas</p>
            <LastlinkButton
              productId="fifa-friends-completo"
              price="R$ 39,90"
            />
          </div>

          <div className={styles.productCard}>
            <h3>Pacote Premium</h3>
            <p>Todos os itens do completo + faces e comentários</p>
            <LastlinkButton productId="fifa-friends-premium" price="R$ 59,90" />
          </div>
        </section>

        <section className={styles.features}>
          <h2>O que você recebe</h2>
          <div className={styles.featuresGrid}>
            <div className={styles.feature}>
              <h3>Camisas Atualizadas</h3>
              <p>Todas as camisas das principais ligas e seleções</p>
            </div>
            <div className={styles.feature}>
              <h3>Shorts e Chuteiras</h3>
              <p>Kits completos para todos os times</p>
            </div>
            <div className={styles.feature}>
              <h3>Estádios</h3>
              <p>Estádios oficiais e personalizados</p>
            </div>
            <div className={styles.feature}>
              <h3>Bolas</h3>
              <p>Bolas oficiais e personalizadas</p>
            </div>
            <div className={styles.feature}>
              <h3>Faces</h3>
              <p>Faces realistas dos jogadores</p>
            </div>
            <div className={styles.feature}>
              <h3>Comentários</h3>
              <p>Comentários em português</p>
            </div>
          </div>
        </section>

        <section className={styles.cta}>
          <h2>Pronto para começar?</h2>
          <p>Escolha seu pacote e comece a jogar com os melhores visuais</p>
          <LastlinkButton
            productId="fifa-friends-completo"
            price="R$ 39,90"
            label="Começar Agora"
          />
        </section>
      </main>
      <Footer />
    </>
  );
}
