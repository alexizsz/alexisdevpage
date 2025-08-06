import React from 'react';
import './globals.css';
import Navbar from '../../components/navbar'; // Correct alias and capitalization

export default function Home() {

  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1 className="text-4xl font-bold">Fullstack Developer</h1>
        
      </main>
    </>
  );
}