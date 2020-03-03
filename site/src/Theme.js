import { createMuiTheme } from '@material-ui/core/styles';
import createTypography from '@material-ui/core/styles/createTypography';
import createPalette from '@material-ui/core/styles/createPalette';
import hexToRgba from 'hex-to-rgba';

const backgroundColor = '#121212';

const Theme = createMuiTheme({
  palette: {
    primary: {
      main: '#5c6bc0',
    },
    secondary: {
      main: '#01579b',
    },
    background: {
      default: backgroundColor,
    },
    type: 'dark',
  },
  typography: {    
    "fontFamily": "\"Roboto Condensed\", \"Helvetica\", \"Arial\", sans-serif",
    "fontSize": 14,
    "fontWeightLight": 300,
    "fontWeightRegular": 400,
    "fontWeightMedium": 500
  },
  
  backgroundGradient: `linear-gradient(to bottom, ${hexToRgba(backgroundColor, 0.95)} 0%, ${backgroundColor} 90%)`,
});

export default Theme;
