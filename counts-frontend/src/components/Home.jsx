



import Header from './Header';

import Uploader from './Uploader';
import HeaderNav from './HeaderNav';
import CourseCard from './CourseCard';



import { BrowserRouter, Routes, Route } from "react-router-dom";


import UAD from './UploadAndDisplayImage';



function Home() {
  return (
	
    <div>
<Uploader/>
<CourseCard/>
<CourseCard/>
<CourseCard/>
<CourseCard/>




    </div>
  );
};

export default Home;

