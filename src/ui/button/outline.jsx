import Button from "./";

export default function OutlineButton({ children, ...rest }) {
  return (
    <Button className="py-2 px-8 border border-white bg-transparent" {...rest}>
      {children}
    </Button>
  );
}
