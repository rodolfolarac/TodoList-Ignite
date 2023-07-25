import styles from "./Header.module.css"

export const Header = () =>{
return(
    <header className={styles.headerContainer}>
        <img src="../../../public/Logo.svg" alt="Logotipo ToDoList RocketSeat"/>
    </header>
)
}