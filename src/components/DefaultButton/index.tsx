import style from './style.module.css';

type DefaultButtonProps = {
  icon: React.ReactNode;
  color?: 'green' | 'red';
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function DefaultButton({ icon, color = 'green', ...rest }: DefaultButtonProps) {
  return (
    <>
      <button className={`${style.button} ${style[color]}`} {...rest}>
        {icon}
      </button>
    </>
  );
}
