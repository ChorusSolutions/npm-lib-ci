import * as React from 'react';
import { Demo } from '@chorus/react-library-demo';
import MyComponentDemo from './MyComponent/MyComponentDemo';

export default () => {
    let demos = {
        'My Component Demo': MyComponentDemo,
    };

    return <Demo components={demos} />;
};