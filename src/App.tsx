import { ThemeProvider } from "@/components/theme-provider/theme-provider";
// import { ModeToggleButton } from "./components/mode-toggle/ModeToggleButton";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/content-layout/Home";
import Education from "./components/content-layout/Education";


function App() {
  const {
    i18n: { changeLanguage, language },
  } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(language);
  const handleChangeLanguage = () => {
    const newLanguage = currentLanguage === "en" ? "kh" : "en";
    setCurrentLanguage(newLanguage);
    changeLanguage(newLanguage);
  };
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      {/* <ModeToggleButton   /> */}
      <header className="bg-primary flex justify-center">
        <Navbar />
      </header>
      <main className="mx-[2%] lg:mx-[10%]">
        <Home />
        <Education />
      </main>
    </ThemeProvider>
  );
}

export default App;