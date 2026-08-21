export default function ContactSection() {
  return (
    <section id="contato" className="secao">
      <h2 className="titulo2">Contato</h2>
      <p className="texto">Quer saber mais sobre o VisuAll? Fale com a gente!</p>

      <form className="contact">
        <div className="cont">
          <label htmlFor="nome">Nome</label>
          <input type="text" id="nome" placeholder="Seu nome" />
        </div>

        <div className="cont">
          <label htmlFor="email">E-mail</label>
          <input type="text" id="email" placeholder="seu@email.com" />
        </div>

        <div className="cont-ms">
          <label htmlFor="mensagem">Mensagem</label>
          <textarea id="mensagem" rows={4} placeholder="Sua mensagem..." />
        </div>

        <button type="submit" className="confirma">
          Enviar
        </button>
      </form>
    </section>
  );
}
