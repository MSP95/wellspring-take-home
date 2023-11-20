import { ReactNode } from "react";
import "./styles.css";

export default function Card(props: {
  className: string;
  title: string;
  children?: ReactNode;
  rightContent?: ReactNode;
}) {
  return (
    <div className={`card ${props.className}`}>
      <header>
        <h2>{props.title}</h2>
        <div>{props.rightContent ? props.rightContent : null}</div>
      </header>
      <div className="divider" />
      {props.children}
    </div>
  );
}
