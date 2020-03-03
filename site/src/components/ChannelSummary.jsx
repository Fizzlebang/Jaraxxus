import React from 'react';
import {makeStyles, Typography} from '@material-ui/core';
import List from '@material-ui/core/List';

const useStyles = makeStyles(theme => ({
    largeWrapper: {
        padding: '1em',
    },
    titleContainer: {
        display: 'flex',
        flexDirection: 'row',
        padding: '1em',
    },
    ChannelIcon: {
        width: theme.spacing(7),
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '50%',
    },
    title: {
        paddingLeft: '0.5em',
    }
}))

export default function ChannelSummary() {
    const classes = useStyles();
    return (
        <div className={classes.largeWrapper}>
            <div className={classes.titleContainer}>
                <img 
                    src='https://static-cdn.jtvnw.net/jtv_user_pictures/8bd07ef046330084-profile_image-70x70.jpeg'
                    className={classes.ChannelIcon}
                />
                <Typography variant='h3' className={classes.title}>
                    Scarra
                </Typography>
                
            </div>
            <List>
                

            </List>
        </div>
    );
}