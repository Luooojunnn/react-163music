import React from "react";
import "./new-music-item.scss";

class NewMusicItem extends React.Component {
  format(d) {
    let art, names, album;
    if (d.song) {
      art = d.song.artists;
      album = d.song.album.name;
    } else if (d.ar) {
      art = d.ar;
      album = d.al.name;
    }
    names = art.map(i => i.name).join("/");
    return `${names} - ${album}`;
  }

  render() {
    let d = this.props.data;
    if (!d) return "";
    return (
      <div className="music-item">
        <span className={this.props.index > -1 ? "show" : "none"}>
          {this.props.index + 1 > 9
            ? this.props.index + 1
            : `0${this.props.index + 1}`}
        </span>
        <div className="music-info">
          <p className="new-music-name">{d.name}</p>
          <p className="new-music-author">
            <span className={d.fee === 8 ? "sq" : ""}></span>
            {this.format(d)}
          </p>
        </div>
        <div className="music-oper">
          <span className="play"></span>
        </div>
      </div>
    );
  }
}

export default NewMusicItem;
