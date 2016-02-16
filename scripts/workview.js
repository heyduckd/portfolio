// PROJECTS
var workView = {};

workView.initIndexPage = function() {
  Project.all.forEach(function(a) {
    $('#work').append(a.toHtml())
  });
};


// EDUCATION
var eduView = {};

eduView.initIndexPage = function() {
  $('#education').empty();
  Edu.all.forEach(function(a) {
    $('#education').append(a.toHtml())
  });
};


// CONNECT
var connectView = {};

connectView.initIndexPage = function() {
  $('#connect').empty();
  Connect.all.forEach(function(a) {
    $('#connect').append(a.toHtml())
  });
};

// HIDES CONTENT
$(document).ready(function() {
  // workView.handleMainNav();
  $('.bxslider').bxSlider();
  $('#work').hide();
  $('#education').hide();
  $('#connect').hide();
});
