import { ThemeProvider } from "@/components/theme-provider/theme-provider";
import { ModeToggleButton } from "./components/mode-toggle/ModeToggleButton";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <ModeToggleButton   />
    </ThemeProvider>
  );
}

export default App;