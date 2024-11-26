import { useState } from "react";
import Banner from "../Components/Banner";
import BannerCard from "../Components/BannerCard";
import { useLoaderData } from "react-router";
import Card from "../Components/Card";


const Home = () => {
  const loaderData = useLoaderData()
  const [allData, setAllData] = useState(loaderData)


    return (
        <div>
          <Banner></Banner>
          <BannerCard></BannerCard>
          <h1 className="font-font2 text-center font-semibold text-5xl text-[#331A15] mb-12">Our Popular Products</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
            {
              allData.map(coffee => <Card key={coffee._id}
                 coffee={coffee} 
                 allData={allData}
                 setAllData={setAllData}
                 ></Card>)
            }
          </div>
        </div>
    );
};

export default Home;