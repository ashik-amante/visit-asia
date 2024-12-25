import { Link, useLoaderData } from "react-router-dom";
import Banner from "./Banner/Banner";
import { IoIosPeople } from "react-icons/io";
import { BsCurrencyDollar } from "react-icons/bs";
import { TiWeatherCloudy } from "react-icons/ti";


const Home = () => {
    const loadedSpots = useLoaderData()
    const { name, spotname, location, description, cost, country, time, visitor, seasonality, email } = loadedSpots;
    const handleViewDetal = id => {
        console.log(id);
        fetch(`http://localhost:5000/spots/${id}`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
            },
            // body: JSON.stringify(id)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }
    return (
        <div>
            home
            <Banner></Banner>
            <h1 className="text-5xl text-center font-bold">Tourists Spots : {loadedSpots.length}</h1>
            <div className="grid md:grid-cols-3 gap-4 max-w-6xl mx-auto">
                {
                    loadedSpots.map(spots => <div key={spots?._id}>
                        <div>
                            <div>
                                <img src={spots?.photo} alt="" />
                            </div>
                            <h1 className="text-2xl font-semiboldbold p-4 text-center mt-10 mb-3 uppercase">{spots.spotname}</h1>

                            <div className="px-6">
                                <div className="flex mx-auto  items-center gap-2">
                                    <span className="text-xl"><BsCurrencyDollar /></span>
                                    <p>{spots.cost} $</p>
                                </div>
                                <div className="flex mx-auto  items-center gap-2">
                                    <span className="text-2xl"><TiWeatherCloudy /></span>
                                    <p>{spots.seasonality} </p>
                                </div>
                                <div className="flex mx-auto  items-center gap-2">
                                    <span className="text-xl"><IoIosPeople /></span>
                                    <p>{spots.visitor} Approximately</p>
                                </div>
                            </div>
                            <div className="flex items-center justify-center">
                                <Link to={`/details/${spots?._id}`}>
                                    <button onClick={() => handleViewDetal(spots?._id)} className=" bg-transparent text-orange-500 hover:bg-orange-500 hover:text-white font-semibold px-8 py-1 outline outline-1 rounded-2xl mt-6 mb-4">View Details</button>
                                </Link>
                            </div>
                        </div>
                    </div>)
                }
            </div>
            <div className="grid grid-cols-3 gap-4">

            </div>

        </div>
    );
};

export default Home;