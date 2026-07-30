"use client"
import { ThemeContext } from "@/context/ThemeContext";
import LoginForm from "./components/LoginForm";

export default function App(){
  return(
    <section className="min-h-screen justify-center items-center">
      <ThemeContext>
          <LoginForm />
      </ThemeContext>
    </section>
  )
}