// 头部栏，提示下载App位置
import React from "react"
import './header.css'
import logo from './logo.js'

// 无数据流，用函数式组件即可
function Header(){
  return (
    <div className='header'>
      <h1 className='logo'>
      {logo()}
      </h1>
      
    </div>
  )
}

export default Header