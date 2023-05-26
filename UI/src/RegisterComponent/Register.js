import './Register.css';
import {useState} from 'react';
import axios from 'axios';
import { _apiurluser } from '../apiURLS';

function Register() {

  const [ output ,setOutput] =useState();
  const [ name ,setName] =useState(); 
  const [ email ,setEmail] =useState();
  const [ password ,setPassword] =useState();
  const [ mobile ,setMobile] =useState();
  const [ address ,setAddress] =useState();
  const [ city ,setCity] =useState();
  const [ gender ,setGender] =useState();



  const handleSubmit=()=>{
     var userDetails ={"name":name,"email":email, "password":password,"mobile":mobile,"address":address,"city":city,"gender":gender}
    axios.post(_apiurluser+"save",userDetails).then((response)=>{
      
      setOutput(response.data.result);  
      setName("");
      setEmail(""); 
      setPassword("");
      setMobile("");
      setAddress("");
      setCity("");
    }).catch((err)=>{
      console.log(err);
    })
  }

  return (
    <div >
    {/* Register Start */}
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
                <a className="navbar-brand text-brand" href="index.html"><span className="color-b">Register Here!!</span></a>
                 <br/> <span className="color-d">Welcome to Register</span> page
                  <br/> </h3>
              </div>

              <font style={{"color":"blue"}}>{output}</font>
              <form >   
                {/* onSubmit={handleSubmit} */}
              <div className="form-group">
                        <label for="exampleInputPassword1">Name</label>
                        <input type="name" className="form-control"  value={name} onChange={e => setName(e.target.value)} id="exampleInputPassword1" placeholder="Name"/>
                      </div>
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
                      <div>
                      <label for="exampleInputPassword1">Mobile</label>
                        <input type="Mobile" className="form-control" value={mobile} onChange={e => setMobile(e.target.value)} id="exampleInputPassword1" placeholder="Mobile"/>
                     </div>
                    <div>
                    <label for="exampleInputPassword1">Address</label>
                        <input type="Address" className="form-control" 
                        value={address} onChange={e => setAddress(e.target.value)} id="exampleInputPassword1" placeholder="Address"/>
                    </div>
                        <div>
                        <label for="exampleInputPassword1">City</label>
                        <input type="city" className="form-control" 
                        value={city} onChange={e => setCity(e.target.value)}id="exampleInputPassword1" placeholder="City"/>
                        </div>
                        <br/>
                        <div>
                        <label for="exampleInputPassword1">Gender</label>
                        <div  className="form-check">
                        {/* <input  className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked/> */}
                       
                      </div>
                      <div  className="form-check" >
                        <input  className="form-check-input" type="radio" name="gender" id="exampleRadios2" 
                       value="Male" onChange={e => setGender(e.target.value)}/>
                        <label  className="form-check-label" for="exampleRadios2">
                          Male
                        </label>
                      </div>
                      <div  className="form-check">
                        <input  className="form-check-input" type="radio" name="gender" value="Female" id="exampleRadios2"  onChange={e => setGender(e.target.value)}/>
                        <label  className="form-check-label" for="exampleRadios2">
                          Female
                        </label>
                      </div>
                        </div>
                     <br/>
                      
                      
                      <button type="button" onClick={ handleSubmit } className="btn btn-primary">Submit</button>
              </form>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Register End */}

    </div>
  );
}
export default Register; 

