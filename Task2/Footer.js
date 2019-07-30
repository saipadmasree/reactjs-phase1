import React from 'react';
import './Footer.css'


const Footer = (props) => {
    const {} = props;
return(
    <div>

       
         <div className="follow"> Follow us on: <img className="follow-img" src={'http://www.siesgst.edu.in/assets/youtube.png'}/> <img className="follow-img"src={'http://www.siesgst.edu.in/assets/instagram.png'}/> <img className="follow-img" src={'http://www.siesgst.edu.in/assets/facebook.png'}/></div>
     <div className="footer">
        <p className="footer-up"> The Graduate School of Technology </p>
     
     <p className="aff">Affiliated to the University of Mumbai | AICTE, NBA, NAAC Accredited</p>
     <div className="footer-down">
     <p>SIES GST is committed to high standards of Engineering Education, whilst complying with the requirements laid down by the statutory and regulatory bodies.
     The aim is to continually enhance learning opportunities by providing multiple study options through a perfect blend of Academic Excellence, Teaching-learning process,
     Teacher-student mentoring based on our quality management system that complies with ISO 9001:2008 and enables learners to thrive in a rapidly evolving environment.
     Ragging is a punishable offence as per the provision of the "Provision of Ragging Act 1997" and the rules made there under. SIES Graduate School of Technology is a Ragging free campus.
     </p>
     </div>
     </div>
    <div className="foot">
        <p>© 2017 SIES Graduate School Of Technology, Nerul · All Rights Reserved</p>
        <p>HOME.PRIVACY.DEVELOPERS.CONTACT US.MANDATORY DISCLOSURE </p>
 </div>

   </div>

 )
};


export default Footer;
