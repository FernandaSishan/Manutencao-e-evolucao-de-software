import React from 'react';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

function Login({ isSignIn, toggleSignIn }) {
    return (
        <>
            <div className="content first-content">
                <div className="first-column">
                    <img src="src\components\logo.png" alt="Logo IFAM" className="logo" />
                    <h2 className="title title-primary">Bem-vindo de Volta!</h2>
                    <p className="description description-primary">Para manter-se conectado</p>
                    <p className="description description-primary">Por favor, faça login</p>
                    <button id="signin" className="btn btn-primary" onClick={toggleSignIn}>Login</button>
                </div>
                <div className="second-column">
                    <SignupForm />
                </div>
            </div>
            <div className="content second-content">
                <div className="first-column">
                    <img src="src\components\logo.png" alt="Logo IFAM2" className="logo" />
                    <h2 className="title title-primary">Bem-vindo!</h2>
                    <p className="description description-primary">Entre com seus dados de cadastro</p>
                    <p className="description description-primary">E junte-se a nós</p>
                    <button id="signup" className="btn btn-primary" onClick={toggleSignIn}>Fazer Registro</button>
                </div>
                <div className="second-column">
                    <LoginForm />
                </div>
            </div>
        </>
    );
}

export default Login;
