import { MantineProvider } from "@mantine/core";
import "./App.css";
import Home from "./pages/Home";
import { theme } from "./theme";

function App() {
  return (
    <MantineProvider theme={theme}>
      <Home />
    </MantineProvider>
  );
}

export default App;
