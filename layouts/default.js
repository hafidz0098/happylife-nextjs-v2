//import component Navbar
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import dynamic from 'next/dynamic';

const ScrollTopButton = dynamic(()=>import('../components/scroll'));

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main> <ScrollTopButton/>{children}</main>
      <Footer />
    </>
  )
}