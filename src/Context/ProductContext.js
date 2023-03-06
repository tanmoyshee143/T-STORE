import { createContext } from "react";

const context = createContext();

const AppContext = ({ children }) => {
  const sName = "T STORE";
  return <context.Provider value={{ sName }}>{children}</context.Provider>;
};

export { AppContext, context };
