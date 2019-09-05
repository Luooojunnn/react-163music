
import React from 'react'
import './search.scss'

import {fetch} from '../../utils/fetch'

class Search extends React.Component {
  constructor(props){
    super(props)
    this.state={
      hotList: []
    }
  }

  componentDidMount(){
    fetch('search/hot').then(r=>this.setState({hotList:r.hots}))
  }
  render(){
    return (
      <div>
        <div className='search-ipt-wrap'>
          <input type="text" className='search-ipt' />
          <span className='close'></span>
        </div>
        <div className='hot-item-wrap'>
          <div className='hot-tag'>
            热门搜索
          </div>
          {this.state.hotList.map((i,k) => (
            <span className='hot-item' key={k}>
              {i.first}
            </span>
          ))}
        </div>
      </div>
    )
  }
}

export default Search