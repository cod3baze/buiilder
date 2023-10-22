"use client";

import { useContext } from "react";
import { DialogContext } from "../contexts/dialog-context";

export function Dialog() {
  const { open, toggle } = useContext(DialogContext);

  return (
    <>
      {open && <div>Toggle Open</div>}

      <button onClick={toggle}>Toggle</button>
    </>
  );
}
