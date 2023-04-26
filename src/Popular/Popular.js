import Card from '../Card/Cards';
import ArrowLeft from '../assets/images/arrow-left.svg';
import ArrowRight from '../assets/images/arrow-right.svg';
import IconPopular from '../assets/images/icon.svg';
import './Popular.css';
import { Col, Row } from 'react-bootstrap';
function Popular() {
    return (
        <div className='popular container-fluid pt-[120px]'  >
            <div className=' d-flex justify-content-between'>
            <h1 className='Popular___title text-start'>Popular Dishes</h1>
            <div className='d-flex'>
            <img src={ArrowLeft} className='mr-[20px]' width="40" height="40" alt='Arrow left'/>
            <img src={ArrowRight} width="40" height="40" alt='Arrow right'/>
            </div>
            </div>
            <Row className='d-flex justify-content-between row__block'>
                <Col className='' lg={3} md={6} sm={12}>
                <Card/>
                </Col>
                <Col className='' lg={3} md={6} sm={12}>
                <Card/>
                </Col>
                <Col className='' lg={3} md={6} sm={12}>
                <Card/>
                </Col>
                <Col className='' lg={3} md={6} sm={12}>
                <Card/>
                </Col>
            
            </Row>
            <div className='d-flex justify-content-end  mt-[71px] mb-[76px]'>
            <img src={IconPopular}  width="93" height="93" alt='Icon Popular'/>

            </div>
       

        </div>

    )
}

export default Popular; 