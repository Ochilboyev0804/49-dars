import './Header.css';
import HeroImg from '../../src/assets/images/hero-img.png'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function Header() {
    return (
        <div className='hero pt-[80px] pb-[237px]'>
              <Container fluid>
          <Row className='d-flex align-items-center justify-content-between'>
            <Col className='lg:text-start md:text-center md:mb-[80px] lg:mb-0 mb-[80px]' lg={5} md={12}>
              <p className='subtitle'>Chase the new Flavour</p>
              <h1 className='title'>The key to Fine dining</h1>
              <p className='text'>Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus </p>
              <Button variant="outline-light" className='btn'>Explore Menu</Button>{' '}
            </Col>
            <Col className='lg:text-end md:text-center ' lg={7} md={12}>
              <img src={HeroImg} width='824' height='604' alt='hero images' className="d-inline  "  />
            </Col>
          </Row>
    
        
        </Container>
        </div>
      
      );
    }
    

export default Header