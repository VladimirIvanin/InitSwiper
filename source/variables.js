var defaults = {
  setWrapperSize: true,
  controlBy: 'container',
  spaceBetween: 20,
  autoLength: false, // автоматически выставить кол-во слайдов исходя из минимальной ширины карточки
  autoResponsive: false, // Автоматически расчитать респонсив для слайдера
  maxBreakpoint: 4200,
  minBreakpoint: 300,
  minCartWidth: 300, // Минимальная ширина карточки
  gutterCart: 10,
  pagination: {
    type: 'bullets',
    clickable: true
  }
};

module.exports = {
  'defaults': defaults
}
