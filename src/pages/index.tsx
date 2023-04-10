import Head from 'next/head';
import { Inter } from 'next/font/google';
import { Headline } from '@/src/components/Headline/Headline';
import styles from '@/src/styles/Home.module.css';
import { Links } from '@/src/components/Links/Links';
import { Title } from '@/src/components/Title/Title';
import { Header } from '@/src/components/Header/Header';
import { useEffect, useState } from 'react';

const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  const [foo, setFoo] = useState(1);
  
  const handleClick = (e:any) => {
    setFoo((foo) => foo + 1);
  };

  useEffect(() => {
    document.body.style.backgroundColor = "lightblue";
    return() => {
        document.body.style.backgroundColor = "";
    }
}, []);

  return (
    <>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
      <h1>{foo}</h1>
      <button onClick={handleClick}>
        ボタン
      </button>
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
