import React from "react";

const Datagph = ({info}) => {
  return (
    <>
    {info && info.map(item => 
  
      <div key={item.id}>
      {/* <h1>{item.title}</h1> */}
      <img src={item.images.fixed_height.url} />
    </div>)}
  </>
    
     
  )
}



export default Datagph