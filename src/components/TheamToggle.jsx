import { useEffect, useState } from "react";
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid'


export default function ThemeToggle() {

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="flex justify-end">
      <button 
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="p-3 mt-4 mr-4 transition-colors duration-200 rounded-lg bg-white text-gray-800 dark:bg-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
      >
        {theme === "dark" 
        ? <SunIcon className="size-6"/> 
        : <MoonIcon className="size-6"/>}
      </button>
    </div>
  );
}
