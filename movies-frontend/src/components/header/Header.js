import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideoSlash } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {NavLink} from "react-router-dom";

//use React bootstrap components to create a responsive layout for our navigation menu 
// which will be displayed at the top of the screen

/* 
use the FA video flash font awesome icon for the logo in the top left of the screen within the navigation bar
inside the header component 
the login/registration/watchlist buttons are superficial to indicate we could extend the functionality to include them later
*/

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container fluid>
                <Navbar.Brand href="/" style={{"color":'gold'}}>
                    <FontAwesomeIcon icon ={faVideoSlash}/>Gold
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{maxHeight: '100px'}}
                            navbarScroll
                        >
                        <NavLink className ="nav-link" to="/">Home</NavLink>
                        <NavLink className ="nav-link" to="/watchList">Watch List</NavLink>      
                    </Nav>
                    <Button variant="outline-info" className="me-2">Login</Button>
                    <Button variant="outline-info">Register</Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
      )
}

export default Header