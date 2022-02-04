import React, { useState } from "react";
import axios from "axios";
import { Icon } from "@iconify/react";
import { useRecoilState } from "recoil";
import { cartItems, Iproduct } from "../store";
import { Cart } from "./Cart";

const Header = () => {
  const [data, setData] = useRecoilState(cartItems);

  React.useEffect(() => {
    axios
      .get("data.json")
      .then((res) => res.data.shopping_cart_items)
      .then((res) => setData(res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <header className="header">
      <div className="header_left show_desktop">
        <Icon
          className="iconify"
          icon="feather-calendar"
          data-inline="false"
        ></Icon>
        <Icon
          className="iconify"
          icon="feather-message-square"
          data-inline="false"
        ></Icon>
        <Icon
          className="iconify"
          icon="feather-mail"
          data-inline="false"
        ></Icon>
        <Icon
          className="iconify"
          icon="feather-check-square"
          data-inline="false"
        ></Icon>
        <Icon
          className="iconify"
          icon="feather-star"
          data-inline="false"
          color="#ff9f43"
        ></Icon>
      </div>
      <div className="header_right">
        <div className="header_right_icons">
          <Icon
            className="iconify"
            icon="feather-search"
            data-inline="false"
          ></Icon>

          {data && <Cart />}

          <Icon
            className="iconify"
            icon="feather-bell"
            data-inline="false"
          ></Icon>
        </div>

        <div className="header_avatar hide_mobile">
          <div>Mr Anderson</div>
          <div>The One</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
