import { Component } from "react";
import { Backdrop, Div, Title, Btn } from "./ModalStyled";

export class Modal extends Component {
  componentDidMount = () => {
    window.addEventListener("keydown", this.props.toggleModal);
  };

  componentWillUnmount = () => {
    window.removeEventListener("keydown", this.props.toggleModal);
  };

  render() {
    return (
      <Backdrop
        data-action="backdrop"
        onClick={(e) => {
          if (e.target.dataset.action === "backdrop") {
            this.props.toggleModal();
          }
        }}
      >
        <Div>
          <Btn onClick={this.props.toggleModal}>X</Btn>
          <Title>This is a modal</Title>
        </Div>
      </Backdrop>
    );
  }
}
