// check off list items
$("ul").on("click", "li", function() {
	$(this).toggleClass("completed");
});

// click on X to delete task
$("ul").on("click", "span", function() {
	$(this).parent().fadeOut(500, function() {
		$(this).remove();
	});
	event.stopPropagation();
});

// create new task

$("input[type = 'text']").keypress(function(event) {
	if(event.which === 13) {
		var funnyTasks = [
		"Clean Cat Shit...Again",
		"Wash Dishes for 12th Time This Week",
		"Work for 8 Hours, I guess",
		"Cry Myself to Sleep",
		"Oh, Rent is Due in 4 Hours",
		"Watch Videos of Dogs You'll Never Have",
		"Rewatch Same Netflix Show, Again",
		"Realize You Have More Friends Online",
		"Its Cool, Skip The Gym Again",
		"Forget Your Best Friend's Birthday",
		"Fight With Someone On Facebook",
		"Hey, its me, the wifi bill",
		"Forgot to brush your teeth again, huh?",
		"Don't check bank account, just don't",
		"Get excited for about 3 minutes",
		"Get denied on Tinder",
		"Plan a trip you never go on",
		"Pretend to be an activist online",
		"Neglect your family for Fortnite",
		"Find what you love, do it on weekends",
		"Go out to eat, get card declined",
		"Argue with more strangers online",
		"Try to sing, sing poorly",
		"Have someone talk over your favorite song",
		"Realize you only live for the weekend",
		"Ass gets more likes on Instagram than you",
		"Did somebody say student loans?",
		"Go to class, remember nothing",
		"Realize you're not smarter than a 5th grader",
		"Join Flat Earth Society",
		"Find out your hero is a sex predator",
		"Wherever you go tonight, theres no parking",
		"12 car garage, but only 6 cars :/",
		"Lose half your paycheck to taxes",
		"Cancel plans with friends last minute",
		"Star Wars movies are overrated",
		"Your degree doesn't matter",
		"Force your pet to love you",
		"Text them back, its been 2 weeks",
		"Don't take responsibility for your actions",
		"There won't be parking when you get home",
		"Your ex is with someone hotter",
		"Somebody else got laid today"

]	
		var randomTask = Math.floor(Math.random() * funnyTasks.length);
		var todoText = funnyTasks[randomTask];

		$(this).val("");
		$(this).keypress(function(event) {
			$(this).css("transition", 1);
		});
		$("ul").append("<li><span><i class='fas fa-trash-alt'></i> </span>" + todoText + "</li>");
	}
});

// toggle plus button

$(".fa-frown").click(function() {
	$("input[type = 'text']").fadeToggle();
});

// random funny tasks
// var funnyTasks = [
// 		"Clean Cat Shit...Again",
// 		"Wash Dishes for 12th Time This Week",
// 		"Work for Whole Day Again",
// 		"Cry Myself to Sleep"
// ]

// for(var i = 0; i <= funnyTasks.length; i++) {
// 	var randomTask = Math.floor(Math.random() * funnyTasks.length);
// }


