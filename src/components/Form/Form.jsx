import { Component } from "react";
import { Btn } from "../Button/ButtonStyled";
import { Input, For } from "./FormStyled";

export class Form extends Component {
  render() {
    return (
      <For onSubmit={this.props.addTask}>
        <label>
          <Input
            required
            type="text"
            placeholder="Clean my room"
            value={this.props.task}
            onChange={this.props.changeTask}
          />
        </label>
        <Btn type="submit">Add task</Btn>
      </For>
    );
  }
}
