import styles from "./App.module.css"
import { Header } from "./components/Header/Header"
import { AddTask } from "./components/AddTask/AddTask"
import { ProgressBar } from "./components/ProgressBar/ProgressBar"
import { ContentTasks } from "./components/ContentTasks/ContentTasks"
import { useState } from "react"

import { TaskType, listTaskType } from "../src/types/Task"



export function App() {

  const [listTask, setListTask  ] = useState<listTaskType>([
    {"content": "teste 123", "isFinished": false},
    {"content": "teste 321111111111", "isFinished": false},
  ])
  

  return (
      <div className={styles.mainContainer}>
        <Header />
        <AddTask listTask = { listTask } setListTask = { setListTask }/>
        
        <ProgressBar />
        <ContentTasks listTask = { listTask } setListTask = { setListTask }/>
      </div>
    
  )
}