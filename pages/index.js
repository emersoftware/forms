import React from 'react';
import Head from 'next/head';
import FormContainer from '../components/FormContainer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Forms</title>
        <meta name="description" content="Create your form" />
      </Head>
      <div className="container mx-auto px-4 w-full md:w-5/6 lg:w-3/4 h-full">
        <div className="flex flex-col w-full md:w-6/12 space-y-2 my-7">
          <h1 className="text-4xl font-bold">Forms</h1>
          <h2 className="text-2xl font-bold">Create your form</h2>
        </div>
        <FormContainer />
      </div>
    </>
  );
}