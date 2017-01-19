
/*
 * Dropdown toggle.
 */
$(function() {
	$('.toggle').click(function() {
		$('.expand').toggle();
	});
	$(document).click(function(e) {
		var target = e.target;
		if (!$(target).is('.toggle') && !$(target).parents().is('.toggle')) {
			$('.expand').hide();
		}
	});
});
