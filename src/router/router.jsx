import { createBrowserRouter } from "react-router";
import MainLayout from "./MainLayout";
import Errorpage from "../pages/Errorpage";
import Home from "../pages/Home";

const router = createBrowserRouter([
    {
        path:"/",
        element: <MainLayout></MainLayout>,
        errorElement: <Errorpage></Errorpage>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            }
        ]

    }
])

export {router}