"use client";
import { useThemesContext } from "@/context/ThemeContext";
import { Lock, Moon, User2 } from "lucide-react";
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
          ThemeCtx?.Theme === 'dark'
            ? "mx-auto max-w-sm mt-10 p-8 bg-[#0d0d0df5] rounded-xl shadow-md space-y-4 transition-colors duration-200"
            : "mx-auto max-w-sm mt-10 p-8 bg-white rounded-xl shadow-md space-y-4 transition-colors duration-200 "
        }
      >
        <div className="flex justify-between">
          <h2
            className={
              ThemeCtx?.Theme === 'dark'
                ? "text-xl font-semibold text-white"
                : "text-xl font-semibold text-gray-800"
            }
          >
            Entrar
          </h2>
          <Moon
            className={
              ThemeCtx?.Theme === 'dark'
                ? `cursor-pointer fill-white -rotate-120 transition-transform duration-300`
                : `cursor-pointer fill-gray-700 rotate-0 transition-transform duration-300`
            }
            onClick={ThemeCtx?.toggleThemes}
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className={
              ThemeCtx?.Theme === 'dark'
                ? "block text-sm font-medium text-white mb-1"
                : "block text-sm font-medium text-gray-700 mb-1"
            }
          >
            E-mail
          </label>
          <div className="relative">
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="E-mail"
                className={
                  ThemeCtx?.Theme === 'dark'
                    ? "w-full px-10 py-2 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-300 focus:border-transparent placeholder:text-gray-400 text-white"
                    : "w-full px-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                }
              />
              <User2 className={ThemeCtx?.Theme === 'dark' 
              ? "absolute top-2 left-2 w-5 stroke-[#438CF9]"
              : "absolute top-2 left-2 w-5"}
              />
          </div>
        </div>

        <div>
          <label
            htmlFor="password"
            className={
              ThemeCtx?.Theme === 'dark'
                ? "block text-sm font-medium text-white mb-1"
                : "block text-sm font-medium text-gray-700 mb-1"
            }
          >
            Senha
          </label>
          <div className="relative">
              <input
                id="password"
                name="password"
                type="password"
                required
                placeholder="Senha"
                className={
                  ThemeCtx?.Theme === 'dark'
                    ? "w-full px-10 py-2 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-300 focus:border-transparent placeholder:text-gray-400 text-white"
                    : "w-full px-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                }
              />
              <Lock className={ThemeCtx?.Theme === 'dark' 
              ? "absolute top-2 left-2 w-5 stroke-[#438CF9]"
              : "absolute top-2 left-2 w-5"}
              />   
          </div>
        </div>

        <button
          type="submit"
          className={ThemeCtx?.Theme === 'dark'
            ?"w-full bg-[#438CF9] shadow-[0_0_15px_rgba(67,140,249,0.4)] hover:shadow-[0_0_10px_rgba(67,140,249,0.6)] transition-shadow duration-300 py-2 rounded-md text-white cursor-pointer" 
            :"w-full bg-sky-500 shadow-[0_0_15px_rgba(14,165,233,0.4)] hover:shadow-[0_0_10px_rgba(14,165,233,0.6)] transition-shadow duration-300 py-2 rounded-md text-white cursor-pointer"}
        >
          Entrar
        </button>
      </form>
  );
}

export default LoginForm;
