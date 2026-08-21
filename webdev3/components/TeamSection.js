const teamMembers = [
  {
    name: "Joao Victor Pereira Gimenes",
    image: "/images/.team/joão.jpeg",
    alt: "Joao Victor",
  },
  {
    name: "Juan Duarte Moura",
    image: "/images/.team/juan.jpeg",
    alt: "Juan Duarte",
  },
  {
    name: "Julio Cesar Silva Cocco",
    image: "/images/.team/julio.jpeg",
    alt: "Julio Cesar",
  },
  {
    name: "Rafael Boletini de Oliveira",
    image: "/images/.team/rafael.jpeg",
    alt: "Rafael Boletini",
  },
  {
    name: "Victor Rossi Sales Zanandre",
    image: "/images/.team/victor.png",
    alt: "Victor Rossi",
  },
];

export default function TeamSection() {
  return (
    <section id="equipe" className="secao">
      <h2 className="titulo2">Integrantes da Equipe</h2>
      <p className="texto">Conheca os integrantes do Grupo VisuAll!</p>

      <div className="integrantes">
        {teamMembers.map((member) => (
          <div className="integrante" key={member.name}>
            <img src={member.image} alt={member.alt} className="foto" />
            <h3>{member.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
