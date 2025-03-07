import { ThemeProvider } from "@/components/theme-provider/theme-provider";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/content-layout/Home";
import About from "./components/content-layout/About";
import Project from "./components/content-layout/Project";
import Footer from "./components/content-layout/Footer";
import Contact from "./components/content-layout/Contact";
import { Toaster } from "sonner";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import './App.css'


function App() {
  const {
      i18n: { changeLanguage, language },
    } = useTranslation();
    const [currentLanguage, setCurrentLanguage] = useState(language);
    const handleChangeLanguage = () => {
      console.log(currentLanguage)
      const newLanguage = currentLanguage === "en" ? "kh" : "en";
      setCurrentLanguage(newLanguage);
      changeLanguage(newLanguage);
    };
    console.log(window.matchMedia("(prefers-color-scheme: dark)").matches)
  return (
    <div className={`${currentLanguage === "kh" ? "khmer-font" : "english-font"}`}>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Toaster />
        {/* <ModeToggleButton   /> */}
        <header className="bg-primary flex justify-center">
          <Navbar handleLanguage={handleChangeLanguage} />
        </header>
        <main className="mx-[2%] lg:mx-auto max-w-[1800px] flex flex-col gap-15">
          <Home />
          <About />
          <Project />
          <Contact />
        </main>
        <footer className="bg-primary  mt-10 dark:bg-black">
          <div className="max-w-[1800px] mx-auto">
            <Footer />
          </div>
        </footer>
      </ThemeProvider>
    </div>
  );
}

export default App;