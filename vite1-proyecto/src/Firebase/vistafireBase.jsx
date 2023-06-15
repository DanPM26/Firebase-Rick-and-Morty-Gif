import React, { useEffect, useState } from "react";
import { db } from "./Firebase-credenciales/firebase";
import { collection, getDocs,addDoc,deleteDoc,doc } from "firebase/firestore";

function Vista(){
  
 const [users,setUsers] = useState([])
 const usersCollectionRef= collection(db,'reservaciones');
  const [newName, setNewName] = useState("")
  const [newEmail, setNewEmail]= useState("")
  const[newTable, setNewTable]= useState(0)

 const createUser = async()=>{
    await addDoc(usersCollectionRef, {nombre: newName, correo: newEmail, mesa: newTable})
    getUsers()
 }

 const getUsers= async()=>{
    const data = await getDocs(usersCollectionRef)
     console.log(data)
     setUsers(data.docs.map((doc)=>({...doc.data(), id: doc.id})))
}



 const incrementarMesa = async(id, newTable) =>{
   const userDoc =  doc(db,'reservaciones',id)
   const newMesa = {mesa: newTable + 1}
   console.log(newMesa)
   await updateDoc(userDoc, newMesa)
   getUsers()
  }

 const deleteUser = async(id) =>{
    console.log("borrado",id)
    const userDoc = doc(db,'reservaciones',id)
    await deleteDoc(userDoc)
    getUsers();
 }

 useEffect(()=>{
   getUsers()
},[])

    return(
        <>
        <h1>Hola,Hola</h1>
          
            <input type="text" placeholder="Nombre"  onChange={(e)=>{setNewName(e.target.value)}}/>
            <input type="email" placeholder="Correo" onChange={(e)=>{setNewEmail(e.target.value)}} />
            <input type='number' placeholder='#Mesa' onChange={(e) =>{setNewTable(parseInt(e.target.value))}}/>
            <button onClick={createUser}>Enviar</button>
          

          {users.map((user)=>{
            return(
            <div key={user.id}>
                <h1>Nombre: {user.nombre}</h1>
                <h1>Correo: {user.correo}</h1>
                <h1>Mesa: {user.mesa}</h1>
                <button onClick={() => deleteUser(user.id)}>Borrar</button>
                <button onClick={()=> incrementarMesa(item.id, item.mesa)}>Incrementar número de asistentes/mesa</button>

            </div>
            )
            
         })}
        </>
    )
}

export default Vista