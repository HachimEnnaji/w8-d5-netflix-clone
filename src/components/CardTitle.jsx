import React, { Component } from "react";
import { Card } from "react-bootstrap";

class CardTitle extends Component {
  state = {
    title: false,
  };

  render() {
    return (
      <Card.Title className="mt-4 mb-2 d-flex justify-content-center align-items-center w-100 h-25  border rounded border-white">
        <p className="text-white fs-5 lead ">{this.props.Title}</p>
      </Card.Title>
    );
  }
}

export default CardTitle;
