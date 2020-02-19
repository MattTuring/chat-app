import React, { Component } from "react";
import socketIOClient from "socket.io-client";

class App extends Component {
  constructor() {
    super();
    this.state = {
      response: ['Chat'],
      endpoint: "http://127.0.0.1:3001"
    };
  }

  componentDidMount() {
    const { endpoint } = this.state;
    const socket = socketIOClient(endpoint);
    socket.on("chat message", data => {
      this.setState(prevState => (
      {
      response: [...prevState.response, data]
    }))}
  )

  }

  render() {
    const { response } = this.state;
    return (
        <div style={{ textAlign: "center" }}>
          {response.map(text => {
            return <p>{text}</p>
          })}
        </div>
    );
  }
}

export default App;
