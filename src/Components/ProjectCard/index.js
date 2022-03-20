import "./styles.css";
import RightArrow from '../Assets/Icon-ionic-ios-arrow-forward.svg'

export default function ProjectCard(props) {
  const children = props.children;
  const projectImg = props.projectImg;

  return (
    <div className="container-projectcard">
      <div className="projectcard">
        <div className="projectcard-img">
          <img alt="projeto card" 
          src={projectImg} 
          style={{ width:120 , borderTopLeftRadius:6 , borderBottomLeftRadius:6 }}/>
        </div>
        <div className="projectcard-content">
          <p className="paragraph">{children}</p>
          <img alt="projeto card icon" src={RightArrow} />
        </div>
      </div>
    </div>
  );
}
