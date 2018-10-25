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

      `“They’re the second best team in the world, and there's no higher praise than that.”
      ~King Kev`,

      `“The Germans only have one player under 22, and he's 23.”~King Kev`,

      `“You can’t play with a one armed goalkeeper… not at this level.” ~King Kev`,

      `“The good news for Nigeria is that they're two-nil down very early in the game.” ~King Kev`,

      `“He’ll also be very dangerous from set-pieces. That means he'll be a threat from free-kicks and corners in the final third of the field.” ~King Kev`,

      `"One of his strengths is not heading.” ~King Kev`,

      `“We are three games without defeat is another way of looking at it. But if we are honest we have taken two points from nine.” ~King Kev`,

      `“I’ll never play at Wembley again, unless I play at Wembley again.” ~King Kev`,

      `“I know what is around the corner – I just don’t know where the corner is.” King Kev`,

      `“Not many teams will come to Arsenal and get anything, home or away.” ~King Kev`,

      `“We deserved to win this game after hammering them 0-0 in the first half.” ~King Kev`,

      `“Argentina won't be at Euro 2000 because they're from South America.” ~King Kev`,

      `“Football’s always easier when you've got the ball.” ~King Kev`,

      `“They compare Steve McManaman to Steve Heighway and he's nothing like him, but I can see why - it's because he's a bit different.” ~King Kev`,

      `“We managed to wrong a few rights.” ~King Kev`,

      `“That decision, for me, was almost certainly definitely wrong.” ~King Kev`,

      `“Shaun Wright-Phillips has got a big heart. It's as big as him, which isn't very big, but it's bigger.” ~King Kev`,

      `“The tide is very much in our court now.” ~King Kev`,

      `“I came to Nantes two years ago and it's much the same today, except that it's totally different.” ~King Kev`,

      `“I’m not disappointed - just disappointed.” ~King Kev`,

      `“Life wouldn’t be worth living if you could buy confidence because the rich people would have it all and everybody else would… would have to make their own arrangements.” ~King Kev`,

      `”He scores most of his goals when he's got the ball." ~King Kev`,

      `“Gary always weighed up his options, especially when he had no choice.” ~King Kev`,

      `“I’d love to be a mole on the wall in the dressing room.” ~King Kev`,

      `“Chile have three options – they could win or they could lose.” ~King Kev`,

      `”That would have been a goal if it wasn't saved.” ~King Kev`,

      `“I want more from David Beckham. I want him to improve on perfection.” ~King Kev`,

      `“In some ways, cramp is worse than having a broken leg.” ~King Kev`,

      `“He can't speak Turkey, but you can tell he's delighted.” ~King Kev`,

      `“Despite his white boots, he has real pace…" ~King Kev`,

      `“There’s a slight doubt about only one player, and that's Tony Adams, who definitely won't be playing tomorrow.” ~King Kev`,

      `“The ref was vertically 15 yards away.” ~King Kev`,

      `“It could be far worse for me if it was easy for me.” ~King Kev`,

      `“The substitute is about to come on - he's a player who was left out of the starting line-up today.” ~King Kev`,

      `“You get bunches of players like you do bananas, though that is a bad comparison.” ~King Kev`,

      `“Luis Figo is totally different to David Beckham, and vice versa.” ~King Kev`,

      `“You’re not just getting international football, you're getting world football.” ~King Kev`,

      `“Nicolas Anelka left Arsenal for £23million and they built a training ground on him.” ~King Kev`,

      `“Goalkeepers aren't born today until they're in their late twenties or thirties.” ~King Kev`,

      `“England can end the millennium as it started – as the greatest football nation in the world.” ~King Kev`,

      `“I’ve had an interest in racing all my life, or longer really.” ~King Kev`,

      `“I don't think there's anyone bigger or smaller than Maradona.” ~King Kev`,

      `“It’s understandable that people are keeping one eye on the pot and another up the chimney.” ~King Kev`,

      `“England have the best fans in the world and Scotland's fans are second-to-none.” ~King Kev`,

      `“He’s using his strength. And that is his strength – his strength.” ~King Kev`,

      `“There’ll be no siestas in Madrid tonight.” ~King Kev`,

      `“The 33 or 34-year-olds will be 36 or 37 by the time the next World Cup comes around, if they're not careful.” ~King Kev`,

      `“You can't do better than go away from home and get a draw…” ~King Kev`,

      `Paul Gas`
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
