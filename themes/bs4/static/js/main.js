// Put your javascript in here

// Init Tooltip
$(function () {
  // Attaches a tooltip for all of [data-toggle="tooltip"] elements
  // the default trigger is 'hover focus'
  $('[data-toggle="tooltip"]').tooltip();
});
function showTooltipWhenFocus(selector, message, placement='top') {
  // remove element's title attribute
  var title = $(selector).attr('title');
  $(selector).attr('title', null);
  // add tooltip for element
  $(selector).tooltip({
    placement: placement,
    title: message
  });
  // show tooltip
  $(selector).tooltip('show');
  // destory tooltip and recover element's title
  $(selector).on('mouseleave blur', function(){
    $(this).tooltip('dispose');
    if (title !== undefined) {
      $(this).attr('title', title);
    }
  });
}