import React from "react";
import { Iproduct } from "../store";
import { useRecoilState } from "recoil";
import { cartItems } from "../store";
import { Icon } from "@iconify/react";

interface Item {
  item: Iproduct;
}
const Item: React.FC<Item> = ({ item }) => {
  const [items, setItems] = useRecoilState(cartItems);

  const removeItem = (id: number) => (event: any) => {
    const newItems = [...items].filter((item) => item.id !== id);
    console.log("called");

    setItems(newItems);
  };

  const increaseItem = (id: number) => (event: any) => {
    let newItems = [...items];
    let changeItem = newItems.find((item) => item.id === id);
    let newItem = {
      ...changeItem,
    } as Iproduct;

    newItem.count += 1;
    let index = newItems.indexOf(changeItem as Iproduct);
    newItems.splice(index, 1, newItem);
    setItems(newItems);
  };

  const decreaseItem = (id: number) => (event: any) => {
    let newItems = [...items];
    let changeItem = newItems.find((item) => item.id === id) as Iproduct;
    let newItem = {
      ...changeItem,
    } as Iproduct;

    if (newItem.count === 1) {
      newItems = [...items].filter((item) => item.id !== id);
    } else {
      newItem.count -= 1;
      let index = newItems.indexOf(changeItem as Iproduct);
      newItems.splice(index, 1, newItem);
    }
    setItems(newItems);
  };
  return (
    <div className="grid-row">
      <div className="item-name">{item.name}</div>
      <div className="flex-row item-number">
        <span className="btn cart-click" onClick={increaseItem(item.id)}>
          +
        </span>
        <div className="qty">{item.count}</div>
        <span className="btn cart-click" onClick={decreaseItem(item.id)}>
          -
        </span>
      </div>

      <div className="item-total">{item.count * item.price}</div>

      <span className="cart-remove cart-click" onClick={removeItem(item.id)}>
        <Icon className="iconify" icon="feather-x" data-inline="false"></Icon>
      </span>
    </div>
  );
};

export default Item;
