import React, { createContext, useContext, useState, type ReactNode } from "react";

// El context sive para pasar información entre componentes hermanos no padre e hijo 
// ahí es mejor usar  

interface GlobalContextType {
  value: number | null
  setValue: React.Dispatch<React.SetStateAction<number>>
}

const EmptyGlobalState: number = 0
export const GlobalContext = createContext<GlobalContextType>({
  value: null,
  setValue: () => { }
})

interface GlobalProps {
  children: ReactNode;
}

export const GlobalProvider = ({ children }: GlobalProps) => {
  const [value, setValue] = useState<number>(EmptyGlobalState)
  return (
    <GlobalContext.Provider value={{ value, setValue }
    }> {children} </GlobalContext.Provider>
  )
}

export const useGlobalContext = () => {
  const context = useContext(GlobalContext)

  if (!context.value && context.value !== 0) {
    throw new Error("GlobalContext must be used within a GlobalContextProvider")
  }

  return context
}
