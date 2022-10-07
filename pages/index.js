import Head from 'next/head';
import DatePicker from '/components/UI/DatePicker';

export default function Home() {
  const onDateChage = (date) => {
    console.log(date)
  }
  return (
    <div className='container'>
      <Head>
        <title>Datepicker Calendar </title>
      </Head>
      <DatePicker type={2} onChange={onDateChage} />
    </div>
  );
}
