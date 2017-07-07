import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div style={{background: 'black', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100vw', height: '100vh'}} >
          <img src={"http://thecatapi.com/api/images/get?format=src&results_per_page=1&type=gif&api_key=MjAyMjAw"}  alt="logo" />
      </div>
    );
  }
}

export default App;
