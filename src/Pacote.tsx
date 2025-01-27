import { useState } from "react";
import "./Pacote.css";

export default function Pacote() {
  const [largura, setLargura] = useState(5);
  const [altura, setAltura] = useState(5);
  const [peso, setPeso] = useState(200);
  const [profundidade, setProfundidade] = useState(5);

  function onChange(e) {
    if (e.target.name === "largura") {
      setLargura(e.target.valueAsNumber);
    } else if (e.target.name === "altura") {
      setAltura(e.target.valueAsNumber);
    } else if (e.target.name === "profundidade") {
      setProfundidade(e.target.valueAsNumber);
    } else if (e.target.name === "peso") {
      setPeso(e.target.valueAsNumber);
    }
  }
  return (
    <dl className="pacote">
      <dt>Largura (cm)</dt>
      <dd>
        {
          <input
            type="number"
            value={largura}
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
            value={altura}
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
            value={profundidade}
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
            value={peso}
            min="5"
            step={"1"}
            name="peso"
            onChange={onChange}
          />
        }
      </dd>
      <dt>Custo</dt>
      <dd>
        {(largura * altura * profundidade * peso * 0.0005).toLocaleString(
          "pt-BR",
          { style: "currency", currency: "BRL" }
        )}
      </dd>
    </dl>
  );
}
