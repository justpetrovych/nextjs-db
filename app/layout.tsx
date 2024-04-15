import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import { Metadata } from 'next';

interface RootLayoutChildren {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: {
    template: "%s | Acme Dashboard",
    default: "Acme Dashboard",
  },
  description: "Acme Dashboard",
  metadataBase: new URL("https://nextjs-dashboard-petrovych-projects.vercel.app/"),
}

export default function RootLayout({ children }: RootLayoutChildren) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
