import { Navigation } from '../Navigation/Navigation';
import css from './Header.module.css'

export const Header = () => {
    return (
        <div className={css.header_div}>
            <header className={css.header_text}>Tweet your friends</header>
            <Navigation/>
        </div>
    );
}