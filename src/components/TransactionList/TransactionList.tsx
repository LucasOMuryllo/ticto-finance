'use client';
import { TrendingUp, TrendingDown, X } from 'lucide-react';
import styles from './TransactionList.module.scss';

interface Transaction {
  id: number;
  title: string;
  amount: number;
  date: string;
  type: 'income' | 'expense';
}

interface TransactionListProps {
  transactions: Transaction[];
  onDelete: (id: number) => void;
}

export default function TransactionList({ transactions, onDelete }: TransactionListProps) {
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString + 'T00:00:00').toLocaleDateString('pt-BR');
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>Transações</h2>
      </div>

      <div className={styles.list}>
        {transactions.length === 0 ? (
          <div className={styles.empty}>
            <p>Nenhuma transação cadastrada ainda.</p>
            <p className={styles.emptySubtext}>
              Clique em "Nova Transação" para começar.
            </p>
          </div>
        ) : (
          transactions.map((transaction) => (
            <div key={transaction.id} className={styles.item}>
              <div className={styles.leftContent}>
                <div className={`${styles.iconWrapper} ${styles[transaction.type]}`}>
                  {transaction.type === 'income' ? (
                    <TrendingUp size={20} />
                  ) : (
                    <TrendingDown size={20} />
                  )}
                </div>

                <div className={styles.info}>
                  <h3 className={styles.title}>{transaction.title}</h3>
                  <p className={styles.date}>{formatDate(transaction.date)}</p>
                </div>
              </div>

              <div className={styles.rightContent}>
                <span className={`${styles.amount} ${styles[transaction.type]}`}>
                  {transaction.type === 'income' ? '+' : '-'} {formatCurrency(transaction.amount)}
                </span>
                <button
                  onClick={() => onDelete(transaction.id)}
                  className={styles.deleteButton}
                >
                  <X size={18} />
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}