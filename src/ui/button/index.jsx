export default function Button({
  children,
  disabled = false,
  busy = false,
  className,
  onClick = () => {},
  ...rest
}) {
  const defaultClassNames =
    "shadow-md focus:cursor-pointer transition duration-300";

  return (
    <button
      disabled={disabled}
      onClick={(e) => !busy && !disabled && onClick(e)}
      className={`${defaultClassNames} ${className ? className : ""}`}
      {...rest}>
      {children}
    </button>
  );
}
