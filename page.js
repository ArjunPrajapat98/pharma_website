import Header from '@/components/Header'
import Image from 'next/image'
import { useEffect } from 'react';

import AOS from "aos";
import "aos/dist/aos.css";

// import { Header } from './components/Header'
// import { HomePage } from './components/Home'
// import { About } from './components/About'
// import { Contact } from './components/Contact'
// import { Career } from './components/Career'
// import { Services } from './components/Services'
// import { Documents } from './components/Documents'

export default function Home() {

  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  return (
    < >
      <Header />
      {/* <Documents />
      <Services />
      <Career />
      <Contact />
      <About />
      <HomePage /> */}

      <Script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></Script>

    </>
  )
}
