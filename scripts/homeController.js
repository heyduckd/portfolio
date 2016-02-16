(function(module) {
var homeController = {};

homeController.index = function(){
$('main > section').hide();
$('#sliderHome').show();
};

  module.homeController = homeController;
})(window);
