(function(module) {

  var connectController = {};

  connectController.index = function() {
    // $('#work').empty();
    // Connect.fetchAll();
    connectView.initIndexPage();

    $('main > section').hide();
    $('#connect').show();
    // $('#connects').show();

    // repos.requestRepos(repoView.index);
  // connectController.repo = function() {
  // }

  };

  module.connectController = connectController;
})(window);
