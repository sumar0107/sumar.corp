(function ($) {
  Drupal.behaviors.autoUpload = {
    attach: function (context, settings) {
      $('form', context).delegate('input.form-file', 'change', function() {
        $(this).parents('form').find('input[type="submit"]').mousedown();
      });
    }
  };
})(jQuery);