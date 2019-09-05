import React from "react";
import "./desc-item.scss";

import { Link } from "react-router-dom";
import { num2Abbreviation } from "../../utils/pip";

class DescItem extends React.Component {
  render() {
    let d = this.props.data;
    if (!d) return "";
    return (
      <Link
        to={{ pathname: "/playList", search: `id=${d.id}` }}
        className="desc-item"
      >
        <img src={d.picUrl} alt="pic" />
        <span className="item-desc">{d.name}</span>
        <span className="listen-num">{num2Abbreviation(+d.playCount)}</span>
        <i className={d.highQuality ? "high" : ""}></i>
      </Link>
    );
  }
}

export default DescItem;
