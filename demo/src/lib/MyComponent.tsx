import * as React from 'react';

export interface Props {
    value: string;
}

const MyComponent = (props: Props) => {
    return (
        <div>{props.value}</div>
    );
};

export default MyComponent;