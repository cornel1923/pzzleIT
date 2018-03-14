import React from 'react';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import Homepage from './components/Homepage';

const App = () => (
  <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
    <div>
      <AppBar title="Plant" />
      <Homepage />
    </div>
  </MuiThemeProvider>
);

export default App;
