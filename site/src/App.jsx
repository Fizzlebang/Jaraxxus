import React from 'react';
import './fonts.css';
import { BrowserRouter, Route } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Theme from './Theme';
import HomePage from './HomePage';
import ChannelPage from './ChannelPage';
import BackgroundImg from './assets/twitchBackground.png';
import Background from './components/Background';

const routes = [{
  path: '/',
  component: <HomePage />
},
{
  path: '/channel',
  component: <ChannelPage />
},
]

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={Theme}>
        
        <CssBaseline />
        <Background src={BackgroundImg}/>
        {routes.map(({path, component}) => {
          return <Route exact path={path}>
            {component}
          </Route>
        })}
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
