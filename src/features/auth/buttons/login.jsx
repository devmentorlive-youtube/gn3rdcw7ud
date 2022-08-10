import Button from "./";

export default function LoginButton({
  busy,
  setBusy = () => {},
  setUser = () => {},
}) {
  return (
    <PrimaryButton
      busy={busy}
      onClick={() => {
        setBusy(true);
        setTimeout(() => {
          setUser({
            name: "Mark",
            email: "me@you.com",
            lastLoggedInAt: new Date(),
          });
          setBusy(false);
        }, 3000);
      }}>
      <div className="flex gap-2 items-center">
        <div>
          <UserIcon className="h-4 w-4" />
        </div>
        <div>Log in</div>
      </div>
    </PrimaryButton>
  );
}
