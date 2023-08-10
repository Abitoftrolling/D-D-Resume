import React, { Component } from 'react';

class personalStuff extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'lord bardier',
      profession: 'Bard for hire',
      classes: 'duelist/bard',
      alignment: 'true neutral',
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <div>
        <h2>D&D Information</h2>
        <label>Name:</label>
        <input type="text" name="name" value={this.state.name} onChange={this.handleInputChange} />
        <input type="text" profession="profession" value={this.state.profession} onChange={this.handleInputChange} />
        <input type="text" classes="class" value={this.state.classes} onChange={this.handleInputChange} />
        <input type="text" alignment="alignment" value={this.state.alignment} onChange={this.handleInputChange} />
      </div>
    );
  }
}

export default personalStuff;