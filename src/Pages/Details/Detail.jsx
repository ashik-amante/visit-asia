
import { useLoaderData} from 'react-router-dom';
import { FaRegUser } from "react-icons/fa";

const Detail = () => {
    const spot = useLoaderData()
    const { name, spotname, location, description, cost, country, time, visitor, seasonality, email, photo } = spot
    return (
        <div>
            <h1 className='text-4xl font-bold text-center mt-10 mb-4'>{spotname}, {country} </h1>
            <div className='flex mx-auto justify-center items-center gap-2 mb-8'>
                <span className='text-xl'><FaRegUser /></span>
                <p className='font-semibold'>By: {name}</p>
            </div>
            <p className='text-[17px] max-w-4xl mx-auto px-12 mb-10 text-center'>{description}</p>
            {/* grid */}
            <div className='grid md:grid-cols-2 gap-10'>
                <div className='grid col-span-1 border'>
                    <img className='w-[90%] mx-auto p-4' src={photo} alt="" />
                </div>
                <div className='grid col-span-1 border'>
                    <div className="">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                <tr>                                  
                                    <td>Cost</td>
                                    <td>{cost} $</td>
                                            
                                </tr>
                                <tr>                                  
                                    <td>Time Need:</td>
                                    <td>{time} days</td>
                                </tr>
                                <tr>                                  
                                    <td>Total Visitor :</td>
                                    <td>{visitor} People per year approximately</td>
                                </tr>
                                <tr>                                  
                                    <td>Best Season for travel :</td>
                                    <td>{seasonality}</td>
                                </tr>
                                <tr>                                  
                                    <td>Added By :</td>
                                    <td>{name}</td>
                                </tr>
                               
                               
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <div>
                {/* stats */}
                {/* <div className="stats shadow">
                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                className="inline-block h-8 w-8 stroke-current">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                        </div>
                        <div className="stat-title">Downloads</div>
                        <div className="stat-value">31K</div>
                        <div className="stat-desc">Jan 1st - Feb 1st</div>
                    </div>

                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                className="inline-block h-8 w-8 stroke-current">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
                            </svg>
                        </div>
                        <div className="stat-title">New Users</div>
                        <div className="stat-value">4,200</div>
                        <div className="stat-desc">↗︎ 400 (22%)</div>
                    </div>

                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                className="inline-block h-8 w-8 stroke-current">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path>
                            </svg>
                        </div>
                        <div className="stat-title">New Registers</div>
                        <div className="stat-value">1,200</div>
                        <div className="stat-desc">↘︎ 90 (14%)</div>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default Detail;