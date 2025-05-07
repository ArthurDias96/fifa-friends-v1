"use client";

import styles from "./LastlinkButton.module.scss";

interface LastlinkButtonProps {
  productId: string;
  price: string;
  label?: string;
}

export function LastlinkButton({
  productId,
  price,
  label = "Comprar Agora",
}: LastlinkButtonProps) {
  const handleCheckout = () => {
    // Redireciona para o Lastlink com o ID do produto
    window.location.href = `https://lastlink.com/checkout/${productId}`;
  };

  return (
    <button onClick={handleCheckout} className={styles.lastlinkButton}>
      <span className={styles.price}>{price}</span>
      <span className={styles.label}>{label}</span>
    </button>
  );
}
