import React from "react";
import "./nav.scss";

class Nav extends React.Component {
  navList = [
    {
      title: "推荐音乐",
      path: "recommend"
    },
    {
      title: "热歌榜",
      path: "hot"
    },
    {
      title: "搜索",
      path: "search"
    }
  ];

  render() {
    return (
      <div className="nav">
        {this.navList.map((item, key) => {
          return (
            <button
              key={item.path}
              className={this.props.active === key ? "active" : ""}
              onClick={() => this.props.onClick(item.path)}
            >
              {item.title}
            </button>
          );
        })}
      </div>
    );
  }
}

export default Nav;
