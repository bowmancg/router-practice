import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
    const params = useParams()

return (
    <>
    <h1>Product</h1>
    <p>{params.id}</p>
    </>
    );
}

export default ProductDetail;