function generateUUID() {
  var d = new Date().getTime();
  var uuid = 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = (d + Math.random()*16)%16 | 0;
    d = Math.floor(d/16);
    return (c=='x' ? r : (r&0x3|0x8)).toString(16);
  });
  return uuid;
};

function patchNumber (num) {
  var isString = typeof num == 'string';
  var isNumber = typeof num == 'number';

  if (!isNumber && !isString) {
    return 0;
  }

  if(isString){
    num = num.replace(/,/g, '.');
    num = num.replace(/px/g, '');
    num = num.replace(/\%/g, '');
    num = (isNaN(+num)) ? 1 : +num;
  }

  function isFloat(n){
    return Number(n) === n && n % 1 !== 0;
  }

  return Number( (isFloat(num)) ? num.toFixed(2) : num );
}

function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};

function slideLength(containerWidth, minCartWidth) {
  var result = Math.floor( containerWidth / minCartWidth )
  if (!result || result < 1) {
    result = 1;
  }
  return result;
}
function getContainerWidth($swiperContainer) {
  var containerParent = $swiperContainer.parents(':visible').width();
  var containerWidth = $swiperContainer.width();
  if (containerWidth == 0) {
    containerWidth = (containerParent > 0) ? containerParent : $swiperContainer.parent().parent().width();
  }

  return containerWidth;
}

module.exports = {
  'slideLength': slideLength,
  'debounce': debounce,
  'generateUUID': generateUUID,
  'getContainerWidth': getContainerWidth,
  'patchNumber': patchNumber
}
