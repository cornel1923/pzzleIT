import React from 'react';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import GridTile from 'material-ui/GridList/GridTile';
import GridList from 'material-ui/GridList';

const App = () => (
  <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
    <div>
      <AppBar title="My AppBar" />
      <GridList cols={12} cellHeight={200} padding={1} >
        <GridTile
          title="Ianuarie"
          cols={4}
          titleBackground="linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
          rows={2}
        >
          <img alt="test" src="http://www.material-ui.com/images/grid-list/00-52-29-429_640.jpg" />
        </GridTile>
        <GridTile
          title="Februarie"
          cols={4}
          titleBackground="linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
          rows={2}
        >
          <img alt="test" src="http://www.material-ui.com/images/grid-list/00-52-29-429_640.jpg" />
        </GridTile>
        <GridTile
          title="Martie"
          cols={4}
          titleBackground="linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
          rows={2}
        >
          <img alt="test" src="http://www.material-ui.com/images/grid-list/00-52-29-429_640.jpg" />
        </GridTile>
        <GridTile
          title="Aprilie"
          cols={4}
          titleBackground="linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
          rows={2}
        >
          <img alt="test" src="http://www.material-ui.com/images/grid-list/00-52-29-429_640.jpg" />
        </GridTile>
        <GridTile
          title="Mai"
          cols={4}
          titleBackground="linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
          rows={2}
        >
          <img alt="test" src="http://www.material-ui.com/images/grid-list/00-52-29-429_640.jpg" />
        </GridTile>
        <GridTile
          title="Iunie"
          cols={4}
          titleBackground="linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
          rows={2}
        >
          <img alt="test" src="http://www.material-ui.com/images/grid-list/00-52-29-429_640.jpg" />
        </GridTile>
        <GridTile
          title="Iulie"
          cols={4}
          titleBackground="linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
          rows={2}
        >
          <img alt="test" src="http://www.material-ui.com/images/grid-list/00-52-29-429_640.jpg" />
        </GridTile>
        <GridTile
          title="August"
          cols={4}
          titleBackground="linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
          rows={2}
        >
          <img alt="test" src="http://www.material-ui.com/images/grid-list/00-52-29-429_640.jpg" />
        </GridTile>
        <GridTile
          title="Septembrie"
          cols={4}
          titleBackground="linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
          rows={2}
        >
          <img alt="test" src="http://www.material-ui.com/images/grid-list/00-52-29-429_640.jpg" />
        </GridTile>
        <GridTile
          title="Octombrie"
          cols={4}
          titleBackground="linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
          rows={2}
        >
          <img alt="test" src="http://www.material-ui.com/images/grid-list/00-52-29-429_640.jpg" />
        </GridTile>
        <GridTile
          title="Noiembrie"
          cols={4}
          titleBackground="linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
          rows={2}
        >
          <img alt="test" src="http://www.material-ui.com/images/grid-list/00-52-29-429_640.jpg" />
        </GridTile>
        <GridTile
          title="Decembrie"
          cols={4}
          titleBackground="linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
          rows={2}
        >
          <img alt="test" src="http://www.material-ui.com/images/grid-list/00-52-29-429_640.jpg" />
        </GridTile>
      </GridList>
    </div>
  </MuiThemeProvider>
);

export default App;
