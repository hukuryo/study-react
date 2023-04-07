import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './Links.module.css'

const inter = Inter({ subsets: ['latin'] })

const ITEMS = [
    {   href: "https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app", 
        title: "Docs →" ,
        description: "Find in-depth information about Next.js features and&nbsp;API."
    },
    {   href: "https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app", 
        title: "Learn →" ,
        description: "Learn about Next.js in an interactive course with&nbsp;quizzes!"
    },
    {   href: "https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app", 
        title: "Templates →" ,
        description: "Discover and deploy boilerplate example Next.js&nbsp;projects."
    },
    {   href: "https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app", 
        title: "Deploy →" ,
        description: "Instantly deploy your Next.js site to a shareable URLwith&nbsp;Vercel."
    }
]

export function Links() {
    return (
        <>
            <div className={styles.center}>
            <Image
                className={styles.logo}
                src="/next.svg"
                alt="Next.js Logo"
                width={180}
                height={37}
                priority
            />
            <div className={styles.thirteen}>
                <Image
                src="/thirteen.svg"
                alt="13"
                width={40}
                height={31}
                priority
                />
            </div>
            </div>

            <div className={styles.grid}>
                {ITEMS.map(item =>  {
                    return (
                        <a key={item.href} className={styles.card}>
                            <h2 className={inter.className}>{item.title}</h2>
                            <p className={inter.className}>{item.description}</p>
                        </a>
                    )
                })}
            </div>
        </>
    )
}
