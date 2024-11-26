import { createBrowserRouter } from "react-router";
import MainLayout from "./MainLayout";
import Errorpage from "../pages/Errorpage";
import Home from "../pages/Home";
import AddProduct from "../pages/AddProduct";
import UpdateProduct from "../pages/UpdateProduct";

const router = createBrowserRouter([
    {
        path:"/",
        element: <MainLayout></MainLayout>,
        errorElement: <Errorpage></Errorpage>,
        children:[
            {
                path:"/",
                element:<Home></Home>,
                loader: ()=> fetch('http://localhost:4000/coffees')
            },
            {
                path:"/addpost",
                element:<AddProduct></AddProduct>
            },
            {
                path:'/editpost',
                element:<UpdateProduct></UpdateProduct>
            }
        ]

    }
])

export {router}