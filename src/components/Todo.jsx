import React from "react";
import TodoList from "./TodoList";
import { Theme } from "../App";
// 数据驱动 组件化
//  state props
//  setState 异步
// 一系列的生命周期
// 页面更新
// 通信: 父组件->子组件: props
// 子组件->父组件: 回调函数
// 其他: context: Provider->Consumer, redux状态管理(redux 先不管)
// 虚拟 v-dom: react 使用虚拟 dom, 就是用一个对象去模拟真实 dom(和真实 dom对应).
// react 每次改变数据(state props)的时候, 他将当前 v-dom 和上一次的 v-dom 做一个对比
// 通过 diff 算法对比, 只重新渲染改动部分.
//  react-router: 用来做路由管理, 页面跳转
//  HashRouter, BrowserRouter(先不管)

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      text: ""
    };
    console.log("constructor");
    this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    // console.log("componentWillMount");
  }
  componentDidMount() {
    // console.log("componentDidMount");
  }
  shouldComponentUpdate() {
    // console.log("shouldComponentUpdate");
    // 性能优化
    return true;
  }

  componentDidUpdate() {
    // console.log("componentDidUpdate");
  }
  componentWillUpdate() {
    // console.log("componentWillUpdate");
  }
  componentWillUnmount() {
    // console.log("componentWillUnmount");
  }
  handleChange(e) {
    this.setState({
      text: e.target.value
    });
  }

  handleSubmit = e => {
    e.preventDefault();
    if (!this.state.text.length) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now()
    };
    // this.setState(prevState => ({
    //   items: prevState.items.concat(newItem),
    //   text: ""
    // }));
    let items = this.state.items;
    // setState是异步执行的,可以传入一个回调函数作为他的第二个参数,
    // 保证 state 更新完成之后取到新的值
    // 设计成异步的原因:
    // 1. 合并多个 setState操作
    // 2. 避免进行多次不必要的渲染
    this.setState(
      {
        items: items.concat(newItem),
        text: ""
      },
      () => {
        console.log("callback", this.state.items);
      }
    );

    console.log("end", this.state.items);
  };

  handleDel = index => {
    console.log("index in todo", index);
    let { items } = this.state;
    items.splice(index, 1);
    this.setState({
      // items: items
      items
    });
  };
  render() {
    // console.log("render");
    return (
      <div>
        <h3> TODO </h3>
        <TodoList onDelete={this.handleDel} items={this.state.items} />
        {/* form 里面 点击 button 会触发 onSubmit */}
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} value={this.state.text} />
          <button>Add# {this.state.items.length + 1} </button>
        </form>
        <p>
          <Theme.Consumer>
            {theme => {
              console.log(theme);
              return <span>{theme.background}</span>;
            }}
          </Theme.Consumer>
        </p>
      </div>
    );
  }
}

export default TodoApp;
