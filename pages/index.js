import React from 'react';
import Head from 'next/head';
import FormContainer from '../components/FormContainer';
var x = 5;

export default function Home() {
  console.log("rendering home");
  
  if(x == 5) {
    console.log('x is 5')
  }

  return (
    <>
      <Head>
        <title>Adestos Forms</title>
        <meta name="description" content="Crea tu formulario" />
      </Head>
      <div className="container mx-auto px-4 w-2/4 h-full">
        <div className="flex flex-col w-6/12 space-x-7 my-7">
          <h1 className="text-4xl font-bold">Adestos-Forms</h1>
          <h2 className="text-2xl font-bold">Crea tu formulario</h2>
        </div>
        <FormContainer></FormContainer>
      </div>
    </>
  );
}