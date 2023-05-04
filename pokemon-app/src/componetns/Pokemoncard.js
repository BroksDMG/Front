import React from 'react'

const PokemonCard = ({image}) => {
  
  return (
    <div className=" w-min h-min   shadow-2xl  cursor-pointer  rounded-b-lg hover:-translate-y-1 mx-3">
          <div className="w-full bg-gray-300 rounded-t-lg">
            <img className=" object-contain w-full  " 
            src={image.sprites.front_default} alt="test"
            />
          </div>
        
          <div className=" w-48 px-5 py-5 flex flex-col bg-slate-100 rounded-b-lg">
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

export default PokemonCard