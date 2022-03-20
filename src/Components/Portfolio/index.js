import "./styles.css";
import Profile from "../Profile";
import Projects from "../Projects";
import Stack from "../Stack";
import Certificates from "../Certificates";
import PoweredBy from "../PoweredBy";

export default function Portfolio() {
  return (
    <div className="container-portfolio">
      <div className="portfolio">
        <div>
          <Profile />
        </div>

        <div className="portfolio-side">
          <div>
            <Stack />
          </div>

          <div>
            <Projects />
          </div>

          <div>
            <Certificates />
          </div>
        </div>
      </div>
      <div className="container-poweredby">
        <PoweredBy />
      </div>
    </div>
  );
}
