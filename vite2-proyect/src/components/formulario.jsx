import React, { useState } from "react";


export default function Form(){
    // console.log(import.meta.env.VITE_SOME_KEY)

    // const [reserva,setReserva]= useState([])
    const valoresIniciales={
        nombre:'',
        email:'',
        number:''
    } 

    const[form,setForm]= useState({valoresIniciales})
// 2.- evento input
     const inputChange = e =>{
        // Manejo de los eventos
        // console.log(e.target.value)
        const{name, value}= e.target
        // console.log(name,value)

        // Copia los valores que ya tiene, y luego el input que se esta actualizando, coloca el valor actual que se está tipeando 
        setForm({...form,[name]:value})
       
     }
// 1.- evento submit
     const eventoSubmit = e =>{
        e.preventDefault();
        // console.log(form)
       
     }

    return(
        <>
    
       <h1>Hola data</h1>
      {/* <button type="button" onClick={()=>console.log(import.meta.env.VITE_SOME_KEY)}>Env</button> */}

      <form onSubmit={eventoSubmit}>
        <input type="text"  name="nombre" onChange={inputChange}/>
        <input type="email" name="correo" onChange={inputChange}/>
        <input type="number" name="mesa" onChange={inputChange}/>
        <button>Enviar</button>
      </form>
        </>
    )
}