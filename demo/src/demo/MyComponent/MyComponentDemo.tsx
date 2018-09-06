import * as React from 'react';
import MyComponent from '../../lib/MyComponent';

// Example demo component - note that currently these have to be a function.
// If you need a class (e.g. to have some state in your demo),
// create the class then export a wrapper component which returns your component, e.g.:
// export default () => <MyClassComponent />;
const MyComponentDemo = () => {
    return (
        <div>
            <p>Some demo text here!</p>
            <MyComponent value="Hello World!" />
        </div>
    );
};

export default MyComponentDemo;