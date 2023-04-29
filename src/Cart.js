import React from 'react';
import { connect } from 'react-redux';
import { removeProduct, clearCart } from '../actions/cartActions';

const Cart = ({ cartItems, removeProduct, clearCart }) => {
  const cartList = cartItems.map((item) => {
    return (
      <div key={item.id}>
        <h3>{item.title}</h3>
        <p>Price: ${item.price.toFixed(2)}</p>
        <button onClick={() => removeProduct(item.id)}>Remove from cart</button>
      </div>
    );
  });

  const totalPrice = cartItems.reduce((acc, item) => {
    return acc + item.price;
  }, 0);

  return (
    <div>
      <h2>My Cart</h2>
      {cartList.length > 0 ? (
        <div>
          {cartList}
          <hr />
          <div>
            <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
            <button onClick={() => clearCart()}>Clear Cart</button>
            <button>Checkout</button>
          </div>
        </div>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cartItems: state.cart,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeProduct: (id) => dispatch(removeProduct(id)),
    clearCart: () => dispatch(clearCart()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
