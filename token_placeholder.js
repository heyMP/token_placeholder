(function ($) {
  Drupal.behaviors.token_placeholder = {
    attach: function (context, settings) {

      //Set variables from the module
      var tokens = Drupal.settings.token_placeholder_tokens;
      console.log(tokens);

      // This is wrong. The text inside the wysiwyg is a string and not DOM.
      // I'll probably have to do a regex.
      $('.token-placeholder').each(function() {
        alert('test');
      });
    }
  };
}(jQuery));
