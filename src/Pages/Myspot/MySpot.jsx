import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";


const MySpot = () => {
    const {user} = useContext(AuthContext)
    const [myspots, setMyspots] = useState()
    console.log(myspots);

    useEffect(()=>{
        fetch(`http://localhost:5000/spots/${user?.email}`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            setMyspots(data)
        })
    },[user])
    return (
        <div>
            My spot
        </div>
    );
};

export default MySpot;