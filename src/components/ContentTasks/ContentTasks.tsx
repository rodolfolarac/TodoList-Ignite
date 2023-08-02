import { TaskItem } from "../TaskItem/TaskItem"
import styles from "./ContentTasks.module.css"
import React from "react"

import { TaskType, listTaskType } from "../../types/Task"

interface ContentTaskProps {
    listTask: listTaskType;
}

export const ContentTasks: React.FC<ContentTaskProps> = ({listTask}) => {
    console.log(listTask)
    return (
        <section className={styles.contentTasks}>
            {
                listTask.map((task: TaskType, index: number) => (
                    <TaskItem key={index} task = {task} />
                ))
            }
        </section>
    )
}
