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

const bgStyle={
  mobile:{ backgroundPosition: 'center bottom', backgroundSize: 'cover'},
  desktop:{ backgroundPosition: 'left bottom', backgroundSize: '100% auto'}
}

export default function Home({isMobile}) {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(()=> {
    darkMode ? enableDarkMode() :disableDarMode()

  },[darkMode])

   const background = darkMode ? 'bg-dark.png' : 'bg-light.png'

  return (
    <div>
      <div
    className="w-full min-h-screen h-auto dark:bg-black bg-light-bg relative"
    style={{ backgroundImage: `url("${background}")`, backgroundRepeat: 'no-repeat', ...bgStyle[isMobile?'mobile':'desktop']}}>
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
      <main className="mx-auto max-w-4xl items-center text-left p-4">
        <HeroSection/>
        <Projects/>
        <Contact/>
      </main>

      {!isMobile &&<Footer darkMode={darkMode}/>}
    </div>
      {isMobile&&<Footer darkMode={darkMode}/>}

    </div>
  )
}

export async function getServerSideProps (context) {
  const UA = context.req.headers['user-agent'];
  const isMobile = Boolean(UA.match(
    /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
  ))

  return {
    props: { isMobile }
  }
}