import { TaskItem } from "../TaskItem/TaskItem"
import styles from "./ContentTasks.module.css"
import React from "react"
// import {v4 as uuidv4} from "uuid";

import { TaskType, listTaskType } from "../../types/Task"

interface ContentTaskProps {
    listTask: listTaskType;
    setListTask: React.Dispatch<React.SetStateAction<listTaskType>>;
}

export const ContentTasks: React.FC<ContentTaskProps> = ({listTask, setListTask}) => {
    console.log(listTask)
    return (
        <section className={styles.contentTasks}>
            {
                listTask.map((task: TaskType) => (
                    <TaskItem task = {task} listTask={listTask} setListTask={setListTask} />
                ))
            }
        </section>
    )
}
