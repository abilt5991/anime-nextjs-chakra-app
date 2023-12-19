import Main from '../layouts/main/Main'
import Header from '../layouts/header/Header'
import { UserInfoType } from '../common/types'

interface UserProps {
  newUser : UserInfoType
}

//A Higher-Order Component for overall structuring of our app generally has (Header, Main and Footer)
const PageLayout: React.FC<UserProps> = ({newUser}) => {
  return (
  <>
    <Header newUser={newUser}/>
    <Main />
  </>
  );
};
 
 export default PageLayout;