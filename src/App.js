import React, { Component } from 'react';
// import { Route, Switch } from 'react-router-dom';
import FilterStudentForm from './components/FilterStudentForm/FilterStudentForm';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Connect to your fellow classmates!</h1>
        </header>
        <main>
          <FilterStudentForm />
        </main>
        <footer>
          <p>Built by our team!</p>
        </footer>
      </div>
    );
  }
}

export default App;
