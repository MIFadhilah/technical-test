import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';

import theme from './lib/themes';
import AgreeTechnicalTest from './components/templates/index.js';
import './global.css';
function App() {
  return (
    <ChakraProvider theme={theme}>
      <AgreeTechnicalTest />
    </ChakraProvider>
  );
}

export default App;
