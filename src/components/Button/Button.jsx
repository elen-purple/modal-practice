import { Component } from "react";
import { Btn } from "./ButtonStyled";

export class Button extends Component {
  render() {
    return (
      <Btn onClick={this.props.toggleModal} type="button">
        "Click"
      </Btn>
    );
  }
}
