import ReactDOM from "react-dom/client";
import { ThemeProvider } from './theme/ThemeProvider';
import "./theme/theme.css"; 
import { StrictMode } from "react";
import MyApp from "./Myapp";


ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <MyApp/>
    </ThemeProvider>
  </StrictMode>
)