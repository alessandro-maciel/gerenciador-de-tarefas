import React from "react";
import style from './Botao.module.scss'

interface Props {
    texto?: string,
    children: React.ReactNode
}

export default function Botao(props: Props){
    return (
        <button className={style.botao}>
            {props.children}
        </button>
    );
}