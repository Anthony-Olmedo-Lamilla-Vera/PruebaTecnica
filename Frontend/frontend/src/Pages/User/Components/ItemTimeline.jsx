import React from "react";

function ItemTimeline({ imgurl, nameUser, Descripcion }) {
  return (
    <div className="user-timeLine">
      <div className="img-timeline">
        <img src={imgurl} alt="" />
      </div>
      <div className="text-timeline">
        <h3>{nameUser}</h3>
        <p>{Descripcion}</p>
      </div>
    </div>
  );
}

export default ItemTimeline;
