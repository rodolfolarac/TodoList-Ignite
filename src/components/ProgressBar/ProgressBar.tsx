import styles from "./ProgressBar.module.css"

export const ProgressBar = () =>{
    return(
        <article className={styles.progressBar}>
            <div className={styles.progressTasks}>
                <span>Tarefas criadas</span>
                <span>0</span>
            </div>

            <div className={styles.finishedTasks}>
                <span>Concluidas</span>
                <span>0</span>
            </div>
        </article>
    )
}