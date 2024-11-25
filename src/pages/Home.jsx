import Banner from "../Components/Banner";
import BannerCard from "../Components/BannerCard";


const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <BannerCard></BannerCard>
          <h1 className="font-font2 text-center font-semibold text-5xl text-[#331A15] mb-12">Our Popular Products</h1>
        </div>
    );
};

export default Home;