$("button.share").click(function(){
	$(this).closest("div.project_card").find("div.media").fadeToggle();
});

$("button.seeFull").click(function(){
	$(this).closest("div.project_card").find("div.projectCode").fadeToggle();
});

$("button.share").click(function(){
	$(this).closest("div.tumblr").find("div.media").fadeToggle();
});
