import { Outlet } from "react-router";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";


const MainLayout = () => {
    return (
        <div>
            <div className="container mx-auto">
            <NavBar></NavBar>
            <div className="min-h-[70vh]">
              <Outlet></Outlet>
            </div>
            <Footer></Footer>
            </div>
        </div>
    );
};

export default MainLayout;