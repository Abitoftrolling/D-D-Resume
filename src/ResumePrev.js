
import React, { Component } from 'react';

class ResumePrev extends Component {
  render() {
    const { name, profession, classes, alignment } = this.props.userInfo;

    return (
      <div>
        <h2>Resume Preview</h2>
        <p>Name: {name}</p>
        <p>Profession: {profession}</p>
        <p>classes: {classes}</p>
        <p>alignment: {alignment}</p>
      </div>
    );
  }
}

export default ResumePrev;



