import React from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from '../../redux/actions/cartActions';

const Cart = (props) => {
    const { cart, removeFromCart } = props;

    return (
        <div className="container ">
            <h1>Cart</h1>
            <div style={{height: '300px', overflow: 'scroll'}} className="d-flex container justify-content-center">
                <ul style={{width:"50%"}}>
                    {
                        cart.map(item => <li key={item.cartId} className="bg-warning d-flex mt-3 pt-2 pb-2 ps-3 align-items-center" >
                            <img 
                            className="img-fluid"
                            src={item.imgUrl} alt=""
                            style={{width:'190px', height:'100px'}}
                               />
                            <h6 style={{fontSize:'22px',padding:'10px',color:'white'}}>{item.name}</h6>
                            <button
                                className="btn btn-danger"
                                onClick={() => removeFromCart(item.cartId)}
                                style={{ border: 'none' }}
                            >X</button>
                        </li>)
                    }
                </ul>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        cart: state.cart,
    }
}
const mapDispatchToProps = {
    removeFromCart: removeFromCart
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);