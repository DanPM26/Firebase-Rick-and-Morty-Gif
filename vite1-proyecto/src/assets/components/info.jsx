import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';

const Info = () => {
  const { id } = useParams()
//   const [character, setCharacter] = useState([])
   const [character, setCharacter] = useState({})

   const getCharacter = async () => {
    let url = `https://rickandmortyapi.com/api/character/${id}`
    const { data } = await axios.get(url)
    console.log(data)
   setCharacter(data)
  }

  useEffect(() => {
    getCharacter()
  }, []);

  return (
    <section>
      <h2>
        {character.name}   
      </h2> 
      <h2>
        {character.status}   
      </h2>
      <h2>
        {character.species}   
      </h2>
      <h2>
        {character.gender}   
      </h2>
      <img src={character.image} />
        
  
      <p>

      </p>
    </section>
  )
}

export default Info