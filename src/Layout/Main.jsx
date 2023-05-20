import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import NavBar from "../pages/Shared/NavBar/NavBar";
import Category from "../pages/Home/Category/Category";
import { Tab } from "react-tabs";


const Main = () => {
    return (
        <div>
        <NavBar></NavBar>
        <Outlet></Outlet>
        <Category></Category>
       
        <Footer></Footer>
        </div>
    );
};

export default Main;