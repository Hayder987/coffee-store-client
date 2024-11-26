import { NavLink } from "react-router";


const NavBar = () => {
    return (
        <div
        style={{background: "url('../../public/images/more/24.jpg')"}} 
        className="py-3 md:py-6 px-2 md:px-10 text-white flex justify-between items-center">
            <div className="flex justify-center items-center gap-4">
                <img src="../../public/images/more/logo1.png" alt="" className="w-14 h-14" />
                <h1 className="text-3xl font-font2">Espresso Emporium</h1>
            </div>
            <div className="">
                <ul className="flex justify-center items-center font-font1 text-xl font-medium gap-10">
                    <NavLink to="/"><li className="">Home</li></NavLink>
                    <NavLink to="/addpost"><li className="">Add Post</li></NavLink>
                </ul>
            </div>
        </div>
    );
};

export default NavBar;