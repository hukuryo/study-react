import Head from 'next/head';
import { Inter } from 'next/font/google';
import { Headline } from '@/src/components/Headline/Headline';
import styles from '@/src/styles/Home.module.css';
import { Links } from '@/src/components/Links/Links';
import { Title } from '@/src/components/Title/Title';
import { Header } from '@/src/components/Header/Header';
import { useCallback } from 'react';

const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  const foo = 1;
  
  const handleClick = useCallback ((e:any) => {
    console.log(e.target.href);
    e.preventDefault();
    alert(foo);
  }, []);

  return (
    <>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
      <a href='/about' onClick={handleClick}>
        ボタン
      </a>
      <main className={styles.main}>
        <div className={styles.description}>
        <Headline title="index page"/>
        <Title />
        </div>
        <Links />
      </main>
    </>
  )
}
