import React, { Component } from 'react';
import './App.css';
import MyName from './MyName';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>안녕하세요 리액트</h1>
        {/* 주석은 이렇게 */}
        <MyName name="리액트" />
      </div>
    );
  }
}

export default App;
