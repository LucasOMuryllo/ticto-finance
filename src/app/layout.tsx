import type { Metadata } from 'next';
import './globals.scss';

export const metadata: Metadata = {
  title: 'Ticto Finance - Controle Financeiro',
  description: 'Aplicação de controle financeiro desenvolvida para Ticto',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}