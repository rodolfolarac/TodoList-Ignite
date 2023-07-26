import styles from "./App.module.css"
import { Header } from "./components/Header/Header"
import { AddTask } from "./components/AddTask/AddTask"
import { ProgressBar } from "./components/ProgressBar/ProgressBar"
export function App() {

  return (
    
      <div className={styles.mainContainer}>
        <Header />
        <AddTask />
        <ProgressBar />
      </div>
    
  )
}