   
import './Nav.css';
import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react';
import Auth from '../AuthComponent/Auth'
function Nav() {

  const [NavContent , setNavContent ] =useState(); 
  useEffect(()=>{
      if(localStorage.getItem("role")=="admin")
      {
        setNavContent(<div>

          {/*/ Nav Star /*/}
      <nav className="navbar navbar-default navbar-trans navbar-expand-lg fixed-top">
        <div className="container">
          <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarDefault"
            aria-controls="navbarDefault" aria-expanded="false" aria-label="Toggle navigation">
            <span></span>
            <span></span>
            <span></span>
          </button>
          <a className="navbar-brand text-brand" href="index.html">e<span className="color-b">Auction</span></a>
          <button type="button" className="btn btn-link nav-search navbar-toggle-box-collapse d-md-none" data-toggle="collapse"
            data-target="#navbarTogglerDemo01" aria-expanded="false">
            <span className="fa fa-search" aria-hidden="true"></span>
          </button>
          <div className="navbar-collapse collapse justify-content-center" id="navbarDefault">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" ><Link style={{"color":"#2eca6a"}}  to="/admin">Admin Home</Link></a>
                
              </li>
              <li className="nav-item">
              <a className="nav-link active" ><Link style={{"color":"#2eca6a"}}  to="/manageusers">Manage Users</Link></a>
                
              </li>
             
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href={"url"}  style={{"color":"#2eca6a"}}  id="navbarDropdown" role="button" data-toggle="dropdown"
                  aria-haspopup="true" aria-expanded="false">
                  Category</a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item"><Link style={{"color":"#2eca6a"}}  to="/addcategory">Add Category</Link></a>
                  <a className="dropdown-item" ><Link style={{"color":"#2eca6a"}}  to="/addsubcategory">Add Sub Category</Link></a>
                 
                </div>
              </li>

              
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href={"url"}  style={{"color":"#2eca6a"}}   id="navbarDropdown" role="button" data-toggle="dropdown"
                  aria-haspopup="true" aria-expanded="false">
                  Settings</a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item"><Link style={{"color":"#2eca6a"}}  to="/cpadmin">Change Passworsd</Link></a>
                  <a className="dropdown-item" ><Link style={{"color":"#2eca6a"}}  to="/epadmin">Edit Profile</Link></a>
                 
                </div>
              </li>
              
              <li className="nav-item">
                <button style={{"backgroundColor":"black"}} type="button" className="btn btn-primary"><Link style={{"color":"#2eca6a"}}  to="/Logout">Logout</Link></button>
              </li>
              
            </ul>
          </div> 
          
        </div>
      </nav>
      {/*/ Nav End /*/}
            
         </div>);
      }
      else if (localStorage.getItem("role")=="user")
      {
        setNavContent(<div>
          {/*/ Nav Star /*/}
        <nav className="navbar navbar-default navbar-trans navbar-expand-lg fixed-top">
          <div className="container">
            <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarDefault"
              aria-controls="navbarDefault" aria-expanded="false" aria-label="Toggle navigation">
              <span></span>
              <span></span>
              <span></span>
            </button>
            <a className="navbar-brand text-brand" href="index.html">e<span className="color-b">Auction</span></a>
            <button type="button" className="btn btn-link nav-search navbar-toggle-box-collapse d-md-none" data-toggle="collapse"
              data-target="#navbarTogglerDemo01" aria-expanded="false">
              <span className="fa fa-search" aria-hidden="true"></span>
            </button>
            <div className="navbar-collapse collapse justify-content-center" id="navbarDefault">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" ><Link  style={{"color":"#2eca6a"}} to="/user">User Home</Link></a>
                </li>
               
              <li className="nav-item">
              <a className="nav-link active" ><Link style={{"color":"#2eca6a"}}  to="/viewcategory">Search Auction</Link></a>
                
              </li>

                <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href={"url"}  style={{"color":"#2eca6a"}}  id="navbarDropdown" role="button" data-toggle="dropdown"
                  aria-haspopup="true" aria-expanded="false">
                  Settings</a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item"><Link  style={{"color":"#2eca6a"}} to="/cpadmin">Change Passworsd</Link></a>
                  <a className="dropdown-item" ><Link  style={{"color":"#2eca6a"}} to="/epadmin">Edit Profile</Link></a>
                 
                </div>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href={"url"} style={{"color":"#2eca6a"}}  id="navbarDropdown" role="button" data-toggle="dropdown"
                  aria-haspopup="true" aria-expanded="false">
                  Manage Product</a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item"><Link  style={{"color":"#2eca6a"}} to="/apuser">Add Product</Link></a>
                  <a className="dropdown-item" ><Link style={{"color":"#2eca6a"}}  to="/vpuser">View Product</Link></a>
                 
                </div>
              </li>
                <li className="nav-item">
                  <button style={{"backgroundColor":"black"}} type="button" className="btn btn-primary"><Link style={{"color":"#2eca6a"}} to="/Logout">Logout</Link></button>
                </li>
                
              </ul>
            </div>
            
          </div>
        </nav>
        {/*/ Nav End /*/}
        </div>);
      }
      else
      {
        setNavContent(<div>

          {/*/ Nav Star /*/}
      <nav className="navbar navbar-default navbar-trans navbar-expand-lg fixed-top">
        <div className="container">
          <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarDefault"
            aria-controls="navbarDefault" aria-expanded="false" aria-label="Toggle navigation">
            <span></span>
            <span></span>
            <span></span>
          </button>
          <a className="navbar-brand text-brand" href="index.html">e<span className="color-b">Auction</span></a>
          <button type="button" className="btn btn-link nav-search navbar-toggle-box-collapse d-md-none" data-toggle="collapse"
            data-target="#navbarTogglerDemo01" aria-expanded="false">
            <span className="fa fa-search" aria-hidden="true"></span>
          </button>
          <div className="navbar-collapse collapse justify-content-center" id="navbarDefault">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" ><Link  style={{"color":"#2eca6a"}} to="/">Home</Link></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" ><Link  style={{"color":"#2eca6a"}} to="/About">About</Link></a>
              </li>
              <li className="nav-item">
                <a className="nav-link"><Link  style={{"color":"#2eca6a"}} to="/Contact">Contact</Link></a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href={"url"} style={{"color":"#2eca6a"}}  id="navbarDropdown" role="button" data-toggle="dropdown"
                  aria-haspopup="true" aria-expanded="false">
                  Service</a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item"><Link  style={{"color":"#2eca6a"}} to="/Blog">Blog</Link></a>
                  <a className="dropdown-item" ><Link style={{"color":"#2eca6a"}}  to="/Portfolio">Portfolio</Link></a>
                 
                </div>
              </li>
      
              <li className="nav-item">
                <a className="nav-link"><Link style={{"color":"#2eca6a"}}  to="/Register">Register</Link></a>
              </li>
              
              <li className="nav-item">
                {/* <a className="nav-link" ><Link to="/Login">Login</Link></a> */}
                {/* <a className="btn btn-primary py-2 px-4 ml-auto d-none d-lg-block"   ><Link to="/Login">Login</Link></a> */}
                <button style={{"backgroundColor":"black"}} type="button" className="btn btn-primary"><Link  style={{"color":"#2eca6a"}}  to="/Login">Login</Link></button>
              </li>
              
            </ul>
          </div>
         
        </div>
      </nav>
      {/*/ Nav End /*/}
            
         </div>); 
      }
  })
    return (
      <div>
          <Auth />
    {NavContent}
      </div>
  ); 
}

export default Nav; 
   