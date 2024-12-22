import { createBrowserRouter } from "react-router-dom";
import Root from "../Roots/Root";
import Home from "../Pages/Home/Home";
import AllSpot from "../Pages/AllSpot/AllSpot";
import AddSpot from "../Pages/AddSpot/AddSpot";
import MySpot from "../Pages/Myspot/MySpot";
import Detail from "../Pages/Details/Detail";



const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
            path:'/',
            element:<Home></Home>,
            loader: ()=> fetch('http://localhost:5000/spots')
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
        {
          path:'/details/:id',
          element:<Detail></Detail>,
          loader:({params})=> fetch(`http://localhost:5000/spots/${params.id}`)
        }
      ]
    },
  ]);

  export default router
  