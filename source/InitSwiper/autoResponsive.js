/* global $, _ */
var patchNumber = require('./help').patchNumber;

function autoResponsive(options, containerWidth, winWidth) {
  var result = {};

  var _breakpoints = options.maxBreakpoint;
  var _minBreak = options.minBreakpoint;
  var minCartWidth = options.minCartWidth;
  var $swiperContainer = options.$swiperContainer;
  var pointsLength = 20;

  var _points = _.floor(_breakpoints / pointsLength);
  var globalContainer = $(".container").css('max-width');
  if (globalContainer) {
    globalContainer = patchNumber(globalContainer);
  }

  $.each(Array(_points), function(index, el) {
    var _breakpoint = _breakpoints - (pointsLength * index);

    var withContainer = $swiperContainer.parents('.container').length;
    var _breakpointWidth = containerWidth;

    if (withContainer) {
      var paddings = 0;
      $swiperContainer.parents().each(function(index, el) {
        if ($(el).is('body')) {
          return false;
        }
        paddings = paddings + patchNumber($(el).css('padding-left'));
        paddings = paddings + patchNumber($(el).css('padding-right'));
      });
      if (_breakpoint < globalContainer) {
        _breakpointWidth = _breakpoint - paddings;
      }else{
        _breakpointWidth = globalContainer - paddings;
      }
    }

    if (!withContainer) {
      _breakpointWidth = _breakpoint;
    }

    var slidesPerView = _.floor(_breakpointWidth / minCartWidth);

    if (slidesPerView < 1) {
      slidesPerView = 1;
    }

    if (_minBreak < _breakpoint) {
      result[_breakpoint] = {
        slidesPerView: slidesPerView,
        spaceBetween: options.gutterCart
      }
    }
  });
  console.log(result);

  return result;
}

module.exports = autoResponsive;
