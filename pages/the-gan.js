import Head from 'next/head'
import Header from '../components/Header'
import styles from '../styles/Home.module.css'

export default function Gan() {
    
  return (
    <div className={styles.container}>
      <Head>
        <title>FusionApes - GAN</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
    </div>
  )
}
