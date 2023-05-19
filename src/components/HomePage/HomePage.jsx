import { Link } from "react-router-dom";
import css from './HomePage.module.css';
import homeimage from './../../images/homepage.png'

export const HomePage = () => {
    return (
        <div className={css.homepage}>
            <p className={css.homepage_text}>Let{'`'}s find <br/> some friends</p>
            <div className={css.homepage_container}>
                <img src={homeimage} alt="homepage" className={css.homepage_container_pic}></img>
                <button className={css.homepage_container_button}>
                    <Link to="/tweets" className={css.homepage_container_link}>Lets Go</Link>
                </button>
            </div>
        </div>
    );
};