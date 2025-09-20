import style from './style.module.css';

type DefaultInputProps = {
  id: string;
  labelText: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export function DefaultInput({ type, id, labelText, ...rest }: DefaultInputProps) {
  return (
    <>
      <label htmlFor={id}>{labelText}</label>
      <input className={style.input} type={type} id={id} {...rest} />
    </>
  );
}
