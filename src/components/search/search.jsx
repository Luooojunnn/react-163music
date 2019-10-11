
import React from 'react'
import './search.scss'

import {fetch} from '../../utils/fetch'

class Search extends React.Component {
  constructor(props){
    super(props)
    this.state={
      hotList: [],
      searchVal: ''
    }

    this.setVal = this.setVal.bind(this)
  }

  componentDidMount(){
    fetch('search/hot').then(r=>this.setState({hotList:r.hots}))
  }

  setVal(event){
    this.setState({
      searchVal: event.target.value
    })
  }

  render(){
    let closeBtn = this.state.searchVal ? (<span className='close' onClick={()=>this.setState({searchVal: ''})}></span>) : '';
    
    return (
      <div>
        <div className='search-ipt-wrap'>
          <input type="text" className='search-ipt' value={this.state.searchVal} onChange={this.setVal} />
          {closeBtn}
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