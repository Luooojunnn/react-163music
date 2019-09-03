// 分发路由组件
import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import home from './pages/home'

function AppRouter(){
  return (
    <Router>
      <Route path="/" component={home}>
        
      </Route>
    </Router>
  )
}


export default AppRouter