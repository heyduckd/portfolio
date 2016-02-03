var workView = {};
workView.handleMainNav = function() {
  $('.main-nav').on('click', '.tab', function() {
    var $contentHolder = $('main > section');
    var $navClick = $(this).data('content');
    $contentHolder.hide();
    $contentHolder.each(function() {
      if($(this).attr('id') === $navClick) {
        $(this).show();
      }
    });
  });
};
$(document).ready(function() {
  $('#work').hide();
  $('#connect').hide();
  workView.handleMainNav();
});
