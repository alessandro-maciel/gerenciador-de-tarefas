import React from "react";
import style from './Botao.module.scss'

interface Props {
    tipo?: "button" | "submit" | "reset" | undefined,
    children: React.ReactNode
}

export default function Botao(props: Props){
    const type = props.tipo ?? 'button';

    return (
        <button type={type} className={style.botao}>
            {props.children}
        </button>
    );
}