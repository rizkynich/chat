import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import LoginContainer from "./containers/LoginContainer";
import RegisterContainer from "./containers/RegisterContainer";
import ChatContainer from "./containers/ChatContainer";

class App extends Component {
  state = {
    page: "login",
    user: null
  };

  componentDidMount() {
    if (this.state.user != null) {
      this.setState({
        page: "chat"
      });
    }
  }

  render() {
    return (
      <div className="container">
        {this.state.page === "login" && <LoginContainer />}
        {this.state.page === "register" && <RegisterContainer />}
        {this.state.page === "chat" && <ChatContainer />}
      </div>
    );
  }
}

export default App;
