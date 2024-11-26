import { Link, useLoaderData, useNavigate } from "react-router";


const UpdateProduct = () => {
    const loaderData = useLoaderData();
    const {_id}  = loaderData || {}
    const navigate = useNavigate()

    console.log(_id)

const updateHandler = e =>{
    e.preventDefault();

    const form = e.target;
        const name = form.name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const imgPath = form.imgPath.value;

        const coffee = {name, chef, supplier, taste, category, details, imgPath};

        fetch(`http://localhost:4000/coffees/${_id}`,{
            method: "PUT",
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(coffee)
        })
        .then(res=> res.json())
        .then(data=> {
            console.log(data)
            form.reset()
            navigate('/')
        })
}

    return (
        <div style={{background: "url('../../public/images/more/11.png')",
            backgroundSize:"cover",
            backgroundPosition: "center"

        }} className="p-4 md:p-12 mb-12">
            <div className="max-w-[1100px] mx-auto">
                <Link to="/"><h1 className="font-font2 text-2xl font-bold mb-4">Back To Home</h1></Link>
                <div className="bg-[#F4F3F0] p-4 md:p-16">
                   <h1 className="text-5xl font-font2 font-bold mb-4 text-center">Update</h1>
                   <p className="font-font1 text-center mb-8">It is a long established fact that a reader will be distraceted by 
                    the readable content of a page when looking at its layout. The point of using 
                    Lorem Ipsum is that it has a more-or-less normal distribution of letters, 
                    as opposed to using Content here.</p>
                    <div className="">
                        <form onSubmit={updateHandler} className="flex flex-col gap-6">
                            {/* name and chef */}
                           <div className="flex flex-col md:flex-row gap-6">
                               <div className="form-control w-full">
                                 <label className="label">
                                   <span className="label-text">Name</span>
                                 </label>
                                 <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                               </div>
                               <div className="form-control w-full">
                                 <label className="label">
                                   <span className="label-text">Chef</span>
                                 </label>
                                 <input type="text" name="chef" placeholder="chef" className="input input-bordered" required />
                               </div>
                           </div>
                            {/* Supplier and Taste */}
                            <div className="flex flex-col md:flex-row gap-6">
                               <div className="form-control w-full">
                                 <label className="label">
                                   <span className="label-text">Supplier</span>
                                 </label>
                                 <input type="text" name="supplier" placeholder="supplier" className="input input-bordered" required />
                               </div>
                               <div className="form-control w-full">
                                 <label className="label">
                                   <span className="label-text">Taste</span>
                                 </label>
                                 <input type="text" name="taste" placeholder="taste" className="input input-bordered" required />
                               </div>
                           </div>
                           {/* Category and Details */}
                           <div className="flex flex-col md:flex-row gap-6">
                               <div className="form-control w-full">
                                 <label className="label">
                                   <span className="label-text">Category</span>
                                 </label>
                                 <input type="text" name="category" placeholder="category" className="input input-bordered" required />
                               </div>
                               <div className="form-control w-full">
                                 <label className="label">
                                   <span className="label-text">Details</span>
                                 </label>
                                 <input type="text" name="details" placeholder="details" className="input input-bordered" required />
                               </div>
                           </div>
                           {/* photo url */}
                           <div className="">
                               <div className="form-control w-full">
                                 <label className="label">
                                   <span className="label-text">Photo-Url</span>
                                 </label>
                                 <input type="text" name="imgPath" placeholder="photo-url" className="input input-bordered" required />
                               </div> 
                           </div>
                           <div className="">
                               <div className="form-control w-full">
                                
                                 <input type="submit" value="Update Coffee" 
                                 className="border-2 p-4 rounded-xl bg-[#D2B48C] font-font2 text-xl font-semibold" />
                               </div> 
                           </div>
                        </form>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default UpdateProduct;