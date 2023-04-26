import Card from 'react-bootstrap/Card';
import Burger from '../assets/images/Burger.png'
import Star from '../assets/images/Star.svg'
import StarYellow from '../assets/images/Star-yellow.svg'
import './Cards.css';

function Cards() {
  return (

 
     <Card  style={{ width: '18rem',  background: '#FFFFFF', border: 'none' }} className='rounded'>
      <Card.Img  variant="center" className='d-block mt-[20px]' src={Burger} width="270" hidden="183" alt='Burger' />
      <Card.Body>
        <Card.Text className='Card__title'>
        Barbecue Shish kebab Shashlik Skewer
        </Card.Text>
      <div  className='d-flex justify-content-center my-[20px] '>
      <img src={StarYellow} width='20' height='20' alt='Star' />
      <img src={StarYellow} width='20' height='20' alt='Star' />
      <img src={StarYellow} width='20' height='20' alt='Star' />
      <img src={StarYellow} width='20' height='20' alt='Star' />
      <img src={Star} width='20' height='20' alt='Star' />
      </div>
      <Card.Text>
        <span className='price' >$12.00</span>
        </Card.Text>
      </Card.Body>
    </Card>
    
    

  )
}

export default Cards;
