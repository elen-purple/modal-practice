import { Component } from "react";
import { Btn } from "../Button/ButtonStyled";
import { For } from "../Form/FormStyled";
import { Message } from "../List/ListStyled";
import { Input } from "./SmartSumStyled";

export class SmartSum extends Component {
  state = {
    value1: 0,
    value2: 0,
  };

  submitForm = (e) => {
    e.preventDefault();
    this.setState({
      value1: Number.parseFloat(e.currentTarget.elements.value1.value),
      value2: Number.parseFloat(e.currentTarget.elements.value2.value),
    });
  };

  shouldComponentUpdate = (nextProps, nextState) => {
    return (
      nextState.value1 !== this.state.value1 &&
      nextState.value2 !== this.state.value2
    );
  };

  render() {
    return (
      <For onSubmit={this.submitForm}>
        <label>
          <Input type="number" defaultValue={this.state.value1} name="value1" />
        </label>
        <Message>+</Message>
        <label>
          <Input type="number" defaultValue={this.state.value2} name="value2" />
        </label>
        <Btn type="submit">Sum</Btn>
        <Message>{this.state.value1 + this.state.value2}</Message>
      </For>
    );
  }
}
