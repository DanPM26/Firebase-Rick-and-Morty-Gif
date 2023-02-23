import React from 'react'
import {Link} from 'react-router-dom'
function Home(){
return(
    <>
    <nav>
        <Link to={'/'}>Home</Link>
        <Link to={'/tabla'}>Tabla</Link>
    </nav>
    <h1>Hola mundo</h1>
    </>
)
}

export default Home

