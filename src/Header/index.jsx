import Styles from './Styles.module.css';

const Header = () => {

    return (
        <>
            <header className={Styles.header}>
                <h1 className={Styles.title}>
                    Calculadora de IMC
                </h1>
            </header>
        </>
    )
}

export default Header;