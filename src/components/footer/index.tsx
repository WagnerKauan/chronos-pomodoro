import style from './style.module.css';

export function Footer() {
  return (
    <footer className={style.footer}>
      <a href="#">Entenda como funciona a técnica pomodoro 🍓</a>
      <span>Chronos Pomodoro &copy; {new Date().getFullYear()}</span>
    </footer>
  );
}
