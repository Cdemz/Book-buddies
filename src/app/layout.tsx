import Chat from './components/Chat';
import Provider from './components/Provider';
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Bookbuddy',
  description: 'Your bookstore for fantasy & mystery novels',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Provider>
        <body className={inter.className}>
          <Chat />
          {children}
        </body>
      </Provider>
    </html>
  );
}
