   
import './About.css';
// import backgound from '../../public/assets/img/about-1.jpg';


function About() {
  return (
    <div >
        {/* About Star */}
  <section class="section-about">
    <div class="container">
      <div class="row">
        
        <div class="col-md-6 section-t8">
          <div class="row">
            <div class="col-lg-4  d-none d-lg-block">
            </div>
            <div class="col-md-12 col-lg-20 section-md-t3">
              <div class="title-box-d">
                <h3 class="title-d">
                <a className="navbar-brand text-brand" href="index.html"><span className="color-b">About</span></a>
                 <br/> <span class="color-d">Welcome to About</span> page
                  <br/> </h3>
              </div>
              <p class="color-text-a">
                Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vivamus magna justo, lacinia eget
                consectetur sed, convallis
                at tellus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vestibulum
                ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit
                neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.
              </p>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* About End */}

        </div>

 
  );
}

export default About; 
  