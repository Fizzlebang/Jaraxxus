
import React from 'react';
import {makeStyles} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Search from './components/Search';

const useStyles = makeStyles(theme => ({
  bodyWrapper: {
    textAlign: 'center',
    paddingTop: '100px',
  },
  searchBar:{
    padding: '2em',
    margin: 'auto',
    display: 'flex',
    justifyContent: 'center'
  }
}))

function HomePage() {
  const classes = useStyles();
  return (
    <div className={classes.bodyWrapper}>
        <Typography variant='h2' className={classes.title}>
          Jaraxxus
        </Typography>
        <Typography variant='subtitle1'>
          A webapp for analyzing live-streams.
        </Typography>
        <div className={classes.searchBar}>
          <Search/>
        </div>
        <a href="https://github.com/Fizzlebang/Jaraxxus">Source code</a>

    </div>
  );
}

export default HomePage;
