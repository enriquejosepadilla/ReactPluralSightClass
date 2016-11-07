import React, { PropTypes} from 'react';
import Link from 'react-router/Link';
import Home from '../home/HomePage';
import About from '../about/AboutPage';
import Courses from '../course/CoursesPage';
import Match from 'react-router/Match';

const Header = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      {" | "}
      <Link to="/about" >About</Link>
      {" | "}
      <Link to="/courses">Courses</Link>

      <Match exactly pattern="/" component={Home} />
      <Match pattern="/about" component={About} />
      <Match pattern="/courses" component={Courses} />
    </nav>
  );
};

export default Header;
