import React, { Component } from "react";

const axios = require("axios");

class ChatContainer extends Component {
  state = {
    chatList: [],
    chatId: null,
    messages: []
  };

  getChatList = () => {
    axios.get("/").then({});
  };

  getChatMessage = () => {};

  sendMessage = () => {};

  componentDidMount() {}

  render() {
    return <div />;
  }
}

export default ChatContainer;
