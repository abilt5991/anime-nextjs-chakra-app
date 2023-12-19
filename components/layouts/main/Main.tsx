//The anime data fetched with GraphQL query is listed. 
//This is the Information page that the logged In user would be able access

import { useQuery } from '@apollo/client';
import { useState } from 'react';
import { GET_DATA } from '@/graphql/queries'
import { Box, Heading, SimpleGrid } from '@chakra-ui/react';
import { LoadingIndicator, MainDescription, AnimeListCard } from '../../common/Utilities'
import AnimeInfo from './AnimeInfo';
import AnimeList from './AnimeList';
import { AnimeProps } from '../../common/types'


const Main: React.FC = () => {
const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
const [selectedItem, setSelectedItem] = useState<AnimeProps | null>(null);
const { loading, error, data } = useQuery(GET_DATA); //useQuery hook performs the GraphQL query asynchronously

if (loading) return <LoadingIndicator />;
if (error) return <p>Error: {error.message}</p>;

//When an Anime is Clicked, more information is displayed in the Modal
const handleItemClick = (item : AnimeProps) => {
  setSelectedItem(item);
  setIsModalOpen(true);
};

const handleCloseModal = () => {
  setSelectedItem(null);
  setIsModalOpen(false);
};

const users : AnimeProps[] = data?.Page.media || [];
const default_img = users?.find(item => item.bannerImage !== null)?.bannerImage; //Setting First Image in the data as Default

const animes = users?.map((anime: AnimeProps) => (
    <AnimeList key={anime.id} anime={anime} default_img={default_img} handleItemClick={() => handleItemClick(anime)}/>
));

return (
    <Box p={4}>
      <Box margin={8}>
          <Heading as="h1" fontWeight={400} size="2xl">
          Most Popular
        </Heading>
        <Box {...MainDescription}>Action-packed adventures, offbeat comedies, inspirational stories -- these anime movies and TV shows have a style and spirit unlike anything else.</Box>
      </Box>
    
    <SimpleGrid columns={[1, 2, 3, 4]} {...AnimeListCard}>
      {animes}
    </SimpleGrid>

    {selectedItem ?  <AnimeInfo isOpen={isModalOpen} onClose={handleCloseModal} default_img={default_img} animeDetails={selectedItem}/> : "" }
  </Box>
);
};

export default Main;