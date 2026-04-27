import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'המסמר שבחדר — יאיר זאורוב',
  description: 'הקורס שמלמד מנטליזם, אומנות חושים ונוכחות — מהבסיס ועד הרמה שהייתה נראית לך על-טבעית.',
  openGraph: {
    title: 'המסמר שבחדר',
    description: 'הייתי הילד שלא שמו לב אליו בחדר. עכשיו אני מלמד אותך הכל.',
    locale: 'he_IL',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="he" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
