(function(module) {

  var workController = {};

  workController.index = function() {
    $('#work').empty();
    // Project.fetchAll();
    workView.initIndexPage();

    $('main > section').hide();
    $('#work').show();
  };

  module.workController = workController;
})(window);
