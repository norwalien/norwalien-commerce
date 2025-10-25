import './globals.css';

export const metadata = {
  title: 'Norwalien',
  description: 'Affiliate test uten provider',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="no">
      <body>{children}</body>
    </html>
  );
}