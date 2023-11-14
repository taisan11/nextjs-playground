import Image from 'next/image'
import Head from 'next/head'
import { Alert } from "flowbite-react";

export default function Home() {
  return (
    <div>
      <Head>
        <title>ページタイトル</title>
      </Head>
      <h1 >Hello</h1>
      <Alert color="info">Alert!</Alert>;
    </div>
  )
}
