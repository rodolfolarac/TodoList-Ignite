import { TaskItem } from "../TaskItem/TaskItem"
import styles from "./ContentTasks.module.css"

export const ContentTasks = () => {
    return (
        <section className={styles.contentTasks}>
            <TaskItem />
            <TaskItem />
            <TaskItem />
            <TaskItem />
        </section>
    )
}