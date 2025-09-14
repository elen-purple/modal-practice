import { Component } from "react";
import { Message } from "../List/ListStyled";

export class Timer extends Component {
  constructor(props) {
    super(props);
    this.interval = null;
  }

  state = {
    count: 0,
  };

  componentDidMount = () => {
    this.interval = setInterval(
      () =>
        this.setState((p) => {
          return { count: p.count + 1 };
        }),
      1000
    );
  };

  componentWillUnmount = () => {
    clearInterval(this.interval);
  };

  render() {
    return <Message>{this.state.count}</Message>;
  }
}
