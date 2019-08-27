import React from "react";
import Room from "./Room";
import Votes from "./Votes";

export default class App extends React.Component {
  constructor() {
    this.polling = window.setInterval(this.pollAPI, 1000);
    this.state = {};
  }

  componentWillUnmount() {
    window.clearInterval(this.polling);
  }

  pollAPI = () => {};

  render() {
    return (
      <div>
        <Room />
        <Votes />
      </div>
    );
  }
}
