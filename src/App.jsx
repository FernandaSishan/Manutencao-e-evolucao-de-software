import React, { useState } from 'react';
import './style/style.css';
import Login from './components/Login';

function App() {
    const [isSignIn, setIsSignIn] = useState(false);

    const toggleSignIn = () => {
        setIsSignIn(!isSignIn);
    };

    return (
        <div className={`container ${isSignIn ? 'sign-in-js' : 'sign-up-js'}`}>
            <Login isSignIn={isSignIn} toggleSignIn={toggleSignIn} />
        </div>
    );
}

export default App;
