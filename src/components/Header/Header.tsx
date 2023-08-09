
import styles from "./Header.module.css"
import Logo from "../../../public/Logo.svg"

export const Header = () =>{
return(
        <header className={styles.headerContainer}>
            <img src={Logo} alt="Logotipo ToDoList RocketSeat"/>
        </header>
)
}