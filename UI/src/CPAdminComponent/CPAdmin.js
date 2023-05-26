   
import './CPAdmin.css';
import { useState } from 'react';
import axios from 'axios';
import { _apiurluser } from '../apiURLS';
import { useNavigate } from 'react-router-dom';

function CPAdmin() {
    
  const [ opass , setOldPassword] =useState();
  const [ npass , setNewPassword] =useState();
  const [ cpass , setConfirmNewpassword] =useState();
  const [ output , setOutPut] =useState();

  const handleSubmit =()=>{
    axios.get(_apiurluser+"fetch?email"+localStorage.getItem("email")+"&password="+opass).then((response)=>{
   if(response.data.length!=0)
   {
    if(npass==cpass)
    {
       let updateDetails={"condition_obj":{"email":localStorage.getItem("email")},"set_condition":{"password":cpass}};
          axios.patch(_apiurluser+"update",updateDetails).then((response)=>{
           setOutPut("password chnage successfully")
           setOldPassword("");
           setNewPassword("");
           setConfirmNewpassword("");
             }).catch((err)=>{
              console.log(err);
             })
    } 
    else
    setOutPut("New & Confirm new password mismatch ");
    setConfirmNewpassword("");
   }
   else
   {
    setOutPut("Invalid old password ");
    setOldPassword("");

   }  
    })
 
  };


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
                
                 <br/> <span class="color-d">Change  </span> Password Here !!!
                  <br/> </h3>
              </div>
              <font style={{"color":"blue"}}>{output}</font>
              <form >   
               
                      
                      <div className="form-group">
                        <label for="opdpwd"> Old Password</label>
                        <input type="password" className="form-control" 
                        value={opass} onChange={e => setOldPassword(e.target.value)} id="exampleInputPassword1" placeholder="Password"/>
                      </div>
                      <div className="form-group">
                        <label for="newpwd"> New Password</label>
                        <input type="password" className="form-control" 
                        value={npass} onChange={e => setNewPassword(e.target.value)} id="exampleInputPassword1" placeholder="Password"/>
                       
                      </div>
                      <div className="form-group">
                        <label for="cpwd"> Confirm New Password</label>
                        <input type="password" className="form-control" 
                        value={cpass} onChange={e => setConfirmNewpassword(e.target.value)} id="exampleInputPassword1" placeholder="Password"/>
                      </div>
                      
                      <button type="button" onClick={handleSubmit}  className="btn btn-primary">Change Password</button>
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
export default CPAdmin; 
  