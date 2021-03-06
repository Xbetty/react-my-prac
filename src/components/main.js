/*
 * @Author: xzt
 * @Date: 2019-11-20 11:46:01
 * LastEditors: xiongziting
 * LastEditTime: 2021-04-06 21:46:09
 * @Description:
 * FilePath: /react-my-prac/src/components/main.js
 */
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import ReactDemo from './RouteComponent/index';

// 路由测试组件
import ReactRouterDemo from './ReactRouter/index';

// 高阶组件测试
import HocComponentIndex from './HighOrderComponents/index';

// Redux测试组件
import ReduxFrom from './ReduxPrac/ReduxForm';

// React Redux测试组件
import ReactReduxDemo from './ReactReduxDemo';
// 引入Provider
import { Provider } from 'react-redux';
import ReactReduxStore from './ReactReduxDemo/store';

// Redux-Thunk测试组件
import ReduxThunkDemo from './ReduxThunkDemo';

// Redux-Saga测试组件
import ReduxSagaDemo from './ReduxSagaDemo';
import ReduxSagaStore from './ReduxSagaDemo/store';

// state的执行过程
// import ClassComponent from './StateExcuteProcess/ClassComponent';
// import FuncComponents from './StateExcuteProcess/FuncComponents';
// import AsyncAndSync from './StateExcuteProcess/AsyncAndSync';

// hook
import HookDemo from './Hook/index'

function Main() {
  return (
    <>
    <Router>
      {/* state执行过程 */}
      {/* <ClassComponent /> */}
      {/* <FuncComponents /> */}
      {/* <AsyncAndSync /> */}

      {/* HOC */}
      <HocComponentIndex />
      {/* react-component */}
      <ReactDemo />
      {/* react-router */}
      <ReactRouterDemo />
      {/* redux */}
      <ReduxFrom />
      {/* react-redux */}
      <Provider store={ReactReduxStore}>
        <ReactReduxDemo />
      </Provider>
      {/* redux-thunk */}
      <ReduxThunkDemo />
      {/* redux-saga */}
      <Provider store={ReduxSagaStore}>
        <ReduxSagaDemo />
      </Provider>
    </Router>

    {/* Hook */}
    <HookDemo/>
    </>
  );
}
export default Main;
