import React from 'react';

const Product = (props) => {
    const { addToCart, product } = props;
    return (
        <div className="container border col-md-4 col-lg-2 col-sm-6 mt-3 p-3 bg-light">
            <div>
                <div className="mb-3" style={{height:'150px'}}>
                    <img className="img-fluid" style={{height: "90%" }} src={product.imgUrl} alt="" />
                </div>
                <h5>{product.name}</h5>
                <button
                onClick={()=>addToCart(product.id, product.name, product.imgUrl)}
                style={{border:'none', fontWeight:'bold'}}
                className="btn btn-warning text-white mt-3"
                >
                ADD TO CART
                </button>
            </div>
        </div>
    );
};

export default Product;