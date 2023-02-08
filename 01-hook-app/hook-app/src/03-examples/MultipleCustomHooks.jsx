import { useFetch } from "../hooks/useFetch";
import { userCounter } from "../hooks/userCounter";
import {vers,biblequote} from "./"

export const MultipleCustomHooks = () => {
  const {counter,increment} = userCounter(1);



// fetch("https://api.scripture.api.bible/v1/bibles/06125adad2d5898a-01/books", requestOptions)
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));


    const {escritura,versiculo, isLoading, hasError} = useFetch(`https://api.scripture.api.bible/v1/bibles/65eec8e0b60e656b-01/verses/MAT.11.1${counter}`);
 

    // ${fiel}
    ``   

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
        ? <vers escritura={escritura} versiculo={versiculo} /> : <biblequote  escritura={escritura} versiculo={versiculo} />
        }
        <button 
        disable={isLoading}
        className="btn btn-primary" 
        onClick={()=>increment()}>
          Next Biblical verse
        </button>

        </>
      )


}
