import React from 'react'
import './tab-desc.scss'
// 主页tab描述

class TabDesc extends React.Component {
  render(){
    return (
      <div className='tab-desc'>
        <span className='title'>{this.props.title}</span>
      </div>
    )
  }
}

export default TabDesc