import React from "react";
import { useCharacter } from "./useCharacter";
import { useParams } from "react-router";

export default function Character() {
  const {id} = useParams()
  const { error, data, loading } = useCharacter(id);

  console.log({ error, data, loading });
  if (error) return <div>oh no this is not good</div>;
  if (loading) return <div>......loading......</div>;
  return (
    <div>
      <img src={data.character.image} />
      <div>{data.character.name}</div>
      <div>
        {data.character.episode.map((episode) => {
          return (
            <div>
              <div>{episode.name}</div>
              <div>{episode.episode}COOL</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
