import { Trash } from "phosphor-react"
import styles from "./TaskItem.module.css"

import{TaskType} from "../../types/Task"

interface TaskItemProps {
    task: TaskType;
}

export const TaskItem: React.FC<TaskItemProps> = ({task}) => {
    return (
        <div className={styles.taskItem}>
            <input type="checkbox"></input>
            <p>{task.content}
            </p>

            <button>
                <Trash size={24} />
            </button>
        </div>
    )
}