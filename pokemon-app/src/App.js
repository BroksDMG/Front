import { useEffect, useState } from "react";
import Pokemoncard from "./componetns/Pokemoncard.js";

function App() {
  const [images,setImages] = useState([]);
  // const [pokemons,setPokemons]=useState([]);
  const [isLoading,setIsLoading] =useState(true);

  useEffect(()=>{
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=9&offset=0`)
    .then(res=>res.json())
    .then(data => {
      // setPokemons(data.results.names)
      // console.log(pokemons);
      const imagesArray=[];
      data.results.forEach(e => {
      fetch(e.url)
      .then(res=>res.json())
      .then(data=>{
        imagesArray.push(data)
        setImages(imagesArray);
        setIsLoading(false);


      })
      .catch(err=>console.log(err))
      })
    })
    .catch(err=>console.log(err))
    
  },[])
  return (
    <div className=" w-full h-screen p-10 flex">
      {isLoading? <h1 className="text-6xl text-center mx-auto mt-32"> Is Loading</h1>
      :<div className="w-full  flex flex-wrap">
       {images.map(image => 
         <Pokemoncard key={image.id} image={image}/>
        // console.log(image.sprites);
       )}
       
          
       </div>}
    </div>
  );
}

export default App;
