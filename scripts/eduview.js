// EDUCATION
var eduView = {};

eduView.handleMainNav = function() {
  $('.main-nav').on('click', '.tab', function() {
    $('.tab-content').hide();
    $('#' + $(this).data('content')).show();
  });
  $('min-nav .tab:first').click();
};

eduView.initIndexPage = function() {
  Edu.all.forEach(function(a) {
    $('#education').append(a.toHtml())
  });
  eduView.handleMainNav();
};

$(document).ready(function() {
  eduView.handleMainNav();
  $('#work').hide();
  $('#connect').hide();
  // $('#edu').hide();
});
