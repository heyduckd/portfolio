(function(module) {
  var eduController = {};

  eduController.index = function() {
      $('#work').empty();
      // Edu.fetchAll();
      eduView.initIndexPage();

    $('main > section').hide();
    $('#education').show();
  };

  module.eduController = eduController;
})(window);
