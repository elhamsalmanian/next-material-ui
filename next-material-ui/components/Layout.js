
import React from 'react';
import Head from 'next/head';
import { AppBar, Container, Toolbar, Typography } from '@material-ui/core';
import useStyles from '../utils/styles';


export default function Layout({ children }) {
    const classes = useStyles();
    return (
        <div>
            <Head>
                <titlt>Next Amazona</titlt>
            </Head>
            <AppBar position='static' className ={classes.navbar}>
                <Toolbar>
                    <Typography>amazona</Typography>
                </Toolbar>
            </AppBar>
            <Container className='{classes.main}'>{children}</Container>
            <footer className={classes.footer}>
                <Typography>Amazona</Typography>
            </footer>
        </div>
    )
}


