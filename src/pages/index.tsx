import Head from 'next/head';
import { Inter } from 'next/font/google';
import { Headline } from '@/src/components/Headline/Headline';
import styles from '@/src/styles/Home.module.css';
import { Links } from '@/src/components/Links/Links';
import { Title } from '@/src/components/Title/Title';
import { Header } from '@/src/components/Header/Header';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Index Page</title>
      </Head>

      <Header />
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
