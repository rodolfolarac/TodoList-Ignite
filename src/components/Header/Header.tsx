import { AddTask } from "../AddTask/AddTask"
import styles from "./Header.module.css"

export const Header = () =>{
return(
    <>
        <header className={styles.headerContainer}>
            <img src="../../../public/Logo.svg" alt="Logotipo ToDoList RocketSeat"/>
        </header>

        <section className={styles.contentTask}>
            <AddTask />
        </section>
    </>
)
}