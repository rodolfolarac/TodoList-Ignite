import { SetStateAction } from "react"

import { Trash } from "phosphor-react"
import styles from "./TaskItem.module.css"

import{TaskType, listTaskType} from "../../types/Task"

interface TaskItemProps {
    task: TaskType;
    listTask: TaskType[];
    setListTask: React.Dispatch<SetStateAction<listTaskType>>;

}

export const TaskItem: React.FC<TaskItemProps> = ({task, listTask, setListTask }) => {

    const handleRemoveTask = () => {
        setListTask(listTask.filter( (item: TaskType)   => item.content != task.content ))
    }
    const handleCheckTask = () =>{
        let output = listTask.map(item => {
            if(item.content === task.content){
                task.isFinished = !task.isFinished
                return item
            }else {
                return item
            }
        })
        setListTask(output)
    }

    return (
        <div className={`${styles.taskItem} ${ task.isFinished ? styles.finished : ""}` }>
            <input type="checkbox"
                    checked={task.isFinished}
                    onChange={handleCheckTask }
            ></input>
            <p>{task.content}
            </p>

            <button onClick={handleRemoveTask}>
                <Trash size={24} />
            </button>
        </div>
    )
}