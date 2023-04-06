import React from 'react';
import Link from 'next/link';
import { Inter } from 'next/font/google';
import styles from './Header.module.css';


export function Header(props:any) {
    return (
        <>
            <header className={styles.header}>
                <Link href="/">
                    <p className={styles.anchor}>Index</p>
                </Link>
                <Link href="/about">
                    <p className={styles.anchor}>About</p>
                </Link>
            </header>
        </>
    )
}

