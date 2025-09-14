import { Component } from "react";
import { nanoid } from "nanoid";
import { Modal } from "./components/Modal/Modal";
import { Button } from "./components/Button/Button";
import { Div } from "./AppStyled";
import { Form } from "./components/Form/Form";
import { List } from "./components/List/List";
import { Timer } from "./components/Timer/Timer";
import { SmartSum } from "./components/SmartSum/SmartSum";
import { GlobalStyle } from "./components/GlobalStyle/GlobalStyle";

class App extends Component {
  state = {
    modal: true,
    todos: [],
    task: "",
  };

  setItem = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  };

  getItem = (key) => {
    return JSON.parse(localStorage.getItem(key));
  };

  changeTask = (e) => {
    this.setState({ task: e.target.value });
  };

  addTask = () => {
    const array = [...this.state.todos];
    array.push({ id: nanoid(4), text: this.state.task });
    this.setState({ todos: array });
  };

  deleteTask = (e) => {
    if (e.target.dataset.action === "delete") {
      const array = [...this.state.todos];
      array.splice(
        array.indexOf(
          array.find((item) => item.id === e.target.parentElement.id)
        ),
        1
      );
      this.setState({ todos: array });
    }
  };

  componentDidMount = () => {
    if (!Object.keys(localStorage).includes("modal")) {
      this.setItem("modal", true);
    }
    if (!Object.keys(localStorage).includes("todos")) {
      this.setItem("todos", []);
    }
    this.setState({
      modal: this.getItem("modal"),
      todos: this.getItem("todos"),
    });
  };

  componentDidUpdate = () => {
    if (this.state.modal !== this.getItem("modal")) {
      this.setItem("modal", this.state.modal);
    }
    if (
      JSON.stringify(this.state.todos) !== JSON.stringify(this.getItem("todos"))
    ) {
      this.setItem("todos", this.state.todos);
    }
  };

  toggleModal = () => {
    this.setState((prev) => {
      return { modal: !prev.modal };
    });
  };

  render() {
    return (
      <>
        <GlobalStyle />
        <Div>
          <Button toggleModal={this.toggleModal} />
          {!this.state.modal ? <Modal toggleModal={this.toggleModal} /> : <></>}
          <Form
            addTask={this.addTask}
            task={this.state.task}
            changeTask={this.changeTask}
          />
          <List deleteTask={this.deleteTask} todos={this.state.todos} />
          <Timer />
          <SmartSum />
        </Div>
      </>
    );
  }
}

export default App;
