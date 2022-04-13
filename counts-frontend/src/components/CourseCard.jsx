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
          <Card.Title> Class Title </Card.Title>
          <Card.Link href="#">C101</Card.Link><br />
          <Card.Link href="#">C101</Card.Link><br />
          <Card.Link href="#">C101</Card.Link><br />
          <Card.Link href="#">C101</Card.Link><br />
          <Card.Link href="#">(see more)</Card.Link><br />
          




        </Card.Body>
      </Card>
    );
  }
}

export default CourseCard;
