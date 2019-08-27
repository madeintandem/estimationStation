import React from "react";
import Room from "./Room";
import Votes from "./Votes";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.polling = window.setInterval(this.pollAPI, 1000);
    this.roomId = window.location.pathname.match(/\/(\d+)$/)[1];
    this.state = {};
  }

  componentWillUnmount() {
    window.clearInterval(this.polling);
  }

  pollAPI = () => {
    window.fetch("/statuses/" + this.roomId).then(response => {
      response.json().then(statusData => {
        this.setState(statusData);
      });
    });
  };

  render() {
    return (
      <div>
        <Room />
        <Votes />
      </div>
    );
  }
}
