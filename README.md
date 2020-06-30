#### redux学习
#### 初始化一个react项目脚手架：  
```
$ cnpm install -g create-react-app
$ create-react-app my-app
$ cd my-app/
$ npm start
``` 
#### 安装redux: npm i redux
#### 到chrome里安装redux 的调试插件： redux devtool
#### 使用redux里的两个库{ createStore, combineReducers}
#### https://jsonplaceholder.typicode.com/  这个链接可以提供在线接口
#### ajax调用在线接口：  装一个插件   npm i axios
#### 一般做网络请求时最好用异步，那么在redux中做异步需要 redux-thunk(npm i redux-thunk) 和一个中间件 applyMiddleware, compose

#### redux和react的结合： react-redux会提供一个组件Provider 和 connect
#### 安装 react-redux