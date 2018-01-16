import React from 'react';
import {work} from 'lib/content/work';

const Work = () => {
  return (
    <div>
      {work.map(w => (
        <div key={w.id}>
          <h3>{w.name}</h3>
          <p><a href={w.url}>View Site</a></p>
        </div>
      ))}
    </div>
  );
}

export default Work;
