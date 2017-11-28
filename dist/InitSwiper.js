/*!
 * InitSwiper v0.2.2
 * Vladimir Ivanin
 * 2017
 */
(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function autoResponsive(e){var r={},o=e.maxBreakpoint,t=e.minBreakpoint,a=e.minCartWidth,n=_.floor(o/20);return $.each(Array(n),function(n,i){var s=o-20*n,u=_.floor(s/a);u<1&&(u=1),t<s&&(r[s]={slidesPerView:u,spaceBetween:e.gutterCart})}),r}module.exports=autoResponsive;
},{}],2:[function(require,module,exports){
function generateUUID(){var x=(new Date).getTime();return"xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g,function(e){var r=(x+16*Math.random())%16|0;return x=Math.floor(x/16),("x"==e?r:3&r|8).toString(16)})}module.exports={generateUUID:generateUUID};
},{}],3:[function(require,module,exports){
var defaults=require("../variables").defaults,init=require("./init"),InitSwiper=function(i,t){var e=this,n=[];e.options=$.extend(!0,{},defaults,t),e.init=init;return("string"==typeof i?$(i):i).each(function(i,t){var r=e.init($(t));_.isArray(r)?n=n.concat(r):n.push(r)}),n};module.exports=InitSwiper;
},{"../variables":6,"./init":4}],4:[function(require,module,exports){
function init(e){var i=generateUUID(),t=this.options,n=e[0]&&e[0].swiper?e[0].swiper:null,r=".slider-"+i,s=r+" .swiper-container",a=r+" .swiper-button-next",o=r+" .swiper-button-prev",p=e.find(".swiper-slide").length,l=t._parents,d=null;l&&(d=e.parents(l+":first")),e.addClass(r.replace(".",""));var u=4,w=$(s).parents(":visible").width(),v=$(s).width();0==v&&(v=w>0?w:$(s).parent().parent().width()),t.autoLength&&(u=_.floor(v/t.minCartWidth))<1&&(u=1);var h={};if(t.autoResponsive){0==$(window).width()>=v+50&&(console.warn("Проверьте свойство autoResponsive, autoResponsive работает некорректно для не адаптивных сайтов",e),console.trace()),h=autoResponsive(t)}var c={slidesPerView:u,loop:u<p,loopAdditionalSlides:p,navigation:{nextEl:a,prevEl:o},pagination:{el:r+" .swiper-pagination",type:"bullets",clickable:!0},breakpoints:h},f=$.extend(!0,c,t),g=p>0;if(p<f.slidesPerView&&e.addClass("arrow-hide"),g){if(n)return n.params=f,n.update(!0),n;var b=new Swiper(s,f);return d&&d.on("mouseenter",function(e){b.update(!0)}),b}e.addClass("is-empty")}var autoResponsive=require("./autoResponsive"),generateUUID=require("./help").generateUUID;module.exports=init;
},{"./autoResponsive":1,"./help":2}],5:[function(require,module,exports){
window.InitSwiper=require("InitSwiper");
},{"InitSwiper":3}],6:[function(require,module,exports){
var defaults={setWrapperSize:!0,controlBy:"container",spaceBetween:20,autoLength:!1,autoResponsive:!1,maxBreakpoint:1220,minBreakpoint:300,minCartWidth:300,gutterCart:10,pagination:{type:"bullets",clickable:!0}};module.exports={defaults:defaults};
},{}]},{},[5]);
