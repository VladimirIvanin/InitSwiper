/* global $, _ */

var defaults = require('../variables').defaults;
var init = require('./init');

var InitSwiper = function (container, options) {
  var self = this;
  var result = [];

  self.options = $.extend(true, {}, defaults, options);

  self.init = init;

  var $container = (typeof container == 'string') ? $(container) : container;

  $container.each(function(index, el) {
    var _swiper = self.init($(el));
    if (_.isArray(_swiper)) {
      result = result.concat(_swiper);
    }else{
      result.push( _swiper );
    }
  });

  return result;
};

module.exports = InitSwiper;
