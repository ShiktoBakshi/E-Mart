import { useContext } from "react";
import { CartContext } from "../../Context/Cart";
import { toast } from "react-toastify";


const AddCart = () => {
    const { cartItems, removeFromCart } = useContext(CartContext);

    return (
        <div className="w-11/12 mx-auto py-30">
            <h2>Your Cart</h2>
            {cartItems.length === 0 ? (
                <p>Cart is empty.</p>
            ) : (
                cartItems.map((item, index) => (
                   <div className="flex w-11/12 mx-auto justify-center gap-4 lg:gap-15 py-10">
                     <div key={index} className="border rounded-lg p-4 shadow-md ">
                        <img src={item.image} alt={item.name} className="w-full h-40 object-cover mb-2" />
                        <h3 className="font-bold">{item.name}</h3>
                        <p>Price: ${item.price}</p>
                        <button
                            onClick={() => {
                                removeFromCart(index);
                                toast.success("Remove Item successfully!");
                            }}
                            className="mt-2 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700"
                        >
                            Remove
                        </button>
                    </div>
                   </div>
                ))
            )}
        </div>
    );
};

export default AddCart;
