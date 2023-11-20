import "./styles.css";

export type PillType = "primary" | "success" | "danger" | "warning" | "info";

export default function Pill({
  label,
  onClick,
  className = "",
  size = "md",
  type = "primary",
}: {
  label: string;
  onClick?: () => void;
  className?: string;
  size?: "sm" | "md";
  type: PillType;
}) {
  return (
    <div
      onClick={() => onClick?.()}
      className={`pill ${className} ${type} ${size}`}
    >
      {label}
    </div>
  );
}
