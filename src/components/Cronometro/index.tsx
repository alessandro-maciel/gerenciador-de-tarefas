import React, { useEffect, useState } from "react";
import Botao from "../Botao";
import style from './Cronometro.module.scss'
import Relogio from "./Relogio";
import tempoParaSegundo from "../../common/utils/date";
import Tarefa from "../../types/tarefa";

interface Props {
    selecionado: Tarefa | undefined,
    finalizarTarefa: () => void,
}

export default function Cronometro(props: Props){
    const [tempo, setTempo] = useState<number>();

    useEffect(() => {
        if (props.selecionado?.tempo) {
            setTempo(tempoParaSegundo(props.selecionado?.tempo))
        }
    },[ props.selecionado ])

    function regressiva(contador: number = 0){
        setTimeout(() => {
            if (contador > 0) {
                setTempo(contador - 1);

                return regressiva(contador - 1);
            }
            
            props.finalizarTarefa();
        }, 1000);
    }

    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
            <div className={style.relogioWrapper}>
                <Relogio tempo={tempo}/>
            </div>
            <Botao onClick={() => regressiva(tempo)}>Começar</Botao>
        </div>
    );
}