
export const Vers = ({escritura,versiculo}) => {
  return (
    <blockquote className= "blockquote text-end">
    <p className="mb-1"> {escritura} </p>
    <footer className="blockquote-footer"> {versiculo} </footer>
  </blockquote>
  )
}
