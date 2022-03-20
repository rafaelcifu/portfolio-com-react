import './styles.css';
import LogoFrontAcademy from '../Assets/logo-frontacademy-white.svg';

export default function PoweredBy() {
    return (
     <div className="container-poweredby">

      <div className="poweredby">
        <p className="paragraph">Powered by</p>
        <a href="https://www.frontacademy.com.br" target="_blank" rel="noreferrer">
        <img
            alt="Logo Front Academy"
            src={LogoFrontAcademy}
            style={{ width: 150 , marginLeft: 10 }}
          />
          </a>
      </div>

     </div>
    );
}
