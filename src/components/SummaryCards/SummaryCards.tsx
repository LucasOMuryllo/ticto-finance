'use client';
import { TrendingUp, TrendingDown, DollarSign } from 'lucide-react';
interface Summary {
  income: number;
  expense: number;
  total: number;
}
import styles from './SummaryCards.module.scss';

interface SummaryCardsProps {
  summary: Summary;
}

export default function SummaryCards({ summary }: SummaryCardsProps) {
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value);
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <span className={styles.label}>Entradas</span>
          <div className={`${styles.icon} ${styles.income}`}>
            <TrendingUp size={20} />
          </div>
        </div>
        <p className={`${styles.amount} ${styles.income}`}>
          {formatCurrency(summary.income)}
        </p>
      </div>

      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <span className={styles.label}>Saídas</span>
          <div className={`${styles.icon} ${styles.expense}`}>
            <TrendingDown size={20} />
          </div>
        </div>
        <p className={`${styles.amount} ${styles.expense}`}>
          {formatCurrency(summary.expense)}
        </p>
      </div>

      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <span className={styles.label}>Saldo Total</span>
          <div className={`${styles.icon} ${styles.total}`}>
            <DollarSign size={20} />
          </div>
        </div>
        <p className={`${styles.amount} ${summary.total >= 0 ? styles.total : styles.negative}`}>
          {formatCurrency(summary.total)}
        </p>
      </div>
    </div>
  );
}