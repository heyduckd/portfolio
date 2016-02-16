(function(module) {

  var connectController = {};

  connectController.index = function() {
    // $('#work').empty();
    // Connect.fetchAll();
    connectView.initIndexPage();

    $('main > section').hide();
    $('#connect').show();
  };

  module.connectController = connectController;
})(window);
