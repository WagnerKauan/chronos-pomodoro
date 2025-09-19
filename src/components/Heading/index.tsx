import { TimerIcon } from "lucide-react";
import style from "./Heading.module.css";

interface HeadingProps {
  children: React.ReactNode;
}

export function Heading({  children }: HeadingProps) {

  return (
    <h1 className={style.heading}>
      {children}

      <button>
        <TimerIcon />
      </button>
    </h1>
  )
} 