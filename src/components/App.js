import React from 'react'
import Home from './Home'
import Country from './Country'
import { Router, Route, Switch } from 'react-router-dom';
import history from '../history'

const App = () => {
    return (
        <>
            <Router history={history}>
                <Route path="/" exact component={Home} />
                <Route path="/country/:id" exact component={Country} />
            </Router>
        </>
    )
}

export default App;