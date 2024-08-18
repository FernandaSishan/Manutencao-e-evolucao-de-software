import React, { useState } from "react";

function SignupForm() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [login, setLogin] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const userData = {
      nome,
      login,
      email,
      senha,
    };

    try {
      const response = await fetch("http://localhost:8080/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        alert("Cadastro realizado com sucesso!");
      } else {
        alert("Falha ao cadastrar. Tente novamente.");
      }
    } catch (error) {
      console.error("Erro ao enviar dados:", error);
      alert("Erro ao cadastrar. Tente novamente.");
    }
  };

  return (
    <>
      <h2 className="title title-second">Crie sua conta!</h2>
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
      <p className="description description-second">
        Ou faça registro usando email:
      </p>
      <form className="form" onSubmit={handleSubmit}>
        <label className="label-input" htmlFor="nome">
          <i className="far fa-user icon-modify"></i>
          <input
            type="text"
            id="nome"
            placeholder="Nome"
            value={nome}
            onChange={(e) => {
              setNome(e.target.value);
              setLogin(e.target.value);
            }}
          />
        </label>
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
        <button className="btn btn-second" type="submit">
          Registro
        </button>
      </form>
    </>
  );
}

export default SignupForm;
