var workView = {};
workView.handleMainNav = function() {
  $('.main-nav').on('click', '.tab', function() {
    $('.tab-content').hide();
    $('#' + $(this).data('content')).show();
  });

  $('min-nav .tab:first').click();

};
//     var $contentHolder = $('main > section');
//     var $navClick = $(this).data('content');
//     $contentHolder.hide();
//     $contentHolder.each(function() {
//       if($(this).attr('id') === $navClick) {
//         $(this).show();
//       }
//     });
//   });
// };
$(document).ready(function() {
  workView.handleMainNav();
  // $('#work').hide();
  $('#connect').hide();
});
