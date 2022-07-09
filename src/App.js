import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Hero from "./components/Hero";
import Information from "./components/Information";
import NavBar from "./components/NavBar";
import ThemeSwitcher from "./components/ThemeSwitcher";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const theme = extendTheme({
  config: {
    initialColorMode: "dark",
  },
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/">
            <Hero />
            <Information />
          </Route>
          <Route path="/map">

          </Route>
          <Route path="/account">
            
          </Route>
        </Switch>
        {/* <ThemeSwitcher/> */}
      </Router>
    </ChakraProvider>
  );
}

export default App;
