   
import './ManageUsers.css';
import {useState , useEffect} from 'react';
import axios from 'axios';
import { _apiurluser } from '../apiURLS';
import { Link ,useNavigate} from 'react-router-dom';


function Manageusers() {
  const [userDetails , setUserDetails]= useState([]);
  const navigate =useNavigate() ;
  useEffect(()=>{
    axios.get(_apiurluser+"fetch?role=user",userDetails).then((response)=>{
   setUserDetails(response.data)
    })

  });

  const manageUserStatus=(_id,s )=>{
        if(s==="block")
        {
          let updateDetails={"condition_obj":{"_id":_id},"set_condition":{"status":0}};
          axios.patch(_apiurluser+"update",updateDetails).then((response)=>{
            navigate("/manageusers");
             }).catch((err)=>{
              console.log(err);
             }) 
        }
        else if(s==="verify")
        {
          let updateDetails={"condition_obj":{"_id":_id},"set_condition":{"status":1}};
          axios.patch(_apiurluser+"update",updateDetails).then((response)=>{
            navigate("/manageusers");
             }).catch((err)=>{
              console.log(err);
             }) 
        }
        else
        {
            let deleteDetails={"data":{"_id":_id}};
            axios.delete(_apiurluser+"delete",deleteDetails).then((response)=>{
                navigate("/manageusers");
            }).catch((err)=>{
                console.log(err);
            });            
        }
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
                <a className="navbar-brand text-brand" href="index.html">View & Manage<span className="color-b">User Details</span></a>

                  <br/> </h3>
              </div>


              
                <table class="table table-bordered"  >
                  <tr>
                    <th class="bg-success">RegId</th>
                    <th class="bg-success">Name</th>
                    <th class="bg-success">Email</th>
                    <th class="bg-success">Mobile </th>
                    <th class="bg-success">Address</th>
                    <th class="bg-success">City</th>
                    <th class="bg-success">Gender</th>
                    <th class="bg-success">Info</th>
                    <th class="bg-success">Status</th>
                    <th class="bg-success">Action</th>
                  </tr>
                
                {
                  userDetails.map((row)=>(
                    <tr>
                    <td>{row._id}</td>
                    <td>{row.name}</td>
                    <td>{row.email}</td>
                    <td>{row.mobile}</td>
                    <td>{row.address}</td>
                    <td>{row.city}</td>
                    <td>{row.gender}</td>
                    <td>{row.info}</td> 
                    <td>
                      {
                      row.status===1 && <a onClick={()=>{manageUserStatus(row._id,"block")}} ><Link style={{"color":"orange"}} to="">Block User </Link></a>
                       }
                       {
                      row.status===0 && <a onClick={()=>{manageUserStatus(row._id,"verify")}}  > <Link style={{"color":"green"}} to="">Verify User</Link></a>
                       }
                    </td>
                    <td><a  onClick={()=>{manageUserStatus(row._id,"delete")}}  ><Link style={{"color":"red"}} to="">Delete User</Link></a> </td> 
                    </tr>
                  ))
                }
                 </table>
         
              
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

export default Manageusers; 
  