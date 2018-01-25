import React from 'react';

const App = props => (
  <div className="App">
    {React.Children.only(props.children)}
  </div>
);

export default App;
