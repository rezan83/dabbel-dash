import React from "react";

const Main = () => {
  return (
    <main className="main">
      <div className="main_overview">
        <div className="overview_card">
          <div className="card_header">
            <div className="card_title">
              <b>Title</b>
            </div>
          </div>
          <p className="card_text">
            text Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis,
            expedita dolor? Aut,est reiciendis placeat numquam?
          </p>
        </div>
        <div className="overview_card overview_card_circles grow_2">
          <div className="card_header">
            <div className="card_title"><b>Title</b></div>
            <div className="card_secondary_title">secondary title</div>
          </div>
          <div className="card_circles">
            <div className="card_circles-item">
              <div className="circle circle1">img1 </div>
              <div className="circle-info">
                <span>
                  <b>999k</b>
                </span>
                <span>lorem</span>
              </div>
            </div>
            <div className="card_circles-item">
              <div className="circle circle2">img2 </div>
              <div className="circle-info">
                <span>
                  <b>999k</b>
                </span>
                <span>lorem</span>
              </div>
            </div>
            <div className="card_circles-item">
              <div className="circle circle3">img3 </div>
              <div className="circle-info">
                <span>
                  <b>999k</b>
                </span>
                <span>lorem</span>
              </div>
            </div>
            <div className="card_circles-item">
              <div className="circle circle4">img4 </div>
              <div className="circle-info">
                <span>
                  <b>999k</b>
                </span>
                <span>lorem</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="main_cards">
        <div className="tripod_group">
          <div className="tripod_card"></div>
          <div className="tripod_card"></div>
          <div className="tripod_card grid_grow_2"></div>
        </div>

        <div className="card centered_text grow_2">
          <p>Lorem centered text!</p>
        </div>
      </div>

      <div className="secondary_cards">
        <div className="card"><b>Card</b></div>
        <div className="card hide_mobile"><b>Card</b></div>
      </div>
    </main>
  );
};

export default Main;
