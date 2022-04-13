import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CourseCard from "./CourseCard";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
//import parse from "html-react-parser";
import React, { useEffect, useState } from "react";
//https://www.brainstormcreative.co.uk/react-js/react-bootstrap-card-how-to-show-cards-in-a-grid/
function CourseCardGrid() {
  const [posts, setPosts] = useState([]);
  const columnsPerRow = 4;
  const getColumnsForRow = () => {
    let items = posts.map((post, index) => {
      return (
        <Col>
          <Card key="0">
            <Card.Body>
              <Card.Title>test</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">deez</Card.Subtitle>
              <Card.Text>deez nuts</Card.Text>
              <Card.Link href="nuts">View post</Card.Link>
            </Card.Body>
          </Card>
        </Col>
      );
    });
    return items;
  };

  return (
    <Container>
      <div class="box">
        <CourseCard />
        <CourseCard />
		  	<CourseCard />
		  	<CourseCard />
      </div>
<div class="box">
        <CourseCard />
        <CourseCard />
		  	<CourseCard />
		  	<CourseCard />
      </div>
<div class="box">
        <CourseCard />
        <CourseCard />
		  	<CourseCard />
		  	<CourseCard />
      </div>
<div class="box">
        <CourseCard />
        <CourseCard />
		  	<CourseCard />
		  	<CourseCard />
      </div>

    </Container>
  );
}

export default CourseCardGrid;
