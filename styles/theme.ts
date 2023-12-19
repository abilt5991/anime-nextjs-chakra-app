import { extendTheme } from '@chakra-ui/react'
import type { StyleFunctionProps } from '@chakra-ui/styled-system'

const commonStyles = {
    gradientText: {
      color: "linear-gradient(to right, #02AABD, #00CDAC)"
    },
    gradientBg: {
        bg: "linear-gradient(to right, #02AABD, #00CDAC)",
        brImgage: "linear-gradient(to right, #02AABD, #00CDAC)",
      },
      externalIcon: {
        fontSize: "20px", 
        fontWeight: "bold", 
        marginRight: "4px",
         color: "#02AABD"
      }
};

const theme = extendTheme({
  components: {
    //BUTTON
    Button: {
      baseStyle: {
        ...commonStyles.gradientBg,
        fontWeight: 'bold', 
      },
      sizes: {
        xl: {
          h: '56px',
          fontSize: 'lg',
          px: '32px',
        },
      },
      variants: {
        'with-shadow': {
          bg: 'red.400',
          boxShadow: '0 0 2px 2px #efdfde',
        },
      },
      defaultProps: {
        size : { base: 'md', md: 'lg', lg: 'lg' },
        variant: 'sm',
        colorScheme: 'green',
      },
    },
    // MODAL
    Modal: {
        baseStyle: {
          overlay: {
            bg: 'rgba(100, 100, 100, 0.5)',
            backdropFilter: "blur(6px)",
          },
          body:{
            bg: '#000000',
            color: '#ffffff',
            overflow: "scroll"
          },
          dialog: {
            maxHeight : '80vh',
            overflow : 'scroll',
            bg: "#000000",
            color: "#ffffff",
            maxW : { base: '100vw', md: '70vw', lg: '50vw' },
            boxShadow: "0 1px 8px rgba(0, 0, 0, 0.5)"
          },
          content: {
            maxHeight : '80vh',
            padding : '8',
            overflow: "hidden",
          },
          header: {
            bg: "#000000",
            fontSize: { base: 'xl', md: 'xl', lg: '2xl' },
            color: '#ffffff',
            maxWidth: "80%",
            maxHeight: "sm",
            p: '6',
            textTransform: "capitalize",
          },
          closeButton: {
            p: '12' ,
            color: 'white',
            _hover: { 
                cursor: "pointer",
                color: "rgb(2, 170, 189)",
             },
          },
          
        },
    },
    //MODALFOOTER 
    ModalFooter:{
        baseStyle: {
            display: "flex",
            position: "absolute",
            bottom: 0,
            width: "100%",
        },
    },

    // IMAGE
    Image: {
      baseStyle: {
        height: "200px",
        objectFit: "cover",
        border: "1px solid pink",
        width : '100%',
      }
    },
    //ExternalLinkIcon
    ExternalLinkIcon: {
      baseStyle: {
        fontSize: "18px", 
        fontWeight: "bold", 
        marginLeft: "4px"
      }
    },
    
    // SIMPLEGRID
    SimpleGrid: {
        baseStyle: {
            gap: 2,
            spacing: 10,
            width: "100%",
        },
    },
    //TEXT
    Text: {
      baseStyle: {
        fontSize: { base: 'sm', md: 'sm', lg: 'md' },
      }
    },

    //LINK
    Link: {
        baseStyle: {
            textDecoration: "underline",
            color: "transparent",
            display: "inline-flex",
            fontWeight: "semibold",
            backgroundImage: "linear-gradient(to left, #02AABD, #00CDAC)",
            backgroundClip: "text",
        }
    },
  },

  styles: {
    global: {
      'html, body, p, h1, h2': {
        fontFamily: "'Nunito Variable', sans-serif !important" ,
      },
      body:{
        lineHeight: 'tall',
        bg: '#121212',
        color: 'white',
      },
      a: {
        color: 'teal.500',
      },
    },
  },
})

export default theme