import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";
import styles from "./page.module.scss";

const faqItems = [
  {
    question: "Como instalar o patch?",
    answer:
      "Após a compra, você receberá um link para download com um tutorial completo em vídeo e PDF explicando passo a passo como instalar o patch no seu FIFA.",
  },
  {
    question: "O patch funciona em qual versão do FIFA?",
    answer:
      "Nossos patches são compatíveis com as versões mais recentes do FIFA. Cada produto indica claramente para qual versão do jogo ele é compatível.",
  },
  {
    question: "Quanto tempo leva para receber o patch após a compra?",
    answer:
      "O acesso ao download é liberado instantaneamente após a confirmação do pagamento. Você receberá um e-mail com os links de download e instruções.",
  },
  {
    question: "Posso usar o patch em mais de um computador?",
    answer:
      "Sim, você pode instalar o patch em até 3 computadores diferentes com a mesma licença.",
  },
  {
    question: "Como funciona o suporte?",
    answer:
      "Oferecemos suporte por e-mail e WhatsApp para ajudar com qualquer dúvida ou problema durante a instalação. Nossa equipe responde em até 24 horas úteis.",
  },
  {
    question: "O patch é atualizado regularmente?",
    answer:
      "Sim, lançamos atualizações mensais com as últimas transferências, uniformes e faces. Os clientes recebem todas as atualizações gratuitamente.",
  },
];

export default function Duvidas() {
  return (
    <main>
      <Header />

      <section className={`${styles.faq} section`}>
        <div className="container">
          <h1>Dúvidas Frequentes</h1>
          <p className={styles.subtitle}>
            Encontre respostas para as perguntas mais comuns sobre nossos
            patches
          </p>

          <div className={styles.faqList}>
            {faqItems.map((item, index) => (
              <div key={index} className={styles.faqItem}>
                <h2>{item.question}</h2>
                <p>{item.answer}</p>
              </div>
            ))}
          </div>

          <div className={styles.contact}>
            <h2>Ainda tem dúvidas?</h2>
            <p>Entre em contato conosco pelo WhatsApp ou e-mail:</p>
            <div className={styles.contactInfo}>
              <a
                href="https://wa.me/5511999999999"
                className={styles.whatsappButton}
              >
                WhatsApp
              </a>
              <a
                href="mailto:suporte@fifafriends.com"
                className={styles.emailButton}
              >
                E-mail
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
