import { useEffect, useState } from "react"
import CharacterCard from "../components/CharacterCard"

export default function Characters() {

    const [characters, setCharacters] = useState([])

    const getAllCharacters = async()=> {
        const response = await fetch('https://rickandmortyapi.com/api/character')
        const data = await response.json()
        
        setCharacters(data.results)

        console.log(data)

    }

    console.log(characters)

    useEffect(() =>{
          getAllCharacters()
    },[])
  
    return(
        <main>
            <h1>Karakterer</h1>
            <section>
                {characters?.map((char) => <CharacterCard key={char.id}  char={char}/>)}
            </section>
        </main>
    )

    
}