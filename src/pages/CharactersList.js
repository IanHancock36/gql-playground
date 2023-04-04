import React from "react";
import { useQuery, gql } from "@apollo/client";

const GET_CHARACTERS = gql`
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
export default function CharactersList() {
  const {error,data,loading} = useQuery(GET_CHARACTERS);

console.log({loading,error,data})
if(loading) return <div>riding spinners....</div>
if (error) return <div>oh no</div>
  return <div className="character-list">
    {data.characters.results.map(character =>{
        return (
            <div key={character.id}>
        <img src ={character.image}/>
                </div>
          )
    })}
  </div>;
}
