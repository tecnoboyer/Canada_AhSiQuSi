import { useFetch } from "../hooks/useFetch";
import { userCounter } from "../hooks/userCounter";
import {Vers,Biblequote} from "../03-examples/index.js"

export const Layout = () => {
  const {counter,increment} = userCounter(1);

    const {escritura,versiculo, isLoading, hasError} = useFetch(`https://api.scripture.api.bible/v1/bibles/65eec8e0b60e656b-01/verses/MAT.11.${counter}`);


    // ${counter}


    if(isLoading){

      return(  
        <> 
        <h1> Cargando ...</h1>
        </>
        )
      
    }
      return (
        <>
        <h1> Bible Quotes</h1>
        <hr />
        {
        isLoading 
        ? <Vers escrit={escritura} versiculo={versiculo} /> 
        : <Biblequote escrit={escritura} versiculo={versiculo} />
        }
        <button 
        disable={isLoading.toString()}
        className="btn btn-primary" 
        onClick={()=>increment()}>
          Next Biblical verse
        </button>

        </>
      )


}
