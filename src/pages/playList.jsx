import React from "react";
import "./playList.scss";
import { fetch } from "../utils/fetch";

class PlayList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    };
  }

  componentDidMount() {
    console.log(this.props);
    fetch(`playlist/detail${this.props.location.search}`).then(r =>
      this.setState({
        data: r.playlist
      })
    );
  }
  render() {
    let d = this.state.data;
    return (
      <div className="playList-wrap">
        <header className="header-wrap">
          <div className="info">
            <img className="ava" src={d.coverImgUrl} alt="ava" />
            <div className="more">
              <h2>{d.name}</h2>
              <p className='more-info'>
                <img className='ctor' src={(d.creator||{}).avatarUrl} alt="ctor"/>
                <span></span>
              </p>
            </div>
          </div>
          <div>2</div>
        </header>
        <section>
          <span>歌曲列表</span>
        </section>
        <footer>
          <div>收藏歌单</div>
        </footer>
      </div>
    );
  }
}

export default PlayList;
