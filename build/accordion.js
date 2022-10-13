/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@10up/component-accordion/dist/index.modern.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@10up/component-accordion/dist/index.modern.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Accordion": function() { return /* binding */ e; }
/* harmony export */ });
function t(){return(t=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}).apply(this,arguments)}class e{constructor(e,n={}){this.evtCallbacks={},window.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=function(t,e){e=e||window;for(let n=0;n<this.length;n++)t.call(e,this[n],n,this)}),e&&"string"==typeof e?(this.$accordions=document.querySelectorAll(e),this.$accordions?(document.documentElement.classList.add("js"),this.settings=t({},{onCreate:null,onOpen:null,onClose:null,onToggle:null},n),this.$accordions.forEach((t,e)=>{this.setupAccordion(t,e)}),this.settings.onCreate&&"function"==typeof this.settings.onCreate&&this.settings.onCreate.call()):console.error("10up Accordion: Target not found. A valid target (accordion area) must be used.")):console.error("10up Accordion: No target supplied. A valid target (accordion area) must be used.")}destroy(){this.removeAllEventListeners(),this.$accordions.forEach(t=>{const[e,n]=this.getAccordionLinksAndContent(t);e.forEach(t=>{t.removeAttribute("id"),t.removeAttribute("aria-expanded"),t.removeAttribute("aria-controls")}),n.forEach(t=>{t.removeAttribute("id"),t.removeAttribute("aria-hidden"),t.removeAttribute("aria-labelledby")})})}getAccordionLinksAndContent(t){const e=t.querySelectorAll(".accordion-header"),n=t.querySelectorAll(".accordion-content");return[Array.prototype.slice.call(e).filter(e=>e.parentNode===t),Array.prototype.slice.call(n).filter(e=>e.parentNode===t)]}addEventListener(t,e,n){void 0===this.evtCallbacks[e]&&(this.evtCallbacks[e]=[]),this.evtCallbacks[e].push({element:t,callback:n}),t.addEventListener(e,n)}removeAllEventListeners(){Object.keys(this.evtCallbacks).forEach(t=>{this.evtCallbacks[t].forEach(({element:e,callback:n})=>{e.removeEventListener(t,n)})})}setupAccordion(t,e){const[n,o]=this.getAccordionLinksAndContent(t);this.addEventListener(t,"keydown",e=>{const o=e.target,s=e.which;o.classList.contains("accordion-header")&&o.parentNode===t&&this.accessKeyBindings(n,o,s,e)}),n.forEach((t,n)=>{t.setAttribute("id",`tab${e}-${n}`),t.setAttribute("aria-expanded","false"),t.setAttribute("aria-controls",`panel${e}-${n}`),this.addEventListener(t,"click",t=>{t.preventDefault(),this.toggleAccordionItem(t)})}),o.forEach((t,n)=>{t.setAttribute("id",`panel${e}-${n}`),t.setAttribute("aria-hidden","true"),t.setAttribute("aria-labelledby",`tab${e}-${n}`)})}openAccordionItem(t){const{link:e,content:n}=t;e.setAttribute("aria-expanded","true"),n.setAttribute("aria-hidden","false"),this.settings.onOpen&&"function"==typeof this.settings.onOpen&&this.settings.onOpen.call(t)}closeAccordionItem(t){const{link:e,content:n}=t;e.setAttribute("aria-expanded","false"),n.setAttribute("aria-hidden","true"),this.settings.onClose&&"function"==typeof this.settings.onClose&&this.settings.onClose.call(t)}toggleAccordionItem(t){const e=t.target,n=e.nextElementSibling,o=n.querySelector(".accordion-label"),s={link:e,content:n,heading:o};e.classList.toggle("is-active"),n.classList.toggle("is-active"),o&&(o.setAttribute("tabindex",-1),o.focus()),n.classList.contains("is-active")?this.openAccordionItem(s):this.closeAccordionItem(s),this.settings.onToggle&&"function"==typeof this.settings.onToggle&&this.settings.onToggle.call(s)}accessKeyBindings(t,e,n,o){let s;switch(t.forEach((t,n)=>{e===t&&(s=n)}),n){case 35:s=t.length-1,o.preventDefault();break;case 36:s=0,o.preventDefault();break;case 38:s--,s<0&&(s=t.length-1),o.preventDefault();break;case 40:s++,s>t.length-1&&(s=0),o.preventDefault()}t[s].focus()}}/* harmony default export */ __webpack_exports__["default"] = (e);
//# sourceMappingURL=index.modern.js.map


/***/ }),

/***/ "./src/accordion.scss":
/*!****************************!*\
  !*** ./src/accordion.scss ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!**************************!*\
  !*** ./src/accordion.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _accordion_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./accordion.scss */ "./src/accordion.scss");
/* harmony import */ var _10up_component_accordion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @10up/component-accordion */ "./node_modules/@10up/component-accordion/dist/index.modern.js");
/*
 * Accordion styling and state.
 */


if (typeof window.ACFAccordionBlock !== 'object') {
  window.ACFAccordionBlock = {};
}
window.ACFAccordionBlock.Accordion = _10up_component_accordion__WEBPACK_IMPORTED_MODULE_1__["default"];
function accordionsInit() {
  new ACFAccordionBlock.Accordion('.accordion');
}
document.addEventListener('DOMContentLoaded', () => {
  if (window.acf) {
    window.acf.addAction('render_block_preview', accordionsInit);
  } else {
    accordionsInit();
  }
});
}();
/******/ })()
;
//# sourceMappingURL=accordion.js.map