"use client"
import { Text, Image, Box } from '@chakra-ui/react'
import { AnimeProps } from '../../common/types'

interface AnimeInfoProps {
  anime: AnimeProps;
  handleItemClick: () => any;
  default_img?: string;
}

const AnimeList: React.FC<AnimeInfoProps> = ({ anime, handleItemClick, default_img }) => {
  return (
    <Box onClick={handleItemClick}
    _hover={{
      cursor: 'pointer',
      boxShadow: 'md',
    }}
    >
      <Box m='4' mb='4' borderRadius='sm' overflow='hidden'>
        <Image src={anime.bannerImage || default_img} alt={anime.title?.english || "Anime"} h={"160px"} objectFit="cover"/>
        <Text pt='4' align={'center'} fontSize='sm'>{anime.title?.english || "Anime"}</Text>
      </Box>
    </Box>
  )
}

export default AnimeList