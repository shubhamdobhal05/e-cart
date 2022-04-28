import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";


const ProductDetails = () => {

    const {id} = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            const res = await fetch(`https://fakestoreapi.com/products/${id}`);
            setProduct(await res.json());
            setLoading(false);

        }
        getProducts();
    }, []);

    const Loading = () => {
        return (
            <>
                Loading.....
            </>
        )
    }

    const ShowProduct = () => {

        return (
            <>
                <div className="col-md-6">
                    <img src={product.image} alt={product.title} height="400px" width="400px"/>
                </div>
            </>
        )



    }

    return (
        <div>
            <div className="container">
                <div className="row">
                    {loading ? <Loading/> : <ShowProduct/>}
                </div>
            </div>
        </div>
    )
}


export default ProductDetails;