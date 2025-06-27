import HeaderBar from '../components/HeaderBar';
import FooterBar from '../components/FooterBar';

export default function PagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
    </>
  );
}
