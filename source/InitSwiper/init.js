/* global $, Swiper */

var debounce = require('./help').debounce;
var slideLength = require('./help').slideLength;
var generateUUID = require('./help').generateUUID;
var getContainerWidth = require('./help').getContainerWidth;

/**
 * Инициализация слайдера
 * @param  {jquery object} _container $('.main-slider') селектор блока со слайдером. не swiper-container, а его родитель
 * @param  {object} options настройки для свайпера
 * @return {instance} Созданный инстанс слайдера
*/
function init(_container) {
  var self = this;
  var isSwiper = _container.hasClass('swiper-container')
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
  var containerWidth = getContainerWidth($swiperContainer)

  options.$swiperContainer = $swiperContainer;

  if (options.autoLength) {
    mainSliderLength = slideLength( containerWidth, options.minCartWidth );
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
    }
  }

  if (!Swiper.options) {
    defaultOptions.nextButton = $nextButton;
    defaultOptions.prevButton = $prevButton;
    defaultOptions.pagination = uniqueClass + ' .swiper-pagination';
  }

  var isInsales = (typeof Site !== 'undefined' && typeof Site.menuConfig !== 'undefined' && typeof Site.alertifyConfig !== 'undefined')
  if (typeof Swiper.name != 'undefined' && Swiper.name == 'Factory' && isInsales) {
    $container.find('.swiper-slide').attr('data-slider-slide', '');
    if ($container.find('.swiper-slide').parent('.swiper-wrapper').length) {
      $container.find('.swiper-slide').unwrap('.swiper-wrapper');
    }
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

  if (options.autoResponsive) {
    $(window).on('resize', debounce(function(event) {
      if (typeof slider.params != 'undefined') {
        containerWidth = getContainerWidth($swiperContainer)
        slider.params.slidesPerView = slideLength( containerWidth, options.minCartWidth );
        slider.update(true);
      }
    }, 150));
  }

  return slider;
}

module.exports = init;
