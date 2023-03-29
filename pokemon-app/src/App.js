import { useEffect, useState } from "react";
import Navbar from "./componetns/navbar/Navbar.js";
import PokemonContainer from "./componetns/PokemonContainer.js";

function App() {
  const [images,setImages] = useState([]);
  const [isLoading,setIsLoading] =useState(true);
  useEffect(()=>{
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=9&offset=0`)
    .then(res=>res.json())
    .then(data => {
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
    <div className=" w-full h-screen flex flex-wrap justify-center">
      <Navbar/>
      <PokemonContainer loading={isLoading} images={images}>
      </PokemonContainer>
    </div>
  );
}

export default App;
