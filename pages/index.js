import { useEffect, useState } from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import Projects from '../components/Projects'
import Contact from '../components/Contact'

const enableDarkMode = () =>{
  document.getElementsByTagName('html')[0].classList.add('dark')
}
const disableDarMode = () =>{
  document.getElementsByTagName('html')[0].classList.remove('dark')
}

export default function Home() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(()=> {
    darkMode ? enableDarkMode() :disableDarMode()

  },[darkMode])

   const background = darkMode ? 'bg-dark.png' : 'bg-light.png'

  return (
    <div className="w-full min-h-screen h-auto dark:bg-black bg-light-bg relative" style={{ backgroundImage: `url("${background}")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'left bottom' }}>
      <Head>
        <title>Spree Valley</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Lexend+Deca&display=swap" rel="stylesheet"/>
      </Head>

        <Header>
          <div className='absolute top-8 left-8'>
            <img src={darkMode ? 'light-switch.svg' : 'dark-switch.svg'} onClick={()=>setDarkMode(!darkMode)}/>
          </div>
        </Header>
      <main className="mx-auto max-w-4xl items-center text-left">
        <HeroSection/>
        <Projects/>
        <Contact/>
      </main>

      <Footer darkMode={darkMode}/>
    </div>
  )
}
