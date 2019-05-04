import React from "react";
import { Button } from "antd";

class TodoList extends React.Component {
  // static getDerivedStateFromProps(nextProps, prevState) {
  //   // console.log("getDerivedStateFromProps");
  //   return null;
  // }
  handleClick = index => event => {
    console.log("ww", index);
    const { onDelete } = this.props;
    onDelete(index);
  };

  render() {
    return (
      <ul>
        {this.props.items.map((item, index) => (
          <li key={item.id}>
            {item.text}{" "}
            <Button type="danger" onClick={this.handleClick(index)}>
              del
            </Button>
          </li>
        ))}
      </ul>
    );
  }
}

export default TodoList;
