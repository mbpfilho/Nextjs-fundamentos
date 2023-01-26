import Cabecalho from "../components/Cabecalho"
import Layout from "../components/Layout"

export default function Exemplo(){
  return(
    <Layout titulo="Usando componentes">    
      <Cabecalho titulo="Fundamentos do Next.js & React"></Cabecalho>
      <Cabecalho titulo="Aprenda Next na prática"></Cabecalho>
    </Layout>
  )
}