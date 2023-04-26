import '../Update/Update.css';
import VectorRed from '../assets/images/Vector-red.svg'
import VidioImg from '../assets/images/Video-img.png'
import img from '../assets/images/paul-hermann.png'
function Update() {
    return (
      <div>
         <div className='container-fluid'>
             <h4 className="h4">News</h4>
    <img src={VectorRed} width='40' height='9' alt="Vector Red" className="mx-auto" />
    <h1 className="h1 text-danger" >Gerícht updates</h1>
    <div>
    <div class="row row-cols-1 row-cols-md-3  text-start mb-[50px]">
  <div class="col">
    <div class="card h-100">
      <img src={img} class="card-img-top" alt="..." width='410' height='352' />
      <div class="card-body">
        <h5 class="card-title">tips for prepping and caring for your grill</h5>
        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mus in.</p>
        <div className='d-flex justify-content-between'>
        <p className='card-more'>Read More</p>
        <span className='Card-span'>16 Apr 2021</span>
        </div>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src={img} class="card-img-top" alt="..." width='410' height='352' />
      <div class="card-body">
        <h5 class="card-title">tips for prepping and caring for your grill</h5>
        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mus in.</p>
        <div className='d-flex justify-content-between'>
        <p className='card-more'>Read More</p>
        <span className='Card-span'>16 Apr 2021</span>
        </div>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src={img} class="card-img-top" alt="..." width='410' height='352' />
      <div class="card-body">
        <h5 class="card-title">tips for prepping and caring for your grill</h5>
        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mus in.</p>
       <div className='d-flex justify-content-between'>
        <p className='card-more'>Read More</p>
        <span className='Card-span'>16 Apr 2021</span>
        </div>
        
      </div>
    </div>
  </div>
  
</div>
<button type="button" class="btn btn-outline-danger">View More</button>
    </div>
        </div>
<img src={VidioImg} width='1920' height='763' alt='Vidio img' className='mb-[120px]'/>

      </div>
       
    );
}
export default Update;