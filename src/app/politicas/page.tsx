import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";
import styles from "./page.module.scss";

const policies = [
  {
    title: "Política de Privacidade",
    content: [
      "Nós respeitamos sua privacidade e nos comprometemos a proteger suas informações pessoais.",
      "Coletamos apenas informações necessárias para processar sua compra e fornecer suporte.",
      "Não compartilhamos suas informações com terceiros sem sua autorização.",
      "Utilizamos medidas de segurança para proteger seus dados contra acesso não autorizado.",
    ],
  },
  {
    title: "Termos de Uso",
    content: [
      "Ao adquirir nossos patches, você concorda em utilizá-los apenas para uso pessoal.",
      "É proibida a distribuição, revenda ou compartilhamento dos arquivos do patch.",
      "Cada licença permite a instalação em até 3 computadores diferentes.",
      "Reservamo-nos o direito de revogar o acesso em caso de violação dos termos.",
    ],
  },
  {
    title: "Política de Reembolso",
    content: [
      "Por se tratar de produtos digitais (downloads), não oferecemos reembolso após a compra.",
      "Antes de realizar a compra, certifique-se de que seu computador atende aos requisitos mínimos.",
      "Em caso de problemas técnicos, oferecemos suporte completo para ajudar na instalação.",
      "Garantimos que todos os patches funcionam conforme descrito na página do produto.",
    ],
  },
  {
    title: "Política de Atualizações",
    content: [
      "Todas as atualizações são gratuitas para clientes ativos.",
      "Lançamos atualizações mensais com novas transferências e conteúdo.",
      "Notificamos os clientes por e-mail sobre novas atualizações disponíveis.",
      "O suporte para versões antigas do jogo pode ser descontinuado após 6 meses.",
    ],
  },
];

export default function Politicas() {
  return (
    <main>
      <Header />

      <section className={`${styles.policies} section`}>
        <div className="container">
          <h1>Políticas e Termos</h1>
          <p className={styles.subtitle}>
            Conheça nossas políticas e termos de uso
          </p>

          <div className={styles.policiesList}>
            {policies.map((policy, index) => (
              <div key={index} className={styles.policyCard}>
                <h2>{policy.title}</h2>
                <ul>
                  {policy.content.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className={styles.contact}>
            <p>
              Em caso de dúvidas sobre nossas políticas, entre em contato pelo
              e-mail:{" "}
              <a href="mailto:suporte@fifafriends.com">
                suporte@fifafriends.com
              </a>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
