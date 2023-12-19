//This is for new Users. 
//Using Modal and Formcontrol components of ChakraUI for getting user name and the user's favourite anime to set up the profile

"use client" 
import { useEffect, useState, useRef, useCallback } from 'react'
import { Heading, Stack, Text, Box, Button } from '@chakra-ui/react'
import { BackArrow, ForwardArrow, UsernameTextStyles, AnimeListContainer } from "../common/Utilities"
import { useAppContext } from '@/app/page';
import { UserInfoType } from '../common/types'
import {
    FormControl,
    FormLabel,
    FormHelperText,
    Input,
  } from '@chakra-ui/react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
  } from '@chakra-ui/react'

   const UserInfo: React.FC = () => {
    const [username, setUsername] = useState<string>(''); //Slide 1
    const [fav_anime, setFavAnime] = useState<string>(''); //Slide 2
    const [isValid, setIsValid] = useState<boolean>(false);
    const { handleDataState } = useAppContext();
    const { isOpen, onOpen, onClose } = useDisclosure();

    //To focus the form inputs
    const initialRef = useRef(null);
    const finalRef = useRef<HTMLInputElement>(null);

    const [isUsernameStep, setIsUsernameStep] = useState<boolean>(true);
    const usernameRegex = /^[a-zA-Z0-9_ ]{6,}$/; //To validate user input

    const handleNextStep = useCallback(() => { //handle Modal button click
      if (isUsernameStep) { //Check if user is in Slide 1
        setIsUsernameStep(false);         
      } else { //if user is in Slide 2, the input is optional
        const userInfo : UserInfoType = { username, fav_anime };
        localStorage.setItem('user_info', JSON.stringify(userInfo));
        onClose();
        handleDataState();
      }
    }, [isUsernameStep]);

      useEffect(() => {
        finalRef?.current?.focus();
      }, [!isUsernameStep]);

      const slideBack = () => { //To slide back and forth in the Modal
        setIsValid(true)
        setIsUsernameStep(true)
      }

      const validateInput = (input: string): boolean => {
        return usernameRegex.test(input.trim());
      };

      function handleInputChange(e: React.ChangeEvent<HTMLInputElement>)  {
        const inp = e.target.value
        isUsernameStep ?  setUsername(inp)  : setFavAnime(inp)
        validateInput(inp) ? setIsValid(true) : setIsValid(false)
      }

    return (
      <>
        <Stack spacing={6} {...AnimeListContainer}>
          <Heading as='h1' size={{ base: '2xl', md: '3xl', lg: '4xl' }} noOfLines={1}>
            Welcome to Anime!
          </Heading>
          <Heading noOfLines={1}>
              <Button onClick={onOpen} style={{ fontWeight: 'bold', fontSize: '16px' }}>LET'S GET STARTED <ForwardArrow /></Button>
          </Heading>
        </Stack>

        <Modal isOpen={isOpen} onClose={onClose} initialFocusRef={initialRef}>
          <ModalOverlay />
          
          <ModalContent>
            <ModalHeader>{isUsernameStep ? `Let's setup your profile!` : <BackArrow onClick={slideBack} /> }</ModalHeader>
            <ModalCloseButton p={8}/>
            <ModalBody>
             {isUsernameStep ?
             
             <FormControl>
                <FormLabel htmlFor="username">Pick a Username</FormLabel>
                <Input
                  type="text"
                  id="username"
                  placeholder={`Example: John Smith `}
                  value={ username }
                  onChange={handleInputChange} 
                  ref={initialRef}
                  required
                />
                <FormHelperText marginBlock={4} color={"white"}>
                    Must have at least 6 characters and can contain only letters, numbers and underscore.
                </FormHelperText>
              </FormControl>
              :
              <FormControl>
                <Box fontSize='xl' pb={4} fontWeight={'semibold'}>Hey <Text {...UsernameTextStyles}>{username}!</Text></Box>
                <FormLabel htmlFor="favanime">What's your favourite Anime? <span style={{fontWeight: "200"}}> (Optional)</span></FormLabel>
                <Input
                  type="text"
                  id="favanime"
                  placeholder={`Example: 'Dr Stone'`}
                  value={ fav_anime }
                  onChange={handleInputChange} 
                  ref={finalRef}
                />
                  <FormHelperText marginBlock={4} color={"white"}>
                    This will help us in picking the relevant animes for you. You can still proceed without this.
                  </FormHelperText>
              </FormControl>
                }
              </ModalBody>
  
            <ModalFooter>
                {isUsernameStep ? 
                  <Button onClick={handleNextStep} mb={4} isDisabled={!isValid}> Next <ForwardArrow />
                  </Button> 
                  :
                  <>
                  <Button marginBlock={4} w={'100%'} onClick={handleNextStep} > Finish </Button>
                </>
                }
                
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }

  export default UserInfo