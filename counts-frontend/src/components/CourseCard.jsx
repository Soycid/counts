import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import React, { Component } from "react";

//const infuraProvider = new ethers.providers.InfuraProvider('rinkeby', API_KEY);
//const wallet = new ethers.Wallet(privateKey, infuraProvider);
//const signer = wallet.connect(infuraProvider);
//contract = new ethers.Contract(smartContractAddress, abi, signer);

class CourseCard extends Component {
  render() {
    return (
      <Card className="customCard" border="primary" style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{this.props.numberOfPosts}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Card Subtitle
          </Card.Subtitle>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
      </Card>
    );
  }
}

export default CourseCard;
