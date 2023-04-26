import '../Footer/Footer.css';
import SiteLogo from '../../src/assets/images/site-logo.svg';
import twitter from '../../src/assets/images/twitter.svg';
import imstagram from '../../src/assets/images/instagram.svg';
import facebook from '../../src/assets/images/facebook.svg';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function Footer() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return(
        <div className='Footer'>
            <div className='container-fluid '>
                <div className='Footer-top pt-[40px]'> 

                <Button variant="primary" onClick={handleShow}>
                Newsletter
      </Button>
<div className='Modalbg'>
<Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        
      >
        <Modal.Header className='Modalbg' closeButton>
        
          <Modal.Title>
            <h4 className='Footer-subtitle'>Newsletter</h4>
          
<h1 className='Footer-title'>Subscribe to Our Newsletter</h1>
<p className='Footer-text'>And never miss latest Updates!</p>
<div className='d-flex justify-content-between'>
<input type='email' placeholder='Email Address' className='input' ></input>
        <button className='Footer-button'>Subscribe</button>
</div>
       
        <Button className='mb-0 pb-0 mt-[20px] Footer-btn' variant="secondary" onClick={handleClose}>
            Close
          </Button>
          </Modal.Title>
        </Modal.Header>
      </Modal>
</div>
      
                </div>
{/* <div  className='lg-d-flex md-d-block lg:justify-content-between md:justify-content-center align-items-center'>
<div className='text-center md:mb-[50px]'>
    <h2 className='Footer-h2'>Contact Us</h2>
    <p className='Footer-p mb-[10px]'>9 W 53rd St, London, NY 10019, UK</p>
    <p className='Footer-p mb-[8px]'>+1 212-344-1230
</p>
    <p className='Footer-p'>+1 212-555-1230</p>
</div>
<div className=' text-center md:mb-[50px]'>
    <img src={SiteLogo} width='336' height='117' alt='Site logo' className='mx-auto'/>
    <p className='Footer-p mb-[45px] mt-[32px]'>"The best way to find yourself is to lose yourself in the <br /> service of others.”</p>
    <div className='d-flex justify-content-center gap-[17px] mb-[80px] align-items-center'>
    <img src={facebook} width='24' height='24' alt='facebook' />
    <img src={twitter} width='24' height='24' alt='twitter' />
    <img src={imstagram} width='24' height='24' alt='imstagram' />
    </div>
    <p className='Footer-p'>2022 Pop online. All Rights reserved.</p>

   


</div>
<div className='text-center md:mb-[50px]'>
<h2 className='Footer-h2'>Working Hours</h2>
    <p className='Footer-p mb-[12px]'>Monday-Friday: <br />
08:00 am -12:00 am</p>
    <p className='Footer-p'>Saturday-Sunday: <br/>
07:00am -11:00 pm
</p>
</div>
</div> */}
<div>
<Container fluid>
      <Row>
        <Col lg={4} md={12}><div className='text-center mb-[50px]'>
    <h2 className='Footer-h2'>Contact Us</h2>
    <p className='Footer-p mb-[10px]'>9 W 53rd St, London, NY 10019, UK</p>
    <p className='Footer-p mb-[8px]'>+1 212-344-1230
</p>
    <p className='Footer-p'>+1 212-555-1230</p>
</div>
</Col>
        <Col lg={4} md={12}><div className=' text-center mb-[50px]'>
    <img src={SiteLogo} width='336' height='117' alt='Site logo' className='mx-auto'/>
    <p className='Footer-p mb-[45px] mt-[32px]'>"The best way to find yourself is to lose yourself in the <br /> service of others.”</p>
    <div className='d-flex justify-content-center gap-[17px] mb-[80px] align-items-center'>
    <img src={facebook} width='24' height='24' alt='facebook' />
    <img src={twitter} width='24' height='24' alt='twitter' />
    <img src={imstagram} width='24' height='24' alt='imstagram' />
    </div>
    <p className='Footer-p'>2022 Pop online. All Rights reserved.</p>

   


</div>
</Col>
        <Col lg={4} md={12}><div className='text-center mb-[50px]'>
<h2 className='Footer-h2'>Working Hours</h2>
    <p className='Footer-p mb-[12px]'>Monday-Friday: <br />
08:00 am -12:00 am</p>
    <p className='Footer-p'>Saturday-Sunday: <br/>
07:00am -11:00 pm
</p>
</div>
</Col>
      </Row>
    </Container>
</div>

            </div>
        </div>
    )
}
export default Footer;

