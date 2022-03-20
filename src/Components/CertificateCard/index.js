import "./styles.css";

export default function CertificateCard(props) {
  const children = props.children;
  const certificateImg = props.certificateImg;

  return (
    <div className="container-certificatecard">
      <div className="certificatecard">
        <div className="certificatecard-img">
          <img alt="Certificado Img" 
          src={certificateImg} 
          style={{ width:40 }}/>
        </div>
        <div className="certificatecard-content">
          {children}
        </div>
      </div>
    </div>
  );
}
