import css from './Footer.module.css';

export const Footer = () => {
  return (
      <footer className={css.footer}>
      <p className={css.footer_text}>
        2023.Created by Pavlo Lipchanskyi for GoIT tech test
      </p>
    </footer>
  );
};