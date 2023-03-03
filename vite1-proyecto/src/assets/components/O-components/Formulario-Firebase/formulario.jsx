import { collection, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../Firebase/firebase";

function Formulario(){
    const [usuarios, setUsuarios]= useState([])
    const [form, setForm]= useState(null)

const getData = () =>{
    const arrayData = []
    onSnapshot(collection(db,'usuarios'),(snapshot)=>{
        snapshot.docs.forEach((item)=>{
            console.log(item.data())
            arrayData.push({
                ...item.data(),
                id: item.id
            })

            console.log("aqui Data", arrayData)
            setUsuarios(arrayData)


        })
    })
}

useEffect(()=>{
    getData();
},[])

return(
    <>
    <h1>Hola</h1>
    </>
)
}



export default Formulario