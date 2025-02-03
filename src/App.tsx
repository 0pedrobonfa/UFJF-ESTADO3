
import { useState } from 'react';
import './App.css'
import Pacote, { PacoteType } from "./Pacote.tsx";
import { PacoteChaveType } from './Pacote.tsx';

function App() {

  const [pacotes, setPacotes] = useState <Array<PacoteType>> 
  ([
    {
      id: "p001",
      largura:30,
      altura:30,
      profundidade:30,
      peso:200,
    },
    {
      id: "p002",
      largura:30,
      altura:30,
      profundidade:30,
      peso:200,
    },
    {
      id: "p003",
      largura:30,
      altura:30,
      profundidade:30,
      peso:200,
    },
  ]);

  function onEditarPacote(pacote: PacoteType, chave: PacoteChaveType, valor: number) : void
  {
    const novoPacote = {...pacote};
    novoPacote[chave] = valor;
    setPacotes((pacotes.map(p=>p!==pacote?p:novoPacote)));
  }

  function excluirPacote(pacote:PacoteType)
  {
    setPacotes(pacotes.filter(p=>p.id!==pacote.id));
  }

  return (
    <>
    {pacotes.map(p=>
      <Pacote key={p.id} pacote={p} onEditarPacote={onEditarPacote} onExcluirPacote={excluirPacote}/>
    )}
    </>
  )
}

export default App
