import {Link} from "react-router-dom";
import "./style.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars} from '@fortawesome/free-solid-svg-icons';

function About(){
    
    const aboutstyle = {
        textDecoration: "underline blue",
        textUnderlineOffset: "10px",
    }

    return(
        <div class="outerdiv">
            <nav class="navbar navbar-expand-lg navbar-expand-md">
                <div class="container-fluid">
                    <Link to="#" class="navbar-brand">Sai prasanth</Link>
                </div>
                <button type="button" class="navbar-toggler btn btn-primary" data-bs-target="#demo" data-bs-toggle="collapse">
                    <FontAwesomeIcon icon={faBars} />
                </button>
                <div class="collapse navbar-collapse" id="demo">
                    <div class="navbar-nav">
                        <Link to="/" class="nav-link me-5" >Home</Link>
                        <Link to="/about" class="nav-link me-5" style={aboutstyle}>About</Link>
                        <Link to="/skill" class="nav-link me-5">Skills</Link>
                        <Link to="/projects" class="nav-link me-5">Projects</Link>
                    </div>
                </div>
            </nav>
            <div class="skillhead"><h2>About</h2></div>
            <div class="main-details">
                <div>
                    <label>Name:</label><span class="details">Sai Prasanth</span><br/><br/>
                    <label>Date of Birth:</label><span class="details">20 october 2002</span><br/><br/>
                    <label>Age:</label><span class="details">21</span><br/><br/>
                    <label>Degree:</label><span class="details">Bachelor of Technology</span><br/><br/>
                    <label>College:</label><span class="details">Vellore Institute of Technology, Amaravati</span><br/><br/>
                    <label>Phone No:</label><span class="details">+91 6304661684</span><br/><br/>
                    <label>Email:</label><span class="details">saiprasanthtankala@gmail.com</span><br/><br/>

                </div>
                <div class="education">
                    <h3>Education details:</h3>
                    <h5 class="clgname">VIT-AP University</h5>
                    <h6>(2021-2025)</h6>
                    <h6>B.Tech in Computer Science and Engineering and Business Systems</h6>
                    <h6>CGPA: <span class="result">8.79</span></h6>
                    <br/>
                    <h5 class="clgname">Sri Viswa Junior College</h5>
                    <h6>(2019-2021)</h6>
                    <h6>Intermediate - M.P.C</h6>
                    <h6>Percentage: <span class="result">96.0%</span></h6>

                </div>
            </div>
            <div class="work">
                <h2>Work experience</h2>
                <h5 class="clubname">SEED Club - VIT AP (2022-2023)</h5>
                <p>Worked as a lead for
                SEED club during the
                academic year 2022-2023.</p>
                <br/>
                <h5 class="clubname">INTERN -ETHNUS Aug-2023 to nov-2023</h5>
                <p>Worked as a intern for
                 Ethnus where i have learnt web devlopment.
                  </p>
                <br/>
                <h5 class="clubname">INTERN -INTRANTECH oct-2023 to nov-2023</h5>
                <p>Worked as a intern for
                 INTRAINTECH where i have devloped my experience on AI and ML.
                  </p>
                <br/>
            </div>
        </div>
    )
}
export default About;