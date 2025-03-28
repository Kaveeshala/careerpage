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
    const [isOpen, setIsOpen] = useState(false);
    const {LangState, setLangState}   = useLangState();

    const handleLanguageChange = (language) => {
        setLangState(language);
        setIsOpen(false);
    }
  return (
  
       <DropdownMenu>
                <DropdownMenuTrigger>Language</DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuItem onClick={() => handleLanguageChange("English")}>Engilsh</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => handleLanguageChange("Japaneese")}>Japaneese</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => handleLanguageChange("Russian")}>Russian</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
   
  )
}
