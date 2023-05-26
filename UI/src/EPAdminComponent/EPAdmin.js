   
import './EPAdmin.css';
import { useEffect ,useState } from 'react';
import axios  from 'axios';
import { Link ,useNavigate} from 'react-router-dom';
import { _apiurluser } from '../apiURLS';

function EPAdmin() {
 
  const [ output ,setOutPut] =useState();
  const [ name ,setName] =useState(); 
  const [ email ,setEmail] =useState();
  const [ mobile ,setMobile] =useState();
  const [ address ,setAddress] =useState();
  const [ city ,setCity] =useState();
  const [ gender ,setGender] =useState();
  useEffect(()=>{
    axios.get(_apiurluser+"fetch?email="+localStorage.getItem("email")).then((response)=>{
      setName(response.data[0].name);
      setEmail(response.data[0].email); 
      setMobile(response.data[0].mobile);
      setAddress(response.data[0].address);
      setCity(response.data[0].city);
     
    })
   
  },[])
  const handleSubmit=()=>{

    let updateDetails={"condition_obj":{"email":localStorage.getItem("email")},"set_condition":{"name":name,"mobile":mobile,"address":address,"city":city,"gender":gender}};
    axios.patch(_apiurluser+"update",updateDetails).then((response)=>{
      setOutPut("Profile Edited Successfully")
   
        }).catch((err)=>{
         console.log(err);
        })
   
 }

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
                
                 <br/> <span class="color-d">Edit </span> Profile Here !!!
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
                      
                      
                      <button type="button" onClick={handleSubmit} className="btn btn-primary">Update</button>
              </form>
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

export default EPAdmin; 
  