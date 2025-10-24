'use client';
import { useState, useMemo } from 'react';
import Header from '@/components/Header/Header';
import SummaryCards from '@/components/SummaryCards/SummaryCards';
import TransactionList from '@/components/TransactionList/TransactionList';
import TransactionModal from '@/components/TransactionModal/TransactionModal';

interface Transaction {
  id: number;
  title: string;
  amount: number;
  date: string;
  type: 'income' | 'expense';
}

export default function Home() {
  const [transactions, setTransactions] = useState<Transaction[]>([
    { id: 1, title: 'Salário', amount: 5000, type: 'income', date: '2025-10-01' },
    { id: 2, title: 'Aluguel', amount: 1500, type: 'expense', date: '2025-10-05' },
    { id: 3, title: 'Freelance', amount: 800, type: 'income', date: '2025-10-10' },
    { id: 4, title: 'Mercado', amount: 450, type: 'expense', date: '2025-10-12' }
  ]);

  const [showModal, setShowModal] = useState(false);

  const summary = useMemo(() => {
    return transactions.reduce(
      (acc, transaction) => {
        if (transaction.type === 'income') {
          acc.income += transaction.amount;
        } else {
          acc.expense += transaction.amount;
        }
        acc.total = acc.income - acc.expense;
        return acc;
      },
      { income: 0, expense: 0, total: 0 }
    );
  }, [transactions]);

  const handleAddTransaction = (newTransaction: Omit<Transaction, 'id'>) => {
    const transaction: Transaction = {
      ...newTransaction,
      id: Date.now()
    };
    setTransactions([transaction, ...transactions]);
    setShowModal(false);
  };

  const handleDeleteTransaction = (id: number) => {
    setTransactions(transactions.filter((t) => t.id !== id));
  };

  return (
    <>
      <Header onAddClick={() => setShowModal(true)} />
      
      <main style={{ 
        maxWidth: '1280px', 
        margin: '0 auto', 
        padding: '2rem 1rem' 
      }}>
        <SummaryCards summary={summary} />
        <TransactionList 
          transactions={transactions} 
          onDelete={handleDeleteTransaction} 
        />
      </main>

      <TransactionModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onSubmit={handleAddTransaction}
      />
    </>
  );
}