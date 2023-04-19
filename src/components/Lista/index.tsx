import style from './Lista.module.scss';
import Item from "./Item";
import Tarefa from '../../types/tarefa';

export default function Lista({ tarefas }: { tarefas: Tarefa[] }){
    return (
        <aside className={style.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
                { tarefas.map((tarefa, index) => (
                   <Item key={index} {...tarefa} />
                ))}
            </ul>
        </aside>
    );
}