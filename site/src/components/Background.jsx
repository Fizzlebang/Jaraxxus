import React from 'react';
import {makeStyles, useTheme} from '@material-ui/core';


const useStyles = makeStyles(theme => ({
    background: {
        position: 'absolute',
        objectFit: 'cover',
        zIndex: '-1',
        width: '100vw',
        height: '100vh',
    },
    gradient: {
        position: 'absolute',
        background: theme.backgroundGradient,
        width: '100vw',
        height: '100vh',
        zIndex: '-1',
    }
}))

export default function Background(props) {
    const theme = useTheme()
    const classes = useStyles();
    console.log(theme.backgroundGradient);
    return <>
        <img src={props.src} className={classes.background} alt={''}/>
        <div className={classes.gradient}/>
    </>
}