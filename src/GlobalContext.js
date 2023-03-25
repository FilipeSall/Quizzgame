import { createContext, useState } from "react";
import useLocalStorage from "./hooks/useLocalStorage";

export const GlobalContext = createContext();

export const GlobalStorage = ({ children }) => {
  const [email, setEmail] = useState("");
  const [validation, setValidation] = useState(false);

  const [score, setScore] = useState({
    historyScore: 0,
    scienceScore: 0,
    artScore: 0,
  });

  // Usando o hook useLocalStorage para acessar o nome salvo no localStorage
  const [storedName, setStoredName] = useLocalStorage("name", "");

  return (
    <GlobalContext.Provider
      value={{
        email,
        setEmail,
        validation,
        setValidation,
        storedName,
        setStoredName,
        score,
        setScore,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
