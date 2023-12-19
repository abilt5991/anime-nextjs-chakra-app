//This is for the user to edit the Profile
import { useState, useRef } from 'react'
import { useToast, Text, Button } from '@chakra-ui/react'
import { useAppContext } from "@/app/page";
import { CancelAction } from '../../common/Utilities'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react'
  import {
    FormControl,
    FormLabel,
    FormHelperText,
    Input,
  } from '@chakra-ui/react'

  interface ItemModalProps {
    isOpen: boolean;
    onClose: () => void;
}

  const EditProfile:React.FC<ItemModalProps> = ({isOpen, onClose}) => {
    const [username, setUsername] = useState<string>('');
    const [isValid, setIsValid] = useState<boolean>(false);
    const usernameRegex = /^[a-zA-Z0-9_ ]{6,}$/;
    const initialRef = useRef(null);
    const toast = useToast();
    const { handleDataState } = useAppContext();

    //Validating user input
    const validateInput = (input: string): boolean => {
        return usernameRegex.test(input.trim());
    };

    //onchange event handling
    function handleInputChange(e: React.ChangeEvent<HTMLInputElement>)  {
      const inp = e.target.value
      validateInput(inp) ? setIsValid(true) : setIsValid(false)
      setUsername(inp) 
    }

    //Updating user input to the local storage
    function updateUserInfo() {
      const oldUserInfo : string | null = localStorage.getItem("user_info");
      const newInfo : { username?: string } = JSON.parse(oldUserInfo || '');
      newInfo.username = username;
      localStorage.setItem('user_info', JSON.stringify(newInfo));
      onClose();
      setUsername('') 
      toast({
        position: 'top',
        title: 'Updated Successfully!',
        description: "Profile has been updated",
        status: 'success',
        duration: 1500,
        isClosable: true,
      })
      handleDataState();
    }
  
    return (
      <>
        <Modal
          initialFocusRef={initialRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
          <ModalHeader>Edit your profile</ModalHeader>
            <ModalCloseButton p={8}/>
            <ModalBody>
            <FormControl>
                <FormLabel htmlFor='editname'>Pick a new Username</FormLabel>
                <Input
                  type="text"
                  id="editname"
                  placeholder={`Example: John Smith `}
                  value={ username }
                  onChange={handleInputChange} 
                  ref={initialRef}
                />
                <FormHelperText marginBlock={4} color={"white"}>
                    Must have at least 6 characters and can contain only letters, numbers and underscore.
                </FormHelperText>
            </FormControl>
            </ModalBody>
            <ModalFooter>
              <Text
                as={'button'}
                onClick={onClose}
                mr={4}
                {...CancelAction}>Cancel</Text>

              <Button onClick={updateUserInfo} isDisabled={!isValid}>
                Update
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }

  export default EditProfile