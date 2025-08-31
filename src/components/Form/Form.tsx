import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  inputs: ReactNode | ReactNode[];
}

export const AppForm = ({ children, inputs }: Props) => {
  return (
    <form method="POST">
      {inputs}
      {children}
    </form>
  )
}
