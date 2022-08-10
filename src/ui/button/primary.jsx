import Button from "./";

export default function PrimaryButton({
  children,
  disabled = false,
  busy = false,
  ...rest
}) {
  const defaultClassNames = "border-blue-600 bg-blue-500";
  const disabledClassNames = "bg-gray-300 text-gray-500 cursor-not-allowed";
  const busyClassNames =
    "border-blue-700 bg-blue-600 opacity-70 cursor-not-allowed";

  return (
    <Button
      className={`${
        busy
          ? busyClassNames
          : disabled
          ? disabledClassNames
          : defaultClassNames
      } py-2 px-8 border  rounded-lg`}
      disabled={disabled}
      {...rest}>
      {children}
    </Button>
  );
}
