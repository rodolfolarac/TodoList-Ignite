import styles from "./App.module.css"
import { Header } from "./components/Header/Header"
export function App() {

  return (
    <div className={styles.mainContainer}>
      <Header />
    </div>
  )
}