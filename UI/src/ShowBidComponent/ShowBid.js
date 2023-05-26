   
import './ShowBid.css';
import { useState ,useEffect} from 'react';
import axios from 'axios';
import { _apiurlsubcategory, _apiurlcategory , _apiurlproduct , _apiurlbid} from '../apiURLS';
import {Link, useParams} from 'react-router-dom';



function ShowBid() {

  const params = useParams();
  const [ bidDetails , setBidDetails ] = useState([]);
  

  useEffect(()=>{
    
   
    
    axios.get(_apiurlbid+"fetch?pid="+params.pid).then((response)=>{
    setBidDetails(response.data)
      
    })
  
  });
 
  return (
    <div >
        {/* About Star */}
  <section class="section-about">
    <div class="container">
      <div class="row">
        
        <div class="col-md-12 section-t8">
          <div class="row">
            <div class="col-lg-8  d-none d-lg-block">
            </div>
            <div class="col-md-12 col-lg-20 section-md-t3">
              <div class="title-box-d">
                <h3 class="title-d">
              
                 <br/> <span class="color-d">ShowBid </span> Product
                  <br/> </h3>
                
                </div>
                <table class="table table-bordered"  style={{ "border": "2px solid black"}} cellspacing="10" cellpadding="10">
                        <tr style ={{"textAlign":"center" }}>
                        <th class="bg-success" >BidID</th>
                        <th class="bg-success">ProductID</th>
                        <th class="bg-success">UserID</th>
                        <th class="bg-success">Bid Price</th>
                        <th class="bg-success" >Info</th>    
                        </tr>   

                        {
                        bidDetails.map((row)=>(
                            <tr style ={{"textAlign":"center"}}>
                            <td>{row._id}</td>
                            <td>{row.pid}</td>
                            <td>{row.uid}</td>
                            <td>{row.bidprice}</td>
                            <td>{row.info}</td>
                            </tr>
                        ))   
                        }
                        <tr></tr>

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

export default ShowBid; 
  