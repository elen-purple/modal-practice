import { Component } from "react";
import { Btn } from "../Button/ButtonStyled";
import { Message } from "../List/ListStyled";
import { Ite } from "./ItemStyled";

export class Item extends Component {
  render() {
    return (
      <Ite id={this.props.id}>
        <Message>{this.props.text}</Message>
        <Btn data-action="delete" type="button">
          Delete
        </Btn>
      </Ite>
    );
  }
}
