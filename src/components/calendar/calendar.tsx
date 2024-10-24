"use client"

import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Pagina from '../template/Pagina';
const CalendarComponent = () => {
  const [date, setDate] = useState(new Date());

  const handleDateChange = (newDate) => {
    setDate(newDate);
    console.log('Data selecionada:', newDate);
  };

  
  };

export default function Calendar() {
  return (
    <Pagina>
         <div className="container mx-auto p-4">
    <Head>
      <title>Calendário em Next.js</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <h1 className="text-2xl font-bold mb-4">Bem-vindo ao Calendário</h1>
      <CalendarComponent />
    </main>
  </div>
    </Pagina>
   
  )

  }