import { createBrowserRouter } from "react-router-dom";
import Root from "../Roots/Root";
import Home from "../Pages/Home/Home";
import AllSpot from "../Pages/AllSpot/AllSpot";
import AddSpot from "../Pages/AddSpot/AddSpot";
import MySpot from "../Pages/Myspot/MySpot";



const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/all',
            element:<AllSpot></AllSpot>
        },
        {
            path:'/add',
            element:<AddSpot></AddSpot>
        },
        {
            path:'/my',
            element:<MySpot></MySpot>
        },
      ]
    },
  ]);

  export default router
  