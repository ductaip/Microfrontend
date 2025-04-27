import NavItem from '../../lib/nav-item';
import Footer from '../Footer/Footer';
interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div>
      <header>
        <NavItem />
      </header>

      <main className="max-w-screen-xl py-8 px-4 sm:px-6 lg:px-8">
        {children}
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
