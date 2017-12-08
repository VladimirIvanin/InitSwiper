/*!
 * InitSwiper v0.2.4
 * Vladimir Ivanin
 * 2017
 */
(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function autoResponsive(e,r){var o={},t=e.maxBreakpoint,a=e.minBreakpoint,n=e.minCartWidth,i=_.floor(t/20);return $.each(Array(i),function(r,i){var s=t-20*r,u=_.floor(s/n);u<1&&(u=1),a<s&&(o[s]={slidesPerView:u,spaceBetween:e.gutterCart})}),o}module.exports=autoResponsive;
},{}],2:[function(require,module,exports){
function generateUUID(){var x=(new Date).getTime();return"xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g,function(e){var r=(x+16*Math.random())%16|0;return x=Math.floor(x/16),("x"==e?r:3&r|8).toString(16)})}module.exports={generateUUID:generateUUID};
},{}],3:[function(require,module,exports){
var defaults=require("../variables").defaults,init=require("./init"),InitSwiper=function(i,t){var e=this,n=[];e.options=$.extend(!0,{},defaults,t),e.init=init;return("string"==typeof i?$(i):i).each(function(i,t){var r=e.init($(t));_.isArray(r)?n=n.concat(r):n.push(r)}),n};module.exports=InitSwiper;
},{"../variables":6,"./init":4}],4:[function(require,module,exports){
function init(e){var i=e.hasClass("swiper-container"),n=(i||e.find(".swiper-container"),i?e.parent():e),t=generateUUID(),r=this.options,a=n[0]&&n[0].swiper?n[0].swiper:null,s=".slider-"+t,o=".container-"+t,p=s+" .swiper-container"+o,l=s+" .swiper-button-next",d=s+" .swiper-button-prev",u=n.find(".swiper-slide").length,w=r._parents,v=null;w&&(v=n.parents(w+":first")),n.addClass(s.replace(".","")),n.find(".swiper-container").eq(0).addClass(o.replace(".",""));var c=1,h=$(p).eq(0),f=h.parents(":visible").width(),g=h.width();0==g&&(g=f>0?f:h.parent().parent().width()),r.autoLength&&(c=_.floor(g/r.minCartWidth))<1&&(c=1);var b={};if(r.autoResponsive){0==$(window).width()>=g+50&&(console.warn("Проверьте свойство autoResponsive, autoResponsive работает некорректно для не адаптивных сайтов",n),console.trace()),b=autoResponsive(r,g)}var C={slidesPerView:c,loop:c<u,loopAdditionalSlides:u,navigation:{nextEl:l,prevEl:d},pagination:{el:s+" .swiper-pagination",type:"bullets",clickable:!0},breakpoints:b},R=$.extend(!0,C,r),U=u>0;if(u<R.slidesPerView&&n.addClass("arrow-hide"),U){if(a)return a.params=R,a.update(!0),a;var m=new Swiper(p,R);return v&&v.on("mouseenter",function(e){m.update(!0)}),m}n.addClass("is-empty")}var autoResponsive=require("./autoResponsive"),generateUUID=require("./help").generateUUID;module.exports=init;
},{"./autoResponsive":1,"./help":2}],5:[function(require,module,exports){
window.InitSwiper=require("InitSwiper");
},{"InitSwiper":3}],6:[function(require,module,exports){
var defaults={setWrapperSize:!0,controlBy:"container",spaceBetween:20,autoLength:!1,autoResponsive:!1,maxBreakpoint:1220,minBreakpoint:300,minCartWidth:300,gutterCart:10,pagination:{type:"bullets",clickable:!0}};module.exports={defaults:defaults};
},{}]},{},[5]);
