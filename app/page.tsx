"use client" //to use Chakra UI in Server Components
import { useState, useEffect, createContext, useContext, useCallback} from 'react';
import { LoadingIndicator } from '../components/common/Utilities'
import PageLayout from '@/components/features/PageLayout'
import UserInfo from '@/components/features/UserInfo'
import { UserInfoType } from '../components/common/types'
import '@fontsource-variable/nunito';

//defining the handleDataState type. 
interface AppContextType {
  handleDataState: () => void;
}

//handleDataState is needed by 3 other useComponentStyles__unstable, UserIndo, EditProfile and Header. 
//So, sharing it by creating a custom hook that uses the useContext hook to access the value of AppContext.Provider
const AppContext = createContext<AppContextType | undefined>(undefined);
export const useAppContext = () => { 
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};

export default function Home() {
  //Accessing the local storage to check if the user is a new user or existing user.
  const storedUserinfo = localStorage.getItem('user_info');
  const [isNewUser, setIsNewUser] = useState<UserInfoType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const handleDataState = useCallback(() => {
    try {
      const getData = localStorage.getItem('user_info');
      setIsNewUser(getData ? JSON.parse(getData) : null);
      setLoading(false);
    } catch (error) {
      setError(error as Error);
    }
  }, []);

  //initializing component state, isNewUser, to retrieve data  from an local storage
  useEffect(() => {
    handleDataState();
  }, []);

  if (loading) return <LoadingIndicator />;
  if (error)  return <div>Error: {error.message}</div>;

  return (
    <>
    {/* Conditionally renderning components based on user data availability */}
      <AppContext.Provider value={{ handleDataState }}>
      {isNewUser ? (<PageLayout newUser={isNewUser} />
          )  : ( <UserInfo /> )  }
      </AppContext.Provider>
    </>
  )
}

