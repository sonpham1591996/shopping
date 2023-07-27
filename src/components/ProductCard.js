import { useDispatch } from "react-redux"
import { addToCart } from "../store/actions/cartActions";

export default function ProductCard({ product }) {
    const dispatch = useDispatch();

    const onAddToCart = () => {
        dispatch(addToCart(product));
    }

    return (
        <div style={{ border: '1px solid gray', margin: '20px 10px' }}>
            <div>{product.name}</div>
            <div style={{ color: 'red' }}>{product.price}</div>
            <button onClick={() => onAddToCart()}>Add to cart</button>
        </div>
    )
}