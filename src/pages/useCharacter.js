import { useQuery, gql } from "@apollo/client";
// the ! means in the id:ID! means you absolutely need it to run this query
const GET_CHARACTER = gql`
  query GET_CHARACTER($id: ID!) {
    character(id: $id) {
      name
      id
      image
      episode {
        name
        episode
      }
    }
  }
`;

export const useCharacter = (id) => {
  const { error, data, loading } = useQuery(GET_CHARACTER, {
    variables: {
      id,
    },
  });
  return { error, data, loading };
};
