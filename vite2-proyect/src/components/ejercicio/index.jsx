import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import {Link} from 'react-router-dom'
import Styles from './styles.module.css'
function Ejercicio(){
  const [dataset, setDataset] = useState([])

    const getApi= async() =>{
        const response = await fetch('https://fakerapi.it/api/v1/persons')
        const {data} = await response.json()
        // console.log(data)
        setDataset(data)
    }

    useEffect(()=>{
        getApi()
    },[])

    return(
        <>
        <nav>
            <Link to={'/'}>Home</Link>
        </nav>
        <h1>Esto es el ejercicio</h1>
<div>
<table >
        <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Email</th>
                        <th>Telefono</th>
                    </tr>
                    </thead>
                  <tbody>
                  
            {dataset && dataset.map((item)=> (
            <tr key={item.id}>
                        <td>{item.firstname}</td>
                        <td>{item.lastname}</td>
                        <td>{item.email}</td>
                        <td>{item.phone}</td>
            </tr>
         ))}      
                    
                  </tbody>
    </table>

</div>    
    </>
    )
}

export default Ejercicio