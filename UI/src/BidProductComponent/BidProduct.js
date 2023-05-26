   
import './BidProduct.css';
import { useState ,useEffect} from 'react';
import axios from 'axios';
import { _apiurlsubcategory, _apiurlcategory , _apiurlproduct , _apiurlbid} from '../apiURLS';
import {Link, useParams} from 'react-router-dom';


function BidProduct() {

  const params = useParams();
  const [ pDetails , setPDetails ] = useState([]);
  const [ bidprice , setBidPrice ] = useState();
  const [ output , setOutput ] = useState();
  const [ cprice , setCPrice ] = useState();

  useEffect(()=>{
    
    axios.get(_apiurlproduct+"fetch?_id="+params.pid).then((response)=>{
        setPDetails(response.data[0]); 
    })
    
    axios.get(_apiurlbid+"fetch?pid="+params.pid).then((response)=>{
      var l=response.data.length
      var p=l==0?pDetails.baseprice:response.data[l-1].bidprice;     
      setCPrice(p);
    })
  
  });
  
  const handleSubmit=()=>{
    var bidDetails={"pid":params.pid,"uid":localStorage.getItem("email"),"bidprice":bidprice};
    
    axios.post(_apiurlbid+"save",bidDetails).then((response)=>{
      setOutput(response.data.result);
      setBidPrice("");
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
        
        <div class="col-md-10 section-t8">
          <div class="row">
            <div class="col-lg-8  d-none d-lg-block">
            </div>
           
            <div class="col-md-12 col-lg-20 section-md-t3">
              <div class="title-box-d">
                <h1 class="title-d">
                <a className="navbar-brand text-brand" href="index.html"><span className="color-b">Bid Product Here!!!</span></a>
                  </h1>
                      
              </div>
              <h2>Product Base Price : &#8377;{pDetails.baseprice} </h2>
              <br/>
              <h2>Product Current Bid Price : &#8377;{cprice} </h2>
              <br/>
              <form>
              <h2>Enter Your Bid Price <input type="text" value={bidprice} onChange={e => setBidPrice(e.target.value)} /></h2>
              <font style={{"color":"blue"}}>{output}</font>
              <br/>
              
              <button type="button" onClick={handleSubmit} class="btn btn-success" >Bid Your Product</button>
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

export default BidProduct; 
  