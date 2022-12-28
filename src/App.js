import "./styles.css";
import ReactSwitch from "react-switch";

import Form from "./component/form/Form";
import { useThemeContext } from "./component/context/ThemeProvider";

export default function App() {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <div id={theme}>
      <div className="main">
        <Form />
        <div className="switch">
          <label className="switch-label m-1">{theme === "light" ? "Light Mode" : "Dark Mode"}</label>
          <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
        </div>
      </div>
    </div>
  );
}
