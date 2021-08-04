import React from 'react';
import Product from '../Product/Product';
import { addToCart } from '../../redux/actions/cartActions';
import { connect } from 'react-redux';


const Shop = (props) => {
    const { products, addToCart } = props;
    
    return (
        <div >
            <h1>Shop</h1>
            <div className=" d-flex justify-content-center">
                <div className="row container">
                    {
                        products.map(pd => <Product
                            key={pd}
                            product={pd}
                            addToCart={addToCart}
                        />)
                    }
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        cart: state.cart,
        products: state.products
    }
}

const mapDispatchToProps = {
    addToCart: addToCart
}



export default connect(mapStateToProps, mapDispatchToProps)(Shop);