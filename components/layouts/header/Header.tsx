//Header component with user profile info and along with LOGOUT option
import React, { useState } from "react";
import EditInfo from './EditProfile'
import { useAppContext } from "@/context/Context";
import { UserInfoType } from '../../common/types'
import { UserName, ListHeader, AnimeLogoText } from "../../common/Utilities"
import { Box, Flex, Text, Spacer, Heading, Avatar } from '@chakra-ui/react';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem
} from '@chakra-ui/react'

interface UserProps {
  newUser : UserInfoType
}

 const Header:React.FC<UserProps> = ({newUser}) => {
  const { handleDataState } = useAppContext();
  const [editInfo, setEditInfo] = useState<boolean>(false);

  //Get Fisrt name to show on Profile
  const firstName = getFirstName();
  function getFirstName() {
    let wordsArray = newUser.username.split(/[ _]/);
    return wordsArray[0];
  }

  function editFormOpen() {
    setEditInfo(true);
  }

  function logoutUser() {
    localStorage.removeItem('user_info');
    handleDataState();
  }

  const handleCloseModal = () => {
    setEditInfo(false);
  };

  return (
      <Flex
        as="nav"
        {...ListHeader}>
        <Flex align="center" marginInline={4}>
          <Heading as="h1" {...AnimeLogoText}>
            Anime
          </Heading>
        </Flex>

        <Box
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
        >
        </Box>
        <Spacer />
        <Menu>
          <MenuButton >
            <Flex align="center"
            justify="space-between"
            wrap="wrap"
            color="white">
              <Text mr={2} {...UserName} noOfLines={1}>{firstName}</Text>
              <Avatar name={newUser.username} bgGradient={['linear(to-l, #02AABD, #00CDAC)']} color={"white"}/>
            </Flex>
          </MenuButton>
          <MenuList color={"black"}>
            <MenuItem onClick={editFormOpen}>Edit Profile</MenuItem>
            <MenuItem onClick={logoutUser}>Logout</MenuItem>
          </MenuList>
        </Menu>

        <EditInfo isOpen={editInfo} onClose={handleCloseModal} />
      </Flex>
    );
  };
  
  export default Header