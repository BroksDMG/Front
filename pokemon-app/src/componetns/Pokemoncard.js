import React, {useState}from 'react'

const Pokemoncard = ({image}) => {
  console.log(image.types);
  // const [types,setTypes]=useState([])
  // setTypes(...[image.types]);
  return (
    <div className=" w-min h-min  bg-gray-300 shadow-2xl mx-2 my-2 rounded-lg cursor-pointer hover:-translate-y-1 ">
          <div className="w-full">
            <img className=" object-contain w-full  " 
            src={image.sprites.front_default} alt="test"
            />
          </div>
        
          <div className=" w-48 px-5 py-5 flex flex-col">
          <ul className="">
            <li className=""> 
            <strong>Name: </strong>
            {image.name}
            </li>  
            <li className=""> 
            <strong> Waga: </strong> 
            {image.weight} kg</li>  
            <li className=""> 
            <strong>types:</strong>
            {image.types.map((e)=>e.type.name )}
            
            </li>  
             
          </ul>       
          </div>       
       </div>
  )
}

export default Pokemoncard