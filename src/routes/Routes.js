import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Redirect} from "react-router-dom";
import {app} from "../app/app";
import {Home} from "../controllers/Home";
import {Profile} from "../controllers/Profile";
import {Login} from "../controllers/Login";
import HealthCheck from "../controllers/HealthCheck";
import Register from "../controllers/Register";
import {PrivateRoute} from "./PrivateRoute";

class Routes extends Component {
    render() {
        return (
            <Router key="router">
                <Route exact path={app.routes().login} render={props => localStorage.getItem("token") ?
                    <Redirect to={{pathname: app.routes().home}}/> :
                    <Login {...props}/>
                }/>
                <Route exact path={app.routes().healthcheck} component={HealthCheck}/>
                <Route exact path={app.routes().register} component={Register}/>
                <PrivateRoute exact path={app.routes().home} component={Home}/>
                <PrivateRoute exact path={app.routes().profile} component={Profile}/>
            </Router>
        )
    }


}

export default Routes;