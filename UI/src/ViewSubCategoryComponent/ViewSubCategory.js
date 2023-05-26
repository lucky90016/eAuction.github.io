   
import './ViewSubCategory.css';
import { useState ,useEffect} from 'react';
import axios from 'axios';
import { _apiurlsubcategory, _apiurlcategory } from '../apiURLS';
import {Link, useParams} from 'react-router-dom';

function ViewSubCategory() {

  const params=useParams();
    const [cList , setCatList] = useState([]);
    const [scList , setSubCatList] = useState([]);

    useEffect(()=>{
    
      axios.get(_apiurlcategory+"fetch").then((response)=>{
          setCatList(response.data); 
      })  

      axios.get(_apiurlsubcategory+"fetch?catnm="+params.catnm).then((response)=>{
          setSubCatList(response.data); 
      });
    
    });


  return (
    <div >
  <div>
 {/* About Star */}
 <section class="section-about">
 <div class="container">
   <div class="row">
   <div class="col-lg-4 section-t8">
   <div class="title-box-d">
           <h3 className="title-d">
                 <br/> <span className="color-d" >Category</span>  >>
                  <br/>
                  <ul >
                    {
                      cList.map((row)=>(
                        <li><Link style={{"color":"#2eca6a"}} to={"/viewsubcategory/"+(row.catnm)}>{row.catnm}</Link></li>
                      ))
                    }
                    
                    </ul> </h3> 
           </div>
   </div>

     <div class="col-lg-6 section-t8">
       <div class="row">
         <div class="col-lg-4  d-none d-lg-block">
         </div>
         <div class="col-md-8 col-lg-15 section-md-t3">
           <div class="title-box-d">
           <h1 className="title-d">
                 <br/> <span className="color-d">Auction List </span>  >> {params.catnm}
                  <br/> </h1> 
           </div>
           <center>
                              <div id="catmain">
                                    {
                                    scList.map((row)=>(
                                    <div class="catpart">
                                       <Link to={"/viewproduct/"+(row.catnm)+"/"+(row.subcatnm)} >
                                             <img src={"../assets/uploads/subcaticons/"+(row.subcaticonnm)} height="100" width="150" />
                                        <br/>
                                        <b style={{"color":"black"}} >{row.subcatnm}</b>
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

        </div>

      
  );

}

export default ViewSubCategory; 
  