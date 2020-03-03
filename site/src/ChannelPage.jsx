import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import {makeStyles} from '@material-ui/core';
import ChannelSummary from './components/ChannelSummary';

const useStyles = makeStyles(theme => ({
    bodyWrapper: {
        padding: '5em'
    }
}));


export default function ChannelPage() {
    const classes = useStyles();
    return (
        <Grid container spacing={3} className={classes.bodyWrapper}>
            <Grid item sm={8}>
                <Paper><ChannelSummary/></Paper>
            </Grid>
            <Grid item sm={4}>
                <Paper>Recent Streams</Paper>
            </Grid>
            <Grid item sm={12}>
                <Paper>
                    Graph
                </Paper>
            </Grid>
        </Grid>
    );
}