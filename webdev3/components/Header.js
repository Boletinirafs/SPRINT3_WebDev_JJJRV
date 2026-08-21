"use client";

export default function Header() {
  return (
    <header>
      <nav id="navbar">
        <div className="logo-complete">
          <img src="/images/logo.png" className="logo" alt="Logo VisuAll" />
          <span className="logo-text">VisuAll</span>
        </div>

        <div className="links">
          <a href="#inicio">Inicio</a>
          <a href="#sobre">Sobre</a>
          <a href="#acessibilidade">Acessibilidade</a>
          <a href="#prototipo">Prototipo</a>
          <a href="#equipe">Equipe</a>
          <a href="#contato">Contato</a>
        </div>

        <div className="nav-botoes">
          <button className="login">Login</button>
          <button className="cadastro">Cadastre-se</button>
        </div>
      </nav>
    </header>
  );
}
