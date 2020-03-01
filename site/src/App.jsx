import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Theme from './Theme';
import HomePage from './HomePage';
import BackgroundImg from './assets/twitchBackground.png';
import Background from './components/Background';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={Theme}>
        
        <CssBaseline />
        <Background src={BackgroundImg}/>
        <Route>
          <HomePage />
        </Route>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
