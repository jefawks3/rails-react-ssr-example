import React from 'react';

const HelloWorldScreen = () => (
    <div>
        <h1>Hello World!</h1>
        <div>The time is: {new Date().toLocaleString()}</div>
    </div>
);

export default HelloWorldScreen;