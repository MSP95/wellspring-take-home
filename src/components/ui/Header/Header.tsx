import "./styles.css";

export default function Header(props: {
  className: string;
  children: React.ReactNode;
}) {
  return (
    <header className={`header ${props.className}`}>
      <h1>{props.children}</h1>
    </header>
  );
}
