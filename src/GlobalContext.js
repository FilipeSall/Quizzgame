import { createContext, useEffect, useState } from "react";
import useLocalStorage from "./hooks/useLocalStorage";

export const GlobalContext = createContext();

export const GlobalStorage = ({ children }) => {
  const [email, setEmail] = useState("");
  const [validation, setValidation] = useState(false);

  const [score, setScore] = useState({
    historyScore: 0,
    scienceScore: 0,
    artScore: 0,
    moviesScore:0,
    gamesScore:0,
    musicScore:0,
  });

  // Estado do tipo de quisGame
  const [quizzgameType, setQuizzgameType] = useState("default");

  // Usando o hook useLocalStorage para acessar o nome salvo no localStorage
  const [storedName, setStoredName] = useLocalStorage("name", "");

  useEffect(() => {
    const savedQuizzgameType = localStorage.getItem("quizzgameType");
    if (savedQuizzgameType) {
      setQuizzgameType(savedQuizzgameType);
    }
  }, []);

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
        quizzgameType,
        setQuizzgameType
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
