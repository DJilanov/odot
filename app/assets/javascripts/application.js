// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require bootstrap
$( document ).ready(function() {
    $(".description").click(function(e) {
    	if($(this).closest(".element").children('.description_items').hasClass("hide"))
    	{
    		$(this).closest(".element").children('.description_items').removeClass("hide");
    		$(this).closest(".element").children('.incomplete_items').addClass("hide");
    		$(this).closest(".element").children('.completed_items').addClass("hide");
    	}
		else
		{
			$(this).closest(".element").children('.description_items').addClass("hide");
		}
	});
	$(".incomplete").click(function(e) {
    	if($(this).closest(".element").children('.incomplete_items').hasClass("hide"))
    	{
    		$(this).closest(".element").children('.incomplete_items').removeClass("hide");
    		$(this).closest(".element").children('.description_items').addClass("hide");
    		$(this).closest(".element").children('.completed_items').addClass("hide");
    	}
		else
		{
			$(this).closest(".element").children('.incomplete_items').addClass("hide");
		}
	});
	$(".completed").click(function(e) {
    	if($(this).closest(".element").children('.completed_items').hasClass("hide"))
    	{
    		$(this).closest(".element").children('.completed_items').removeClass("hide");
    		$(this).closest(".element").children('.incomplete_items').addClass("hide");
    		$(this).closest(".element").children('.description_items').addClass("hide");
    	}
		else
		{
			$(this).closest(".element").children('.completed_items').addClass("hide");
		}
	});
});