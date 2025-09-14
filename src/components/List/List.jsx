import { Component } from "react";
import { Item } from "../Item/Item";
import { Lis, Message } from "./ListStyled";

export class List extends Component {
  render() {
    return (
      <Lis onClick={this.props.deleteTask}>
        {this.props.todos.length > 0 ? (
          this.props.todos.map((todo) => (
            <Item key={todo.id} id={todo.id} text={todo.text} />
          ))
        ) : (
          <Message>You don't have any tasks</Message>
        )}
      </Lis>
    );
  }
}
