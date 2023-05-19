import { Link } from 'react-router-dom';
import css from './NotFoundPage.module.css';

const NotFoundPage = () => {
  return (
    <section className={css.pageBox}>
      <div className={css.wrapper}>
        <h1 className={`${css.sectionTitle}`}>404</h1>
      </div>

      <div className={css.infoInner}>
        <h2 className={css.infoTitle}>Look like youre lost</h2>
        <p className={css.infoMeta}>
          the page you are looking for not avaible!
        </p>
        <Link to="/" className={css.returnButton}>
          Go to Home
        </Link>
      </div>
    </section>
  );
};

export default NotFoundPage;