import { PlusCircle } from "phosphor-react"
import styles from "./AddTask.module.css"

export const AddTask = () =>{
    return (
        <form className={styles.addTask}>
            <input type="text" placeholder="Adicione uma nova tarefa" />
            <button type="submit">
                Criar
                <PlusCircle size={16} weight="bold" />
            </button>
        </form>
    )
}