import React from "react";
import style from './Botao.module.scss'

interface Props {
    tipo?: "button" | "submit" | "reset" | undefined,
    onClick?: () => void,
    children: React.ReactNode
}

export default function Botao(props: Props){
    const type = props.tipo ?? 'button';

    return (
        <button type={type} className={style.botao}
            onClick={props.onClick}
        >
            {props.children}
        </button>
    );
}