
/*
 * Dropdown toggle.
 */
$(function() {
	$('.employ-toggle').click(function() {
		$('.expand-dropdown').toggle();
	});
	$(document).click(function(e) {
		var target = e.target;
		if (!$(target).is('.employ-toggle') && !$(target).parents().is('.employ-toggle')) {
			$('.expand-dropdown').hide();
		}
	});
});
