import React, { useState } from 'react';
import Formulario from '../components/Formulario';
import Lista from '../components/Lista';
import style from './App.module.scss'
import Cronometro from '../components/Cronometro';
import Tarefa from '../types/tarefa';

function App() {
  const [tarefas, setTarefas] = useState<Tarefa[] | []>([]);
  const [selecionado, setSelecionado] = useState<Tarefa>();

  function selecionaTarefa(tarefaSelecionada: Tarefa){
    setSelecionado(tarefaSelecionada);

    setTarefas(tarefas => tarefas.map((tarefa) => ({
      ...tarefa,
      selecionado: tarefa.id === tarefaSelecionada.id ? true : false,
    })));
  }

  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas} />
      <Lista tarefas={tarefas} selecionaTarefa={selecionaTarefa} />
      <Cronometro />
    </div>
  );
}

export default App;
