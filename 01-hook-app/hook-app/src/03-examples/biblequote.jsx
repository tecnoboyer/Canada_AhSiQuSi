

export const Biblequote = ( {escrit,versiculo} ) => {
  return (
    <blockquote 
    className="blockquote text-end"
    style={{display:'flex'}}
    >
      <p className="mb-1"> {escrit} </p>     
      <footer className="blockquote-footer"> {versiculo} </footer>  
    </blockquote>
  )
}
