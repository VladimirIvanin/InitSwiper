# InitSwiper

Инициализация слайдеров с возможностью автоматического расчета слайдов.

Совместимо только со Swiper v4.

```js

/**
 * Инициализация слайдера
 * @param  {jquery object/string} $container $('.main-slider') селектор блока со слайдером. не swiper-container, а его родитель
 * @param  {object} options настройки для свайпера
 * @return {Array instance} Массив инстансов слайдера
*/

<<<<<<< HEAD
var mySliders = InitSwiper('.main-slider', {
  autoLength: true, // автоматически выставить кол-во слайдов исходя из минимальной ширины карточки
  minCartWidth: 280, // Минимальная ширина карточки
  autoResponsive: true // Автоматически расчитать респонсив для слайдера
});
=======
var sliders = InitSwiper($('.main-slider'), {
  autoLength: true, // автоматически выставить кол-во слайдов исходя из минимальной ширины карточки
  minCartWidth: 280, // Минимальная ширина карточки
})
>>>>>>> e976cfd7dcaea280312e4b50d46c35dae2bf41dc

```

```html
<div class="main-slider">
  <!-- Slider main container -->
  <div class="swiper-container">
      <!-- Additional required wrapper -->
      <div class="swiper-wrapper">
          <!-- Slides -->
          <div class="swiper-slide">Slide 1</div>
          <div class="swiper-slide">Slide 2</div>
          <div class="swiper-slide">Slide 3</div>
      </div>
      <!-- If we need pagination -->
      <div class="swiper-pagination"></div>

      <!-- If we need navigation buttons -->
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>

      <!-- If we need scrollbar -->
      <div class="swiper-scrollbar"></div>
  </div>
</div>
```
