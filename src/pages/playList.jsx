import React from 'react'

import { fetch } from "../utils/fetch";


class PlayList extends React.Component {
  componentDidMount(){
    console.log(this.props)
    fetch(`playlist/detail?id=2920471281`).then(r=>console.log(r))
  }
  render(){
    return (
      1
    )
  }
}

export default PlayList