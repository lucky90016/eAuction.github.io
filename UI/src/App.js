
import './App.css';
import { Routes , Route } from 'react-router-dom';

// import Header from './HeaderComponent/Header';
import Nav from './NavComponent/Nav';
// import Banner from './BannerComponent/Banner';
import Footer from './FooterComponent/Footer';
import Content from './ContentComponent/Content'; 
import About from './AboutComponent/About';
import Contact from './ContactComponent/Contact';
import Service from './ServiceComponent/Service';
import Register from './RegisterComponent/Register';
import Login from './LoginComponent/Login';
import Logout from './LogoutComponent/Logout';
import Adminhome from './AdminComponent/Admin';
import Manageusers from './ManageUsersComponent/ManageUsers';
import CPAdmin from './CPAdminComponent/CPAdmin';
import EPAdmin from './EPAdminComponent/EPAdmin';
import AddCategory from './AddCategoryComponent/AddCategory';
import AddSubCategory from './AddSubCategoryComponent/AddSubCategory';
import Userhome from './UserComponent/User';
import APUser from './APUserComponent/APUser';
import ViewProduct from './ViewProductComponent/ViewProduct';
import ViewCategory from './ViewCategoryComponent/ViewCategory';
import ViewSubCategory from './ViewSubCategoryComponent/ViewSubCategory';
import Verifyuser from './VerifyuserComponent/Verifyuser';
import BidProduct from './BidProductComponent/BidProduct';
import ShowBid from './ShowBidComponent/ShowBid';

function App() {
  return (


    <div>
      {/* <Header/>  */}
      <Nav />
      {/* <Banner /> */}
   
      <Routes>
      <Route path="/" element={<Content/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="/service" element={<Service/>}></Route>
          <Route path="/Register" element={<Register/>}></Route>
          <Route path="/verifyuser/:vemail" element={<Verifyuser/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/logout" element={<Logout/>}></Route>
          <Route path="/admin" element={<Adminhome/>}></Route>
          <Route path="/manageusers" element={<Manageusers/>}></Route>
          <Route path="/cpadmin" element={<CPAdmin/>}></Route>
          <Route path="/epadmin" element={<EPAdmin/>}></Route>
          <Route path="/addcategory" element={<AddCategory/>}></Route>
          <Route path="/addsubcategory" element={<AddSubCategory/>}></Route>
          <Route path="/user" element={<Userhome/>}></Route>
          <Route path="/apuser" element={<APUser/>}></Route>
         
          <Route path="/viewcategory" element={<ViewCategory/>}></Route>
          <Route path="/viewsubcategory/:catnm" element={<ViewSubCategory/>}></Route>  {/*first one is path second one is data */}
          <Route path="/viewproduct/:catnm/:subcatnm" element={<ViewProduct/>}></Route>
          <Route path="/bidproduct/:pid" element={<BidProduct/>}></Route>
          <Route path="/showbid/:pid" element={<ShowBid/>}></Route>
         
          </Routes>
      
      <Footer/>
      <a href={"url"} className="back-to-top"><i className="fa fa-chevron-up"></i></a>
      <div id="preloader"></div>
    </div> 
   
  );
}

export default App; 