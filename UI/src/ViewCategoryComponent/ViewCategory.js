   
import './ViewCategory.css';
import { useState ,useEffect} from 'react';
import axios from 'axios';
import { _apiurlsubcategory, _apiurlcategory } from '../apiURLS';
import {Link} from 'react-router-dom';

function ViewCategory() {


  const [cList , setCatList ] =useState([]);


  useEffect(()=>{
    axios.get(_apiurlcategory+"fetch").then((response)=>{
      setCatList(response.data);
    });
  });



  return (
    <div >
        {/* About Star */}
  <section className="section-about">
    <div className="container">
      <div className="row">
        
        <div className="col-md-6 section-t8">
          <div className="row">
            <div className="col-lg-4  d-none d-lg-block">
            </div>
            <div className="col-md-12 col-lg-20 section-md-t3">
              <div className="title-box-d">
                <h1 className="title-d">
              
                 <br/> <span className="color-d">Auction List </span>  >> Category
                  <br/> </h1> 
                
              </div>
              <center>   
                         <div id="catmain">
                                {
                                cList.map((row)=>(
                                    <div class="catpart">
                                    <Link to={"/viewsubcategory/"+(row.catnm)} >
                                    <img src={"assets/uploads/caticons/"+(row.caticonnm)} height="100" width="150" />
                                    <br/>
                                    <b>{row.catnm}</b>
                                    </Link>
                                    </div>     
                                ))    
                                }
                                </div>
                        </center> 
          
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

export default ViewCategory; 
  