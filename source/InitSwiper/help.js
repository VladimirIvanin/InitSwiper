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

module.exports = {
  'generateUUID': generateUUID,
  'patchNumber': patchNumber
}
