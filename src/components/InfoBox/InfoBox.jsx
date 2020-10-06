import React from "react";
import "./styles/style.css";
import formatNumber from "../../utils/formatNumber";

export default function InfoBox({ title, total, imgSrc, imgBgColor }) {
  return (
    <div className="infobox__container">
      <div className="infobox">
        <div className="infobox__detail">
          <p className="infobox__total" color="textSecondary">
            {title}
          </p>
          <h2 className="infobox__cases">{formatNumber(Number(total))}</h2>
        </div>
      </div>
    </div>
  );
}
