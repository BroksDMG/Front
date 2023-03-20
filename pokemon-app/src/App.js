import { useEffect, useState } from "react";
import Pokemoncard from "./componetns/Pokemoncard.js";

function App() {
  const [images,setImages] = useState([]);
  const [isLoading,setIsLoading] =useState(true);
  const pokemonName=`charizard`;
  useEffect(()=>{
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    .then(res=>res.json())
    .then(data=>{
      setImages(data.sprites.front_default)
      setIsLoading(false);
    })
    .catch(err=>console.log(err))
    
  },[])
  return (
    <div className=" w-full h-screen p-10 flex">
       <div className="w-full  flex flex-wrap">
       <Pokemoncard images={images}/>
          
       </div>
    </div>
  );
}

export default App;
