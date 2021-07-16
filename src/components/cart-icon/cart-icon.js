import shoppingBag from "../../assests/shopping-bag.png";
import "./cart-icon.styles.scss";

const CartIcon = () => {
  return (
    <div className="cart-container">
      <img src={shoppingBag} alt="shopping-cart-icon" />
      <span className="cart-count"> 5 </span>
    </div>
  );
};

export default CartIcon;
