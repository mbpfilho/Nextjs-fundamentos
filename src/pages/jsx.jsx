import Layout from "../components/Layout"

export default function Jsx(){
  const a=2
  const b=3
  const titulo=<h1>JSX é um conceito central</h1>
  function subtitulo(){
    return <h3>{"muito legal".toUpperCase()}</h3>
  }
  return (
    <Layout titulo="Entendendo o JSX">
      {titulo}
      <h2>{a*b}</h2>
      {subtitulo()}
      <p>{JSON.stringify({nome: "Joäo", idade:30})}</p>
    </Layout>
    
  )
}