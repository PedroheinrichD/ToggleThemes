"use client"
import { themeContextType } from "@/types/ThemeContext";
import { createContext, PropsWithChildren, useContext, useEffect, useState } from "react";

const toggleThemeContext = createContext<themeContextType | null>(null)
const STORAGE_KEY = '@toggleThemes'


export function ThemeContext({ children }: PropsWithChildren) {
    const [Theme, setToggle] = useState(
        localStorage.getItem(STORAGE_KEY) || 'light'
    ) //state para trocar 

    function toggleThemes() { //function para inverter valor do state
        setToggle(Theme === 'dark' ? 'light' : 'dark');
    }


    useEffect(() => {
        if (Theme === 'dark') {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }

        localStorage.setItem(STORAGE_KEY, Theme)
    }, [Theme])

    return (
        <section>
            <toggleThemeContext.Provider value={{ Theme, toggleThemes }} >
                {children}
            </toggleThemeContext.Provider>
        </section>
    )
}


export function useThemesContext() {
    return useContext(toggleThemeContext)
}