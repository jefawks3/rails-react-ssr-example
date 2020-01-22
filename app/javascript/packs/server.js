import React from 'react';
import { renderToString } from 'react-dom/server';
import {StaticRouter} from "react-router";

import Application from "../src/Application";

const context = {};

const markup = renderToString(
    <StaticRouter location={serverProps.location} context={context}>
        <Application />
    </StaticRouter>
);

const output = { html: markup, logs: recordedLogs, redirect: context.url, status: context.status};

stdout(JSON.stringify(output));