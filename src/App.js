import { ChakraProvider, extendTheme } from '@chakra-ui/react';

const theme = extendTheme ({
  config: {
    initialColorMode: 'dark'
  }
});

function App() {
  return (
    <ChakraProvider theme = {theme} >
      <h1>Monke App</h1>
    </ChakraProvider>
  );
}

export default App;
