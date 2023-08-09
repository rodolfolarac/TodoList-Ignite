import styles from "./ProgressBar.module.css"
import { listTaskType } from "../../types/Task"
import { useEffect, useState } from "react";

interface ProgressBarProps{
    listTask: listTaskType;
}


export const ProgressBar: React.FC<ProgressBarProps> = ({ listTask } ) =>{
    const [totalTask, setTotalTask] = useState<number>(listTask.length)
    const [ finishedTask, setFinishedTask] = useState<number>(0)

    useEffect(()=>{
        const output = listTask.filter( item => item.isFinished )
        setFinishedTask(output.length)
    }, [listTask])
    
    return(
        <article className={styles.progressBar}>
            <div className={styles.progressTasks}>
                <span>Tarefas criadas</span>
                <span>{totalTask}</span>
            </div>

            <div className={styles.finishedTasks}>
                <span>Concluidas</span>
                <span>{finishedTask}</span>
            </div>
        </article>
    )
}