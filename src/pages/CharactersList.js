import React from "react";
import { useCharacters } from "./useCharacters";
import './CharactersList.css'
import {Link} from 'react-router-dom'
export default function CharactersList() {
const {error,data,loading} = useCharacters()

if(loading) return <div>riding spinners....</div>
if (error) return <div>oh no</div>
  return <div className="character-list">
    {data.characters.results.map((character) =>{
        return (
        
            <Link to={`/${character.id}`}>
                <div>{character.id}</div>
        <img src ={character.image}/>
        <div>{character.name}</div>
                </Link>
          )
    })}
  </div>;
}
