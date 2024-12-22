import Swal from 'sweetalert2'
// import 'sweetalert2/src/sweetalert2.scss'

const AddSpot = () => {
    const handleAdd = event=>{
        event.preventDefault()
        const form = event.target;
        const name = form.user.value;
        const spotname = form.spotName.value;
        const location = form.location.value;
        const description = form.description.value;
        const cost = form.cost.value;
        const country = form.country.value;
        const seasonality = form.seasonality.value;
        const time = form.time.value;
        const visitor = form.visitor.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const spotDetail = {name,spotname,location,description,cost,country,time,visitor,seasonality,email,photo}
       
        console.log(spotDetail);
        fetch('http://localhost:5000/spots',{
            method:'POST',
            headers:{
                'content-type': "application/json"
            },
            body: JSON.stringify(spotDetail)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: "Added Successfully!",
                    icon: "success",
                    draggable: true,
                    timer:2000
                  });
            }
            form.reset()
        })
       
    }
    return (
        <div>
            <h1 className="text-5xl font-bold mt-10 text-center">Add Tourist Spot</h1>
            <div className=" p-24">
                <form onSubmit={handleAdd}>
                    <div className="flex mb-4">
                        <label className="form-control md:w-1/2 mr-4 ">
                            <div className="label">
                                <span className="label-text font-semibold">Tourists spot name</span>
                            </div>
                            <input type="text" name="spotName" placeholder="spot name " className="input input-bordered w-full" />
                        </label>
                        <label className="form-control md:w-1/2 ">
                            <div className="label">
                                <span className="label-text font-semibold">Country name</span>
                            </div>
                            <input type="text" name="country" placeholder="Country name " className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="flex mb-4">
                        <label className="form-control md:w-1/2 mr-4 ">
                            <div className="label">
                                <span className="label-text font-semibold">Location</span>
                            </div>
                            <input type="text" name="location" placeholder="Location " className="input input-bordered w-full" />
                        </label>
                        <label className="form-control md:w-1/2 ">
                            <div className="label">
                                <span className="label-text font-semibold">Description</span>
                            </div>
                            <input type="text" name="description" placeholder="Country name " className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="flex mb-4">
                        <label className="form-control md:w-1/2 mr-4 ">
                            <div className="label">
                                <span className="label-text font-semibold">Avetage Cost</span>
                            </div>
                            <input type="text" name="cost" placeholder="Cost in USD $ " className="input input-bordered w-full" />
                        </label>
                        <label className="form-control md:w-1/2 ">
                            <div className="label">
                                <span className="label-text font-semibold">Seasonality </span>
                            </div>
                            <input type="text" name="seasonality" placeholder="seasonality " className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="flex mb-4">
                        <label className="form-control md:w-1/2 mr-4 ">
                            <div className="label">
                                <span className="label-text font-semibold">Travel Time</span>
                            </div>
                            <input type="text" name="time" placeholder="Time needed (days) " className="input input-bordered w-full" />
                        </label>
                        <label className="form-control md:w-1/2 ">
                            <div className="label">
                                <span className="label-text font-semibold">Total visitor Per Year </span>
                            </div>
                            <input type="text" name="visitor" placeholder="Visitor Number " className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="flex mb-4">
                        <label className="form-control md:w-1/2 mr-4 ">
                            <div className="label">
                                <span className="label-text font-semibold">User Name</span>
                            </div>
                            <input type="text" name="user" placeholder="User name " className="input input-bordered w-full" />
                        </label>
                        <label className="form-control md:w-1/2 ">
                            <div className="label">
                                <span className="label-text font-semibold">User Email</span>
                            </div>
                            <input type="email" name="email" placeholder="Email " className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="flex mb-4">
                        <label className="form-control md:w-full mr-4 ">
                            <div className="label">
                                <span className="label-text font-semibold">Image(user Image url)</span>
                            </div>
                            <input type="text" name="photo" placeholder="Url" className="input input-bordered w-full" />
                        </label>

                    </div>
                    <input className="w-full bg-gray-800 text-[18px] text-white hover:bg-orange-400 btn" type="submit" value="Add Spot" />
                    
                </form>
            </div>
        </div>
    );
};

export default AddSpot;