import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Layout.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>goNatural</title>
      </Head>

      <h1>Welcome to goNaturalist</h1>
    </div>
  )
}
