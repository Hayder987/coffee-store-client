

const BannerCard = () => {
    return (
        <div className="bg-[#ECEAE3] py-4 px-6 md:py-6 md:px-12 lg:px-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-28">
            <div className="p-4">
                <img src="../../public/images/icons/1.png" alt="" className="mb-3" />
                <h3 className="font-font2 text-3xl font-medium mb-3">Awesome Aroma</h3>
                <p className="text-gray-600">You will definitely be a fan of the design & aroma of your coffee</p>

            </div>
            <div className="p-4">
                <img src="../../public/images/icons/2.png" alt="" className="mb-3" />
                <h3 className="font-font2 text-3xl font-medium mb-3">High Quality</h3>
                <p className="text-gray-600">You will definitely be a fan of the design & aroma of your coffee</p>

            </div>
            <div className="p-4">
                <img src="../../public/images/icons/3.png" alt="" className="mb-3" />
                <h3 className="font-font2 text-3xl font-medium mb-3">Pure Grades</h3>
                <p className="text-gray-600">You will definitely be a fan of the design & aroma of your coffee</p>

            </div>
            <div className="p-4">
                <img src="../../public/images/icons/4.png" alt="" className="mb-3" />
                <h3 className="font-font2 text-3xl font-medium mb-3">Proper Roasting</h3>
                <p className="text-gray-600">You will definitely be a fan of the design & aroma of your coffee</p>

            </div>
        </div>
    );
};

export default BannerCard;