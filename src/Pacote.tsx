import { useState } from "react"
import "./Pacote.css"

export default function Pacote()
{
    const [largura, setLargura] = useState(5);

    return <dl className="pacote">
        <dt>Largura (cm)</dt>
        <dd>{<input type="number" value={largura} min="5" step={"1"} onChange={(evento)=>{
            setLargura(evento.target.valueAsNumber)
        }}/>}</dd>
        <dt>Altura (cm)</dt>
        <dd>10</dd>
        <dt>Profundidade (cm)</dt>
        <dd>10</dd>
        <dt>Peso (g)</dt>
        <dd>10</dd>
        <dt>Custo</dt>
        <dd>{(largura*0.50).toLocaleString("pt-BR", {style:"currency", currency:"BRL"})}</dd>
    </dl>
}