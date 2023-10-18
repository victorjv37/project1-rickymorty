import { useEffect, useState } from "react";
import ButtonToDelete from "./ButtonToDelete";

const Cards = () => {
  const charactersMock = [];
  const [characterList, setCharacterList] = useState(charactersMock);

  useEffect(() => {
    (async () => {
      let data = await fetch(`https://rickandmortyapi.com/api/character/`).then(
        (res) => res.json()
      );
      setCharacterList(data.results);
    })();
  }, []);

  const charactersAlive = [];
  {characterList.map((character) => {
      if(character.status === "Alive"){
      charactersAlive.push(character);
      }
    })
  }

  return (
      charactersAlive.map((character) =>
      <div className="card" key={character.id}>
        <img src={character.image} alt="" />
        <h4>{character.name}</h4>
        <p>Current status: {character.status} || Origin: {character.origin.name}</p>
        <ButtonToDelete />
      </div>  
      )
)
};

export default Cards;
