import React from 'react';
import { HomePage } from './pages/HomePage';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import { mdTheme } from './theme/theme';
import { ThemeProvider } from '@mui/material/styles';
import { GatheringHeader } from './components';
import { CssBaseline } from '@mui/material';
import Container from '@mui/material/Container';

function App() {
  return (
      <>
          <CssBaseline/>
          <div className="App">
              <ThemeProvider theme={mdTheme}>
                  <GatheringHeader/>
                  <Container>
                      <Router>
                          <Switch>
                              <Route path={'/gathering'} exact>
                                  <HomePage/>
                              </Route>
                          </Switch>
                      </Router>
                  </Container>
              </ThemeProvider>
          </div>
      </>
  );
}

export default App;
