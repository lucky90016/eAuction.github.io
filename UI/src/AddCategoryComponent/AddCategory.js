   
import './AddCategory.css';
import { useState } from 'react';
import axios from 'axios';
import { _apiurlcategory } from '../apiURLS';

function AddCategory() {
  const [ file, setFile ]= useState()
  const [catName ,setCatName]=useState()
  const [output,setOutput]=useState()
  
  const handleChange=(event)=>{
    setFile(event.target.files[0])
  }

  const handleSubmit=(event)=>{
          event.preventDefault();
    var formData = new FormData();
    formData.append('catnm',catName);
    formData.append('caticon',file);
    const config ={
      'content-type':'multipart/form-data'
    };
    axios.post(_apiurlcategory+"save", formData, config).then((response) => {
      setCatName("");
      setOutput("Category Added Successfully....");
    });

  }
  
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
                <h3 className="title-d">
                <a classNameName="navbar-brand text-brand" style={{"color":"#2eca6a"}}  href="index.html"><span classNameName="color-b">Add Category</span></a>
                 <br/>  </h3>
                  <font style={{"color":"red"}} >{output}</font>
                      <form>
                        <div className="form-group">
                          <label for="catnm">Category Name</label>
                          <input type="text" className="form-control" value={catName} onChange={e => setCatName(e.target.value)} />
                        </div>
                        <br/>
                        <div className="form-group">
                          <label for="file">Category Icon</label>
                          <input type="file" className="form-control" onChange={handleChange} />
                        </div>
                        <br/>
                        <button  type="button"  onClick={handleSubmit} className="btn btn-warning">Add Category</button>
                      
                      </form>
              </div>
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

export default AddCategory; 
  