import React from "react";
import { useSetRecoilState } from "recoil";
import { asidOpenAtom } from "../store";

export const Layout: React.FC = ({ children }) => {
  const openAside = useSetRecoilState(asidOpenAtom)
  return (
    <div>
      <div className="grid-container">
        <div className="menu-icon" onClick={()=>openAside(true)}>
          <span> &#9776;</span>
        </div>

        {children}
      </div>
    </div>
  );
};
