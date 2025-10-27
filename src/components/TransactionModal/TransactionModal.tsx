'use client';
import { useState } from 'react';
import { X } from 'lucide-react';

import { Transaction } from '@/types/Transaction';
import styles from './TransactionModal.module.scss';

interface TransactionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (transaction: Omit<Transaction, 'id'>) => void;
}

export default function TransactionModal({ isOpen, onClose, onSubmit }: Readonly<TransactionModalProps>) {
  const [formData, setFormData] = useState({
    title: '',
    amount: '',
    type: 'income' as 'income' | 'expense',
    category: '',
    date: new Date().toISOString().split('T')[0]
  });

  if (!isOpen) return null;

  const handleSubmit = () => {
    if (!formData.title || !formData.amount) return;

    onSubmit({
      title: formData.title,
      amount: Number.parseFloat(formData.amount),
      type: formData.type,
      category: formData.category,
      date: formData.date
    });

    setFormData({
      title: '',
      amount: '',
      type: 'income',
      category: '',
      date: new Date().toISOString().split('T')[0]
    });
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.header}>
          <h2 id="modal-title">Cadastrar Transação</h2>
          <button onClick={onClose} className={styles.closeButton}>
            <X size={20} />
          </button>
        </div>

        <div className={styles.body}>
          <div className={styles.formGroup}>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              placeholder="Nome"
              className={styles.input}
            />
          </div>

          <div className={styles.formGroup}>
            <input
              type="number"
              step="0.01"
              value={formData.amount}
              onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
              placeholder="Preço"
              className={styles.input}
            />
          </div>

          <div className={styles.formGroup}>
            <div className={styles.typeButtons}>
              <button
                type="button"
                onClick={() => setFormData({ ...formData, type: 'income' })}
                className={`${styles.typeButton} ${styles.income} ${
                  formData.type === 'income' ? styles.active : ''
                }`}
              >
                Entrada
              </button>
              <button
                type="button"
                onClick={() => setFormData({ ...formData, type: 'expense' })}
                className={`${styles.typeButton} ${styles.expense} ${
                  formData.type === 'expense' ? styles.active : ''
                }`}
              >
                Saída
              </button>
            </div>
          </div>

          <div className={styles.formGroup}>
            <input
              type="text"
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              placeholder="Categoria"
              className={styles.input}
            />
          </div>

          <div className={styles.formGroup}>
            <input
              type="date"
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              className={styles.input}
            />
          </div>

          <button
            onClick={handleSubmit}
            className={styles.submitButton}
            disabled={!formData.title || !formData.amount}
          >
            Cadastrar Transação
          </button>
        </div>
      </div>
    </div>
  );
}