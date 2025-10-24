'use client';
import { Plus } from 'lucide-react';
import styles from './Header.module.scss';

interface HeaderProps {
    onAddClick: () => void;
}

export default function Header({ onAddClick }: HeaderProps) {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <h1 className={styles.title}>
                    Ticto <span className={styles.highlight}>Finance</span>
                </h1>
                <button onClick={onAddClick} className={styles.addButton}>
                    <Plus size={20} />
                    <span className={styles.textDesktop}>Nova Transação</span>
                    <span className={styles.textMobile}>Novo</span>
                </button>
            </div>
        </header>
    );
}