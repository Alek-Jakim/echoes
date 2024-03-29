import React, { useState, useEffect } from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom';
import { AppBar, Typography, Toolbar, Avatar, Button } from '@material-ui/core';
import useStyles from '../styling/navStyles';
import decode from 'jwt-decode'
import memories from '../images/memories.png'
import { useDispatch } from 'react-redux';

const Navbar = () => {
    const classes = useStyles();
    const history = useHistory();
    const location = useLocation();

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch = useDispatch();

    const logout = () => {
        dispatch({ type: 'LOGOUT' })

        history.push('/');

        setUser(null);
    }

    // Redirects to home page when the logo is clicked
    const logoRedirect = () => {
        history.push('/');
    }

    useEffect(() => {
        const token = user?.token;

        if (token) {
            const decodedToken = decode(token)

            if (decodedToken.exp * 1000 < new Date().getTime()) {
                logout()
            }
        }

        //JWT...
        setUser(JSON.parse(localStorage.getItem('profile')))
    }, [location])

    return (
        <>
            <AppBar className={classes.appBar} position="static" color="inherit">
                <div className={classes.brandContainer}>

                    <img className={classes.image} src={memories} alt="memories" height="60" onClick={logoRedirect} />
                    <Typography className={classes.heading} variant="h2" align="center">Echoes</Typography>
                </div>
                <Toolbar className={classes.toolbar}>
                    {user ? (
                        <div className={classes.profile}>
                            <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar>
                            <Typography className={classes.userName} variant="h6">
                                {user.result.name}
                            </Typography>
                            <Button variant="contained" className={classes.logout} color="secondary" onClick={logout}>Sign Out</Button>
                        </div>
                    ) : (
                        <Button component={Link} to="/auth" variant="contained" color="primary">
                            Sign In
                        </Button>
                    )}
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar
