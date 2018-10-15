import React, { Component } from 'react';
import '../styles/Main.css';
import Button from '@material-ui/core/Button';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="Main">
        <div className="content">KEEGAN</div>
        <div className="button">
          <Button variant="outlined" color="secondary">
            Next
          </Button>
        </div>
      </div>
    );
  }
}

export default Main;
