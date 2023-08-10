import React, { Component } from 'react';
import './App.css';
import personalStuff from './personalStuff'; 
import ResumePrev from './ResumePrev';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      profession: '',
      classes: '',
      alignment: '',
    };
  }

  updateUserInfo = (info) => {
    this.setState(info);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>D&D Resume</h1>
        </header>
        <main>
          <personalStuff updateUserInfo={this.updateUserInfo} /> {/* Updated component name */}
          <ResumePrev userInfo={this.state} />
        </main>
      </div>
    );
  }
}

export default App;
