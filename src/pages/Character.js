import React from 'react'
import { gql } from '@apollo/client'
import { useCharacter } from "./useCharacter";

export default function Character(){
    const {error,data,loading} = useCharacter(4)

    console.log({error,data,loading})
    if(error) return <div>oh no this is not good</div>
    if (loading) return <div>......loading......</div>
    return(
        <div>
           <img  src={data.character.image}/>
           <div>{data.character.name}</div>
           <div>{data.character.episode.map(show=>{
            return(
                <>
                <div>{show.episode}</div>
                <div>{show.name}</div>
                </>
            )
           })}
           </div>
        </div>
    )
}