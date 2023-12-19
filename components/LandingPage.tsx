"use client" //to use Chakra UI in Server Components
import type { AppProps } from 'next/app'
import { useEffect, useState } from 'react';
import PageLayout from '@/components/features/PageLayout'
import UserInfo from '@/components/features/UserInfo'
import '@fontsource-variable/nunito';
import AppProvider, {useAppContext} from '@/context/Context'

 const LandingPage: React.FC = () => {
  const { isNewUser } = useAppContext();
  return (
    <>
        {/* Conditionally renderning components based on user data availability */}
        {isNewUser ? (<PageLayout newUser={isNewUser}/>
          )  : ( <UserInfo /> )  }    
    </>
  )
}

// AppProvider should be placed outside of the LandingPage component
function AppWrapper ({ 
  children,
}: {
  children: React.ReactNode //children prop of type ReactNode
}) {
  return <AppProvider>{children}</AppProvider>;
};

// Wrapping the LandingPage with AppWrapper
const App: React.FC = () => {
  return (
    <AppWrapper>
      <LandingPage />
    </AppWrapper>
  );
};

export default LandingPage;