"use client"
import { useLangState } from "../context/LangState";
import { useState } from "react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu";


export default function Dropdown() {
    //const [selectedLanguage, setSelectedLanguage] = useState("English");
    //const [isOpen, setIsOpen] = useState(false);
    const {LangState, setLangState}   = useLangState();

    const languages = {
      English: "English",
      Japanese: "Japanese",
      Russian: "Russian",
    }

    const handleLanguageChange = (language) => {
        setLangState(language);
        //setIsOpen(false);
    }
    return (
      <DropdownMenu>
          <DropdownMenuTrigger className="px-4 py-2">
              {languages[LangState] || "Language"}
          </DropdownMenuTrigger>
          <DropdownMenuContent>
              {Object.entries(languages).map(([key, value]) => (
                  <DropdownMenuItem 
                      key={key}
                      onClick={() => handleLanguageChange(key)}
                  >
                      {value}
                  </DropdownMenuItem>
              ))}
          </DropdownMenuContent>
      </DropdownMenu>
  );
}
