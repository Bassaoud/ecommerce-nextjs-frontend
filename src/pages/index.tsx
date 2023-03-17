import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import canapes from "../../canapes.json"
import products from '../../products.json'
import { fromImageToUrl } from 'utils/urls'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Baraka Salon</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {products.data.map(product => (
        <div key={product.attributes.nom} className={styles.product}>
          <div className={styles.product__Row}>
            <div className={styles.product__ColImg}> 
              <img src={fromImageToUrl(product.attributes.image)} />
            </div>
            <div className={styles.product__Col}>
              {product.attributes.nom} {product.attributes.prix}
            </div>
          </div>
        </div>
        ))}
    </>
  )
}
