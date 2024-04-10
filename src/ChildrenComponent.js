import React from 'react';

const ChildrenComponent = (props) => {
    return (
        <div>
            {props.children}
            <p>test</p>
        </div>
    );
};

export default ChildrenComponent;