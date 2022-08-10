import Button from "./";

export default function LinkButton({ children, ...rest }) {
  return (
    <Button
      className="py-2 px-8 border border-transparent bg-transparent"
      {...rest}>
      {children}
    </Button>
  );
}
