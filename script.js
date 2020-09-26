$(document).ready(function(){

var magic8Ball = {};

magic8Ball.listOfAnswers = ["Without a doubt.", "Yes, definitely.", "Most likely.", "Outlook good.", "Signs point to yes.", "Ask again later.", "Reply hazy, try again.", "Concentrate and ask again", "Better not tell you now.", "Don't count on it.", "Outlook not so good.", "My sources say no.", "Very doubtful.", "My reply is no."];

$("#answer").hide();

magic8Ball.askQuestion = function(question)
{
	$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");
	$("#8ball").effect( "shake" );
	$("#answer").fadeIn(4000);

	var randomNumber = Math.random();
	var randomNumberArray = randomNumber * this.listOfAnswers.length;
	var randomIndex = Math.floor(randomNumberArray);
	var randomAnswer = this.listOfAnswers[randomIndex];

	$("#answer").text( randomAnswer );

	console.log(question);
	console.log(randomAnswer);
};

var onClick = function()
{
	$("#answer").hide();
	$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/8side.png");

	//wait half a second before showing prompt
	setTimeout(
		function()
		{   // show prompt
			var question = prompt("ASK A YES/NO QUESTION!");
			if (question)
			{
				magic8Ball.askQuestion(question);
			}

	 	}, 500);
};

$("#questionButton").click(onClick);

});
