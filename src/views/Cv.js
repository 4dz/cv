import React from 'react';
import {experience, education} from 'lib/content/cv';

const Cv = () => {
  return (
    <div>
      <h3>Experience</h3>
      {experience.map(data => (
        <div>
          <h4>{data.role}, {data.company}</h4>
          <p>{data.dates}</p>
        </div>
      ))}

      <hr />

      <h3>Education</h3>
      {education.map(data => (
        <div>
          <h4>{data.qualification}</h4>
          <p>{data.location}</p>
          <p>{data.dates}</p>
        </div>
      ))}
    </div>
  );
}

export default Cv;
