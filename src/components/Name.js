import React from 'react'

function Name(props) {
    return (
        <div>
            Hello, my name is { props.name } and I am a { props.category }
        </div>
    );
}

export default Name;