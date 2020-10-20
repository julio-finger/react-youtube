import React from 'react';
import { ThemeProvider, createMuiTheme, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Home from './Home';

const useStyles = makeStyles ({

  root: {
  }


})

function App() {

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#f44336',
      },
      secondary: {
        main: '#2980b9',
      },
    },
    spacing: 4,
  });


  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
    <div className="App">

        <Home></Home>


    </div>
    </ThemeProvider>
  );
}

export default App;
