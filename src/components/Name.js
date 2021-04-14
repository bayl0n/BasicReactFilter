import React from 'react';
import { Link } from 'react-router-dom';

function Name(props) {
    return (
        <div>
            <Link to={props.name}>
                <button>
                    Hello, my name is { props.name } and I am a { props.category }
                </button>
            </Link>
        </div>
    );
}

export default Name;