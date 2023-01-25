export default function Jsx(){
  const a=2
  const b=3
  const titulo=<h1>JSX é um conceito central</h1>
  function subtitulo(){
    return <h3>{"muito legal".toUpperCase()}</h3>
  }
  return (
    <div>
      {titulo}
      <h2>{a*b}</h2>
      {subtitulo()}
    </div>
  )
}