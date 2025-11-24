import { useContext, useState } from 'react';
import { ProductContext } from '../../Context/Product';
import { AiOutlineLike } from 'react-icons/ai';
import { IoStarHalfSharp } from 'react-icons/io5';
import { CartContext } from '../../Context/Cart';
import { toast } from 'react-toastify';

const More = () => {
    const { product } = useContext(ProductContext);
    const { addToCart } = useContext(CartContext);
      const [selected, setSelected] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState("All");

    
    const categories = [...new Set(product.map(item => item.category))];

  
    const filteredProducts =
        selectedCategory === "All"
            ? product
            : product.filter(item => item.category === selectedCategory);

    return (
        <div>
            <div className='flex justify-center items-center py-30'>
                <h1 className='text-[#58f0ee] text-4xl underline hover:scale-105 duration-200'>
                    Our All Products
                </h1>
            </div>

            {/* CATEGORY NAV */}
            <div className="flex flex-wrap justify-center gap-3 py-4">
                <button
                    onClick={() => setSelectedCategory("All")}
                    className={`px-4 py-2 rounded-lg border-[#58f0ee] hover:border  
                        ${selectedCategory === "All" ? "bg-[#58f0ee] text-black" : "bg-[#062928]"}`}>
                    All
                </button>

                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className={`px-4 py-2 rounded-lg border-[#58f0ee] hover:border 
                            ${selectedCategory === cat ? "bg-[#58f0ee] text-black" : "bg-[#062928] "}`}>
                        {cat}
                    </button>
                ))}
            </div>

            {/* PRODUCT CARDS */}
            <div className="grid w-11/12 mx-auto justify-center md:grid-cols-3 gap-4 lg:gap-15 py-10">
                {filteredProducts.map((item) => (
                    <div key={item.id}>
                        <div className="card w-96 hover:border border-[#58f0ee] hover:shadow-2xl shadow-[#58f0ee] hover:scale-105 transition-transform duration-300">
                            <figure>
                                <img src={item.image} alt={item.name} className="w-full h-52 object-cover" />
                            </figure>

                            <div className="card-body">
                                <h2 className="card-title">{item.name}</h2>

                                <div className='flex gap-3'>
                                    <h4>Price: {item.price} </h4>
                                    <h4 className='text-gray-400 line-through'>Old-Price: {item.old_price}</h4>
                                </div>

                                <h5 className='bg-[#3BB77E] p-2 absolute top-0 left-0 rounded-tl-lg rounded-br-lg'>
                                    Off: {item.discount}
                                </h5>

                                <div className='flex justify-between'>
                                    <h5 className='font-bold'>Selling: {item.selling} Units</h5>
                                    <h5 className='text-red-500'>Stock: {item.stock}</h5>
                                </div>

                                <h5 className='flex items-center gap-1 text-[#58f0ee]'>
                                    <AiOutlineLike /> {item.like}
                                </h5>

                                <h5 className='flex items-center gap-1'>
                                    <IoStarHalfSharp className='text-[#58f0ee]' /> {item.rating}
                                </h5>

                                <div className='flex justify-center py-5'>
                                    <button className='flex justify-center items-center text-black rounded-2xl w-[60%] h-9 hover:font-bold hover:text-white hover:bg-[#073e3d] bg-[#58f0ee]'
                                    onClick={() => setSelected(item)}
                                    >
                                        Details
                                    </button>
                                </div>

                                <div className="flex justify-center gap-5">
                                    <button className='w-[40%] rounded-2xl h-9 bg-[#58f0ee] hover:bg-[#073e3d] text-black hover:text-white'>
                                        Buy Now
                                    </button>

                                    <button className='w-[40%] rounded-2xl h-9 bg-[#58f0ee] hover:bg-[#073e3d] text-black hover:text-white'
                                        onClick={() => {
                                    addToCart(item); 
                                    toast.success("Add TO Cart successfully!"); 
                                }}
                                    >
                                        Add Cart
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>
                ))}
            </div>
              {/* ---------- DaisyUI Modal ---------- */}
            {selected && (
                <dialog id="my_details_modal" className="modal modal-open">
                    <div className="modal-box w-11/12 max-w-3xl">
                        <h3 className="font-bold text-2xl mb-3 text-[#58f0ee]">{selected.name}</h3>

                        <img src={selected.image} alt={selected.name} className="w-64 mx-auto rounded-lg mb-4" />



                        <p className="py-2">
                            <span className="font-bold">Price:</span> ${selected.price}
                        </p>
                        <p>
                            <span className="font-bold">Old Price:</span> ${selected.old_price}
                        </p>
                        <p>
                            <span className="font-bold">Stock:</span> {selected.stock}
                        </p>
                        <p>
                            <span className="font-bold">Rating:</span> {selected.rating}
                        </p>
                        <p className="flex items-center gap-1 text-[#58f0ee]">
                            <AiOutlineLike /> {selected.like}
                        </p>
                        <div className="grid grid-cols-2 gap-2 mb-3">
                            {Object.entries(selected.details).map(([key, value]) => (
                                <p key={key}>
                                    <span className="font-bold">{key.replace(/_/g, " ")}:</span> {value}
                                </p>
                            ))}
                        </div>
                        <div className="modal-action">
                            <button
                                onClick={() => {
                                    setSelected(null); 
                                    toast.success("Modal closed successfully!"); 
                                }}
                                className="btn bg-red-500 text-white hover:bg-red-700"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </dialog>
            )}
            
        </div>
    );
};

export default More;
