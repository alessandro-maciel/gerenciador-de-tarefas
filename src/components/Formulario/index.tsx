import React, { SyntheticEvent, useState } from "react";
import Botao from "../Botao";
import style from './Formulario.module.scss'
import Tarefa from "../../types/tarefa";
import { v4 as uuidV4 } from 'uuid';

export default function Formulario({setTarefas }: { setTarefas: React.Dispatch<React.SetStateAction<Tarefa[]>>}){
    const [tarefa, setTarefa] = useState('');
    const [tempo, setTempo] = useState('00:00:00');

    const adicionarTarefa = (event: SyntheticEvent) => {  
        event.preventDefault();
        setTarefas(tarefas => [...tarefas, {
            tarefa: tarefa, 
            tempo: tempo,
            selecionado: false,
            completado: false, 
            id: uuidV4()
        }]);

        setTarefa('');
        setTempo('00:00:00');
    }

    return (
        <form className={style.novaTarefa} onSubmit={adicionarTarefa}>
            <div className={style.inputContainer}>
                <label htmlFor="tarefa">Adicione um novo estudo</label>
                <input type="text" name="tarefa" id="tarefa" placeholder="O que você quer estudar?" value={tarefa} onChange={event => setTarefa(event.target.value)} required />
            </div>
            <div className={style.inputContainer}>
                <label htmlFor="tempo">Tempo</label>
                <input type="time" step='1' name="tempo" id="tempo" min='00:00:00' value={tempo} onChange={event => setTempo(event.target.value)} max='01:30:00' required/>
            </div>
            <Botao tipo="submit" >Adicionar</Botao>
        </form>
    );
}