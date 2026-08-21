export default function AboutSection() {
  return (
    <section id="sobre" className="secao">
      <h2 className="titulo2">Sobre o Projeto</h2>
      <p className="texto">
        O VisuAll e um projeto desenvolvido para o Challenge da FIAP em parceria
        com a marca JOVI, com o objetivo de aprimorar algum recurso das cameras
        dos celulares.
      </p>
      <p className="texto">
        Nossa solucao e voltada para pessoas com deficiencia visual e auditiva,
        oferecendo tecnologia acessivel, moderna e eficiente.
      </p>

      <div className="topics">
        <div className="topic">
          <h3>Uma IA, Dois Modos de Leitura</h3>
          <p>
            MLP estatico para letras paradas + MLP dinamico para letras com
            movimento.
          </p>
        </div>

        <div className="topic">
          <h3>Interacao Totalmente Acessivel</h3>
          <p>
            Mao aberta para apagar, historico de frases navegavel e indicacao
            visual de modo ativo.
          </p>
        </div>

        <div className="topic">
          <h3>Interface Familiar, Funcionalidade Exclusiva</h3>
          <p>
            Camera nativa da JOVI com modo de acessibilidade ativavel por um
            icone.
          </p>
        </div>
      </div>
    </section>
  );
}
