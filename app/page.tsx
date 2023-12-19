"use client" //to use Chakra UI in Server Components
// import type { AppProps } from 'next/app'
import '@fontsource-variable/nunito';
import Context from '@/context/Context'
import LandingPage from '@/components/LandingPage'

const Home: React.FC = () => {
  return (
    <>
      <Context>
        <LandingPage />
      </Context>
    </>
  )
}

export default Home