var workView = {};

workView.handleMainNav = function() {
  $('.main-nav').on('click', '.tab', function() {
    $('.tab-content').hide();
    $('#' + $(this).data('content')).show();
  });
  $('min-nav .tab:first').click();
};

workView.initIndexPage = function() {
  Project.all.forEach(function(a) {
    $('#work').append(a.toHtml())
  });
  workView.handleMainNav();
};


$(document).ready(function() {
  workView.handleMainNav();
  $('#work').hide();
  $('#connect').hide();
});
