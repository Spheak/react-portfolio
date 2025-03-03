import { ThemeProvider } from "@/components/theme-provider/theme-provider";
// import { ModeToggleButton } from "./components/mode-toggle/ModeToggleButton";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { t } from "i18next";

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
      <div>{t("hello")}</div>
      <button type="button" onClick={handleChangeLanguage}>
        Change Language
      </button>
    </ThemeProvider>
  );
}

export default App;