import { ThemeProvider } from "@/components/theme-provider/theme-provider";
// import { ModeToggleButton } from "./components/mode-toggle/ModeToggleButton";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import Navbar from "./components/navbar/Navbar";


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
      <div>
        <Navbar />
      </div>
    </ThemeProvider>
  );
}

export default App;