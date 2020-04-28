import React from 'react';

const Submit = (props) => {
    return (
        <button
            data-cy='submit-button'
            disabled={props.disabled}
        >Submit</button>
    );
};

export default Submit;