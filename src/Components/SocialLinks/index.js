import "./styles.css";
import GithubIcon from "../Assets/github (1).svg";
import GmailIcon from "../Assets/gmail (1).svg";
import LinkedinIcon from "../Assets/Icon awesome-linkedin.svg";

export default function SocialLinks() {
  return (
    <div className="container-social-links">
      <a href="https://github.com/rafaelcifu" target="_blank" rel="noreferrer">
        <div className="social-link">
          <img
            alt="Git Hub Rafael Cifu"
            src={GithubIcon}
            style={{ width: 25 }}
          />
        </div>
      </a>

      <a href="https://www.linkedin.com/in/rafaelcifu/" target="_blank" rel="noreferrer">
        <div className="social-link">
          <img
            alt="Linkedin Rafael Cifu"
            src={LinkedinIcon}
            style={{ width: 24 }}
          />
        </div>
      </a>

      <a href="mailto:rafael@pmakers.com.br" target="_blank" rel="noreferrer">
        <div className="social-link">
          <img alt="Gmail Rafael Cifu" 
          src={GmailIcon} 
          style={{ width: 33 }} 
          />
        </div>
      </a>
    </div>
  );
}
