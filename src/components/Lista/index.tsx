import style from './Lista.module.scss';
import Item from "./Item";
import Tarefa from '../../types/tarefa';

interface Props {
    tarefas: Tarefa[],
    selecionaTarefa: (tarefaSelecionada: Tarefa) => void;
}

export default function Lista(props: Props){
    return (
        <aside className={style.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
                { props.tarefas.map((tarefa, index) => (
                   <Item key={index} {...tarefa} selecionaTarefa={props.selecionaTarefa} />
                ))}
            </ul>
        </aside>
    );
}