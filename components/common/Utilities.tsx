import React from 'react';
//All React and Chakra UI icons with respective styles and other component styles
import { CircularProgress, TextProps } from '@chakra-ui/react';
import { IoIosArrowRoundBack, IoIosPlay } from "react-icons/io";
import { ArrowForwardIcon, ExternalLinkIcon } from '@chakra-ui/icons'
import { IoBookmark, IoBookmarkOutline } from "react-icons/io5";

interface BackArrowProps {
    onClick: () => void;
}

interface GreetingMessageProps {
    username: string;
}

export const LoadingIndicator: React.FC = () => (
  <CircularProgress
    isIndeterminate
    color='teal.300'
    height="100vh"
    style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
  />
);

export const BackArrow: React.FC<BackArrowProps> = ({ onClick }) => (
    <IoIosArrowRoundBack
      onClick={onClick}
      style={{ marginLeft: '-8px', fontWeight: '600', cursor:"pointer", fontSize: '40px'}}
    />
);
  
export const ForwardArrow: React.FC = () => (
    <ArrowForwardIcon
    style={{ marginLeft: '20px', fontSize: '20px' }}
    />
);

export const PlayIcon: React.FC = () => (
    <IoIosPlay
    style={{fontSize: "20px", fontWeight: "bold", marginRight: "4px"}}
    />
);

export const BookMark: React.FC = () => (
    <IoBookmark
    style={{fontSize: "20px", fontWeight: "bold", marginRight: "4px", color: "#02AABD"}}
    />
);

export const BookMarkOutline: React.FC = () => (
    <IoBookmarkOutline
    style={{fontSize: "20px", marginRight: "4px", color: "#02AABD"}}
    />
);

export const ExternalLink: React.FC = () => (
    <ExternalLinkIcon
     mx='2px'
     style={{fontSize: "18px", fontWeight: "bold", marginLeft: "4px"}}
    />
);

export const UsernameTextStyles: TextProps = {
    bgGradient: 'linear-gradient(to left, #48ecff, #00ffd6)',
    bgClip: 'text',
    fontSize: 'xl',
    textTransform: 'capitalize',
    display: 'inline',
  };

  export const AnimeLogoText: TextProps = {
    bgGradient: 'linear-gradient(to left, #48ecff, #00ffd6)',
    size: "lg",
    fontWeight: "semibold",
    bgClip: 'text'
  };

export const AnimeListContainer: TextProps = {
    textAlign: 'center',  
    margin: 'auto',       
    height: '100vh',     
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  };

export const CancelAction: TextProps = {
    cursor: "pointer",
    fontWeight: "medium",
    textDecoration: "underline",
    fontSize: { base: 'sm', md: 'md', lg: 'md' }
  };

export const ImageStyle: TextProps = {
    height: "200px",
    objectFit: "cover",
    width : '100%',
}

  export const UserName: TextProps = {
    textTransform: "capitalize", 
    fontSize: { base: 'md', md: 'lg', lg: 'lg' }
  };

  export const ListHeader: TextProps = {
    align: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
    paddingInline: "2rem",
    paddingBlock: "1rem",
    bg: "black",
    color: "white"
  };
    export const AnimeGridDetails: TextProps = {
        gridTemplateColumns: "2fr 1fr",
        color: '#cacaca', 
        fontWeight: 'normal', 
        fontSize: "small",  
        letterSpacing:'wide'
    }

    export const AnimeModalFooter: TextProps = {
        cursor: "pointer",
        display: "flex",
        alignItems:"center",
        fontWeight: 'bold'
    }  
  export const MainDescription: TextProps = {
        fontSize:'lg',
        mt: "4",
        width: {base: '100%', md: '70%', lg: '50%' }
  }

  export const AnimeListCard: TextProps = {
    margin: 4,
    gap: 4,
    justifyItems: 'center',
  };