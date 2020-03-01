import { createMuiTheme } from '@material-ui/core/styles';
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
  backgroundGradient: `linear-gradient(to bottom, ${hexToRgba(backgroundColor, 0.95)} 0%, ${backgroundColor} 90%)`,
});

export default Theme;
