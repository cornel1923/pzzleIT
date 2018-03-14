import React from 'react';
import GridList from 'material-ui/GridList';
import BuildCard from '../base/Card';
import './styles.css';

const Homepage = () => {
  // TODO: Move to constants
  const days = [{ title: 'Ianuarie', image: 'Ianuarie' }, { title: 'Februarie', image: 'Ianuarie' },
  { title: 'Martie', image: 'Ianuarie' }, { title: 'Aprilie', image: 'Ianuarie' },
  { title: 'Mai', image: 'Ianuarie' }, { title: 'Iunie', image: 'Ianuarie' },
  { title: 'Iulie', image: 'Ianuarie' }, { title: 'August', image: 'Ianuarie' },
  { title: 'Septembrie', image: 'Ianuarie' }, { title: 'Octombrie', image: 'Ianuarie' },
  { title: 'Noiembrie', image: 'Ianuarie' }, { title: 'Decembrie', image: 'Ianuarie' }];

  return (<div className="container">
    <GridList cols={12} cellHeight={200} padding={1} >
      {days.map(day => BuildCard(day.title, day.image))}
    </GridList>
  </div>);
};

export default Homepage;
