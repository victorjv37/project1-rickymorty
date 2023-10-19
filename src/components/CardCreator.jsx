import { useEffect, useState } from "react";
import ButtonToDelete from "./ButtonToDelete";

const CardCreator = () => {
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

  const handleDelete = (characterId) =>{
    let newCharacterList = structuredClone(characterList);
    newCharacterList.forEach((character,index) => {
      if(character.id === characterId){
          newCharacterList.splice(index,1)
          setCharacterList(newCharacterList)
          return
      }
    });
  }

  return (
        charactersAlive.map((character) =>
        <div className="card" key={character.id} id={character.id}>
            <>
              <img src={character.image} alt="" />
              <h4>{character.name}</h4>
              <p>Current status: {character.status} || Origin: {character.origin.name}</p>
              <ButtonToDelete characterId={character.id} onDelete={handleDelete}/>
            </>
        </div>
        )
      )
};

export default CardCreator;
