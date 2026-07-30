import { themeContextType } from "@/types/ThemeContext";
import { createContext, PropsWithChildren, useContext, useState } from "react";

const toggleThemeContext = createContext<themeContextType | null >(null)

export function ThemeContext({ children }: PropsWithChildren) {
    const [toggle, setToggle] = useState(false) //state para trocar 

    function toggleThemes(){ //function para inverter valor do state
        setToggle(!toggle)
    }

    return(
        <section>
            <toggleThemeContext.Provider value={{toggle, toggleThemes}} >
              {children}  
            </toggleThemeContext.Provider>
        </section>
    )
}


export function useThemesContext() {
    return useContext(toggleThemeContext)
}