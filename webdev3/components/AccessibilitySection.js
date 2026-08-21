export default function AccessibilitySection() {
  return (
    <section id="acessibilidade" className="secao">
      <div className="square">
        <h2 className="titulo2">Acessibilidade para Todos</h2>
        <p>
          O VisuAll foi criado pensando nas necessidades reais de pessoas com
          deficiencia visual e auditiva.
        </p>

        <div className="topics">
          <div className="topic">
            <h3>Para Pessoas Cegas</h3>
            <ul>
              <li>Descricao de imagens por IA</li>
              <li>Leitura de textos em voz alta</li>
              <li>Identificacao de objetos</li>
            </ul>
          </div>

          <div className="topic">
            <h3>Para Pessoas Surdas</h3>
            <ul>
              <li>Transcricao de audio em tempo real</li>
              <li>Traducao de Libras em tempo real</li>
              <li>Legendas automaticas</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
