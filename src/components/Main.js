import React, { Component } from 'react';
import '../styles/Main.css';

class Main extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		const story = [
			`“They’re the second best team in the world, and there's no higher praise than that.”`,

			`“The Germans only have one player under 22, and he's 23.”`,

			`“You can’t play with a one armed goalkeeper… not at this level.”`,

			`“The good news for Nigeria is that they're two-nil down very early in the game.”`,

			`“He’ll also be very dangerous from set-pieces. That means he'll be a threat from free-kicks and corners in the final third of the field.”`,

			`"One of his strengths is not heading.”`,

			`“We are three games without defeat is another way of looking at it. But if we are honest we have taken two points from nine.”`,

			`“I’ll never play at Wembley again, unless I play at Wembley again.”`,

			`“I know what is around the corner – I just don’t know where the corner is.”`,

			`“Not many teams will come to Arsenal and get anything, home or away.”`,

			`“We deserved to win this game after hammering them 0-0 in the first half.”`,

			`“Argentina won't be at Euro 2000 because they're from South America.”`,

			`“Football’s always easier when you've got the ball.”`,

			`“They compare Steve McManaman to Steve Heighway and he's nothing like him, but I can see why - it's because he's a bit different.”`,

			`“We managed to wrong a few rights.”`,

			`“That decision, for me, was almost certainly definitely wrong.”`,

			`“Shaun Wright-Phillips has got a big heart. It's as big as him, which isn't very big, but it's bigger.”`,

			`“The tide is very much in our court now.”`,

			`“I came to Nantes two years ago and it's much the same today, except that it's totally different.”`,

			`“I’m not disappointed - just disappointed.”`,

			`“Life wouldn’t be worth living if you could buy confidence because the rich people would have it all and everybody else would… would have to make their own arrangements.”`,

			`”He scores most of his goals when he's got the ball."`,

			`“Gary always weighed up his options, especially when he had no choice.”`,

			`“I’d love to be a mole on the wall in the dressing room.”`,

			`“Chile have three options – they could win or they could lose.”`,

			`”That would have been a goal if it wasn't saved.”`,

			`“I want more from David Beckham. I want him to improve on perfection.”`,

			`“In some ways, cramp is worse than having a broken leg.”`,

			`“He can't speak Turkey, but you can tell he's delighted.”`,

			`“Despite his white boots, he has real pace…"`,

			`“There’s a slight doubt about only one player, and that's Tony Adams, who definitely won't be playing tomorrow.”`,

			`“The ref was vertically 15 yards away.”`,

			`“It could be far worse for me if it was easy for me.”`,

			`“The substitute is about to come on - he's a player who was left out of the starting line-up today.”`,

			`“You get bunches of players like you do bananas, though that is a bad comparison.”`,

			`“Luis Figo is totally different to David Beckham, and vice versa.”`,

			`“You’re not just getting international football, you're getting world football.”`,

			`“Nicolas Anelka left Arsenal for £23million and they built a training ground on him.”`,

			`“Goalkeepers aren't born today until they're in their late twenties or thirties.”`,

			`“England can end the millennium as it started – as the greatest football nation in the world.”`,

			`“I’ve had an interest in racing all my life, or longer really.”`,

			`“I don't think there's anyone bigger or smaller than Maradona.”`,

			`“It’s understandable that people are keeping one eye on the pot and another up the chimney.”`,

			`“England have the best fans in the world and Scotland's fans are second-to-none.”`,

			`“He’s using his strength. And that is his strength – his strength.”`,

			`“There’ll be no siestas in Madrid tonight.”`,

			`“The 33 or 34-year-olds will be 36 or 37 by the time the next World Cup comes around, if they're not careful.”`,

			`“You can't do better than go away from home and get a draw…”`,

			<iframe
				width="560"
				height="315"
				src="https://www.youtube.com/embed/3MnMskejuvc"
				frameborder="0"
				allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
				allowfullscreen
			/>,

			<iframe
				width="560"
				height="315"
				src="https://www.youtube.com/embed/UlS3ppI_KL0?start=6"
				frameborder="0"
				allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
				allowfullscreen
			/>,

			<iframe
				width="560"
				height="315"
				src="https://www.youtube.com/embed/uDe8EsBBfm0?start=14"
				frameborder="0"
				allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
				allowfullscreen
			/>,

			<iframe
				width="560"
				height="315"
				src="https://www.youtube.com/embed/2BWAL7ADsi0"
				frameborder="0"
				allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
				allowfullscreen
			/>,
		];

		const random = story[Math.floor(Math.random() * story.length)];

		return (
			<div className="Main">
				<div className="content">
					<p className="story">{random}</p>
				</div>
				<div className="button" />
			</div>
		);
	}
}

export default Main;
