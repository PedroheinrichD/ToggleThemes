"use client"
import { ThemeContext } from "@/context/ThemeContext";
import LoginForm from "./components/LoginForm";
import { AstronautImage } from "./components/icons/Astronout/Astronaut";

export default function App(){
  return(
    <section className="min-h-screen justify-center items-center ">
      <ThemeContext>
          <LoginForm />
          <AstronautImage/>
      </ThemeContext>
    </section>
  )
}