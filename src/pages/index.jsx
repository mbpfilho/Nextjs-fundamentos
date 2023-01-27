import Navegador from "../components/Navegador"

export default function Inicio(){
  return (
    <div style={{
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      height:"100vh",
      flexWrap:"wrap"
    }}>
      <Navegador texto="Estiloso" destino="/estiloso"></Navegador>
      <Navegador texto="Exemplo" destino="/exemplo"></Navegador>
      <Navegador texto="JSX" destino="/jsx" cor="crimson"></Navegador>
      <Navegador texto="Navegação #1" destino="/navegacao" cor="green"></Navegador>
      <Navegador texto="Navegação #2" destino="/cliente/sp-2/321" cor="orange"></Navegador>
    </div>
  )
}