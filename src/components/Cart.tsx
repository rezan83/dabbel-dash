import React, { useState } from "react";
import { cartItems, Iproduct } from "../store";
import Item from "./Item";
import { useRecoilState, useRecoilValue } from "recoil";
import { cartCount } from "../store";
import { Icon } from "@iconify/react";

interface ICart {
  items: Iproduct[];
}
export const Cart: React.FC = () => {
  const { itemsCount, total } = useRecoilValue(cartCount);
  const [items, setItems] = useRecoilState(cartItems);

  const ItemsList: React.FC<ICart> = ({ items }) => (
    <>
      {items.map((item) => (
        <Item item={item} key={item.id} />
      ))}
    </>
  );
  const [is_CartOpen, set_is_CartOpen] = useState(false);
  const toggleCart = () => {
    set_is_CartOpen(!is_CartOpen);
  };
  const checkout = () => {
    let checkoutTotal = total;
    let checkoutCount = itemsCount;
    setItems([]);
    set_is_CartOpen(false);
    alert(
      `Successful Transaction: you bought ${checkoutCount} items and paid $${checkoutTotal}`
    );
  };
  return (
    <div className="cart-icon">
      <Icon
        onClick={toggleCart}
        className="iconify"
        icon="feather-shopping-cart"
        data-inline="false"
      ></Icon>
      {itemsCount ? (
        <span onClick={toggleCart} className="circle cart-counter">
          {itemsCount}
        </span>
      ) : (
        ""
      )}

      <div className="CartForm">
        {is_CartOpen && (
          <div className="cart-pop">
            <div className="flex-row cart-title">
              <h2>My Cart</h2>
              <div className="cart-items">
                {" "}
                <b>{itemsCount} Items</b>
              </div>
            </div>
            <div className="flex-column">
              {items && <ItemsList items={items} />}
              <div className="flex-row cart-total">
                <div>Total:</div>
                <div className="total-number">{total}</div>
              </div>
              <button className="cart-click" onClick={checkout}>
                checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
