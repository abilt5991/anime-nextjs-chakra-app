//The Animes are listed items on the main page and when clicked a Modal with 
//the following information about the anime is displayed:
//Anime Description
//Anime Duration, Number of Episodes, Rating on 10, Genre and and External link to the source page

import React, { useState } from 'react';
import { PlayIcon, BookMark, BookMarkOutline, ExternalLink, AnimeGridDetails, AnimeModalFooter, ImageStyle } from "../../common/Utilities";
import { Link } from '@chakra-ui/react';
import { AnimeProps } from '../../common/types'
import { Box, Text, SimpleGrid, Image} from '@chakra-ui/react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
} from '@chakra-ui/react'

interface ItemModalProps {
    isOpen: boolean;
    onClose: () => void;
    animeDetails: AnimeProps; 
    default_img?: string;
}

const AnimeInfo: React.FC<ItemModalProps> = ({ isOpen, onClose, animeDetails, default_img}) => {
    const [isSaveItem, setIsSaveItem] = useState<boolean>(false);
    //A switch - for saving item to watch list
    function saveItem() {
        setIsSaveItem(val => !val)
    }

    return (
    <Modal isOpen={isOpen} onClose={onClose} size="80vh">
        <ModalOverlay />
        <ModalContent>
            <ModalHeader textStyle={'mh1'}>{animeDetails.title?.english || "anime" }</ModalHeader>
            <ModalCloseButton p={8}/>
                <ModalBody sx={{background: "#121212", '::-webkit-scrollbar':{ display:'none'}}}>
                    <Box borderRadius='lg' overflow='hidden'>
                        <Image {...ImageStyle} src={animeDetails.bannerImage || default_img} alt={animeDetails.title?.english || "Anime"} />
                    </Box>
                    
                    <Box paddingBlock='6'>
                        <SimpleGrid {...AnimeGridDetails} >
                            <Box>Duration: {animeDetails.duration || "-"} Minutes</Box>
                            <Box>Episodes: {animeDetails.episodes || "-"}</Box>
                            <Box>Rating: {animeDetails.meanScore/10 || "-"}/10 </Box>
                            <Box>Genre: {animeDetails.genres[0] || "Anime"}</Box>
                        </SimpleGrid>            
                    </Box>

                    <Box><Text marginBlock={4} textAlign={'justify'} dangerouslySetInnerHTML={{ __html: animeDetails.description }}></Text>
                        <Box marginBlock={"4"}>
                            {animeDetails.siteUrl && 
                            <Link href={animeDetails.siteUrl} isExternal style={{alignItems:"center", color: "white"}}
                            >
                            Read more <ExternalLink />
                            </Link> }
                        </Box>
                    </Box>
                 </ModalBody>
        
                <ModalFooter maxW="full" style={{justifyContent: "space-between"}}>
                    <Box onClick={saveItem} {...AnimeModalFooter}> 
                    {isSaveItem ? <BookMark /> : <BookMarkOutline /> }
                    {isSaveItem ? "Saved" : "Save for later"}
                    </Box>
                    <Button onClick={onClose}> <PlayIcon /> Watch </Button>
                </ModalFooter>
            </ModalContent>
         </Modal>
    )
 }

 export default AnimeInfo