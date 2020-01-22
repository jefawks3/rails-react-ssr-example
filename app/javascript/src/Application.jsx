import React from 'react';
import {Switch, Redirect, Route} from "react-router-dom";

import HelloWorldScreen from "./HelloWorldScreen";
import RouteWithStatus from "./RouteWithStatus";
import NotFoundScreen from "./NotFoundScreen";

const Application = () => (
    <Switch>
        <Route path="/" exact component={HelloWorldScreen} />
        <RouteWithStatus path="/hello_world" exact status={302} render={props => <Redirect to="/" from="/hello_world" {...props} />} />
        <RouteWithStatus status={404} render={props => <NotFoundScreen {...props}/>} />
    </Switch>
);

export default Application;