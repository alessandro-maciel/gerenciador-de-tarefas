import React from "react";
import style from './Item.module.scss';
import Tarefa from "../../../types/tarefa";

interface Props extends Tarefa {
    selecionaTarefa: (tarefaSelecionada: Tarefa) => void;
}

export default function Item(item: Props){
    return (
        <li className={`
            ${style.item} 
            ${item.selecionado ? style.itemSelecionado : ''}  
            ${item.completado ? style.itemCompletado : ''}`
        } onClick={() => !item.completado && item.selecionaTarefa(item)}>
            <h3>
                {item.tarefa}
            </h3>
            <span>
                {item.tempo}
            </span>
            {item.completado && <span className={style.concluido} aria-label="Tarefa Completada"></span>}
        </li>
    );
}