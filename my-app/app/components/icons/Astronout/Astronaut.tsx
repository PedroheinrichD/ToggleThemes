import Image from "next/image";
import AstronautDark from "@/app/components/icons/Astronout/AstronautDark.png"
import AstronautLight from "@/app/components/icons/Astronout/AstronautLight.png"
import { useThemesContext } from "@/context/ThemeContext";

export function AstronautImage() {
    const ThemeCtx = useThemesContext();
    return (
        <Image className="container mx-auto w-100" src={ThemeCtx?.toggle ? AstronautDark : AstronautLight} alt="" />
    )
}