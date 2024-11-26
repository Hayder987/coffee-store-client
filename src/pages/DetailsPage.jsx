import { useLoaderData } from "react-router";


const DetailsPage = () => {
    const coffee = useLoaderData()
    const {_id, name, chef, supplier, taste, category, details, imgPath} = coffee || {}

    return (
        <div className="p-4 lg:p-16">
            <div className="bg-[#F5F4F1] max-w-[700px] mx-auto rounded-xl flex justify-between items-center py-4 px-4 lg:px-12">
            <div className="">
               <img src={imgPath} alt="" />
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="">
                <span className="font-font1 font-bold">Name: </span>
                <span className="">{name}</span>
              </h3>
              <h3 className="">
                <span className="font-font1 font-bold">Chef: </span>
                <span className="">{chef}</span>
              </h3>
              <h3 className="">
                <span className="font-font1 font-bold">Category: </span>
                <span className="">{category}</span>
              </h3>
            </div> 
            
        </div>
            
        </div>
    );
};

export default DetailsPage;