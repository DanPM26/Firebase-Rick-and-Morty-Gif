import React from "react";
import Contact from "./Rickandmorty/Contacts";
import { Link } from "react-router-dom";

function Home(){
    return (
        <>
        <nav>
            <Link to={'/form'}>Formulario</Link>
            <Link to={'/ghify'}>Gifs</Link>
        </nav>
         <h1>Hola mundo</h1>
         <Contact />



        </>

        
    )
}

export default Home