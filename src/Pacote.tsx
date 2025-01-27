import { useState } from "react";
import "./Pacote.css";

export default function Pacote() {
    const[pacote, setPacote]= useState({
        altura:7,
        largura:7,
        profundidade:7,
        peso:7
    });


//   const [largura, setLargura] = useState(5);
//   const [altura, setAltura] = useState(5);
//   const [peso, setPeso] = useState(200);
//   const [profundidade, setProfundidade] = useState(5);

  function onChange(e:React.ChangeEvent<HTMLInputElement>) {
    if (e.target.name === "largura") {
        const novoPacote = structuredClone(pacote);
        novoPacote.largura = e.target.valueAsNumber;
        setPacote(novoPacote);
    } else if (e.target.name === "altura") {
        const novoPacote = structuredClone(pacote);
        novoPacote.altura = e.target.valueAsNumber;
        setPacote(novoPacote);
    } else if (e.target.name === "profundidade") {
        const novoPacote = structuredClone(pacote);
        novoPacote.profundidade = e.target.valueAsNumber;
        setPacote(novoPacote);
    } else if (e.target.name === "peso") {
        const novoPacote = structuredClone(pacote);
        novoPacote.peso = e.target.valueAsNumber;
        setPacote(novoPacote);
    }
  }
  return (
    <dl className="pacote">
      <dt>Largura (cm)</dt>
      <dd>
        {
          <input
            type="number"
            value={pacote.largura}
            min="5"
            step={"1"}
            name="largura"
            onChange={onChange}
          />
        }
      </dd>
      <dt>Altura (cm)</dt>
      <dd>
        {
          <input
            type="number"
            value={pacote.altura}
            min="5"
            step={"1"}
            name="altura"
            onChange={onChange}
          />
        }
      </dd>
      <dt>Profundidade (cm)</dt>
      <dd>
        {
          <input
            type="number"
            value={pacote.profundidade}
            min="5"
            step={"1"}
            name="profundidade"
            onChange={onChange}
          />
        }
      </dd>
      <dt>Peso (g)</dt>
      <dd>
        {
          <input
            type="number"
            value={pacote.peso}
            min="5"
            step={"1"}
            name="peso"
            onChange={onChange}
          />
        }
      </dd>
      <dt>Custo</dt>
      <dd>
        {(pacote.largura * pacote.altura * pacote.profundidade * pacote.peso * 0.0005).toLocaleString(
          "pt-BR",
          { style: "currency", currency: "BRL" }
        )}
      </dd>
    </dl>
  );
}
