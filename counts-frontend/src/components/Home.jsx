import Header from "./Header";
import Uploader from "./Uploader";
import HeaderNav from "./HeaderNav";
import CourseCard from "./CourseCard";
import CourseCardGrid from "./CourseCardGrid";

import ListGroup from "react-bootstrap/ListGroup";

import { BrowserRouter, Routes, Route } from "react-router-dom";


function Home() {
  return (
    <div>
      <Uploader />
      <CourseCardGrid numberOfPosts="6" />
    </div>
  );
}

export default Home;
