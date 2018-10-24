import React, { Component } from 'react';
import '../styles/Main.css';
import Button from '@material-ui/core/Button';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleRandom = () => {
    window.location.reload();
  };

  render() {
    const story = [
      `Mr Keegan pulled into the viewpoint car park, at the top of Wray Lane to have a rest during a long drive from his villa in Spain.
      He was feeling tired as he drove from Dover towards his Hampshire home and pulled off the M25 at the Reigate junction about 9.30pm.
      Mr Keegan stopped at the popular beauty spot used by families visiting Gatton Park and Colley Hill. He locked the door of his silver Range Rover before he fell asleep but was awoken about three hours later by two men smashing the window of the driver's door.
      The 40-year-old former footballer was beaten around the head and face with a baseball bat and was told to hand over his money.
      They took his credit cards and about £700 worth of pesetas. Then they smashed the rear windscreen and punctured one of the rear tyres before running off.`,

      `KEEGAN`,

      `test`
    ];

    const random = story[Math.floor(Math.random() * story.length)];

    return (
      <div className="Main">
        <div className="content">
          <p className="story">{random}</p>
        </div>
        <div className="button">
          <Button
            variant="outlined"
            color="secondary"
            onClick={this.handleRandom}
          >
            Next
          </Button>
        </div>
      </div>
    );
  }
}

export default Main;
