import Head from 'next/head';
import DatePicker from '/components/UI/DatePicker';

export default function Home() {
  const onDateChange = (date) => {
    console.log(date)
  }
  return (
    <div className='container'>
      <Head>
        <title>Datepicker Calendar </title>
      </Head>
      <DatePicker type={2} onChange={onDateChange} />
    </div>
  );
}
