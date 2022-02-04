import { Icon } from "@iconify/react";
import React from "react";
import { useRecoilState } from "recoil";
import { asidOpenAtom } from "../store";

const Aside = () => {
  const [is_asideOpen, openAside] = useRecoilState(asidOpenAtom);

  return (
    <aside className={is_asideOpen ? "active" : ""}>
      <div
        className="aside_close-icon hide_desktop"
        onClick={() => openAside(false)}
      >
        <span>&times;</span>
      </div>
      <div className="dropdown">
        <button className="dropbtn">
          <div className="droptitle">
            <Icon
              className="iconify"
              icon="feather-home"
              data-inline="false"
            ></Icon>

            <h5>Home</h5>
          </div>
          <div className="droparrow">
            <span className="circle dropdown-count">2</span>
            <Icon
              className="iconify"
              icon="ic:outline-keyboard-arrow-down"
              data-inline="false"
            ></Icon>
          </div>
        </button>
        <div className="dropdown-content">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
      </div>
      <div className="card_title category">CATEGORY 1</div>
      <ul className="aside_list">
        <li className="aside_list-item">
          <Icon
            className="iconify"
            icon="feather-mail"
            data-inline="false"
          ></Icon>{" "}
          <span>Email</span>
        </li>
        <li className="aside_list-item">
          <Icon
            className="iconify"
            icon="feather-message-square"
            data-inline="false"
          ></Icon>{" "}
          <span>Chat</span>
        </li>
        <li className="aside_list-item">
          <Icon
            className="iconify"
            icon="feather-check-square"
            data-inline="false"
          ></Icon>{" "}
          <span>Todo</span>
        </li>
        <li className="aside_list-item">
          <Icon
            className="iconify"
            icon="feather-calendar"
            data-inline="false"
          ></Icon>{" "}
          <span>Calendar</span>
        </li>
        <li className="aside_list-item">
          <Icon
            className="iconify"
            icon="feather-shopping-cart"
            data-inline="false"
          ></Icon>{" "}
          <span>eCommerce</span>
        </li>
      </ul>
      <div className="card_title category">CATEGORY 2</div>
      <ul className="aside_list">
        <li className="aside_list-item">
          <Icon
            className="iconify"
            icon="feather-type"
            data-inline="false"
          ></Icon>{" "}
          <span>Typography</span>
        </li>
        <li className="aside_list-item">
          <Icon
            className="iconify"
            icon="feather-eye"
            data-inline="false"
          ></Icon>{" "}
          <span>Feather</span>
        </li>
        <li className="aside_list-item">
          <Icon
            className="iconify"
            icon="feather-credit-card"
            data-inline="false"
          ></Icon>{" "}
          <span>Cards</span>
        </li>
      </ul>
    </aside>
  );
};

export default Aside;
