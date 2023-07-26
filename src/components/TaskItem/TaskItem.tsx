import { Trash } from "phosphor-react"
import styles from "./TaskItem.module.css"

export const TaskItem = () => {
    return (
        <div className={styles.taskItem}>
            <input type="radio" value="false"></input>
            <p>Integer urna interdum massa libero auctor neque turpis 
                turpis semper. Duis vel sed fames integer.
            </p>

            <button>
                <Trash size={24} />
            </button>
        </div>
    )
}