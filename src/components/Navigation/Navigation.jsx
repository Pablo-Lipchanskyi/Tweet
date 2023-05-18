import { Link } from 'react-router-dom';
import css from './Navigation.module.css';

export const Navigation = () => {
  return (
    <nav className={css.navigation}>
      <ul className={css.nav_links}>
        <li>
          <Link to="/" className={css.nav_link}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/tweets" className={css.nav_link}>
            Tweets
          </Link>
        </li>
      </ul>
    </nav>
  );
};
