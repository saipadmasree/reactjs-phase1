import React from 'react';
import './Header.css';


const Header = (props) => {
    const {numberOfItems} = props;
    return(
        <div>
          <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
          <div className = "header">
        
        
        
            <h3>HOME</h3>
            <div className="dropdown">
            <h3 className="dropbtn">ABOUT</h3>
            
            <div class="dropdown-content">
                <dc href="#">Overview</dc>
                <dc href="#">Managing Committee</dc>
                <dc href="#">Vision And Mission</dc>
                <dc href="#">The Principal</dc>
                <dc href="#">Core Values</dc>
                <dc href="#">Organisation & Governance</dc>
                <dc href="#">Internal Complaint Committee</dc>
                <dc href="#">Women Development Cell</dc>
                <dc href="#">IQAC - Internal Quality Assurance Committee</dc>
                <dc href="#">Anti Ragging Committee</dc>
                <dc href="#">Awards And Ranking</dc>
            </div>
            </div>
            
            <div class="dropdown">
            <h3 className="dropbtn">ACADEMICS</h3>
            <div class="dropdown-content">
            <dc href="#">Overview</dc>
                <dc href="#">Humanities and Applied Sciences(F.E)</dc>
                <dc href="#">Computer Engineering</dc>
                <dc href="#">Mechanical</dc>
                <dc href="#">Electronics And Telecommunications</dc>
                <dc href="#">information technology</dc>
                <dc href="#">Printing and Packaging Technology</dc>
                <dc href="#">Center of excellence</dc>
                <dc href="#">Exam Cell</dc>
                <dc href="#">Office aamin</dc>
                <dc href="#">Non Teaching Staff</dc>

            </div>
            </div>
            <h3>ADMISSIONS</h3>
            <h3>CAREERS</h3>
            
            <img src = {'http://www.siesgst.edu.in/assets/gst.png'} alt = ""/>

            <div class="dropdown">
            <h3 className="dropbtn">AMENITIES</h3>
            <div class="dropdown-content">
                <dc href="#">Library</dc>
                <dc href="#">Divyangan facilities</dc>
                <dc href="#">Eyantra</dc>
                <dc href="#">IIT Bombay-REMOTE CENTER</dc>
                <dc href="#">Computer Center</dc>
                <dc href="#">Intranet</dc>
                <dc href="#">General Laboratories</dc>
                <dc href="#">Auditoriums And Halls</dc>
                <dc href="#">Aakash Project Labs</dc>
                
            


                </div>
            </div>
            <div class="dropdown">
            <h3 className="dropbtn">Life@GST</h3>
            <div class="dropdown-content">
                <dc href="#">Student Council</dc>
                <dc href="#">Student chapters</dc>
                <dc href="#">NSS</dc>
                <dc href="#">Dream Run</dc>
                <dc href="#">Clubs</dc>
                <dc href="#">Festivals</dc>
                <dc href="#">Capability Enhancement</dc>

            </div>
            </div>
            <h3>CIIED</h3>
            <h3>ALUMNI</h3>
            <h3>CONTACT US</h3>
            
            </div>
            
            <video className="video" src="http://www.siesgst.edu.in/assets/campus_tour.mp4" type="video/mp4"/>
            
            
            

        </div>
    
    )
}

export default Header;