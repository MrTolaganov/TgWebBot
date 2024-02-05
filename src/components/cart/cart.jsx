import { totalPrice } from "../../units/total-price";
import Button from "../button/button";
import "./cart.scss";

const Cart = ({ cartItems }) => {
  return (
    <div className="cart__container">
      <p>
        Umumiy narx:{" "}
        {totalPrice(cartItems).toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        })}
      </p>

      <Button
        type="checkout"
        disable={cartItems.length === 0 ? true : false}
        title={`${cartItems.length === 0 ? "Buyurtma berish" : "To'lov"}`}
      />
    </div>
  );
};

export default Cart;
