import React from 'react'
import PokemonCard from './PokemonCard'
function PokemonContainer(props) {
  return (
    <div>
        {props.isLoading? <h1 className="text-6xl text-center mx-auto mt-32"> Is Loading</h1>
      :<div className="w-full  flex flex-wrap justify-around bg-slate-100 max-w-4xl
        p-3
      ">
       {props.images.map(image => 
         <PokemonCard key={image.id} image={image}/>
        // console.log(image.sprites);
       )}
        </div>}
    </div>
  )
}

export default PokemonContainer