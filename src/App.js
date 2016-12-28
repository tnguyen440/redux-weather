import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './App.css';
import SearchBar from './containers/SearchBar';
import WeatherList from './containers/WeatherList';

class App extends Component {
  render() {
    return (
      <div className="App container">
        <SearchBar />
        <WeatherList />
      </div>
    );
  }
}

export default App;
