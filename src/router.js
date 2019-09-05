// 分发路由组件
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import home from "./pages/home.jsx";
import playList from "./pages/playList.jsx";

function AppRouter() {
  return (
    <Router>
      <Route exact path="/" component={home}></Route>
      <Route path="/playList" component={playList}></Route>
    </Router>
  );
}

export default AppRouter;
