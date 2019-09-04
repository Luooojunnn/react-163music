import React from "react";
import "./hot-list.scss";
import { m2day } from "../../utils/pip";

import { createMusic } from "../../createComponent/create.jsx";

// 热歌榜，函数式组件
function HotList(props) {
  return (
    <div>
      <div className="hot-list-wrap">
        <div className="hot-title"></div>
        <div className="up-time">更新时间：{m2day(props.time)}</div>
      </div>
      {createMusic({ num: 20, newMusic: props.list,index:true })}
      <div className='see-more'>
      查看完整榜单 >
      </div>
    </div>
  );
}

export default HotList;
