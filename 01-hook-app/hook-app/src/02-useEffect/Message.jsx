import { useState } from "react";
import { useEffect } from "react";


export const Message = () => {
const [coordenadas, setCoordenadas] = useState()
    useEffect(() => {
        const onMouseMove= ({x,y}) => {
            setCoordenadas({x,y});
            // const coords = {x ,y };
            // console.log(coords)
        }

      window.addEventListener('mousemove', onMouseMove );
    
      return () => {
        window.removeEventListener('mousemove', onMouseMove );
      }
    }, []);
    

  return (
    <>
    <h3> Usuario ya existe</h3>
    <h4>{JSON.stringify(coordenadas)}</h4>
    </>
    
  )
}
