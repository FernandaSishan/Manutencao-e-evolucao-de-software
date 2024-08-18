import React, { useState } from 'react';

function LoginForm() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        const loginUrl = `http://localhost:8080/user/validarLogin/${email}/${senha}`;

        try {
            const response = await fetch(loginUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.ok) {
                const userData = await response.json();
                alert('Login realizado com sucesso!');
                console.log(userData)
            } else {
                alert('Falha no login. Tente novamente.');
            }
        } catch (error) {
            console.error('Erro ao enviar dados:', error);
            alert('Erro no login. Tente novamente.');
        }
    };

    return (
        <>
            <h2 className="title title-second">Faça login no SMES</h2>
            <div className="social-media">
                <ul className="list-social-media">
                    <a className="link-social-media" href="#">
                        <li className="item-social-media">
                            <i className="fab fa-facebook-f"></i>
                        </li>
                    </a>
                    <a className="link-social-media" href="#">
                        <li className="item-social-media">
                            <i className="fab fa-google-plus-g"></i>
                        </li>
                    </a>
                    <a className="link-social-media" href="#">
                        <li className="item-social-media">
                            <i className="fab fa-linkedin-in"></i>
                        </li>
                    </a>
                </ul>
            </div>
            <p className="description description-second">ou use sua conta de email:</p>
            <form className="form" onSubmit={handleSubmit}>
                <label className="label-input" htmlFor="email">
                    <i className="far fa-envelope icon-modify"></i>
                    <input
                        type="email"
                        id="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>
                <label className="label-input" htmlFor="senha">
                    <i className="fas fa-lock icon-modify"></i>
                    <input
                        type="password"
                        id="senha"
                        placeholder="Senha"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                    />
                </label>
                <a className="password" href="#">Esqueceu sua senha?</a>
                <button className="btn btn-second" type="submit">Entrar</button>
            </form>
        </>
    );
}

export default LoginForm;
