import { useEffect } from "react";


export const Message = () => {

    useEffect(() => {
      console.log("componente Montadio")
    
      return () => {
        console.log("componente Desmontadio")
      }
    }, [])
    

  return (
    <>
    <h3> Usuario ya existe</h3>
    </>
    
  )
}
