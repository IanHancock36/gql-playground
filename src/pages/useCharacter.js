import { useQuery, gql } from "@apollo/client";

const GET_CHARACTER = gql`
  query {
    characters {
      results {
        id
        name
        image
      }
    }
  }
`;

export const useCharacter=() => {
    return(
        <div>hey</div>
    )
}
