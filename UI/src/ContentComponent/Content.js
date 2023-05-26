   
import './Content.css';
import { useState ,useEffect} from 'react';
function Content() {

  const [ Content , setContent ] =useState();
  useEffect(()=>{

        setInterval(()=>{
        if(localStorage.getItem("role")=="admin" || localStorage.getItem("role")=="user")
        {
          setContent(<div></div>);
        }

      
        else
        {
          setContent(<div>
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

<div class="col-md-12 col-lg-12 section-md-t3">
          <div class="title-box-d">
            <h3 class="title-d">
              <span class="color-d"></span> Welcome to our Home page
              <br/> </h3>
          </div>
          <p class="color-text-a">
            Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vivamus magna justo, lacinia eget
            consectetur sed, convallis
            at tellus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vestibulum
            ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit
            neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.
          </p>
          <p class="color-text-a">
            Sed porttitor lectus nibh. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.
            Mauris blandit aliquet
            elit, eget tincidunt nibh pulvinar a. Vivamus magna justo, lacinia eget consectetur sed,
            convallis at tellus.
          </p>
        </div>

          </div>);
        }
      },100);
  },[]);
  return (
 
            <div>
                    {Content}
            </div>
 
 
  );
}

export default Content; 
  