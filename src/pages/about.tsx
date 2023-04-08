import Head from 'next/head';
import { Inter } from 'next/font/google';
import styles from '@/src/styles/Home.module.css';
import { Links } from '@/src/components/Links/Links';
import { Title } from '@/src/components/Title/Title';
import { Header } from '@/src/components/Header/Header';
import { Headline } from '@/src/components/Headline/Headline';


const inter = Inter({ subsets: ['latin'] })

export default function About() {
  return (
    <>
      <Head>
        <title>About Page</title>
      </Head>

      <Header />
      <main className={styles.main}>
        <div className={styles.description}>
        <Headline title="about page">
        </Headline>
        <Title />
        </div>
        <Links />
    </main>
    </>
  )
}
