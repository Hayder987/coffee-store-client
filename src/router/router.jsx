import { createBrowserRouter } from "react-router";
import MainLayout from "./MainLayout";
import Errorpage from "../pages/Errorpage";
import Home from "../pages/Home";
import AddProduct from "../pages/AddProduct";
import UpdateProduct from "../pages/UpdateProduct";
import DetailsPage from "../pages/DetailsPage";

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
                path:'/editpost/:id',
                element:<UpdateProduct></UpdateProduct>,
                loader : ({params})=> fetch(`http://localhost:4000/coffees/${params.id}`)
            },
            {
                path:"/details/:id",
                element: <DetailsPage></DetailsPage>,
                loader : ({params})=> fetch(`http://localhost:4000/coffees/${params.id}`)
            }
        ]

    }
])

export {router}