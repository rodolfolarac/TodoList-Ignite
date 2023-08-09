import { PlusCircle } from "phosphor-react"
import styles from "./AddTask.module.css"
import { listTaskType, TaskType }  from "../../types/Task"
// import {v4 as uuidv4 } from "uuid"
import { SetStateAction } from "react"

interface AddTaskProps {
    setListTask: React.Dispatch<React.SetStateAction<listTaskType>>;
    listTask: listTaskType;
}


export const AddTask: React.FC<AddTaskProps> = ({setListTask, listTask}) =>{

    const handleAddTask = () =>{
        event?.preventDefault()
        let valueTask = document.querySelector("input")
        if(valueTask != null && valueTask.value != ""){
            const newTask = {
                content: valueTask.value,
                isFinished: false
            }
            setListTask([...listTask, newTask])

            console.log(listTask)
            valueTask.value = "";
        }
        

    }
    return (
        <section className={styles.contentTask}>
            <form className={styles.addTask}>
                <input type="text" placeholder="Adicione uma nova tarefa" />
                <button type="submit" onClick={handleAddTask}>
                    Criar
                    <PlusCircle size={16} weight="bold" />
                </button>
            </form>
        </section>
    )
}