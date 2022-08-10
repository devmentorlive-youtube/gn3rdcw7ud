import { useState } from "react";

import PrimaryButton from "@/ui/button/primary";
import LinkButton from "@/ui/button/link";
import OutlineButton from "@/ui/button/outline";

export default function Homepage() {
  const [text, setText] = useState("");

  return (
    <div className="mt-16 container mx-auto">
      <div className="flex gap-8">
        <PrimaryButton>Ok</PrimaryButton>
        <LinkButton>Not ok</LinkButton>
        <OutlineButton>Hell no</OutlineButton>
        <IntegerField value={text} onChange={setText} />
      </div>
    </div>
  );
}

function TextField({ value, onChange = () => {} }) {
  return (
    <input
      type="text"
      className="p-2 text-gray-800"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

function IntegerField({ value, onChange = () => {} }) {
  function onlyInteger(str) {
    return str.replace(/[^0-9]/g, "");
  }

  return (
    <TextField
      value={value}
      onChange={(value) => onChange(onlyInteger(value))}
    />
  );
}
