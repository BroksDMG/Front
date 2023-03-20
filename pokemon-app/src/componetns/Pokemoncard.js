import React, { useState } from 'react'

const Pokemoncard = ({images}) => {
    console.log(images);
  return (
    <div className=" w-min h-min  bg-gray-300 shadow-2xl mx-2 my-2 rounded-lg cursor-pointer hover:-translate-y-1 ">
          <div className="w-full">
            <img className=" object-contain w-full  " 
            src={images} alt="test"
            />
          </div>
        
          <div className="w-full px-5 py-5 flex flex-col">
          <ul className="">
            <li className=""> <strong>views:200</strong></li>  
            <li className=""> <strong>downloads:40</strong></li>  
            <li className=""> <strong>likes: 100</strong></li>  
             
          </ul>       
          </div>       
       </div>
  )
}

export default Pokemoncard