import { useEffect, useState } from "react";
import Pokemoncard from "./componetns/Pokemoncard.js";
useEffect(()=>{
  fetch
})
function App() {
  const [images,setImages] = useState([]);
  const [isLoading,setIsLoading] =useState(false);
  return (
    <div className=" w-full h-screen p-10 flex ">
       <div className="w-full  flex flex-wrap">
       <Pokemoncard />
          
       </div>
    </div>
  );
}

export default App;
