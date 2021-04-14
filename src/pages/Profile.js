import React from 'react';
import { Link } from 'react-router-dom";'

function Profile(props) {
    return (
        <div>
            <h1>Hello {props.name}!</h1>
            <p>You are a {props.category}</p>
            <Link to="/">Go back home</Link>
        </div>
    )
}

export default Profile;