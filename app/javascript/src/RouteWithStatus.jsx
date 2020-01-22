import React from 'react';
import {Route} from 'react-router';

const RouteWithStatus = ({status, render}) => (
    <Route render={({staticContext, ...props}) => {
        if (staticContext) staticContext.status = status;

        return render(props);
    }} />
);

export default RouteWithStatus;
