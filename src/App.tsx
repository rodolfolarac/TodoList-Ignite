import styles from "./App.module.css"
import { Header } from "./components/Header/Header"
import { AddTask } from "./components/AddTask/AddTask"
import { ProgressBar } from "./components/ProgressBar/ProgressBar"
import { ContentTasks } from "./components/ContentTasks/ContentTasks"
export function App() {

  return (
    
      <div className={styles.mainContainer}>
        <Header />
        <AddTask />
        <ProgressBar />
        <ContentTasks />
      </div>
    
  )
}