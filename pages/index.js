import Head from 'next/head';
import Image from 'next/image';
import { Reserve } from '../components/reserve';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className='container'>
      <Head>
        <title>Datepicker Calendar </title>
        <meta name='description' content='Datepicker app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Reserve />
    </div>
  );
}
