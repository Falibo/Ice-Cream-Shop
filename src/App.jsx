import React from 'react';
import { 
  ChakraProvider, 
  ColorModeScript,
  extendTheme 
} from '@chakra-ui/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Services from './components/Services';
import Footer from './components/Footer';

// Custom theme with color mode configuration
const theme = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
  styles: {
    global: (props) => ({
      body: {
        bg: props.colorMode === 'dark' ? 'gray.800' : 'gray.50',
        color: props.colorMode === 'dark' ? 'whiteAlpha.900' : 'gray.800'
      }
    })
  }
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Navbar />
      <Hero />
      <Menu />
      <Services />
      <Footer />
    </ChakraProvider>
  );
}

export default App;