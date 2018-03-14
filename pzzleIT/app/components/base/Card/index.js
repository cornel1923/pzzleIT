import React from 'react';
import GridTile from 'material-ui/GridList/GridTile';
import v4 from 'uuid';
import './styles.css';

const BuildCard = title => (<GridTile
  key={v4()}
  title={title}
  cols={4}
  titleBackground="linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
  rows={2}>
  <img alt={title} src={'https://image.freepik.com/free-photo/blue-sky-with-clouds_1127-282.jpg'} />
</GridTile>);

export default BuildCard;
