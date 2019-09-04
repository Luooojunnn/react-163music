import React from "react";
import { fetch } from "../utils/fetch";
import "./home.scss";
import bottomLogo from "../assets/bottom-logo.jsx";

import Header from "../components/header/header.jsx";
import Nav from "../components/nav/nav.jsx";
import TabDesc from "../components/tab-desc/tab-desc.jsx";
import DescItem from "../components/desc-item/desc-item.jsx";
import HotList from "../components/hot-list/hot-list.jsx";
import Search from "../components/search/search.jsx";

import {createMusic} from '../createComponent/create.jsx'

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // 当前激活态nav
      active: 0,
      // 推荐歌单
      recommend: [],
      // 新音乐
      newMusic: [],
      // 20条热歌榜
      hotList: [],
      update: 0
    };
  }

  componentDidMount() {
    fetch("personalized").then(r =>
      this.setState({
        recommend: r
      })
    );
    fetch("personalized/newsong").then(r =>
      this.setState({
        newMusic: r
      })
    );
    fetch("top/list?idx=1").then(r => {
      this.setState({
        hotList: r.playlist.tracks.slice(0,20),
        update: r.playlist.updateTime
      })
    });
  }

  navSelect(path) {
    let active = 0;
    switch (path) {
      case "recommend":
        active = 0;
        break;
      case "hot":
        active = 1;
        break;
      case "search":
        active = 2;
        break;
      default:
        active = 0;
    }
    this.setState({
      active
    });
  }

  // 生成几排,每排几个推荐歌单
  createDescItem(rowNum, colNum) {
    let n = 0;
    let rowItem = Array(rowNum)
      .fill("")
      .map(() => (
        <div className="desc-row" key={n}>
          {Array(colNum)
            .fill("")
            .map(() => (
              <DescItem key={n} data={this.state.recommend[n++]}></DescItem>
            ))}
        </div>
      ));
    return <div className="desc-wrap">{rowItem}</div>;
  }

  // 根据激活态输出不同复合组件
  despatch(active) {
    // 此处还可以抽取出3个复合组件
    if (active === 0) {
      return (
        <div className="content-wrap">
          <TabDesc title="推荐歌单"></TabDesc>
          {this.createDescItem(2, 3)}
          <TabDesc title="最新音乐"></TabDesc>
          {createMusic({num:10, newMusic:this.state.newMusic, index:false})}
          <footer className="footer">
            <div className="bottom">{bottomLogo()}</div>
            <div className="more">打开APP，发现更多好音乐</div>
            <span className="tips">
              网易公司版权所有©1997-2019 杭州乐读科技有限公司运营
            </span>
          </footer>
        </div>
      );
    } else if (active === 1) {
      // 不能将请求放在这里，因为数据更新了重新render会导致请求死循环
      return <div className="content-wrap">{HotList({list:this.state.hotList,time:this.state.update})}</div>;
    } else {
      return (<div className='search-wrap'>
        <Search></Search>
      </div>)
    }
  }

  render() {
    return (
      <div className="wrap">
        <Header />
        {/* 函数必须箭头函数，不然会导致this丢失 */}
        <Nav
          onClick={path => {
            this.navSelect(path);
          }}
          active={this.state.active}
        />
        {this.despatch(this.state.active)}
      </div>
    );
  }
}

export default Home;
