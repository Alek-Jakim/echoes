import React from 'react'
import { Container } from '@material-ui/core';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Authentication from './components/Authentication';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './index.css'

const App = () => {
    return (
        <BrowserRouter>
            <Container maxWidth="lg">
                <Navbar />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/auth" exact component={Authentication} />
                </Switch>
            </Container>
        </BrowserRouter>
    )
}

export default App
