import { useEffect, useState } from "react"
import { getProducts } from "../services/productService";
import ProductCard from "./ProductCard";

export default function ListProducts() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts().then(data => setProducts(data));
    }, []);

    return (
        <div style={{ display: 'flex' }}>
            {
                products.map((product, index) => {
                    return (
                        <ProductCard key={`p_${index}`} product={product} />
                    )
                })
            }
        </div>
    )
}