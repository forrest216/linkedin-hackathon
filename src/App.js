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
      <div className="App">
        <header className="App-header">
          <h1>Connect to your fellow classmates!</h1>
        </header>
        <main>
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
        </main>
        <footer>
          <p>Built by our team!</p>
        </footer>
      </div>
    );
  }
}

export default App;
