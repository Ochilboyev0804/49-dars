import "./Customer.css";
import Vector from '../assets/images/Vector.svg';
import calendar from '../assets/images/calendar.svg';
import eye from '../assets/images/eye.svg';
import clock from '../assets/images/clock.svg';
import ArrowLeft from '../assets/images/arrow-left.svg';
import ArrowRight from '../assets/images/arrow-right.svg';
function Customer() {
    return (
<div className="customer container-fluid pb-[80px]">
    <h4 className="h4">Testimony</h4>
    <img src={Vector} width='40' height='9' alt="Vector" className="mx-auto" />
    <h1 className="h1">Happy customers</h1>
   <div className="d-lg-flex d-sm-block justify-content-between">

        <div className="customer__block p-[40px] text-start">
            <h4 className="customer__title">Maria</h4>
            <p className="customer__subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing <br/> sit. auctor sit iaculis in arcu. Vulputate nulla lobortis <br/> mauris eget sit. Nulla scelerisque scelerisq...</p>
           <div className="d-flex">
           <img src={calendar} width='16' height='16' alt="calendar" className="mr-[4px]" />
           <span className="span mr-[20px]">06/02/2022</span>
            <img src={clock} width='16' height='16' alt="clock" className="mr-[4px]" />
           <span className="span mr-[20px]">11:15</span>
            <img src={eye} width='16' height='16' alt="eye" className="mr-[4px]" />
           <span className="span">222</span>
           </div>
            
        </div>
        <div className="customer__block p-[40px] text-start">
            <h4 className="customer__title">Maria</h4>
            <p className="customer__subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing <br/> sit. auctor sit iaculis in arcu. Vulputate nulla lobortis <br/> mauris eget sit. Nulla scelerisque scelerisq...</p>
           <div className="d-flex">
           <img src={calendar} width='16' height='16' alt="calendar" className="mr-[4px]" />
           <span className="span mr-[20px]">06/02/2022</span>
            <img src={clock} width='16' height='16' alt="clock" className="mr-[4px]" />
           <span className="span mr-[20px]">11:15</span>
            <img src={eye} width='16' height='16' alt="eye" className="mr-[4px]" />
           <span className="span">222</span>
           </div>
            
        </div>
    <div className="customer__block p-[40px] text-start">
            <h4 className="customer__title">Maria</h4>
            <p className="customer__subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing <br/> sit. auctor sit iaculis in arcu. Vulputate nulla lobortis <br/> mauris eget sit. Nulla scelerisque scelerisq...</p>
           <div className="d-flex">
           <img src={calendar} width='16' height='16' alt="calendar" className="mr-[4px]" />
           <span className="span mr-[20px]">06/02/2022</span>
            <img src={clock} width='16' height='16' alt="clock" className="mr-[4px]" />
           <span className="span mr-[20px]">11:15</span>
            <img src={eye} width='16' height='16' alt="eye" className="mr-[4px]" />
           <span className="span">222</span>
           </div>
            
        </div>
   </div>
<div className="d-flex align-items-center justify-content-center mb-[96px]">
<img src={ArrowLeft} className='mr-[20px]' width="40" height="40" alt='Arrow left'/>
<span className="page">01-02 03 04</span>
<img src={ArrowRight} className='ml-[20px]' width="40" height="40" alt='Arrow right'/>
</div>
</div>
    );
}
export default Customer;