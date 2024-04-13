import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';

interface RootLayoutChildren {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutChildren) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
