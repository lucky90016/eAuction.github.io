   
   
import './Header.css';
import { useState , useEffect } from 'react';
import Auth from '../AuthComponent/Auth'

function Header() {
  const [ headerContent ,setHeaderContent ] = useState();
useEffect(()=>{
  if(localStorage.getItem("role")=="admin")
  {
    setHeaderContent(<div>
      {/* Topbar Start */}

<div className="container-fluid d-none d-lg-block">
<div className="row align-items-center py-4 px-xl-5">
    <div className="col-lg-3">
        <a href="" className="text-decoration-none">
            <h1 className="m-0"><span className="text-primary">e</span>Auction</h1>
        </a>
    </div>
   
    <div className="col-lg-3 text-right">
        <div className="d-inline-flex align-items-center">
            <i className="fa fa-2x fa-phone text-primary mr-3"></i>
            <div className="text-left">
                <h6 className="font-weight-semi-bold mb-1">WELCOME ADMIN</h6>
                <small>{localStorage.getItem("email")}</small>
            </div>
        </div>
    </div>
</div>
</div>
{/* Topbar End */}
</div>)
  }
  else if(localStorage.getItem("role")=="user")
  {
    setHeaderContent(<div>
          {/* Topbar Start */}

<div className="container-fluid d-none d-lg-block">
    <div className="row align-items-center py-4 px-xl-5">
        <div className="col-lg-3">
            <a href="" className="text-decoration-none">
                <h1 className="m-0"><span className="text-primary">e</span>Auction</h1>
            </a>
        </div>
        
        <div className="col-lg-3 text-right">
            <div className="d-inline-flex align-items-center">
                <i className="fa fa-2x fa-phone text-primary mr-3"></i>
                <div className="text-left">
                    <h6 className="font-weight-semi-bold mb-1">WELCOME USER</h6>
                    <small>{localStorage.getItem("email")}</small>
                </div>
            </div>
        </div>
    </div>
</div>
{/* Topbar End */}
    </div>)
  }
 
});   {/* if remove array then it will work  for all time  {for N number calling there is no use of array} */}
  return (
    <div>
      <Auth />
    {headerContent}

   </div>
 
  );
}

export default Header; 
  