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
        <div className={ThemeCtx?.Theme === 'dark' //barra azul no topo do form 
          ? "h-1 w-8 rounded bg-sky-500" 
          : "h-1 w-8 rounded bg-[#438CF9]"
        }>
        </div>
        <div className="flex justify-between">
          <h2
            className={
              ThemeCtx?.Theme === 'dark'
                ? "text-xl font-semibold text-white"
                : "text-xl font-semibold text-gray-800"
            }
          >
            Bem-vindo!
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
                    ? "w-full px-10 py-2 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#438CF9] focus:border-transparent placeholder:text-gray-400 text-white"
                    : "w-full px-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
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
                    ? "w-full px-10 py-2 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#438CF9] focus:border-transparent placeholder:text-gray-400 text-white"
                    : "w-full px-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                }
              />
              <Lock className={ThemeCtx?.Theme === 'dark' 
              ? "absolute top-2 left-2 w-5 stroke-[#438CF9]"
              : "absolute top-2 left-2 w-5"}
              />   
          </div>
        </div>

        <button
          type="button"
          className={
            ThemeCtx?.Theme === 'dark'
              ? "w-full flex items-center justify-center gap-3 px-4 py-2.5 rounded-lg border border-gray-600 bg-gray-800 text-white font-medium hover:bg-gray-700 transition-colors cursor-pointer"
              : "w-full flex items-center justify-center gap-3 px-4 py-2.5 rounded-lg border border-gray-300 bg-white text-gray-700 font-medium hover:bg-gray-50 transition-colors cursor-pointer"
          }
        >
          <svg width="18" height="18" viewBox="-3 0 262 262" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027" fill="#4285F4"/><path d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1" fill="#34A853"/><path d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782" fill="#FBBC05"/><path d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251" fill="#EB4335"/></svg>
          <span>Entrar com o Google</span>
      </button>

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
