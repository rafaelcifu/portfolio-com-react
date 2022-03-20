import "./styles.css";
import ProjectCard from "../ProjectCard";
import RelatorioMKT from "../Assets/relatorio-mkt.png";
import MenuFrontAcademy from "../Assets/menu-front-academy.png";



export default function Projects() {
  return (
    <div className="container-projects">
      <div className="project">
        <div className="project-header">
          <h2 className="title">Últimos projetos</h2>
          <h2 className="view-more">Ver mais</h2>
        </div>
        <div className="separator" />

        <div className="project-card">
          <ProjectCard projectImg={RelatorioMKT}>
            <p>Relatório de MKT</p>
          </ProjectCard>
        </div>

        <div className="project-card">
          <ProjectCard projectImg={MenuFrontAcademy}>
            <p>Menu Front Academy</p>
          </ProjectCard>
        </div>

      </div>
    </div>
  );
}
