import { FaEye } from "react-icons/fa";
import { MdDelete, MdEdit } from "react-icons/md";
import { Link } from "react-router";
import Swal from "sweetalert2";
import Aos from "aos";
import { useEffect } from "react";

const Card = ({coffee, allData, setAllData}) => {
  useEffect(() => {
    Aos.init({
      duration: 1000, 
      once: true,  
    });
  }, []);
   
  const {_id, name, chef, supplier, taste, category, details, imgPath} = coffee || {}

  const deleteHandler = (_id)=>{

    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {

            fetch(`http://localhost:4000/coffees/${_id}`,{
                method: "DELETE"
            })
            .then(res=> res.json())
            .then(item=>{
                const remaining = allData.filter(data=> data._id !== _id)
                setAllData(remaining)
                  if(item.deletedCount>0){
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                      }); 
                  } 
            });
            
        }
      });
  }

    return (
        <div 
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"

        className="bg-[#F5F4F1] rounded-xl flex justify-between items-center py-4 px-4 lg:px-12">
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
            <div className="flex flex-col gap-5">
                <Link to={`/details/${_id}`}><button className="bg-[#D2B48C] p-3 text-xl text-white rounded-lg"><FaEye /></button></Link>
                <Link to={`/editpost/${_id}`}><button className="bg-[#3C393B] p-3 text-xl text-white rounded-lg"><MdEdit /></button></Link>
                <button onClick={()=>deleteHandler(_id)} className="bg-[#EA4744] p-3 text-xl text-white rounded-lg"><MdDelete /></button>
            </div>
            
        </div>
    );
};

export default Card;