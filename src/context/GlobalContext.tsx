import { createContext, type ReactNode } from "react";

interface GlobalContextType {
}

interface GlobalContextProviderProps {
  children: ReactNode;
}

// 3. Crie o Contexto com o tipo correto (ou undefined como valor inicial)
export const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export const GlobalContextProvider = ({ children }: GlobalContextProviderProps) => {
  return (
    <GlobalContext.Provider value={{}}>
      {children}
    </GlobalContext.Provider>
  );
};