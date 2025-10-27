'use client';
import { Plus } from 'lucide-react';
import styles from './Header.module.scss';
import Image from 'next/image';
import logo from '@/assets/image/logo.png';

interface HeaderProps {
    onAddClick: () => void;
}

export default function Header({ onAddClick }: HeaderProps) {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <h1 className={styles.title}>
                    <Image src={logo} alt="Ticto Finance Logo" />
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