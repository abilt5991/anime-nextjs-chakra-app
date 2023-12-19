import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://graphql.anilist.co', //AniList GraphQL endpoint
  cache: new InMemoryCache(),//a default cache implementation provided by Apollo Client. It stores the results in memory, allowing for efficient caching and retrieval of data.
});

export default client;