$(document).ready(function(){ //jQuery wrapper

	// creates the object
	var magic8Ball = {};

	// object property
	magic8Ball.listOfAnswers = ["Without a doubt.", "Yes, definitely.", "Most likely.", "Outlook good.", "Signs point to yes.", "Ask again later.", "Reply hazy, try again.", "Better not tell you now.", "Don't count on it.", "Outlook not so good.", "My sources say no.", "Very doubtful.", "My reply is no."];

	// hides answer when page loads
	$("#answer").hide();

	// click event for Ask Me Anything Button
	var onClick = function()
	{
	  // hides answer when ask me anything button is clicked
	  $("#answer").hide();

	  // changes 8 ball image to 8 side when button is clicked
	  $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/8side.png");

	  // wait half a second before showing prompt
		setTimeout(
			function()
	  {
		  // show prompt to enter a question when button is clicked
			var question = prompt("ASK A YES/NO QUESTION!");

	    // If question is entered askQuestion function runs
	    // otherwise it will do nothing
			if (question)
				{
					magic8Ball.askQuestion(question);
				}
	  }, 500); // .05 seconds delay
	}

	// calls function to show prompt when ask me anything button is clicked
	$("#questionButton").click(onClick);

	// This is object's method
	magic8Ball.askQuestion = function(question)
	{
	  // makes 8 ball shake when question is asked
	  $("#8ball").effect( "shake" );

	  // changes 8 ball image to answer side
	  $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");

	  // Fades in random answer over 4 seconds
	  $("#answer").fadeIn(4000);

	  // random number 0-0.9
		var randomNumber = Math.random();

	  // multiplies randomNumber by the length of the listOfAnswers array
	  // use "this" bc you are calling a property inside of a method
		var randomNumberArray = randomNumber * this.listOfAnswers.length;

	  // rounds randomNumber down to nearest whole integer
		var randomIndex = Math.floor(randomNumberArray);

	  // randomIndex is the index of the answer in the array
		var randomAnswer =
			this.listOfAnswers[randomIndex];

		// jQuery changes answer text in html to the random answer selected
	  $("#answer").text(randomAnswer);
	};

}); // end of jQuery wrapper
