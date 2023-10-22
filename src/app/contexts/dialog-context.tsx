"use client";

import { ReactNode, createContext, useState } from "react";

interface DialogContextType {
  open: boolean;
  toggle: () => void;
}

interface DialogProviderProps {
  children: ReactNode;
}

export const DialogContext = createContext({} as DialogContextType);

export function DialogProvider({ children }: DialogProviderProps) {
  const [open, setOpen] = useState(false);

  function toggle() {
    setOpen((state) => !state);
  }

  return (
    <DialogContext.Provider value={{ open, toggle }}>
      {children}
    </DialogContext.Provider>
  );
}
