import "./styles.css";
import Contact from "../Contact";
import SocialLinks from "../SocialLinks";
import FotoRafa from "../Assets/foto-rafa.png";

export default function Profile() {
  return (
    <div className="container-profile">
      <div className="profile">
        <div>
          <img className="profile-photo" alt="Foto Rafa Portfolio" src={FotoRafa} />
        </div>
        <div>
          <h1 className="super-title">Rafael Cifu</h1>
          <h2 className="sub-title-color">Noob, comecei ontem =p </h2>
          <p className="paragraph">
            Um designer querendo despretensiosamente aprender um pouco de código.
            Nunca achei que conseguiria fazer algo assim. Mesmo sendo tão simples,
            fico feliz por ter conseguido =) 
          </p>
        </div>  
        <div>
          <Contact />
        </div>
        <div>
          <SocialLinks />
        </div>
      </div>
    </div>
  );
}
