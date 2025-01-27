import { useState } from "react"
import "./Pacote.css"

export default function Pacote()
{
    const [largura, setLargura] = useState(5);
    const [altura, setAltura] = useState(5);
    const [peso, setPeso] = useState(5);
    const [profundidade, setProfundidade] = useState(5);


    return <dl className="pacote">
        <dt>Largura (cm)</dt>
        <dd>{<input type="number" value={largura} min="5" step={"1"} onChange={(evento)=>{
            setLargura(evento.target.valueAsNumber)
        }}/>}</dd>
        <dt>Altura (cm)</dt>
        <dd>{<input type="number" value={altura} min="5" step={"1"} onChange={(evento)=>{
            setAltura(evento.target.valueAsNumber)
        }}/>}</dd>
        <dt>Profundidade (cm)</dt>
        <dd>{<input type="number" value={profundidade} min="5" step={"1"} onChange={(evento)=>{
            setProfundidade(evento.target.valueAsNumber)
        }}/>}</dd>
        <dt>Peso (g)</dt>
        <dd>{<input type="number" value={peso} min="5" step={"1"} onChange={(evento)=>{
            setPeso(evento.target.valueAsNumber)
        }}/>}</dd>
        <dt>Custo</dt>
        <dd>{(largura*0.50).toLocaleString("pt-BR", {style:"currency", currency:"BRL"})}</dd>
    </dl>
}