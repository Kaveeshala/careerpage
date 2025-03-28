"use client"
import { createContext, useContext, useState } from "react";

const LangContext = createContext();

export default function LangState({ children }) {
    const [LangState, setLangState] = useState("English");

  return (
    <LangContext.Provider value = {{ LangState, setLangState }}>
        {children}
    </LangContext.Provider>    
  );
}

export function useLangState() {
    return useContext(LangContext);
}
