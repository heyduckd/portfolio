// PROJECTS
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


// CONNECT
var connectView = {};

connectView.handleMainNav = function() {
  $('.main-nav').on('click', '.tab', function() {
    $('.tab-content').hide();
    $('#' + $(this).data('content')).show();
  });
  $('min-nav .tab:first').click();
};

connectView.initIndexPage = function() {
  Connect.all.forEach(function(a) {
    $('#connect').append(a.toHtml())
  });
  connectView.handleMainNav();
};

// HIDES CONTENT
$(document).ready(function() {
  workView.handleMainNav();
  $('.bxslider').bxSlider();
  $('#work').hide();
  $('#education').hide();
  $('#connect').hide();
});
