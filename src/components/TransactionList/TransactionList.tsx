'use client';

import styles from './TransactionList.module.scss';
import { IconTrash } from '../../assets/icon/IconTrash';

import { Transaction } from '@/types/Transaction';

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
    if (/às|:\d{2}|h\d{2}/.test(dateString)) {
      return dateString;
    }

    try {
      const d = new Date(dateString + 'T00:00:00');
      return d.toLocaleDateString('pt-BR');
    } catch {
      return dateString;
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.list}>
        {transactions.length === 0 ? (
          <div className={styles.empty}>
            <p>Nenhuma transação cadastrada ainda.</p>
            <p className={styles.emptySubtext}>
              Clique em Nova Transação para começar.
            </p>
          </div>
        ) : (
          <>
            <div className={styles.columnsHeader}>
              <span>Descrição</span>
              <span>Valor</span>
              <span>Categoria</span>
              <span>Data</span>
            </div>
            {transactions.map((transaction) => (
              <div key={transaction.id} className={styles.item}>
                {/* Coluna 1: Descrição */}
                <div className={styles.description}>
                  <div className={styles.info}>
                    <h3 className={styles.title}>{transaction.title}</h3>
                  </div>
                </div>

                {/* Coluna 2: Valor */}
                <div className={styles.value}>
                  <span className={`${styles.amount} ${styles[transaction.type]}`}>
                    {transaction.type === 'income' ? '+' : '-'} {formatCurrency(transaction.amount)}
                  </span>
                </div>

                {/* Coluna 3: Categoria */}
                <div className={styles.category}>
                  <span className={styles.categoryText}>{transaction.category}</span>
                </div>

                {/* Coluna 4: Data */}
                <div className={styles.dateCol}>
                  <span className={styles.date}>{formatDate(transaction.date)}</span>
                  <button
                    onClick={() => onDelete(transaction.id)}
                    className={styles.deleteButton}
                    aria-label="Excluir transação"
                  >
                    <IconTrash />
                  </button>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
}