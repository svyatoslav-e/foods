import Link from 'next/link';
import Header from './components/header';

export default function Home() {
  console.log('Home executed')
  return (
    <main>
      <Header />
      <p>🔥 Let&apos;s get started! 🔥</p>
      <p>
        {/* <a href="/about">About</a> */}
        <Link href="/about">
          About
        </Link>
      </p>
    </main>
  );
}
