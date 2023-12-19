//The toast component from Chakra UI to give feedback to users after successfully creating an account.
import { useToast } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'

function ToastExample() {
    const toast = useToast()
    return (
      <Button
        onClick={() =>
          toast({
            position: 'top',
            title: 'Updated Successfully!',
            description: "Profile has been updated",
            status: 'success',
            duration: 1500,
            isClosable: true,
          })
        }
      >
        Show Toast
      </Button>
    )
  }