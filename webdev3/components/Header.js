"use client";

import { useState } from "react";

export default function Header() {
  const [formAberto, setFormAberto] = useState(null);

  const [usuarioL, setUsuarioL] = useState("");
  const [senhaL, setSenhaL] = useState("");

  const [usuarioC, setUsuarioC] = useState("");
  const [senhaC, setSenhaC] = useState("");

  function abrirLogin() {
    setFormAberto(formAberto === "login" ? null : "login");
  }

  function abrirCadastro() {
    setFormAberto(formAberto === "cadastro" ? null : "cadastro");
  }

  function confirmarLogin() {
    let encontrou = false;

    for (let i = 0; i < localStorage.length; i++) {
      if (usuarioL === localStorage.key(i)) {
        const user = JSON.parse(localStorage.getItem(localStorage.key(i)));
        if (senhaL === user.passW) {
          alert(`Bem vindo(a) ${user.user}`);
          encontrou = true;
        } else {
          alert("Senha incorreta");
        }
        break;
      }
    }

    if (!encontrou) {
      alert("Usuário não encontrado");
    }

    setUsuarioL("");
    setSenhaL("");
  }

  function confirmarCadastro() {
    for (let i = 0; i < localStorage.length; i++) {
      if (usuarioC === localStorage.key(i)) {
        alert("Usuário já existe");
        return;
      }
    }

    const novoUsuario = {
      user: usuarioC,
      passW: senhaC,
    };

    localStorage.setItem(usuarioC, JSON.stringify(novoUsuario));
    setUsuarioC("");
    setSenhaC("");
  }

  return (
    <header>
      <nav id="navbar">
        <div className="logo-complete">
          <img src="/images/logo.png" className="logo" alt="Logo VisuAll" />
          <span className="logo-text">VisuAll</span>
        </div>

        <div className="links">
          <a href="#inicio">Início</a>
          <a href="#sobre">Sobre</a>
          <a href="#acessibilidade">Acessibilidade</a>
          <a href="#prototipo">Protótipo</a>
          <a href="#equipe">Equipe</a>
          <a href="#contato">Contato</a>
        </div>

        <div className="nav-botoes">
          <button className="login" onClick={abrirLogin}>Login</button>
          <button className="cadastro" onClick={abrirCadastro}>Cadastre-se</button>

          <div className={`loginForm ${formAberto === "login" ? "" : "hide"}`}>
            <input
              placeholder="Digite seu usuario"
              value={usuarioL}
              onChange={(e) => setUsuarioL(e.target.value)}
            />
            <input
              placeholder="Digite sua senha"
              value={senhaL}
              onChange={(e) => setSenhaL(e.target.value)}
            />
            <button onClick={confirmarLogin}>Confirmar</button>
          </div>

          <div className={`cadastroForm ${formAberto === "cadastro" ? "" : "hide"}`}>
            <input
              placeholder="Cadastre seu usuario"
              value={usuarioC}
              onChange={(e) => setUsuarioC(e.target.value)}
            />
            <input
              placeholder="Cadastre sua senha"
              value={senhaC}
              onChange={(e) => setSenhaC(e.target.value)}
            />
            <button onClick={confirmarCadastro}>Confirmar</button>
          </div>
        </div>
      </nav>
    </header>
  );
}