import Head from 'next/head';
import DatePicker from '/components/UI/DatePicker';

export default function Home() {
  return (
    <div className='container'>
      <Head>
        <title>Datepicker Calendar </title>
      </Head>
      <DatePicker type={2} />
    </div>
  );
}
