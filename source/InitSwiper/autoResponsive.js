/* global $, _ */

function autoResponsive(options, containerWidth) {
  var result = {};

  var _breakpoints = options.maxBreakpoint;
  var _minBreak = options.minBreakpoint;
  var minCartWidth = options.minCartWidth;
  var pointsLength = 20;

  var _points = _.floor(_breakpoints / pointsLength);

  $.each(Array(_points), function(index, el) {
    var _breakpoint = _breakpoints - (pointsLength * index);
    var slidesPerView = _.floor(_breakpoint / minCartWidth);

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

  return result;
}

module.exports = autoResponsive;
