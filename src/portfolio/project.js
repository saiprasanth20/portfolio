import {Link} from "react-router-dom";
import "./style.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars} from '@fortawesome/free-solid-svg-icons';

function Projects(){

    const projectstyle = {
        textDecoration: "underline blue",
        textUnderlineOffset: "10px",
    }

    return(
        <div>
            <nav class="navbar navbar-expand-lg navbar-expand-md">
                <div class="container-fluid">
                    <Link to="/" class="navbar-brand">Sai Prasanth</Link>
                </div>
                <button type="button" class="navbar-toggler btn btn-primary" data-bs-target="#demo" data-bs-toggle="collapse">
                    <FontAwesomeIcon icon={faBars} />
                </button>
                <div class="collapse navbar-collapse" id="demo">
                    <div class="navbar-nav">
                        <Link to="/" class="nav-link me-5" >Home</Link>
                        <Link to="/about" class="nav-link me-5">About</Link>
                        <Link to="/skill" class="nav-link me-5" >Skills</Link>
                        <Link to="/projects" class="nav-link me-5" style={projectstyle}>Projects</Link>
                    </div>
                </div>
            </nav>
            <div class="skillhead"><h2>Projects</h2></div>
            <div class="skillmain">
                <div>
                    <h4>WEB DEVLOPMENT </h4>
                    <p>
                        i have made a website for online voting and surveys in which the host can conduct elections
                    </p>
                </div>
                <div>
                    <h4>MACHINE LEARNING </h4>
                    <p>
                        i have made a model for credit risk prediction based on several factors.
                    </p>
                </div>
            </div>          
            
        </div>
    )
}

export default Projects;
