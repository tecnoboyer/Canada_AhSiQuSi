import { useEffect, useState } from "react"


export const useFetch = ( url ) => {



    const [state, setState] = useState({
        data:null,
        isLoading:false,
        hasError:null
    })

    const getFetch = async ()=> {
        setState({
            ...state,
            isLoading: true,
            hasError:null
        })
        const myHeaders = new Headers();
        myHeaders.append("api-key", "27ca4c939ef6d163ebdc9dc65ee373b8");
        const requestOptions = {
          method: 'GET',
          headers: myHeaders
        };


        const resp = await fetch(url, requestOptions) ; 
        const data = await resp.json();

        const escritura= data.data.content;
        const versiculo= data.data.chapterId;
        
        

        const escritura_pre1=escritura.split("</span>")
        const escritura_pre2=escritura_pre1[1].split("</p>")
        

        const verTrimed =JSON.stringify(escritura_pre2[0]);

        console.log(verTrimed)


        

        // console.dir(escritura_pre1[0]);
        // console.dir(escritura_pre2[0])
  
        setState({
            escritura:verTrimed,
            versiculo:versiculo,
            isLoading:false,
            hasError:null
        });
    }

    useEffect(() => {
        getFetch()

    }, [url])
    
  return {
    escritura: state.escritura ,
    versiculo: state.versiculo ,
    // verse: state.verse,
    isLoading: state.isLoading ,
    hasError: state.hasError ,
} ;

}
