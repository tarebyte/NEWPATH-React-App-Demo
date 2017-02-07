import React, { PropTypes } from 'react';
import { Card, CardHeader, CardMedia, CardTitle } from 'material-ui/Card';
import avatar from '../../public/avatar.jpg';

const Body = ({ children }) => (
  <Card
    style={{
      marginTop: '20px',
      width: '800px'
    }}
  >
    <CardHeader
      title="NEWPATH Talk 2/13/2017"
      avatar={avatar}
    />
    <CardTitle
      title="Chuck Norris Joke Generator"
    />
    <CardMedia>
      {children}
    </CardMedia>
  </Card>
);

Body.propTypes = {
  children: PropTypes.element.isRequired
};

export default Body;
