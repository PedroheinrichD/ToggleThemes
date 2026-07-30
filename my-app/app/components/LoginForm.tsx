"use client";
import { useThemesContext } from "@/context/ThemeContext";
import { Moon } from "lucide-react";
import { SyntheticEvent } from "react";

function LoginForm() {
  const ThemeCtx = useThemesContext();

  function handleFormSubmit(event: SyntheticEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
  
      <form
        onSubmit={handleFormSubmit}
        className={
          ThemeCtx?.toggle
            ? "mx-auto max-w-sm  mt-10 p-8 bg-[#0d0d0df5] rounded-xl shadow-md space-y-4 "
            : "mx-auto max-w-sm  mt-10 p-8 bg-white rounded-xl shadow-md space-y-4 "
        }
      >
        <div className="flex justify-between">
          <h2
            className={
              ThemeCtx?.toggle
                ? "text-xl font-semibold text-white"
                : "text-xl font-semibold text-gray-800"
            }
          >
            Entrar
          </h2>
          <Moon
            className={
              ThemeCtx?.toggle
                ? `cursor-pointer fill-white`
                : `cursor-pointer fill-gray-700`
            }
            onClick={ThemeCtx?.toggleThemes}
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className={
              ThemeCtx?.toggle
                ? "block text-sm font-medium text-white mb-1"
                : "block text-sm font-medium text-gray-700 mb-1"
            }
          >
            E-mail
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="seu@email.com"
            className={
              ThemeCtx?.toggle
                ? "w-full px-4 py-2 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-300 focus:border-transparent placeholder:text-gray-400 text-white"
                : "w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            }
          />
        </div>

        <div>
          <label
            htmlFor="password"
            className={
              ThemeCtx?.toggle
                ? "block text-sm font-medium text-white mb-1"
                : "block text-sm font-medium text-gray-700 mb-1"
            }
          >
            Senha
          </label>
          <input
            id="password"
            name="password"
            type="password"
            required
            placeholder="......"
            className={
              ThemeCtx?.toggle
                ? "w-full px-4 py-2 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-300 focus:border-transparent placeholder:text-gray-400 text-white"
                : "w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            }
          />
        </div>

        <button
          type="submit"
          className={ThemeCtx?.toggle ? "w-full bg-sky-400 py-2 rounded-md text-white" :"w-full bg-sky-800 py-2 rounded-md text-white"}
        >
          Entrar
        </button>
      </form>
  
  );
}

export default LoginForm;
