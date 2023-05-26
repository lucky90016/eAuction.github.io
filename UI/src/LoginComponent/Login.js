   
import './Login.css';

import {useState} from 'react';
import axios from 'axios';
import { _apiurluser } from '../apiURLS';
import { useNavigate } from 'react-router-dom';


function Login() {
 const navigate = useNavigate();
  const [ output ,setOutput] =useState();
  const [ email ,setEmail] =useState(null);
  const [ password ,setPassword] =useState(null);

  const handleSubmit=()=>{
    var userDetails ={"email":email, "password":password}
    
   axios.post(_apiurluser+"login",userDetails).then((response)=>{
     if(response.data.token!="error")
     {
        let user=response.data.userDetails;
          localStorage.setItem("token",response.data.token);
          localStorage.setItem("_id",user._id);
          localStorage.setItem("name",user.name);
          localStorage.setItem("email",user.email);
          localStorage.setItem("mobile",user.mobile);
          localStorage.setItem("address",user.address);
          localStorage.setItem("city",user.city);
          localStorage.setItem("gender",user.gender);
          localStorage.setItem("role",user.role);
          localStorage.setItem("infoAdmin",user.info);
          user.role=="admin"?navigate("/admin"):navigate("/user");

     }
     else 
     {
        setOutput("Invalid user or varify your account");
          setEmail(""); 
          setPassword("");
     } 
   })
 }
  return (
    <div > 
    {/* Login Start */}
    <section className="section-about">
    <div className="container">
      <div className="row">
        
        <div className="col-md-6 section-t8">
          <div className="row">
            <div className="col-lg-4  d-none d-lg-block">
            </div>
            <div className="col-md-12 col-lg-20 section-md-t3">
              <div className="title-box-d">
                <h3 className="title-d">
                <a className="navbar-brand text-brand" href="index.html"><span className="color-b">Login Here!!</span></a>
                 <br/> <span className="color-d">Welcome to Login</span> page
                  <br/> </h3>
              </div>

              <font style={{"color":"red "}}>{output}</font>
             
             
              <form >   
               
                      <div className="form-group" >
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" 
                        value={email} onChange={e => setEmail(e.target.value)} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                      </div>
                      <div className="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" 
                        value={password} onChange={e => setPassword(e.target.value)} id="exampleInputPassword1" placeholder="Password"/>
                      </div>
                      
                      
                      <button type="button"  onClick={handleSubmit}  className="btn btn-primary">Login</button>
              </form>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

{/* Login End */}
</div>
 
 
  );
}

export default Login; 
