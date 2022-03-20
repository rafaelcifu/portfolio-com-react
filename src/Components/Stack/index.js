import "./styles.css";
import HTMLIcon from '../Assets/html.png';
import CSSIcon from '../Assets/css.png';
import JavaScriptIcon from '../Assets/javascript.png';
import ReactIcon from '../Assets/react.png';
import GITIcon from '../Assets/git.png';

export default function Stack() {
  return (
    <div className="container-stack">
      <div className="stack">
    
        <h2 className="title">Tecnologias e frameworks</h2>
        <div className="separator" />
          
            <div className="stack-logos">
            <img alt="HTML" 
            src={HTMLIcon} 
            style={{ width: 30 , paddingRight: 12 }} 
            />
            <img alt="CSS" 
            src={CSSIcon} 
            style={{ width: 30 , paddingRight: 12 }} 
            />
            <img alt="JavaScript" 
            src={JavaScriptIcon} 
            style={{ width: 28 , paddingRight: 12 }} 
            />
            <img alt="React" 
            src={ReactIcon} 
            style={{ width: 90 , paddingRight: 12 }} 
            />
            <img alt="GIT" 
            src={GITIcon} 
            style={{ width: 28 , paddingRight: 12 }} 
            />
      
        </div>
      </div>
    </div>
  );
}
