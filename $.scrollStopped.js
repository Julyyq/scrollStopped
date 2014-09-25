﻿/**
 * jQuery scrollStopped plugin
 * usage: $(scrollElement).scrollStopped(callback)
 */
(function() {
  $.fn.scrollStopped = function(callback) {          
    $(this).scroll(function(){
      var self = this, $this = $(self);
      if ($this.data('scrollTimeout')) {
        clearTimeout($this.data('scrollTimeout'));
      }
      $this.data('scrollTimeout', setTimeout(callback,250,self));
    });
  };
})();