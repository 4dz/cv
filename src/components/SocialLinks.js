import React from 'react';
import {socialLinks} from 'lib/content/global';

const SocialLinks = () => (
  <ul>
    {socialLinks.map(link => (
      <li key={link.id}><a href={link.url}>{link.label}</a></li>
    ))}
  </ul>
);

export default SocialLinks;
