import React from 'react'
import NewMusicItem from "../components/new-music-item/new-music-item.jsx";

function createMusic(props){
  let n = 0;
    let rowItem = Array(props.num)
      .fill("")
      .map((_, key) => (
        <NewMusicItem key={n} data={props.newMusic[n++]} index={props.index?key:undefined} />
      ));
    return <div className="new-music-wrap">{rowItem}</div>;
}


export {
  createMusic
}