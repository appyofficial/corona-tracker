import React from "react";
import "../styles/InfoBoxStyle.css";

export default function InfoBox({ title, total, imgSrc, imgBgColor }) {
  return (
    <div className="infobox__container">
      <div className="infobox">
        <div className="infobox__img" style={{ backgroundColor: imgBgColor }}>
          <img src={imgSrc} alt={title} width="50px" height="50px" />
        </div>
        <div className="infobox__detail">
          <p className="infobox__total" color="textSecondary">
            {title}
          </p>
          <h2 className="infobox__cases">{total}</h2>
        </div>
      </div>
    </div>
  );
}
