import React from "react";

import style from '../Lista.module.scss';

interface Props {
    tarefa: string,
    tempo: string,
}

export default function Item(props: Props){
    return (
        <li className={style.item}>
            <h3>
                {props.tarefa}
            </h3>
            <span>
                {props.tempo}
            </span>
        </li>
    );
}