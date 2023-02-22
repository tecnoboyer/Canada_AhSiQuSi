
import { userCounter } from '../hooks/userCounter'
import {Small} from '../06-memo/Small'
import { useState } from 'react'

export const Memorize = () => {

   const{counter,increment } = userCounter()

   const [show, setShow] = useState(true)

  return (
    <>
    <h1> Counter : <Small value={counter} /> </h1>
   
    <hr />
    <button
        className='btn btn-primary'
        onClick={()=> increment () } 
    >
        +1

    </button>


    <button 
    className='btn btn-outline-primary'
    onClick={()=> setShow(!show)}
    >
        Show/Hide {JSON.stringify(show)}
    </button>
    </>
  )
}
