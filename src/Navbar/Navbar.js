import SiteLogo from '../../src/assets/images/site-logo.svg'
import '../Navbar/Navbar.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

function Navbara() {
  return (
    <>
      {[false, 'sm', 'md', 'lg', 'xl', 'xxl'].slice(1,2).map((expand) => (
        <Navbar  key={expand}  expand={expand} className="Nav">
          <Container fluid className='d-flex align-items-center'>
            <Navbar.Brand href="#"> <img
              src={SiteLogo}
              width="135"
              height="47"
              className=""
              alt="Site logo"
            /></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Body className='align-items-center' >
                <Nav className="justify-content-end  flex-grow-1 pe-3">
                  <Nav.Link className='mx-4 link' href="#action1">Menu</Nav.Link>
                  <Nav.Link className='mx-4 link' href="#action1">News</Nav.Link>
                  <Nav.Link className='mx-4 link' href="#action1">About Us</Nav.Link>
                  <Nav.Link className='mx-4 link' href="#action1">Contact Us</Nav.Link>
                
                </Nav>
                <Button variant="outline-light" className=' Navbar-btn align-items-center mb-0 '>Log in</Button>{' '}
               
                
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Navbara;