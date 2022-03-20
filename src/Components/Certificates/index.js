import "./styles.css";
import CertificateCard from "../CertificateCard";
import StarterPackLogo from '../Assets/StarterPack.svg';
import StarterPackAstronaut from '../Assets/StarterPackAstronaut.svg';

export default function Certificates() {
  return (
    <div className="container-certificates">
      <div className="certificates">
        <div className="project-header">
          <h2 className="title">Certificados</h2>
          <h2 className="view-more">Ver mais</h2>
        </div>
        <div className="separator" />

        <div className="certificate-cards">
          <CertificateCard certificateImg={StarterPackAstronaut}>
            <img alt="Starter Pack" src={StarterPackLogo} style={{ width:120 }}/>
            <p className="paragraph">Front Academy, 2022</p>
            <p className="paragraph-auth">Autenticação 9192919291991$$</p>
          </CertificateCard>
        </div>

      </div>
    </div>
  );
}
