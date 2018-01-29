/* global $, Swiper */

var autoResponsive = require('./autoResponsive');
var generateUUID = require('./help').generateUUID;
var patchNumber = require('./help').patchNumber;

/**
 * Инициализация слайдера
 * @param  {jquery object} _container $('.main-slider') селектор блока со слайдером. не swiper-container, а его родитель
 * @param  {object} options настройки для свайпера
 * @return {instance} Созданный инстанс слайдера
*/
function init(_container) {
  var self = this;
  var isSwiper = _container.hasClass('swiper-container')
  var $slider = (isSwiper) ? $container : _container.find('.swiper-container');
  var $container = (isSwiper) ? _container.parent() : _container;


  var _uuid = generateUUID();
  var options = self.options;
  var instance = ($container[0] && $container[0].swiper) ? $container[0].swiper : null;

  var uniqueClass = '.' + 'slider-' + _uuid;
  var uniqueClassContainer = '.' + 'container-' + _uuid;
  var selector =  uniqueClass + ' .swiper-container' + uniqueClassContainer;
  var $nextButton = uniqueClass + ' .swiper-button-next';
  var $prevButton = uniqueClass + ' .swiper-button-prev';
  var sliderLength = $container.find('.swiper-slide').length;
  var _parent = options._parents;
  var $parent = null;
  if (_parent) {
    $parent = $container.parents(_parent + ':first');
  }
  $container.addClass(uniqueClass.replace('.', ''));
  $container.find('.swiper-container').eq(0).addClass(uniqueClassContainer.replace('.', ''));

  var mainSliderLength = 1;
  var $swiperContainer = $(selector).eq(0);
  var containerParent = $swiperContainer.parents(':visible').width();
  var containerWidth = $swiperContainer.width();
  if (containerWidth == 0) {
    containerWidth = (containerParent > 0) ? containerParent : $swiperContainer.parent().parent().width();
  }

  options.$swiperContainer = $swiperContainer;

  if (options.autoLength) {
    mainSliderLength = _.floor( containerWidth / options.minCartWidth );
    if (mainSliderLength < 1) {
      mainSliderLength = 1;
    }
  }

  var breakpoints = {};
  if (options.autoResponsive) {
    var winWidth = $(window).width();
    var isResponsive = (patchNumber($("body").css('min-width')) < 480);
    if (isResponsive == false) {
      console.warn('Проверьте свойство autoResponsive, autoResponsive работает некорректно для не адаптивных сайтов', $container);
      console.trace();
    }
    breakpoints = autoResponsive(options, containerWidth, winWidth);
  }

  var defaultOptions = {
    slidesPerView: mainSliderLength,
    loop: mainSliderLength < sliderLength,
    loopAdditionalSlides: sliderLength,
    navigation: {
      nextEl: $nextButton,
      prevEl: $prevButton,
    },
    pagination: {
      el: uniqueClass + ' .swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: breakpoints
  }

  var sliderOption = $.extend(true, defaultOptions, options);

  var showSlider = sliderLength > 0;
  var arrowHide = sliderLength < sliderOption.slidesPerView;

  if (arrowHide) {
    $container.addClass('arrow-hide');
  }
  if (!showSlider) {
    $container.addClass('is-empty');
    return;
  }

  if (instance) {
    instance.params = sliderOption;
    instance.update(true);
    return instance;
  }

  var slider = new Swiper(selector, sliderOption);

  if ($parent) {
    $parent.on('mouseenter', function(event) {
      slider.update(true);
    });
  }

  return slider;
}

module.exports = init;
