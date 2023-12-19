'use client'
import { ChakraProvider } from '@chakra-ui/react' //a package to use ChakraUI in Next
import theme from '../styles/theme'; //To make customised styles available for the whole app
import { ApolloProvider } from '@apollo/client'; //To wrap the application so that apollo client instance is available to all components
import client from '../lib/apolloClient' //ApolloClient instance to make GraphQL queries

export function Providers({ children }: { children: React.ReactNode }) { //HOC that wraps the app with Apollo Client's provider.
  return <ChakraProvider theme={theme}> 
            <ApolloProvider client={client}>
                    {children}
                    </ApolloProvider>
        </ChakraProvider>
}