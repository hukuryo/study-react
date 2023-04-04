import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import {Links} from '@/components/Links'
import {Headline} from '@/components/Headline'
import {Title} from '@/components/Title'

const inter = Inter({ subsets: ['latin'] })

export function Main(props:any) {
return (
    <>
    <main className={styles.main}>
        <div className={styles.description}>
        <Headline>
        </Headline>
        <Title />
        </div>
        <Links />
    </main>
    </>
)
}
