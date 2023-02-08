import { useLayoutEffect, useRef, useState } from "react"


export const Biblequote = ( {escrit,versiculo} ) => {
  const pRef= useRef();
  const [sizeBox, setSizeBox] = useState({width:0,height:0});


  useLayoutEffect(() => {
    console.log('Al final del mounting : ');
    const {height,width} = pRef.current.getBoundingClientRect();
    setSizeBox({height,width})

  }, [])


  
  return (
    <>
    <blockquote 
    className="blockquote text-end"
    style={{display:'flex'}}
    >
      <p ref ={pRef} className="mb-1"> {escrit} </p>     
      <footer className="blockquote-footer"> {versiculo} </footer>  
    </blockquote>

    <code> {JSON.stringify(sizeBox)} </code>
    </>

  )
}
