import type { Metadata } from 'next';
import './globals.scss';

export const metadata: Metadata = {
  title: 'Ticto Finance - Controle Financeiro',
  description: 'Aplicação de controle financeiro desenvolvida para Ticto',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}