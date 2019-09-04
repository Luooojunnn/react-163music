// 头部栏，提示下载App位置
import React from "react"
import './header.scss'
import logo from '../../assets/logo.jsx'

// 无数据流，用函数式组件即可
function Header(){
  return (
    <div className='header'>
      <h1 className='logo'>
      {logo()}
      </h1>
      <button className='download'>
        下载APP
      </button>
    </div>
  )
}

export default Header