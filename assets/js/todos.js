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
		var todoText = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fas fa-trash-alt'></i> </span>" + todoText + "</li>");
	}
});

// toggle plus button

$(".fa-plus").click(function() {
	$("input[type = 'text']").fadeToggle();
});
