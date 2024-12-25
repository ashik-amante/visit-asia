import { createBrowserRouter } from "react-router-dom";
import Root from "../Roots/Root";
import Home from "../Pages/Home/Home";
import AllSpot from "../Pages/AllSpot/AllSpot";
import AddSpot from "../Pages/AddSpot/AddSpot";
import MySpot from "../Pages/Myspot/MySpot";
import Detail from "../Pages/Details/Detail";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";



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
          path:'/register',
          element:<Register></Register>,
        },
        {
          path:'/login',
          element: <Login></Login>
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
  