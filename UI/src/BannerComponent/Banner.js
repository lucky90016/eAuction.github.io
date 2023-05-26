   
import './Banner.css';
import { useState ,useEffect} from 'react';
function Banner() {

  const [ BannerContent , setBannerContent ] =useState();
  useEffect(()=>{

        setInterval(()=>{
        if(localStorage.getItem("role")=="admin" || localStorage.getItem("role")=="user")
        {
          setBannerContent(<div></div>);
        }

      
        else
        {
          setBannerContent(<div>
            <div id="demo" class="carousel slide" data-ride="carousel">
  <ul class="carousel-indicators">
    <li data-target="#demo" data-slide-to="0" class="active"></li>
    <li data-target="#demo" data-slide-to="1"></li>
    <li data-target="#demo" data-slide-to="2"></li>
  </ul>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="assets/img/slide-1.jpg" alt="eAuction" width="1100" height="500"/>
      <div class="carousel-caption">
        <h3>eAuction</h3>
        <p>Bid your dream Product</p>
      </div>   
    </div>
    <div class="carousel-item">
      <img src="assets/img/slide-2.jpg" alt="eAuction" width="1100" height="500"/>
      <div class="carousel-caption">
        <h3>eAuction</h3>
        <p>Bid your dream Product</p>
      </div>   
    </div>
    <div class="carousel-item">
      <img src="assets/img/slide-3.jpg" alt="eAuction" width="1100" height="500"/>
      <div class="carousel-caption">
        <h3>eAuction</h3>
        <p>Bid your dream Product</p>
      </div>   
    </div>
  </div>
  <a class="carousel-control-prev" href="#demo" data-slide="prev">
    <span class="carousel-control-prev-icon"></span>
  </a>
  <a class="carousel-control-next" href="#demo" data-slide="next">
    <span class="carousel-control-next-icon"></span>
  </a>
</div>

          </div>);
        }
      },100);
  },[]);
  return (
 
            <div>
                    {BannerContent}
            </div>
 
 
  );
}

export default Banner; 
  