import './styles.css';
import LocationPin from '../Assets/pin-de-localizacao.svg'
import Phone from '../Assets/phone-svg.svg'
import EmailIcon from '../Assets/email-simples.svg'

export default function Contact() {
    return (
        <div className="contact-container">
           
           <div className="contact">
                <img alt="Location" src={LocationPin} className="icon-padding-10px-right"/>
                <p className="paragraph">
                Campinas, SP - Brasil
                </p>
           </div>

           <div className="contact">
                <img alt="E-mail" src={EmailIcon} className="icon-padding-10px-right"/>
                <p className="paragraph">
                rafael@pmakers.com.br
                </p>
           </div>

            <div className="contact">
                <img alt="Phone" src={Phone} className="icon-padding-10px-right" />
                <p className="paragraph">
                +55 11 97045-3206
                </p>
           </div> 

        </div>
    );
}
