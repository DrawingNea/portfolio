"use client";

import React, { useState, createContext, useContext } from "react";
import { links } from "@/lib/data";

type SectionName = (typeof links)[number]["name"];
type ActiveSectionContextProps = {
  children: React.ReactNode;
};

type ActiveSectionContextType = {
  activeSection: SectionName;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
  timeOfLastClick: number;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};

const ActiveSectionContext = createContext<ActiveSectionContextType | null>(
  null
);

const ActiveSectionContextProvider = ({
  children,
}: ActiveSectionContextProps) => {
  const [activeSection, setActiveSection] = useState<SectionName>("Home");
  const [timeOfLastClick, setTimeOfLastClick] = useState<number>(0);
  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
};

export default ActiveSectionContextProvider;

export function useActiveSectionContext(){
    const context = useContext(ActiveSectionContext);

    if(context === null){
        throw new Error("useActiveSectionContext must be used within a ActiveSectionContextProvider")
    }
    return context;
}
