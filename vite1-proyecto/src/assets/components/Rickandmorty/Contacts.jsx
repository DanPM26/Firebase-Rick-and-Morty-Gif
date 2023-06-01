import React, { useEffect, useState } from "react";
import axios from 'axios'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

 function Contact(){

    // estado estatico 
     const [info,setinfo] = useState([])

     //estado dinamico 
     const [tablaInfo, setTablainfo] = useState([])
     const[busqueda,setBusqueda]= useState("")

     const getData = async() => {
         const url = 'https://rickandmortyapi.com/api/character'
         const resp = await axios.get(url)
         setinfo(resp.data.results)
         setTablainfo(resp.data.results)
         console.log(resp.data)
     }

     useEffect(() => {
         getData();
     },[])
    
     
     function boton(){
        let textoinput = document.getElementById("text").value 

        setBusqueda(textoinput)
        filtrar(textoinput)
        //console.log(textoinput)

     }

     const filtrar=(terminodeBusqueda)=>{
        let resultado = tablaInfo.filter((x) => {
           if(x.name.toString().toLowerCase().includes(terminodeBusqueda.toLowerCase())){
            return x;
           }
        });
        setinfo(resultado)
     }

        return(
            <>  
            <h1>Esta es la página de Rick / Morty</h1>
            <div>
            <input type="text" id="text" />
            <button onClick={boton}>Enviar</button>
            </div>
            


            <div>
              {info.map((x) => 
              <Card key={x.id} style={{ width: '18rem' }}>
               <Card.Img variant="top" src={x.image} />
               <Card.Title>{x.name}</Card.Title>
              <Link to={`/info/${x.id}`}> Más detalles
               </Link>
            
              </Card>
             )}  
            </div>
            
            <div>
        
            </div>
            </>
        )

}

export default Contact