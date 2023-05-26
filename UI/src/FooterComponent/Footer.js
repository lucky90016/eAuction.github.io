import './Footer.css';
import { useState ,useEffect} from 'react';

function Footer() {

  const [ FooterContent , setFooterContent ] =useState();
  useEffect(()=>{
    setInterval(()=>{
    
    if(localStorage.getItem("role")=="admin" || localStorage.getItem("role")=="user")
    {
      setFooterContent(<div>
        {/* / footer Star /*/}
        <section className="section-footer">
              <div className="container">
                <div className="row">
                  
                  
                  
                </div>
              </div>
            </section> 
            <footer>
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <nav className="nav-footer">
                      
                    </nav>
                   
                    <div className="copyright-footer">
                      <p className="copyright color-text-a">
                        &copy; Copyright
                        <span className="color-a">eAuction</span> All Rights Reserved.
                      </p>
                    </div>
                    <div className="credits">
                     
                      Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
                      {/* Designed by <a href="https://bootstrapmade.com/">Lalsingh Ahir</a> */}
                    </div>
                  </div>
                </div>
              </div>
            </footer>
            {/*/ Footer End /*/}
      </div>);
    }

  
    else
    {
      setFooterContent(<div>
         {/* / footer Star /*/}
              <section className="section-footer">
              <div className="container">
                <div className="row">
                  <div className="col-sm-12 col-md-4">
                    <div className="widget-a">
                      <div className="w-header-a">
                        <h3 className="w-title-a text-brand">eAuction</h3>
                      </div>
                      <div className="w-body-a">
                        <p className="w-text-a color-text-a">
                          Enim minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip exea commodo consequat duis
                          sed aute irure.
                        </p>
                      </div>
                      <div className="w-footer-a">
                        <ul className="list-unstyled">
                          <li className="color-a">
                            <span className="color-text-a">Phone .</span> +91 XXX XXX XXXX</li>
                          <li className="color-a">
                            <span className="color-text-a">Email .</span> eAuction@example.com</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-4 section-md-t3">
                    <div className="widget-a">
                      <div className="w-header-a">
                        <h3 className="w-title-a text-brand">The Company</h3>
                      </div>
                      <div className="w-body-a">
                        <div className="w-body-a">
                          <ul className="list-unstyled">
                            <li className="item-list-a">
                              <i className="fa fa-angle-right"></i> <a href={"url"}>Site Map</a>
                            </li>
                            <li className="item-list-a">
                              <i className="fa fa-angle-right"></i> <a href={"url"}>Legal</a>
                            </li>
                            <li className="item-list-a">
                              <i className="fa fa-angle-right"></i> <a href={"url"}>Agent Admin</a>
                            </li>
                            <li className="item-list-a">
                              <i className="fa fa-angle-right"></i> <a href={"url"}>Careers</a>
                            </li>
                            <li className="item-list-a">
                              <i className="fa fa-angle-right"></i> <a href={"url"}>Affiliate</a>
                            </li>
                            <li className="item-list-a">
                              <i className="fa fa-angle-right"></i> <a href={"url"}>Privacy Policy</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-4 section-md-t3">
                    <div className="widget-a">
                      <div className="w-header-a">
                        <h3 className="w-title-a text-brand">International sites</h3>
                      </div>
                      <div className="w-body-a">
                        <ul className="list-unstyled">
                          <li className="item-list-a">
                            <i className="fa fa-angle-right"></i> <a href={"url"}>Venezuela</a>
                          </li>
                          <li className="item-list-a">
                            <i className="fa fa-angle-right"></i> <a href={"url"}>China</a>
                          </li>
                          <li className="item-list-a">
                            <i className="fa fa-angle-right"></i> <a href={"url"}>Hong Kong</a>
                          </li>
                          <li className="item-list-a">
                            <i className="fa fa-angle-right"></i> <a href={"url"}>Argentina</a>
                          </li>
                          <li className="item-list-a">
                            <i className="fa fa-angle-right"></i> <a href={"url"}>Singapore</a>
                          </li>
                          <li className="item-list-a">
                            <i className="fa fa-angle-right"></i> <a href={"url"}>Philippines</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section> 
            <footer>
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <nav className="nav-footer">
                      <ul className="list-inline">
                        <li className="list-inline-item">
                          <a href={"url"}>Home</a>
                        </li>
                        <li className="list-inline-item">
                          <a href={"url"}>About</a>
                        </li>
                        <li className="list-inline-item">
                          <a href={"url"}>Contact</a>
                        </li>
                        <li className="list-inline-item">
                          <a href={"url"}>Service</a>
                        </li>
                        <li className="list-inline-item">
                          <a href={"url"}>Register</a>
                        </li>
                        <li className="list-inline-item">
                          <a href={"url"}>Login</a>
                        </li>
                      </ul>
                    </nav>
                    <div className="socials-a">
                      <ul className="list-inline">
                        <li className="list-inline-item">
                          <a href={"url"}>
                            <i className="fa fa-facebook" aria-hidden="true"></i>
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a href={"url"}>
                            <i className="fa fa-twitter" aria-hidden="true"></i>
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a href={"url"}>
                            <i className="fa fa-instagram" aria-hidden="true"></i>
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a href={"url"}>
                            <i className="fa fa-pinterest-p" aria-hidden="true"></i>
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a href={"url"}>
                            <i className="fa fa-dribbble" aria-hidden="true"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="copyright-footer">
                      <p className="copyright color-text-a">
                        &copy; Copyright
                        <span className="color-a">eAuction</span> All Rights Reserved.
                      </p>
                    </div>
                    <div className="credits">
                      {/*
                        All the links in the footer should remain intact.
                        You can delete the links only if you purchased the pro version.
                        Licensing information: https://bootstrapmade.com/license/
                        Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/buy/?theme=EstateAgency
                      */}
                      Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
                      {/* Designed by <a href="https://bootstrapmade.com/">Lalsingh Ahir</a> */}
                    </div>
                  </div>
                </div>
              </div>
            </footer>
            {/*/ Footer End /*/}
      </div>);
    }
  },10) ;
  },[]);
  
  
  return (
            <div >
                  {FooterContent}
          </div>
   
  );
}

export default Footer; 
  