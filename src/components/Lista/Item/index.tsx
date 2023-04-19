import React from "react";

import style from '../Lista.module.scss';
import Tarefa from "../../../types/tarefa";

export default function Item(item: Tarefa){
    console.log(item);
    return (
        <li className={style.item}>
            <h3>
                {item.tarefa}
            </h3>
            <span>
                {item.tempo}
            </span>
        </li>
    );
}