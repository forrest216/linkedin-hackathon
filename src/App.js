import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import FilterStudentForm from './components/FilterStudentForm/FilterStudentForm';
import ResultsPage from './components/ResultsPage/ResultsPage';
import './App.css';

class App extends Component {
  state = {
    results: [],
    currUser: null
  };

  updateResults = (results) => {
    this.setState({ results: results.foundUsers, currUser: results.currUser });
  }

  render() {
    return (
      <div>
          <Switch> 
            <Route exact path='/results' render={() => 
              <ResultsPage 
                results={this.state.results}
                currUser={this.state.currUser}
              />
            }
            />
            <Route path='/' render={({ history }) => 
              <FilterStudentForm 
                history={history}
                updateResults={this.updateResults}
              />
            }
            />
          </Switch>
      </div>
    );
  }
}

export default App;
