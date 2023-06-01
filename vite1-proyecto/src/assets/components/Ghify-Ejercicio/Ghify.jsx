import React, { useEffect, useState } from "react";
import axios from "axios";
import Datagph from "./datagph";

//  export default function Ghify(){
//      const [info,setinfo] = useState([])
//      const [busqueda,setBusqueda]= useState("")

//      const getData = async() => {
//          const url = `https://api.giphy.com/v1/gifs/search?api_key=IZL6Q0oAkN4heZUClfymqMu1OuZF4qYm&q=${busqueda}&limit=15&offset=0&rating=g&lang=en`
//          const resp = await axios.get(url)
//          setinfo(resp.data.data)
//          console.log(resp.data.data)
//      }
//      useEffect(()=>{
//          getData()
//      },[]);
  
//      function boton(){
//       let inputText = document.getElementById("text").value ; 
//       setBusqueda(inputText)
//       filtrar(inputText)
//       console.log(inputText)
//      }
  
//      const filtrar = (terminodeBusqueda) =>{
//          let resultado = info
//          .filter((x)=>{
//              if(x.title.toString().toLowerCase().includes(terminodeBusqueda.toLowerCase())){
//                  return x;
//              }
//          });
//          setinfo(resultado)
//      }
//      return(
//          <>
    
//              <input type="text" id="text" />
//              <button onClick={boton}>Enviar</button>
   
//          <h1>Hola, aquí va Ghify</h1>
//          <div>
//              {info.map((x)=>
//              <div key={x.id}>
//                 <h1>{x.title}</h1>
           
          
//              </div>)}
//          </div>
//          </>
//      )
//  }

export default function Ghify(){
    const [info,setinfo] = useState([])
    const [busqueda,setBusqueda]= useState("")
    const [err,setErr] = useState(false)

    const getData = async() => {
        const url = `https://api.giphy.com/v1/gifs/search?api_key=IZL6Q0oAkN4heZUClfymqMu1OuZF4qYm&q=${busqueda}&limit=15&offset=0&rating=g&lang=en`
        const resp = await axios.get(url)
        setinfo(resp.data.data)
        console.log(resp.data.data)
    }

    useEffect(()=>{
        getData()
    },[]);
 
    const handleInput = (e) => {
        setBusqueda(e.target.value)
        console.log(e.target.value)
    }
    
    const handleSubmit = () => {
      getData()
      setBusqueda('')
      setErr(false)
    }
    
 
    return(
        <>
        <h1>Hola, aquí va Gif</h1>
            <input type="text" id="text"  onChange={handleInput} />
            <button onClick={handleSubmit}>Enviar</button>
  
        
        <div>
          <Datagph info={info}/>
        </div>
        </>
    )
}





