import React, { useEffect } from 'react';
import { Inter } from 'next/font/google';
import styles from './Headline.module.css';


const inter = Inter({ subsets: ['latin'] })

export function Headline(props:any) {
    return (
        <>
            <p>
                Get started by editing&nbsp;
                <code className={styles.code}>{props.title}</code>
            </p>
        </>
    )
}

