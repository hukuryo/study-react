import Head from 'next/head';
import { Inter } from 'next/font/google';
import { Headline } from '@/src/components/Headline/Headline';
import styles from '@/src/styles/Home.module.css';
import { Links } from '@/src/components/Links/Links';
import { Title } from '@/src/components/Title/Title';
import { Header } from '@/src/components/Header/Header';
import { useCallback, useEffect, useState } from 'react';

const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  const [count, setFoo] = useState(1);
  const [text, setText] = useState("");
  const [isShow, setIsShow] = useState(true);

  const handleClick = useCallback (() => {
    if(count < 10){
      setFoo((count) => count + 1);
    }
  }, [count]);

  const handleDisplay = useCallback(() => {
    setIsShow((isShow) => !isShow)
  }, []);

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
      {isShow ?  <h1>{count}</h1> : null}
      <button onClick={handleClick}>ボタン</button>

      <button onClick={handleDisplay}>
      {isShow ?  "非表示" : "表示"}</button>

      <input type="text" value={text} onChange={e => {
        setText(e.target.value)
      }} />
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
