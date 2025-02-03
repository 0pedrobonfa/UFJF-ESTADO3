import "./Pacote.css";

export type PacoteChaveType = "altura" | "largura" | "profundidade" | "peso";

export type PacoteType = {
    id: string;
    altura: number;
    largura: number;
    profundidade: number;
    peso: number;
};

export type PacotePropsType = {
    pacote: PacoteType;
    onEditarPacote: (pacote: PacoteType, chave: PacoteChaveType, valor: number) => void
    onExcluirPacote: (pacote: PacoteType) => void;
}

export default function Pacote({ pacote, onEditarPacote, onExcluirPacote}: PacotePropsType) {

    // FUNÇÃO QUE ALTERA VALOR DOS ELEMENTOS
    function onChange(e: React.ChangeEvent<HTMLInputElement>) {
        const chave = e.target.name as PacoteChaveType;
        const valor = e.target.valueAsNumber;
        onEditarPacote(pacote, chave, valor);
            
    }

    return <dl className="pacote">

        {/* LARGURA */}
        <dt>Largura (cm)</dt>
        <dd> 
        <input type="number" value={pacote.largura} min="5" step="1" name="largura" onChange={onChange}/></dd>

        {/* ALTURA */}
        <dt>Altura (cm)</dt>
        <dd> 
        <input type="number" value={pacote.altura} min="5" step="1" name="altura" onChange={onChange}/></dd>

        {/* PROFUNDIDADE */}
        <dt>Profundidade (cm)</dt>
        <dd> 
        <input type="number" value={pacote.profundidade} min="5" step="1" name="profundidade" onChange={onChange}/></dd>

        {/* PESO */}
        <dt>Peso (g)</dt>
        <dd> 
        <input type="number" value={pacote.peso} min="200" step="1" name="peso" onChange={onChange}/></dd>

        {/* CUSTO */}
        <dt>Custo</dt>
        <dd>{(pacote.largura*pacote.altura*pacote.profundidade*pacote.peso * 0.00005)
        .toLocaleString("pt-BR",{
            style:"currency",currency:"BRL"
        })}</dd>

        <dt>Ações</dt>
        <dd><button onClick={()=>{onExcluirPacote(pacote)}}>Excluir</button></dd>

    </dl>;
}