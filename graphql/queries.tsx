// queries.ts
import { gql } from '@apollo/client';
export const GET_DATA = gql`
query  {
    Page {
      media {
        siteUrl
        title {
          english
        }
        description
        rankings {
            context
          }
        bannerImage
        id
        duration
      episodes
      type
        genres
        meanScore
      }
    }
  }
`;
