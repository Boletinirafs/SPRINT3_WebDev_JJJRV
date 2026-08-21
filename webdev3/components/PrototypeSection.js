"use client";

export default function PrototypeSection() {
  return (
    <section id="prototipo" className="secao">
      <h2 className="titulo2">Prototipos</h2>
      <p className="texto">Conheca todas as versoes de VisuAll.</p>
      <h2 className="trad">Traducao de Libras em tempo real</h2>

      <div className="versions">
        <div className="version">
          <h3>Versao 1.0</h3>
          <p>
            Versao inicial com interpretacao em tempo real do alfabeto em Libras.
          </p>
          <button className="visualize1">Visualizar Slides para Banca 1</button>
        </div>

        <div className="version">
          <h3>Versao 2.0</h3>
          <p>
            Versao atual que interpreta sinais de Libras gerais, utilizando
            movimentos manuais e faciais.
          </p>
          <button className="visualize2">Visualizar Slides para Banca 2</button>
        </div>
      </div>
    </section>
  );
}
