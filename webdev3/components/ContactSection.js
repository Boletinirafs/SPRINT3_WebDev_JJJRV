"use client";

import { useState } from "react";

export default function ContactSection() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");

  function enviarMensagem(e) {
    // evita que o formulário recarregue a página, comportamento padrão do <form>
    e.preventDefault();

    alert(`Obrigado, ${nome}! Recebemos sua mensagem.`);

    setNome("");
    setEmail("");
    setMensagem("");
  }

  return (
    <section id="contato" className="secao">
      <h2 className="titulo2">Contato</h2>
      <p className="texto">Quer saber mais sobre o VisuAll? Fale com a gente!</p>

      <form className="contact" onSubmit={enviarMensagem}>
        <div className="cont">
          <label htmlFor="nome">Nome</label>
          <input
            type="text"
            id="nome"
            placeholder="Seu nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </div>

        <div className="cont">
          <label htmlFor="email">E-mail</label>
          <input
            type="text"
            id="email"
            placeholder="seu@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="cont-ms">
          <label htmlFor="mensagem">Mensagem</label>
          <textarea
            id="mensagem"
            rows={4}
            placeholder="Sua mensagem..."
            value={mensagem}
            onChange={(e) => setMensagem(e.target.value)}
          />
        </div>

        <button type="submit" className="confirma">
          Enviar
        </button>
      </form>
    </section>
  );
}