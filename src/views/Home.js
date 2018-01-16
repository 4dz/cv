import React from 'react';
import {Link} from 'react-router-dom';
import SocialLinks from 'components/SocialLinks';

const Home = (props) => {
  return (
    <div>
      <div>
        <h3>My CV</h3>
        <p>Lorem Ipsum <Link to="/cv">View my CV</Link> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
      </div>

      <div>
        <h3>Work</h3>
        <p>Lorem Ipsum <Link to="/work">Some of the projects I've worked on</Link> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
      </div>
    </div>
  );
}

export default Home;
