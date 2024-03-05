import './ui/global.css';
import { monserrat } from './ui/invoices/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${monserrat.className}`}>
      <body>
        {children}
        <footer className="flex items-center justify-center py-10">
          Hecho con amor
        </footer>
      </body>
    </html>
  );
}
