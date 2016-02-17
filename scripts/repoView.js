(function(module) {
  var repoView = {};

  var ui = function() {
    var $connect = $('#connects');

    $connect.find('ul').empty();
    $connect.show().siblings().hide();
  };

  var render = function(repo) {
    // var repotemplate = Handlebars.compile($('#repo-template').html());
    return $('<li>').html(repo['clone_url']);
    // console.log(repo)
  };

  repoView.index = function() {
    ui();

    $('#connects ul').append(
      repos.with('name').map(render)
    );
  };

  module.repoView = repoView;
})(window);
