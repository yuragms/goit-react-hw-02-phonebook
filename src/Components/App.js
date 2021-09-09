import React, { Component } from "react";
import ContainerApp from "./Container/Container.jsx";
import Form from "./ContactForm/ContactForm.jsx";

class App extends Component {
  state = {
    // todos: initialTodos,
    name: "",
    tag: "",
  };

  // handleNameChange = event => {
  //   console.log(event.currentTarget.value);
  //   this.setState({name: event.currentTarget.value});
  // }

  handleChange = (e) => {
    console.log(e.currentTarget.name);
    console.log(e.currentTarget.value);
    this.setState({ [e.currentTarget.name]: e.currentTarget.value });
  };

  render() {
    return (
      <ContainerApp>
        <Form />
        <div>Hello word</div>
        <div>
          <form>
            <label>
              Имя
              <input
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
              />
            </label>
            <label>
              Tag
              <input
                type="text"
                name="tag"
                value={this.state.tag}
                onChange={this.handleChange}
              />
            </label>
          </form>
        </div>
      </ContainerApp>
    );
  }
}

export default App;
