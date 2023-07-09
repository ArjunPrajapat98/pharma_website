import Image from 'next/image'
import { Header } from './components/Header'
import { HomePage } from './components/Home'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Career } from './components/Career'
import { Services } from './components/Services'
import { Documents } from './components/Documents'

export default function Home() {
  return (
    < >
      <Header />
      <Documents />
      {/* <Services /> */}
      {/* <Career /> */}
      {/* <Contact /> */}
      {/* <About /> */}
      {/* <HomePage /> */}
    </>
  )
}
