import { memo } from "react"

export const Small =  memo(({value}) => {

    console.log("ME volvi a dibujar")
  return (
    <small>  {value} </small>
  )
}) 