

const Banner = () => {
    return (
        <div className="max-w-6xl mx-auto mt-10">
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    {/* slider detail with photo */}
                    <div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex justify-between items-center  p-3">
                                <div className="space-y-4 p-2">
                                    <h1 className="text-4xl font-bold ">Saint Martin ,  Bangladesh</h1>
                                    <p>One of the most sought after and favorite winter destination of Bangladeshi people. Now easily and directly accessed through Coxs bazaar through a luxury ship Karnaphuli. This Coral Reef Island offers many luxury hotels isolated in the Island giving one a feeling of being marroned im the crescent shaped island. </p>
                                    <button className=" px-12 py-1 rounded hover:bg-green-700 text-white font-bold bg-green-600">Go </button>
                                </div>
                            </div>
                            <div className="flex justify-between items-center ">
                                <img
                                    src="https://i.ibb.co.com/bz2Xn3d/beach-sea.jpg"
                                    className="w-full rounded-lg " />
                            </div>
                        </div>
                    </div>
                    {/* slider detail with photo end*/}
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    {/* slider detail with photo */}
                    <div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex justify-between items-center  p-3">
                                <div className="space-y-4 p-2">
                                    <h1 className="text-4xl font-bold ">Gilgit-Baltistan ,  Pakistan</h1>
                                    <p>Gilgit-Baltistan, located in northern Pakistan, is renowned for its breathtaking landscapes, including the Karakoram and Himalayan ranges, home to K2 and Nanga Parbat. The region boasts stunning glaciers, rivers, and valleys like Hunza and Skardu, attracting global tourists. Its diverse culture features ethnic groups like Balti, Shina, and Burusho, with languages such as Urdu, Shina, and Balti. While not a full province, it has limited autonomy with its own assembly. </p>
                                    <button className=" px-12 py-1 rounded hover:bg-green-700 text-white font-bold bg-green-600">Go </button>
                                </div>
                            </div>
                            <div className="flex justify-between items-center ">
                                <img
                                    src="https://i.ibb.co.com/wr4n1ZL/small-town-near-blue-body-water-surrounded-by-beautiful-mountains-1.jpg"
                                    className="w-full rounded-lg " />
                            </div>
                        </div>
                    </div>
                    {/* slider detail with photo end*/}
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    {/* slider detail with photo */}
                    <div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex justify-between items-center  p-3">
                                <div className="space-y-4 p-2">
                                    <h1 className="text-4xl font-bold ">Mekong Delta lush waterway,  Vietnam</h1>
                                    <p>Vietnam offers diverse tourist spots, including Ha Long Bay,s stunning limestone karsts, Hanoi,s historic Old Quarter, and the ancient town of Hoi An. Explore Hue,s imperial citadel, Ho Chi Minh Citys vibrant culture, and the Mekong Delta,s lush waterways. Do not miss Sapa,s terraced rice fields and Phong Nhas caves.</p>
                                    <button className=" px-12 py-1 rounded hover:bg-green-700 text-white font-bold bg-green-600">Go </button>
                                </div>
                            </div>
                            <div className="flex justify-between items-center ">
                                <img
                                    src="https://i.ibb.co.com/7JJgQPS/outdoor-vacation-asian-scenic-summer.jpg"
                                    className="w-full rounded-lg " />
                            </div>
                        </div>
                    </div>
                    {/* slider detail with photo end*/}
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    {/* slider detail with photo */}
                    <div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex justify-between items-center  p-3">
                                <div className="space-y-4 p-2">
                                    <h1 className="text-4xl font-bold ">Bali,  Indonesia</h1>
                                    <p>Indonesia boasts diverse attractions, including Bali's beaches and temples, Yogyakarta's Borobudur and Prambanan, and Jakarta's urban buzz. Explore Komodo Island's dragons, Raja Ampat's coral reefs, and Mount Bromo's volcanic landscapes. Nature lovers enjoy Ubud's rice terraces and Lake Toba, while Lombok and Gili Islands offer serene tropical getaways. </p>
                                    <button className=" px-12 py-1 rounded hover:bg-green-700 text-white font-bold bg-green-600">Go </button>
                                </div>
                            </div>
                            <div className="flex justify-between items-center ">
                                <img
                                    src="https://i.ibb.co.com/2WrNJr0/bali3.jpg"
                                    className="w-full rounded-lg " />
                            </div>
                        </div>
                    </div>
                    {/* slider detail with photo end*/}
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;

// https://i.ibb.co.com/wr4n1ZL/small-town-near-blue-body-water-surrounded-by-beautiful-mountains-1.jpg
// https://i.ibb.co.com/7JJgQPS/outdoor-vacation-asian-scenic-summer.jpg
// 
// https://i.ibb.co.com/Xsy9D12/fishing-village-ha-long-bay-viet-nam.jpg
// https://i.ibb.co.com/TMqhjPJ/ammie-ngo-vcu-OZBxx-Rk-unsplash.jpg
// https://i.ibb.co.com/SrbWgxK/lake-mountains.jpg
// https://i.ibb.co.com/wr4n1ZL/small-town-near-blue-body-water-surrounded-by-beautiful-mountains-1.jpg
// https://i.ibb.co.com/Sdwh27K/landscape-snow-covered-himalayan-mountains-near-village-chitkul-kinnaur-india.jpg
// https://i.ibb.co.com/Kqx5WLc/wide-shot-beautiful-beach-zahora-spain.jpg
// https://i.ibb.co.com/bz2Xn3d/beach-sea.jpg