﻿/// <reference path="jquery-1.7.2.min.js" />
//masonry-docs.min.js
(function(t){"use strict";function e(t){return RegExp("(^|\\s+)"+t+"(\\s+|$)")}function i(t,e){var i=n(t,e)?r:o;i(t,e)}var n,o,r;"classList"in document.documentElement?(n=function(t,e){return t.classList.contains(e)},o=function(t,e){t.classList.add(e)},r=function(t,e){t.classList.remove(e)}):(n=function(t,i){return e(i).test(t.className)},o=function(t,e){n(t,e)||(t.className=t.className+" "+e)},r=function(t,i){t.className=t.className.replace(e(i)," ")});var s={hasClass:n,addClass:o,removeClass:r,toggleClass:i,has:n,add:o,remove:r,toggle:i};"function"==typeof define&&define.amd?define(s):t.classie=s})(window),function(t){"use strict";function e(e){var i=t.event;return i.target=i.target||i.srcElement||e,i}var i=document.documentElement,n=function(){};i.addEventListener?n=function(t,e,i){t.addEventListener(e,i,!1)}:i.attachEvent&&(n=function(t,i,n){t[i+n]=n.handleEvent?function(){var i=e(t);n.handleEvent.call(n,i)}:function(){var i=e(t);n.call(t,i)},t.attachEvent("on"+i,t[i+n])});var o=function(){};i.removeEventListener?o=function(t,e,i){t.removeEventListener(e,i,!1)}:i.detachEvent&&(o=function(t,e,i){t.detachEvent("on"+e,t[e+i]);try{delete t[e+i]}catch(n){t[e+i]=void 0}});var r={bind:n,unbind:o};"function"==typeof define&&define.amd?define(r):"object"==typeof exports?module.exports=r:t.eventie=r}(this),function(t){"use strict";function e(t){"function"==typeof t&&(e.isReady?t():r.push(t))}function i(t){var i="readystatechange"===t.type&&"complete"!==o.readyState;if(!e.isReady&&!i){e.isReady=!0;for(var n=0,s=r.length;s>n;n++){var a=r[n];a()}}}function n(n){return n.bind(o,"DOMContentLoaded",i),n.bind(o,"readystatechange",i),n.bind(t,"load",i),e}var o=t.document,r=[];e.isReady=!1,"function"==typeof define&&define.amd?(e.isReady="function"==typeof requirejs,define(["eventie/eventie"],n)):t.docReady=n(t.eventie)}(this),function(t){"use strict";function e(t){if(t){if("string"==typeof n[t])return t;t=t.charAt(0).toUpperCase()+t.slice(1);for(var e,o=0,r=i.length;r>o;o++)if(e=i[o]+t,"string"==typeof n[e])return e}}var i="Webkit Moz ms Ms O".split(" "),n=document.documentElement.style;"function"==typeof define&&define.amd?define(function(){return e}):"object"==typeof exports?module.exports=e:t.getStyleProperty=e}(window),function(){"use strict";function t(){}function e(t,e){for(var i=t.length;i--;)if(t[i].listener===e)return i;return-1}function i(t){return function(){return this[t].apply(this,arguments)}}var n=t.prototype,o=this,r=o.EventEmitter;n.getListeners=function(t){var e,i,n=this._getEvents();if(t instanceof RegExp){e={};for(i in n)n.hasOwnProperty(i)&&t.test(i)&&(e[i]=n[i])}else e=n[t]||(n[t]=[]);return e},n.flattenListeners=function(t){var e,i=[];for(e=0;t.length>e;e+=1)i.push(t[e].listener);return i},n.getListenersAsObject=function(t){var e,i=this.getListeners(t);return i instanceof Array&&(e={},e[t]=i),e||i},n.addListener=function(t,i){var n,o=this.getListenersAsObject(t),r="object"==typeof i;for(n in o)o.hasOwnProperty(n)&&-1===e(o[n],i)&&o[n].push(r?i:{listener:i,once:!1});return this},n.on=i("addListener"),n.addOnceListener=function(t,e){return this.addListener(t,{listener:e,once:!0})},n.once=i("addOnceListener"),n.defineEvent=function(t){return this.getListeners(t),this},n.defineEvents=function(t){for(var e=0;t.length>e;e+=1)this.defineEvent(t[e]);return this},n.removeListener=function(t,i){var n,o,r=this.getListenersAsObject(t);for(o in r)r.hasOwnProperty(o)&&(n=e(r[o],i),-1!==n&&r[o].splice(n,1));return this},n.off=i("removeListener"),n.addListeners=function(t,e){return this.manipulateListeners(!1,t,e)},n.removeListeners=function(t,e){return this.manipulateListeners(!0,t,e)},n.manipulateListeners=function(t,e,i){var n,o,r=t?this.removeListener:this.addListener,s=t?this.removeListeners:this.addListeners;if("object"!=typeof e||e instanceof RegExp)for(n=i.length;n--;)r.call(this,e,i[n]);else for(n in e)e.hasOwnProperty(n)&&(o=e[n])&&("function"==typeof o?r.call(this,n,o):s.call(this,n,o));return this},n.removeEvent=function(t){var e,i=typeof t,n=this._getEvents();if("string"===i)delete n[t];else if(t instanceof RegExp)for(e in n)n.hasOwnProperty(e)&&t.test(e)&&delete n[e];else delete this._events;return this},n.removeAllListeners=i("removeEvent"),n.emitEvent=function(t,e){var i,n,o,r,s=this.getListenersAsObject(t);for(o in s)if(s.hasOwnProperty(o))for(n=s[o].length;n--;)i=s[o][n],i.once===!0&&this.removeListener(t,i.listener),r=i.listener.apply(this,e||[]),r===this._getOnceReturnValue()&&this.removeListener(t,i.listener);return this},n.trigger=i("emitEvent"),n.emit=function(t){var e=Array.prototype.slice.call(arguments,1);return this.emitEvent(t,e)},n.setOnceReturnValue=function(t){return this._onceReturnValue=t,this},n._getOnceReturnValue=function(){return this.hasOwnProperty("_onceReturnValue")?this._onceReturnValue:!0},n._getEvents=function(){return this._events||(this._events={})},t.noConflict=function(){return o.EventEmitter=r,t},"function"==typeof define&&define.amd?define(function(){return t}):"object"==typeof module&&module.exports?module.exports=t:this.EventEmitter=t}.call(this),function(t,e){"use strict";"function"==typeof define&&define.amd?define(["eventEmitter/EventEmitter","eventie/eventie"],function(i,n){return e(t,i,n)}):"object"==typeof exports?module.exports=e(t,require("eventEmitter"),require("eventie")):t.imagesLoaded=e(t,t.EventEmitter,t.eventie)}(this,function(t,e,i){"use strict";function n(t,e){for(var i in e)t[i]=e[i];return t}function o(t){return"[object Array]"===d.call(t)}function r(t){var e=[];if(o(t))e=t;else if("number"==typeof t.length)for(var i=0,n=t.length;n>i;i++)e.push(t[i]);else e.push(t);return e}function s(t,e,i){if(!(this instanceof s))return new s(t,e);"string"==typeof t&&(t=document.querySelectorAll(t)),this.elements=r(t),this.options=n({},this.options),"function"==typeof e?i=e:n(this.options,e),i&&this.on("always",i),this.getImages(),h&&(this.jqDeferred=new h.Deferred);var o=this;setTimeout(function(){o.check()})}function a(t){this.img=t}function u(t){this.src=t,l[t]=this}var h=t.jQuery,c=t.console,p=c!==void 0,d=Object.prototype.toString;s.prototype=new e,s.prototype.options={},s.prototype.getImages=function(){this.images=[];for(var t=0,e=this.elements.length;e>t;t++){var i=this.elements[t];"IMG"===i.nodeName&&this.addImage(i);for(var n=i.querySelectorAll("img"),o=0,r=n.length;r>o;o++){var s=n[o];this.addImage(s)}}},s.prototype.addImage=function(t){var e=new a(t);this.images.push(e)},s.prototype.check=function(){function t(t,o){return e.options.debug&&p&&c.log("confirm",t,o),e.progress(t),i++,i===n&&e.complete(),!0}var e=this,i=0,n=this.images.length;if(this.hasAnyBroken=!1,!n)return this.complete(),void 0;for(var o=0;n>o;o++){var r=this.images[o];r.on("confirm",t),r.check()}},s.prototype.progress=function(t){this.hasAnyBroken=this.hasAnyBroken||!t.isLoaded;var e=this;setTimeout(function(){e.emit("progress",e,t),e.jqDeferred&&e.jqDeferred.notify&&e.jqDeferred.notify(e,t)})},s.prototype.complete=function(){var t=this.hasAnyBroken?"fail":"done";this.isComplete=!0;var e=this;setTimeout(function(){if(e.emit(t,e),e.emit("always",e),e.jqDeferred){var i=e.hasAnyBroken?"reject":"resolve";e.jqDeferred[i](e)}})},h&&(h.fn.imagesLoaded=function(t,e){var i=new s(this,t,e);return i.jqDeferred.promise(h(this))}),a.prototype=new e,a.prototype.check=function(){var t=l[this.img.src]||new u(this.img.src);if(t.isConfirmed)return this.confirm(t.isLoaded,"cached was confirmed"),void 0;if(this.img.complete&&void 0!==this.img.naturalWidth)return this.confirm(0!==this.img.naturalWidth,"naturalWidth"),void 0;var e=this;t.on("confirm",function(t,i){return e.confirm(t.isLoaded,i),!0}),t.check()},a.prototype.confirm=function(t,e){this.isLoaded=t,this.emit("confirm",this,e)};var l={};return u.prototype=new e,u.prototype.check=function(){if(!this.isChecked){var t=new Image;i.bind(t,"load",this),i.bind(t,"error",this),t.src=this.src,this.isChecked=!0}},u.prototype.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},u.prototype.onload=function(t){this.confirm(!0,"onload"),this.unbindProxyEvents(t)},u.prototype.onerror=function(t){this.confirm(!1,"onerror"),this.unbindProxyEvents(t)},u.prototype.confirm=function(t,e){this.isConfirmed=!0,this.isLoaded=t,this.emit("confirm",this,e)},u.prototype.unbindProxyEvents=function(t){i.unbind(t.target,"load",this),i.unbind(t.target,"error",this)},s}),function(t){"use strict";function e(){}function i(t){function i(e){e.prototype.option||(e.prototype.option=function(e){t.isPlainObject(e)&&(this.options=t.extend(!0,this.options,e))})}function o(e,i){t.fn[e]=function(o){if("string"==typeof o){for(var s=n.call(arguments,1),a=0,u=this.length;u>a;a++){var h=this[a],c=t.data(h,e);if(c)if(t.isFunction(c[o])&&"_"!==o.charAt(0)){var p=c[o].apply(c,s);if(void 0!==p)return p}else r("no such method '"+o+"' for "+e+" instance");else r("cannot call methods on "+e+" prior to initialization; "+"attempted to call '"+o+"'")}return this}return this.each(function(){var n=t.data(this,e);n?(n.option(o),n._init()):(n=new i(this,o),t.data(this,e,n))})}}if(t){var r="undefined"==typeof console?e:function(t){console.error(t)};return t.bridget=function(t,e){i(e),o(t,e)},t.bridget}}var n=Array.prototype.slice;"function"==typeof define&&define.amd?define(["jquery"],i):i(t.jQuery)}(window),function(t){"use strict";function e(t){var e=parseFloat(t),i=-1===t.indexOf("%")&&!isNaN(e);return i&&e}function i(){for(var t={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},e=0,i=s.length;i>e;e++){var n=s[e];t[n]=0}return t}function n(t){function n(t){if("string"==typeof t&&(t=document.querySelector(t)),t&&"object"==typeof t&&t.nodeType){var n=r(t);if("none"===n.display)return i();var o={};o.width=t.offsetWidth,o.height=t.offsetHeight;for(var c=o.isBorderBox=!(!h||!n[h]||"border-box"!==n[h]),p=0,d=s.length;d>p;p++){var l=s[p],f=n[l];f=a(t,f);var m=parseFloat(f);o[l]=isNaN(m)?0:m}var y=o.paddingLeft+o.paddingRight,g=o.paddingTop+o.paddingBottom,v=o.marginLeft+o.marginRight,b=o.marginTop+o.marginBottom,E=o.borderLeftWidth+o.borderRightWidth,w=o.borderTopWidth+o.borderBottomWidth,L=c&&u,S=e(n.width);S!==!1&&(o.width=S+(L?0:y+E));var x=e(n.height);return x!==!1&&(o.height=x+(L?0:g+w)),o.innerWidth=o.width-(y+E),o.innerHeight=o.height-(g+w),o.outerWidth=o.width+v,o.outerHeight=o.height+b,o}}function a(t,e){if(o||-1===e.indexOf("%"))return e;var i=t.style,n=i.left,r=t.runtimeStyle,s=r&&r.left;return s&&(r.left=t.currentStyle.left),i.left=e,e=i.pixelLeft,i.left=n,s&&(r.left=s),e}var u,h=t("boxSizing");return function(){if(h){var t=document.createElement("div");t.style.width="200px",t.style.padding="1px 2px 3px 4px",t.style.borderStyle="solid",t.style.borderWidth="1px 2px 3px 4px",t.style[h]="border-box";var i=document.body||document.documentElement;i.appendChild(t);var n=r(t);u=200===e(n.width),i.removeChild(t)}}(),n}var o=t.getComputedStyle,r=o?function(t){return o(t,null)}:function(t){return t.currentStyle},s=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"];"function"==typeof define&&define.amd?define(["get-style-property/get-style-property"],n):"object"==typeof exports?module.exports=n(require("get-style-property")):t.getSize=n(t.getStyleProperty)}(window),function(t,e){"use strict";function i(t,e){return t[a](e)}function n(t){if(!t.parentNode){var e=document.createDocumentFragment();e.appendChild(t)}}function o(t,e){n(t);for(var i=t.parentNode.querySelectorAll(e),o=0,r=i.length;r>o;o++)if(i[o]===t)return!0;return!1}function r(t,e){return n(t),i(t,e)}var s,a=function(){if(e.matchesSelector)return"matchesSelector";for(var t=["webkit","moz","ms","o"],i=0,n=t.length;n>i;i++){var o=t[i],r=o+"MatchesSelector";if(e[r])return r}}();if(a){var u=document.createElement("div"),h=i(u,"div");s=h?i:r}else s=o;"function"==typeof define&&define.amd?define(function(){return s}):window.matchesSelector=s}(this,Element.prototype),function(t){"use strict";function e(t,e){for(var i in e)t[i]=e[i];return t}function i(t){for(var e in t)return!1;return e=null,!0}function n(t){return t.replace(/([A-Z])/g,function(t){return"-"+t.toLowerCase()})}function o(t,o,r){function a(t,e){t&&(this.element=t,this.layout=e,this.position={x:0,y:0},this._create())}var u=r("transition"),h=r("transform"),c=u&&h,p=!!r("perspective"),d={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"otransitionend",transition:"transitionend"}[u],l=["transform","transition","transitionDuration","transitionProperty"],f=function(){for(var t={},e=0,i=l.length;i>e;e++){var n=l[e],o=r(n);o&&o!==n&&(t[n]=o)}return t}();e(a.prototype,t.prototype),a.prototype._create=function(){this._transn={ingProperties:{},clean:{},onEnd:{}},this.css({position:"absolute"})},a.prototype.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},a.prototype.getSize=function(){this.size=o(this.element)},a.prototype.css=function(t){var e=this.element.style;for(var i in t){var n=f[i]||i;e[n]=t[i]}},a.prototype.getPosition=function(){var t=s(this.element),e=this.layout.options,i=e.isOriginLeft,n=e.isOriginTop,o=parseInt(t[i?"left":"right"],10),r=parseInt(t[n?"top":"bottom"],10);o=isNaN(o)?0:o,r=isNaN(r)?0:r;var a=this.layout.size;o-=i?a.paddingLeft:a.paddingRight,r-=n?a.paddingTop:a.paddingBottom,this.position.x=o,this.position.y=r},a.prototype.layoutPosition=function(){var t=this.layout.size,e=this.layout.options,i={};e.isOriginLeft?(i.left=this.position.x+t.paddingLeft+"px",i.right=""):(i.right=this.position.x+t.paddingRight+"px",i.left=""),e.isOriginTop?(i.top=this.position.y+t.paddingTop+"px",i.bottom=""):(i.bottom=this.position.y+t.paddingBottom+"px",i.top=""),this.css(i),this.emitEvent("layout",[this])};var m=p?function(t,e){return"translate3d("+t+"px, "+e+"px, 0)"}:function(t,e){return"translate("+t+"px, "+e+"px)"};a.prototype._transitionTo=function(t,e){this.getPosition();var i=this.position.x,n=this.position.y,o=parseInt(t,10),r=parseInt(e,10),s=o===this.position.x&&r===this.position.y;if(this.setPosition(t,e),s&&!this.isTransitioning)return this.layoutPosition(),void 0;var a=t-i,u=e-n,h={},c=this.layout.options;a=c.isOriginLeft?a:-a,u=c.isOriginTop?u:-u,h.transform=m(a,u),this.transition({to:h,onTransitionEnd:{transform:this.layoutPosition},isCleaning:!0})},a.prototype.goTo=function(t,e){this.setPosition(t,e),this.layoutPosition()},a.prototype.moveTo=c?a.prototype._transitionTo:a.prototype.goTo,a.prototype.setPosition=function(t,e){this.position.x=parseInt(t,10),this.position.y=parseInt(e,10)},a.prototype._nonTransition=function(t){this.css(t.to),t.isCleaning&&this._removeStyles(t.to);for(var e in t.onTransitionEnd)t.onTransitionEnd[e].call(this)},a.prototype._transition=function(t){if(!parseFloat(this.layout.options.transitionDuration))return this._nonTransition(t),void 0;var e=this._transn;for(var i in t.onTransitionEnd)e.onEnd[i]=t.onTransitionEnd[i];for(i in t.to)e.ingProperties[i]=!0,t.isCleaning&&(e.clean[i]=!0);if(t.from){this.css(t.from);var n=this.element.offsetHeight;n=null}this.enableTransition(t.to),this.css(t.to),this.isTransitioning=!0};var y=h&&n(h)+",opacity";a.prototype.enableTransition=function(){this.isTransitioning||(this.css({transitionProperty:y,transitionDuration:this.layout.options.transitionDuration}),this.element.addEventListener(d,this,!1))},a.prototype.transition=a.prototype[u?"_transition":"_nonTransition"],a.prototype.onwebkitTransitionEnd=function(t){this.ontransitionend(t)},a.prototype.onotransitionend=function(t){this.ontransitionend(t)};var g={"-webkit-transform":"transform","-moz-transform":"transform","-o-transform":"transform"};a.prototype.ontransitionend=function(t){if(t.target===this.element){var e=this._transn,n=g[t.propertyName]||t.propertyName;if(delete e.ingProperties[n],i(e.ingProperties)&&this.disableTransition(),n in e.clean&&(this.element.style[t.propertyName]="",delete e.clean[n]),n in e.onEnd){var o=e.onEnd[n];o.call(this),delete e.onEnd[n]}this.emitEvent("transitionEnd",[this])}},a.prototype.disableTransition=function(){this.removeTransitionStyles(),this.element.removeEventListener(d,this,!1),this.isTransitioning=!1},a.prototype._removeStyles=function(t){var e={};for(var i in t)e[i]="";this.css(e)};var v={transitionProperty:"",transitionDuration:""};return a.prototype.removeTransitionStyles=function(){this.css(v)},a.prototype.removeElem=function(){this.element.parentNode.removeChild(this.element),this.emitEvent("remove",[this])},a.prototype.remove=function(){if(!u||!parseFloat(this.layout.options.transitionDuration))return this.removeElem(),void 0;var t=this;this.on("transitionEnd",function(){return t.removeElem(),!0}),this.hide()},a.prototype.reveal=function(){delete this.isHidden,this.css({display:""});var t=this.layout.options;this.transition({from:t.hiddenStyle,to:t.visibleStyle,isCleaning:!0})},a.prototype.hide=function(){this.isHidden=!0,this.css({display:""});var t=this.layout.options;this.transition({from:t.visibleStyle,to:t.hiddenStyle,isCleaning:!0,onTransitionEnd:{opacity:function(){this.isHidden&&this.css({display:"none"})}}})},a.prototype.destroy=function(){this.css({position:"",left:"",right:"",top:"",bottom:"",transition:"",transform:""})},a}var r=t.getComputedStyle,s=r?function(t){return r(t,null)}:function(t){return t.currentStyle};"function"==typeof define&&define.amd?define(["eventEmitter/EventEmitter","get-size/get-size","get-style-property/get-style-property"],o):(t.Outlayer={},t.Outlayer.Item=o(t.EventEmitter,t.getSize,t.getStyleProperty))}(window),function(t){"use strict";function e(t,e){for(var i in e)t[i]=e[i];return t}function i(t){return"[object Array]"===p.call(t)}function n(t){var e=[];if(i(t))e=t;else if(t&&"number"==typeof t.length)for(var n=0,o=t.length;o>n;n++)e.push(t[n]);else e.push(t);return e}function o(t,e){var i=l(e,t);-1!==i&&e.splice(i,1)}function r(t){return t.replace(/(.)([A-Z])/g,function(t,e,i){return e+"-"+i}).toLowerCase()}function s(i,s,p,l,f,m){function y(t,i){if("string"==typeof t&&(t=a.querySelector(t)),!t||!d(t))return u&&u.error("Bad "+this.constructor.namespace+" element: "+t),void 0;this.element=t,this.options=e({},this.constructor.defaults),this.option(i);var n=++g;this.element.outlayerGUID=n,v[n]=this,this._create(),this.options.isInitLayout&&this.layout()}var g=0,v={};return y.namespace="outlayer",y.Item=m,y.defaults={containerStyle:{position:"relative"},isInitLayout:!0,isOriginLeft:!0,isOriginTop:!0,isResizeBound:!0,isResizingContainer:!0,transitionDuration:"0.4s",hiddenStyle:{opacity:0,transform:"scale(0.001)"},visibleStyle:{opacity:1,transform:"scale(1)"}},e(y.prototype,p.prototype),y.prototype.option=function(t){e(this.options,t)},y.prototype._create=function(){this.reloadItems(),this.stamps=[],this.stamp(this.options.stamp),e(this.element.style,this.options.containerStyle),this.options.isResizeBound&&this.bindResize()},y.prototype.reloadItems=function(){this.items=this._itemize(this.element.children)},y.prototype._itemize=function(t){for(var e=this._filterFindItemElements(t),i=this.constructor.Item,n=[],o=0,r=e.length;r>o;o++){var s=e[o],a=new i(s,this);n.push(a)}return n},y.prototype._filterFindItemElements=function(t){t=n(t);for(var e=this.options.itemSelector,i=[],o=0,r=t.length;r>o;o++){var s=t[o];if(d(s))if(e){f(s,e)&&i.push(s);for(var a=s.querySelectorAll(e),u=0,h=a.length;h>u;u++)i.push(a[u])}else i.push(s)}return i},y.prototype.getItemElements=function(){for(var t=[],e=0,i=this.items.length;i>e;e++)t.push(this.items[e].element);return t},y.prototype.layout=function(){this._resetLayout(),this._manageStamps();var t=void 0!==this.options.isLayoutInstant?this.options.isLayoutInstant:!this._isLayoutInited;this.layoutItems(this.items,t),this._isLayoutInited=!0},y.prototype._init=y.prototype.layout,y.prototype._resetLayout=function(){this.getSize()},y.prototype.getSize=function(){this.size=l(this.element)},y.prototype._getMeasurement=function(t,e){var i,n=this.options[t];n?("string"==typeof n?i=this.element.querySelector(n):d(n)&&(i=n),this[t]=i?l(i)[e]:n):this[t]=0},y.prototype.layoutItems=function(t,e){t=this._getItemsForLayout(t),this._layoutItems(t,e),this._postLayout()},y.prototype._getItemsForLayout=function(t){for(var e=[],i=0,n=t.length;n>i;i++){var o=t[i];o.isIgnored||e.push(o)}return e},y.prototype._layoutItems=function(t,e){function i(){n.emitEvent("layoutComplete",[n,t])}var n=this;if(!t||!t.length)return i(),void 0;this._itemsOn(t,"layout",i);for(var o=[],r=0,s=t.length;s>r;r++){var a=t[r],u=this._getItemLayoutPosition(a);u.item=a,u.isInstant=e||a.isLayoutInstant,o.push(u)}this._processLayoutQueue(o)},y.prototype._getItemLayoutPosition=function(){return{x:0,y:0}},y.prototype._processLayoutQueue=function(t){for(var e=0,i=t.length;i>e;e++){var n=t[e];this._positionItem(n.item,n.x,n.y,n.isInstant)}},y.prototype._positionItem=function(t,e,i,n){n?t.goTo(e,i):t.moveTo(e,i)},y.prototype._postLayout=function(){this.resizeContainer()},y.prototype.resizeContainer=function(){if(this.options.isResizingContainer){var t=this._getContainerSize();t&&(this._setContainerMeasure(t.width,!0),this._setContainerMeasure(t.height,!1))}},y.prototype._getContainerSize=c,y.prototype._setContainerMeasure=function(t,e){if(void 0!==t){var i=this.size;i.isBorderBox&&(t+=e?i.paddingLeft+i.paddingRight+i.borderLeftWidth+i.borderRightWidth:i.paddingBottom+i.paddingTop+i.borderTopWidth+i.borderBottomWidth),t=Math.max(t,0),this.element.style[e?"width":"height"]=t+"px"}},y.prototype._itemsOn=function(t,e,i){function n(){return o++,o===r&&i.call(s),!0}for(var o=0,r=t.length,s=this,a=0,u=t.length;u>a;a++){var h=t[a];h.on(e,n)}},y.prototype.ignore=function(t){var e=this.getItem(t);e&&(e.isIgnored=!0)},y.prototype.unignore=function(t){var e=this.getItem(t);e&&delete e.isIgnored},y.prototype.stamp=function(t){if(t=this._find(t)){this.stamps=this.stamps.concat(t);for(var e=0,i=t.length;i>e;e++){var n=t[e];this.ignore(n)}}},y.prototype.unstamp=function(t){if(t=this._find(t))for(var e=0,i=t.length;i>e;e++){var n=t[e];o(n,this.stamps),this.unignore(n)}},y.prototype._find=function(t){return t?("string"==typeof t&&(t=this.element.querySelectorAll(t)),t=n(t)):void 0},y.prototype._manageStamps=function(){if(this.stamps&&this.stamps.length){this._getBoundingRect();for(var t=0,e=this.stamps.length;e>t;t++){var i=this.stamps[t];this._manageStamp(i)}}},y.prototype._getBoundingRect=function(){var t=this.element.getBoundingClientRect(),e=this.size;this._boundingRect={left:t.left+e.paddingLeft+e.borderLeftWidth,top:t.top+e.paddingTop+e.borderTopWidth,right:t.right-(e.paddingRight+e.borderRightWidth),bottom:t.bottom-(e.paddingBottom+e.borderBottomWidth)}},y.prototype._manageStamp=c,y.prototype._getElementOffset=function(t){var e=t.getBoundingClientRect(),i=this._boundingRect,n=l(t),o={left:e.left-i.left-n.marginLeft,top:e.top-i.top-n.marginTop,right:i.right-e.right-n.marginRight,bottom:i.bottom-e.bottom-n.marginBottom};return o},y.prototype.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},y.prototype.bindResize=function(){this.isResizeBound||(i.bind(t,"resize",this),this.isResizeBound=!0)},y.prototype.unbindResize=function(){this.isResizeBound&&i.unbind(t,"resize",this),this.isResizeBound=!1},y.prototype.onresize=function(){function t(){e.resize(),delete e.resizeTimeout}this.resizeTimeout&&clearTimeout(this.resizeTimeout);var e=this;this.resizeTimeout=setTimeout(t,100)},y.prototype.resize=function(){this.isResizeBound&&this.needsResizeLayout()&&this.layout()},y.prototype.needsResizeLayout=function(){var t=l(this.element),e=this.size&&t;return e&&t.innerWidth!==this.size.innerWidth},y.prototype.addItems=function(t){var e=this._itemize(t);return e.length&&(this.items=this.items.concat(e)),e},y.prototype.appended=function(t){var e=this.addItems(t);e.length&&(this.layoutItems(e,!0),this.reveal(e))},y.prototype.prepended=function(t){var e=this._itemize(t);if(e.length){var i=this.items.slice(0);this.items=e.concat(i),this._resetLayout(),this._manageStamps(),this.layoutItems(e,!0),this.reveal(e),this.layoutItems(i)}},y.prototype.reveal=function(t){var e=t&&t.length;if(e)for(var i=0;e>i;i++){var n=t[i];n.reveal()}},y.prototype.hide=function(t){var e=t&&t.length;if(e)for(var i=0;e>i;i++){var n=t[i];n.hide()}},y.prototype.getItem=function(t){for(var e=0,i=this.items.length;i>e;e++){var n=this.items[e];if(n.element===t)return n}},y.prototype.getItems=function(t){if(t&&t.length){for(var e=[],i=0,n=t.length;n>i;i++){var o=t[i],r=this.getItem(o);r&&e.push(r)}return e}},y.prototype.remove=function(t){t=n(t);var e=this.getItems(t);if(e&&e.length){this._itemsOn(e,"remove",function(){this.emitEvent("removeComplete",[this,e])});for(var i=0,r=e.length;r>i;i++){var s=e[i];s.remove(),o(s,this.items)}}},y.prototype.destroy=function(){var t=this.element.style;t.height="",t.position="",t.width="";for(var e=0,i=this.items.length;i>e;e++){var n=this.items[e];n.destroy()}this.unbindResize(),delete this.element.outlayerGUID,h&&h.removeData(this.element,this.constructor.namespace)},y.data=function(t){var e=t&&t.outlayerGUID;return e&&v[e]},y.create=function(t,i){function n(){y.apply(this,arguments)}return Object.create?n.prototype=Object.create(y.prototype):e(n.prototype,y.prototype),n.prototype.constructor=n,n.defaults=e({},y.defaults),e(n.defaults,i),n.prototype.settings={},n.namespace=t,n.data=y.data,n.Item=function(){m.apply(this,arguments)},n.Item.prototype=new m,s(function(){for(var e=r(t),i=a.querySelectorAll(".js-"+e),o="data-"+e+"-options",s=0,c=i.length;c>s;s++){var p,d=i[s],l=d.getAttribute(o);try{p=l&&JSON.parse(l)}catch(f){u&&u.error("Error parsing "+o+" on "+d.nodeName.toLowerCase()+(d.id?"#"+d.id:"")+": "+f);continue}var m=new n(d,p);h&&h.data(d,t,m)}}),h&&h.bridget&&h.bridget(t,n),n},y.Item=m,y}var a=t.document,u=t.console,h=t.jQuery,c=function(){},p=Object.prototype.toString,d="object"==typeof HTMLElement?function(t){return t instanceof HTMLElement}:function(t){return t&&"object"==typeof t&&1===t.nodeType&&"string"==typeof t.nodeName},l=Array.prototype.indexOf?function(t,e){return t.indexOf(e)}:function(t,e){for(var i=0,n=t.length;n>i;i++)if(t[i]===e)return i;return-1};"function"==typeof define&&define.amd?define(["eventie/eventie","doc-ready/doc-ready","eventEmitter/EventEmitter","get-size/get-size","matches-selector/matches-selector","./item"],s):t.Outlayer=s(t.eventie,t.docReady,t.EventEmitter,t.getSize,t.matchesSelector,t.Outlayer.Item)}(window),function(t){"use strict";function e(t,e){var n=t.create("masonry");return n.prototype._resetLayout=function(){this.getSize(),this._getMeasurement("columnWidth","outerWidth"),this._getMeasurement("gutter","outerWidth"),this.measureColumns();var t=this.cols;for(this.colYs=[];t--;)this.colYs.push(0);this.maxY=0},n.prototype.measureColumns=function(){if(this.getContainerWidth(),!this.columnWidth){var t=this.items[0],i=t&&t.element;this.columnWidth=i&&e(i).outerWidth||this.containerWidth}this.columnWidth+=this.gutter,this.cols=Math.floor((this.containerWidth+this.gutter)/this.columnWidth),this.cols=Math.max(this.cols,1)},n.prototype.getContainerWidth=function(){var t=this.options.isFitWidth?this.element.parentNode:this.element,i=e(t);this.containerWidth=i&&i.innerWidth},n.prototype._getItemLayoutPosition=function(t){t.getSize();var e=t.size.outerWidth%this.columnWidth,n=e&&1>e?"round":"ceil",o=Math[n](t.size.outerWidth/this.columnWidth);o=Math.min(o,this.cols);for(var r=this._getColGroup(o),s=Math.min.apply(Math,r),a=i(r,s),u={x:this.columnWidth*a,y:s},h=s+t.size.outerHeight,c=this.cols+1-r.length,p=0;c>p;p++)this.colYs[a+p]=h;return u},n.prototype._getColGroup=function(t){if(2>t)return this.colYs;for(var e=[],i=this.cols+1-t,n=0;i>n;n++){var o=this.colYs.slice(n,n+t);e[n]=Math.max.apply(Math,o)}return e},n.prototype._manageStamp=function(t){var i=e(t),n=this._getElementOffset(t),o=this.options.isOriginLeft?n.left:n.right,r=o+i.outerWidth,s=Math.floor(o/this.columnWidth);s=Math.max(0,s);var a=Math.floor(r/this.columnWidth);a-=r%this.columnWidth?0:1,a=Math.min(this.cols-1,a);for(var u=(this.options.isOriginTop?n.top:n.bottom)+i.outerHeight,h=s;a>=h;h++)this.colYs[h]=Math.max(u,this.colYs[h])},n.prototype._getContainerSize=function(){this.maxY=Math.max.apply(Math,this.colYs);var t={height:this.maxY};return this.options.isFitWidth&&(t.width=this._getContainerFitWidth()),t},n.prototype._getContainerFitWidth=function(){for(var t=0,e=this.cols;--e&&0===this.colYs[e];)t++;return(this.cols-t)*this.columnWidth-this.gutter},n.prototype.needsResizeLayout=function(){var t=this.containerWidth;return this.getContainerWidth(),t!==this.containerWidth},n}var i=Array.prototype.indexOf?function(t,e){return t.indexOf(e)}:function(t,e){for(var i=0,n=t.length;n>i;i++){var o=t[i];if(o===e)return i}return-1};"function"==typeof define&&define.amd?define(["outlayer/outlayer","get-size/get-size"],e):t.Masonry=e(t.Outlayer,t.getSize)}(window),function(t){"use strict";function e(t,e){t[s]=e}var i=t.MD={};i.pages={};var n;docReady(function(){n=document.querySelector("#notification");var t=document.body.getAttribute("data-page");t&&"function"==typeof i[t]&&i[t]()}),i.getSomeItemElements=function(){for(var t=document.createDocumentFragment(),e=[],i=0;3>i;i++){var n=document.createElement("div"),o=Math.random(),r=o>.85?"w4":o>.7?"w2":"",s=Math.random(),a=s>.85?"h4":s>.7?"h2":"";n.className="item "+r+" "+a,t.appendChild(n),e.push(n)}};var o,r=document.documentElement,s=void 0!==r.textContent?"textContent":"innerText",a=getStyleProperty("transition"),u=a?1e3:1500;i.notify=function(t,r){e(n,t),a&&(n.style[a]="none"),n.style.display="block",n.style.opacity="1",r&&(o&&clearTimeout(o),o=setTimeout(i.hideNotify,u))},i.hideNotify=function(){a?(n.style[a]="opacity 1.0s",n.style.opacity="0"):n.style.display="none"}}(window),function(t){"use strict";function e(){var t=new Date,e=t.getMinutes();e=10>e?"0"+e:e;var i=t.getSeconds();return i=10>i?"0"+i:i,[t.getHours(),e,i].join(":")}function i(t){n.notify(t+" at "+e(),!0)}var n=t.MD;n.events=function(){(function(){var t=document.querySelector("#layout-complete-demo .masonry"),e=new Masonry(t,{columnWidth:60});e.on("layoutComplete",function(t,e){i("Masonry layout completed on "+e.length+" items")}),eventie.bind(t,"click",function(t){classie.has(t.target,"item")&&(classie.toggle(t.target,"gigante"),e.layout())})})(),function(){var t=document.querySelector("#remove-complete-demo .masonry"),e=new Masonry(t,{columnWidth:60});e.on("removeComplete",function(t,e){i("Removed "+e.length+" items")}),eventie.bind(t,"click",function(t){classie.has(t.target,"item")&&e.remove(t.target)})}()}}(window),function(t){"use strict";var e=t.MD,i=getStyleProperty("transition"),n={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"otransitionend",transition:"transitionend"}[i];e.faq=function(){(function(){var t=document.querySelector("#animate-item-size .masonry"),e=new Masonry(t,{columnWidth:60});eventie.bind(t,"click",function(t){var i=t.target;if(classie.has(i,"item-content")){var n=i.parentNode;classie.toggleClass(n,"is-expanded"),e.layout()}})})(),function(){var t=document.querySelector("#animate-item-size-responsive .masonry"),e=new Masonry(t,{columnWidth:".grid-sizer",itemSelector:".item"});eventie.bind(t,"click",function(t){var o=t.target;if(classie.has(o,"item-content")){var r=getSize(o);o.style[i]="none",o.style.width=r.width+"px",o.style.height=r.height+"px";var s=o.parentNode;classie.toggleClass(s,"is-expanded");var a=o.offsetWidth;if(o.style[i]="",i){var u=function(){o.style.width="",o.style.height="",o.removeEventListener(n,u,!1)};o.addEventListener(n,u,!1)}var h=getSize(s);o.style.width=h.width+"px",o.style.height=h.height+"px",a=null,e.layout()}})}()}}(window),function(t){"use strict";function e(){for(var t=[],e=document.createDocumentFragment(),r=a,s=0,u=r.length;u>s;s++){var h=i(r[s]);t.push(h),e.appendChild(h)}imagesLoaded(e).on("progress",function(t,e){var i=e.img.parentNode.parentNode;n.appendChild(i),o.appended(i)
})}function i(t){var e=document.createElement("div");e.className="hero-item has-example is-hidden";var i=document.createElement("a");i.href=t.url;var n=document.createElement("img");n.src=t.image;var o=document.createElement("p");return o.className="example-title",o.textContent=t.title,i.appendChild(n),i.appendChild(o),e.appendChild(i),e}var n,o,r,s=t.MD;s.index=function(){(function(){var t=document.querySelector("#hero");n=t.querySelector(".hero-masonry"),o=new Masonry(n,{itemSelector:".hero-item",columnWidth:".grid-sizer"}),e()})(),r=document.querySelector("#load-more-examples")};var a=[{title:"Erik Johansson",url:"http://erikjohanssonphoto.com/work/imagecats/personal/",image:"http://i.imgur.com/6Lo8oun.jpg"},{title:"Tumblr Staff: Archive",url:"http://staff.tumblr.com/archive",image:"http://i.imgur.com/igjvRa3.jpg"},{title:"Halcyon theme",url:"http://halcyon-theme.tumblr.com/",image:"http://i.imgur.com/A1RSOhg.jpg"},{title:"RESIZE.THATSH.IT",url:"http://resize.thatsh.it/",image:"http://i.imgur.com/00xWxLG.png"},{title:"Vox Media",url:"http://www.voxmedia.com",image:"http://i.imgur.com/xSiTFij.jpg"},{title:"Kristian Hammerstad",url:"http://www.kristianhammerstad.com/",image:"http://i.imgur.com/Zwd7Sch.jpg"},{title:"Loading Effects for Grid Items | Demo 2",url:"http://tympanus.net/Development/GridLoadingEffects/index2.html",image:"http://i.imgur.com/iFBSB1t.jpg"}]}(window),function(t){"use strict";function e(){var t=document.createElement("div"),e=Math.random(),i=Math.random(),n=e>.92?"w4":e>.8?"w3":e>.6?"w2":"",o=i>.85?"h4":i>.6?"h3":i>.35?"h2":"";return t.className="item "+n+" "+o,t}var i=t.MD;i.methods=function(){(function(){var t=document.querySelector("#appended-demo"),i=t.querySelector(".masonry"),n=t.querySelector("button"),o=new Masonry(i,{columnWidth:60});eventie.bind(n,"click",function(){for(var t=[],n=document.createDocumentFragment(),r=0;3>r;r++){var s=e();n.appendChild(s),t.push(s)}i.appendChild(n),o.appended(t)})})(),function(){var t=document.querySelector("#destroy-demo"),e=t.querySelector(".masonry"),i=t.querySelector("button"),n=new Masonry(e,{columnWidth:60}),o=!0;eventie.bind(i,"click",function(){o?n.destroy():n=new Masonry(e),o=!o})}(),function(){var t=document.querySelector("#layout-demo .masonry"),e=new Masonry(t,{columnWidth:60});eventie.bind(t,"click",function(t){classie.has(t.target,"item")&&(classie.toggle(t.target,"gigante"),e.layout())})}(),function(){var t=document.querySelector("#prepended-demo"),i=t.querySelector(".masonry"),n=t.querySelector("button"),o=new Masonry(i,{columnWidth:60});eventie.bind(n,"click",function(){for(var t=[],n=document.createDocumentFragment(),r=0;3>r;r++){var s=e();n.appendChild(s),t.push(s)}i.insertBefore(n,i.firstChild),o.prepended(t)})}(),function(){var t=document.querySelector("#stamp-demo"),e=t.querySelector(".stamp"),i=t.querySelector("button"),n=new Masonry(t.querySelector(".masonry"),{columnWidth:60,itemSelector:".item"}),o=!1;eventie.bind(i,"click",function(){o?n.unstamp(e):n.stamp(e),n.layout(),o=!o})}(),function(){var t=document.querySelector("#remove-demo .masonry"),e=new Masonry(t,{columnWidth:60});eventie.bind(t,"click",function(t){classie.has(t.target,"item")&&(e.remove(t.target),e.layout())})}()}}(window);

//autotab.js
$.fn.autoTab = function (options) {
    /// <summary>自动滚动的Tab页 Author:mrhuo</summary>
    var defaults = {
        tabTitleId: undefined,
        tabContentId: undefined,
        prevPageButton: undefined,
        nextPageButton: undefined,
        titleContainerWidth: 0,
        interval: 3000,
        isAllowLastEmpty: true,
        sliderPageTimeout: 1200,
        visible: 1
    };
    var opts = $.extend(defaults, options);
    var $this = $(this);

    if (opts.tabTitleId == undefined) {
        throw ("opts.tabTitleId没有设置！");
    }
    if (opts.tabContentId == undefined) {
        throw ("opts.tabContentId没有设置！");
    }

    var page = 1;
    var index = 0;
    var tabLengh = $this.find(opts.tabTitleId).find("li").length;
    var maxPage = opts.isAllowLastEmpty == true ? (Math.ceil(tabLengh / opts.visible)) : tabLengh - opts.visible + 1;
    var titleContainerWidth = opts.isAllowLastEmpty == true ? (opts.titleContainerWidth || $this.find(opts.tabTitleId).width()) : $this.find(opts.tabTitleId).find("li").first().width();
    var timerHandler = null;

    var selectedTab = function (tabIndex, isClickEvent) {
        if (!$this.find(opts.tabTitleId).find("ul").is(":animated")) {
            clearTimeout(timerHandler);
            if (opts.isAllowLastEmpty == false && index >= opts.visible) {
                goNextPage();
            } else {
                if (tabIndex >= opts.visible * (page)) {
                    goNextPage();
                }
            }
            if (index >= tabLengh) {
                index = -1;
                goPage(1);
            }

            $this.find(opts.tabTitleId).find("li").eq(tabIndex).addClass("on").siblings().removeClass("on");
            $this.find(opts.tabContentId).find("div.tabContent").eq(tabIndex).fadeIn().siblings().hide();

            timerHandler = setTimeout(function () { selectedTab(++index); }, opts.interval);
        }
    };

    var goPage = function (p) {
        if (!$this.find(opts.tabTitleId).find("ul").is(":animated")) {
            $this.find(opts.tabTitleId).find("ul").stop().animate({ left: (p > 0 ? (p - 1) * titleContainerWidth : 0) * titleContainerWidth + "px" }, opts.sliderPageTimeout);
            page = p;
        }
    };
    var goPrePage = function () {
        if (!$this.find(opts.tabTitleId).find("ul").is(":animated")) {
            if (page == 1) {
                $this.find(opts.tabTitleId).find("ul").stop();
            } else {
                $this.find(opts.tabTitleId).find("ul").stop().animate({ left: "+=" + titleContainerWidth + "px" }, opts.sliderPageTimeout);
                page--;
            }
        }
    };
    var goNextPage = function () {
        if (!$this.find(opts.tabTitleId).find("ul").is(":animated")) {
            if (page == maxPage) {
                $this.find(opts.tabTitleId).find("ul").stop();
            } else {
                $this.find(opts.tabTitleId).find("ul").stop().animate({ left: "-=" + titleContainerWidth + "px" }, opts.sliderPageTimeout);
                page++;
            }
        }
    };

    if ($this.find(opts.prevPageButton).length > 0) {
        $this.find(opts.prevPageButton).click(function () {
            goPrePage();
        });
    }
    if ($this.find(opts.nextPageButton).length > 0) {
        $this.find(opts.nextPageButton).click(function () {
            goNextPage();
        });
    }
    $this.find(opts.tabTitleId).find("li").click(function () {
        var _index = $this.find(opts.tabTitleId).find("li").index(this);
        index = _index;
        selectedTab(_index, true);
    });

    timerHandler = setTimeout(function () { selectedTab(index); }, opts.interval);
};

/*! Copyright (c) 2011 Brandon Aaron (http://brandonaaron.net)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Thanks to: http://adomas.org/javascript-mouse-wheel/ for some pointers.
 * Thanks to: Mathias Bank(http://www.mathias-bank.de) for a scope bug fix.
 * Thanks to: Seamus Leahy for adding deltaX and deltaY
 *
 * Version: 3.0.6
 * 
 * Requires: 1.2.2+
 */
(function ($) {
    var types = ['DOMMouseScroll', 'mousewheel'];
    if ($.event.fixHooks) {
        for (var i = types.length; i;) {
            $.event.fixHooks[types[--i]] = $.event.mouseHooks;
        }
    }
    $.event.special.mousewheel = {
        setup: function () {
            if (this.addEventListener) {
                for (var i = types.length; i;) {
                    this.addEventListener(types[--i], handler, false);
                }
            } else {
                this.onmousewheel = handler;
            }
        },
        teardown: function () {
            if (this.removeEventListener) {
                for (var i = types.length; i;) {
                    this.removeEventListener(types[--i], handler, false);
                }
            } else {
                this.onmousewheel = null;
            }
        }
    };
    $.fn.extend({
        mousewheel: function (fn) {
            return fn ? this.bind("mousewheel", fn) : this.trigger("mousewheel");
        },
        unmousewheel: function (fn) {
            return this.unbind("mousewheel", fn);
        }
    });
    function handler(event) {
        var orgEvent = event || window.event, args = [].slice.call(arguments, 1), delta = 0, returnValue = true, deltaX = 0, deltaY = 0;
        event = $.event.fix(orgEvent);
        event.type = "mousewheel";
        // Old school scrollwheel delta
        if (orgEvent.wheelDelta) { delta = orgEvent.wheelDelta / 120; }
        if (orgEvent.detail) { delta = -orgEvent.detail / 3; }
        // New school multidimensional scroll (touchpads) deltas
        deltaY = delta;
        // Gecko
        if (orgEvent.axis !== undefined && orgEvent.axis === orgEvent.HORIZONTAL_AXIS) {
            deltaY = 0;
            deltaX = -1 * delta;
        }
        // Webkit
        if (orgEvent.wheelDeltaY !== undefined) { deltaY = orgEvent.wheelDeltaY / 120; }
        if (orgEvent.wheelDeltaX !== undefined) { deltaX = -1 * orgEvent.wheelDeltaX / 120; }
        // Add event and delta to the front of the arguments
        args.unshift(event, delta, deltaX, deltaY);
        return ($.event.dispatch || $.event.handle).apply(this, args);
    }
})(jQuery);
/*
  
  RollBar - jQuery ScrollBar Plugin
  -----------------------------------------------
  
  @author   flGravity
  @created  4/4/12
  @version  1.6
  @site     http://codecanyon.net/user/flGravity
  
*/
(function (a) { function b(e, d) { this.container = a(e); this.settings = d; this.timer = 0; this.before = { v: 0, h: 0 }; this.touch = {}; this.pressed = 0; this.vslider = a("<div/>", { "class": "rollbar-handle" }); this.vpath = a("<div/>", { "class": "rollbar-path-vertical" }); this.hslider = a("<div/>", { "class": "rollbar-handle" }); this.hpath = a("<div/>", { "class": "rollbar-path-horizontal" }); this.sliders = this.vslider.add(this.hslider); this.container.css({ position: "relative", overflow: "hidden" }).contents().filter(this.settings.contentFilter).wrapAll('<div class="rollbar-content"></div>'); this.content = this.container.children(".rollbar-content").css({ position: "relative", top: 0, left: 0, overflow: "hidden" }); if (this.settings.scroll == "horizontal") { this.container.prepend(this.hpath.append(this.hslider)) } else { if (this.settings.scroll == "vertical") { this.container.prepend(this.vpath.append(this.vslider)) } else { this.container.prepend(this.vpath.append(this.vslider), this.hpath.append(this.hslider)) } } this.vpath.add(this.hpath).css({ "z-index": this.settings.zIndex, display: "none" }); this.vslider.css({ height: this.settings.sliderSize, opacity: this.settings.sliderOpacity }); this.hslider.css({ width: this.settings.sliderSize, opacity: this.settings.sliderOpacity }); if (this.settings.sliderOpacity) { this.sliders.hover(this.fixFn(function () { this.sliders.stop().fadeTo(this.settings.sliderOpacityTime, 1) }), this.fixFn(function () { if (!this.pressed) { this.sliders.stop().fadeTo(this.settings.sliderOpacityTime, this.settings.sliderOpacity) } })) } this.init(); this.pathSize(); this.bindEvent(a(window), "load", function () { setTimeout(this.fixFn(this.checkScroll), 10) }); if (this.settings.lazyCheckScroll > 0) { setInterval(this.fixFn(function () { this.checkScroll(); this.pathSize() }), this.settings.lazyCheckScroll) } } b.prototype.checkScroll = function () { this.vtrack = this.vpath.height() - this.vslider.height(); this.htrack = this.hpath.width() - this.hslider.width(); this.vdiff = this.content.height() - this.container.height(); this.hdiff = this.content.width() - this.container.width(); if (!this.settings.autoHide) { return } if (this.vdiff > 0) { this.vpath.fadeIn(this.settings.autoHideTime) } else { this.vpath.fadeOut(this.settings.autoHideTime) } if (this.hdiff > 0) { this.hpath.fadeIn(this.settings.autoHideTime) } else { this.hpath.fadeOut(this.settings.autoHideTime) } }; b.prototype.pathSize = function () { var c = parseInt(this.settings.pathPadding, 10); this.vpath.css({ top: c + "px", height: this.container.height() - 2 * c + "px" }); this.hpath.css({ left: c + "px", width: this.container.width() - 2 * c + "px" }) }; b.prototype.scroll = function (c, f, g) { var d = 0; var i = 0; if (c < 0) { c = 0 } if (c > this.vtrack) { c = this.vtrack } this.vslider.css("top", c + "px"); if (f < 0) { f = 0 } if (f > this.htrack) { f = this.htrack } this.hslider.css("left", f + "px"); if (this.vdiff > 0) { i = c / this.vtrack; this.content.css("top", Math.round(-this.vdiff * i)); if (g && (c && c != this.vtrack)) { g.stopPropagation(); g.preventDefault() } } if (this.hdiff > 0) { d = f / this.htrack; this.content.css("left", Math.round(-this.hdiff * d)); if (g && (f && f != this.htrack)) { g.stopPropagation(); g.preventDefault() } } if (this.before.v != i || this.before.h != d) { if (typeof this.settings.onscroll == "function") { this.settings.onscroll.call(this.container.get(0), i, d) } this.before.v = i; this.before.h = d } }; b.prototype.easeScroll = function (d, f) { var j = 0; var c = Math.floor(this.settings.scrollTime / this.settings.scrollInterval); var i = this.vslider.position().top; var e = this.hslider.position().left; var g = a.easing[this.settings.scrollEasing] || a.easing.linear; this.sliders.stop().fadeTo(this.settings.sliderOpacityTime, 1); window.clearInterval(this.timer); this.timer = window.setInterval(this.fixFn(function () { this.scroll(i + g(j / c, j, 0, 1, c) * d, e + g(j / c, j, 0, 1, c) * f); if (++j > c) { window.clearInterval(this.timer); this.sliders.stop().fadeTo(this.settings.sliderOpacityTime, this.settings.sliderOpacity) } }), this.settings.scrollInterval) }; b.prototype.fixFn = function (e, d) { var c = this; return function () { e.apply(d || c, Array.prototype.slice.call(arguments)) } }; b.prototype.bindEvent = function (c, h, g, d) { return c.bind(h, this.fixFn(g, d)) }; b.prototype.init = function () { var c = a(window.document); this.bindEvent(this.sliders, "mousedown", function (j) { this.pressed = (j.target === this.vslider.get(0)) ? 1 : 2; var g = j.pageX; var f = j.pageY; var i = this.vslider.position().top; var h = this.hslider.position().left; this.bindEvent(c, "mousemove", function (k) { if (this.pressed == 1) { this.scroll(i + (k.pageY - f), h) } else { this.scroll(i, h + (k.pageX - g)) } }); this.bindEvent(c, "selectstart", function (k) { k.preventDefault() }) }); this.bindEvent(c, "mouseup", function (f) { if (this.pressed == 1 && f.target !== this.vslider.get(0)) { this.vslider.fadeTo(this.settings.sliderOpacityTime, this.settings.sliderOpacity) } else { if (this.pressed == 2 && f.target !== this.hslider.get(0)) { this.hslider.fadeTo(this.settings.sliderOpacityTime, this.settings.sliderOpacity) } } this.pressed = 0; c.unbind("mousemove"); c.unbind("selectstart") }); this.bindEvent(this.container, "touchstart", function (g) { var f = g.originalEvent; var h = f.changedTouches[0]; this.touch.sx = h.pageX; this.touch.sy = h.pageY; this.touch.sv = this.vslider.position().top; this.touch.sh = this.hslider.position().left; this.sliders.stop().fadeTo(this.settings.sliderOpacityTime, 1); if (this.settings.blockGlobalScroll && (this.vdiff || this.hdiff)) { f.stopPropagation() } }); this.bindEvent(this.container, "touchmove", function (g) { var f = g.originalEvent; var h = f.targetTouches[0]; this.scroll(this.touch.sv + (this.touch.sy - h.pageY) * this.settings.touchSpeed, this.touch.sh + (this.touch.sx - h.pageX) * this.settings.touchSpeed, g); if (this.settings.blockGlobalScroll && (this.vdiff || this.hdiff)) { f.preventDefault(); f.stopPropagation() } }); this.bindEvent(this.container, "touchend touchcancel", function (g) { var f = g.originalEvent; var h = f.changedTouches[0]; this.sliders.stop().fadeTo(this.settings.sliderOpacityTime, this.settings.sliderOpacity); if (this.settings.blockGlobalScroll && (this.vdiff || this.hdiff)) { f.stopPropagation() } }); var d = this.vpath.height(), e = this.hpath.width(); this.bindEvent(a(window), "resize", function () { this.pathSize(); this.checkScroll(); if (this.vdiff <= 0) { this.content.css("top", 0) } if (this.hdiff <= 0) { this.content.css("left", 0) } this.scroll(Math.round(parseInt(this.vslider.css("top"), 10) * this.vpath.height() / d), Math.round(parseInt(this.hslider.css("left"), 10) * this.hpath.width() / e)); d = this.vpath.height(); e = this.hpath.width() }); this.bindEvent(this.container, "mousewheel", function (i, j, g, f) { var h = i.target.nodeName; if (h == "TEXTAREA" || (h == "SELECT" || h == "OPTION")) { i.stopPropagation(); return } this.scroll(this.vslider.position().top - this.settings.wheelSpeed * f, this.hslider.position().left + this.settings.wheelSpeed * g, i); this.sliders.stop().fadeTo(this.settings.sliderOpacityTime, 1); window.clearTimeout(this.timer); this.timer = window.setTimeout(this.fixFn(function () { this.sliders.stop().fadeTo(this.settings.sliderOpacityTime, this.settings.sliderOpacity) }), this.settings.sliderOpacityDelay); if (this.settings.blockGlobalScroll && (this.vdiff || this.hdiff)) { i.preventDefault(); i.stopPropagation() } }); this.bindEvent(this.container, "dragstart", function (f) { f.preventDefault() }); this.bindEvent(this.container, "rollbar", function (j, f, i, g) { j.stopPropagation(); if (f === "reset") { this.container.find(".rollbar-content, .rollbar-handle").css({ top: 0, left: 0 }); return } f = f || 0; i = i || 0; if (/^[-\d\.]+$/.test(f)) { f = parseFloat(f); if (Math.abs(f) <= 1 && !g) { f *= this.vtrack } else { f = f + f * (this.vtrack / this.vdiff - 1) } } if (/^[-\d\.]+$/.test(i)) { i = parseFloat(i); if (Math.abs(i) <= 1 && !g) { i *= this.htrack } else { i = i + i * (this.htrack / this.hdiff - 1) } } this.easeScroll(f, i) }) }; a.fn.rollbar = function (d) { var c = { scroll: "both", autoHide: true, autoHideTime: "fast", lazyCheckScroll: 1000, blockGlobalScroll: false, contentFilter: "*", sliderSize: "30%", sliderOpacity: 0.5, sliderOpacityTime: 200, sliderOpacityDelay: 1000, wheelSpeed: 20, touchSpeed: 0.3, pathPadding: "20px", keyScroll: 100, scrollTime: 500, scrollInterval: 15, scrollEasing: "swing", zIndex: 100, onscroll: function () { } }; a.extend(c, d); return this.each(function () { new b(this, c) }) } })(jQuery);

/*!
 * jQuery UI 1.8.18
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI
 */(function(a,b){function d(b){return!a(b).parents().andSelf().filter(function(){return a.curCSS(this,"visibility")==="hidden"||a.expr.filters.hidden(this)}).length}function c(b,c){var e=b.nodeName.toLowerCase();if("area"===e){var f=b.parentNode,g=f.name,h;if(!b.href||!g||f.nodeName.toLowerCase()!=="map")return!1;h=a("img[usemap=#"+g+"]")[0];return!!h&&d(h)}return(/input|select|textarea|button|object/.test(e)?!b.disabled:"a"==e?b.href||c:c)&&d(b)}a.ui=a.ui||{};a.ui.version||(a.extend(a.ui,{version:"1.8.18",keyCode:{ALT:18,BACKSPACE:8,CAPS_LOCK:20,COMMA:188,COMMAND:91,COMMAND_LEFT:91,COMMAND_RIGHT:93,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,MENU:93,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38,WINDOWS:91}}),a.fn.extend({propAttr:a.fn.prop||a.fn.attr,_focus:a.fn.focus,focus:function(b,c){return typeof b=="number"?this.each(function(){var d=this;setTimeout(function(){a(d).focus(),c&&c.call(d)},b)}):this._focus.apply(this,arguments)},scrollParent:function(){var b;a.browser.msie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?b=this.parents().filter(function(){return/(relative|absolute|fixed)/.test(a.curCSS(this,"position",1))&&/(auto|scroll)/.test(a.curCSS(this,"overflow",1)+a.curCSS(this,"overflow-y",1)+a.curCSS(this,"overflow-x",1))}).eq(0):b=this.parents().filter(function(){return/(auto|scroll)/.test(a.curCSS(this,"overflow",1)+a.curCSS(this,"overflow-y",1)+a.curCSS(this,"overflow-x",1))}).eq(0);return/fixed/.test(this.css("position"))||!b.length?a(document):b},zIndex:function(c){if(c!==b)return this.css("zIndex",c);if(this.length){var d=a(this[0]),e,f;while(d.length&&d[0]!==document){e=d.css("position");if(e==="absolute"||e==="relative"||e==="fixed"){f=parseInt(d.css("zIndex"),10);if(!isNaN(f)&&f!==0)return f}d=d.parent()}}return 0},disableSelection:function(){return this.bind((a.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(a){a.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}}),a.each(["Width","Height"],function(c,d){function h(b,c,d,f){a.each(e,function(){c-=parseFloat(a.curCSS(b,"padding"+this,!0))||0,d&&(c-=parseFloat(a.curCSS(b,"border"+this+"Width",!0))||0),f&&(c-=parseFloat(a.curCSS(b,"margin"+this,!0))||0)});return c}var e=d==="Width"?["Left","Right"]:["Top","Bottom"],f=d.toLowerCase(),g={innerWidth:a.fn.innerWidth,innerHeight:a.fn.innerHeight,outerWidth:a.fn.outerWidth,outerHeight:a.fn.outerHeight};a.fn["inner"+d]=function(c){if(c===b)return g["inner"+d].call(this);return this.each(function(){a(this).css(f,h(this,c)+"px")})},a.fn["outer"+d]=function(b,c){if(typeof b!="number")return g["outer"+d].call(this,b);return this.each(function(){a(this).css(f,h(this,b,!0,c)+"px")})}}),a.extend(a.expr[":"],{data:function(b,c,d){return!!a.data(b,d[3])},focusable:function(b){return c(b,!isNaN(a.attr(b,"tabindex")))},tabbable:function(b){var d=a.attr(b,"tabindex"),e=isNaN(d);return(e||d>=0)&&c(b,!e)}}),a(function(){var b=document.body,c=b.appendChild(c=document.createElement("div"));c.offsetHeight,a.extend(c.style,{minHeight:"100px",height:"auto",padding:0,borderWidth:0}),a.support.minHeight=c.offsetHeight===100,a.support.selectstart="onselectstart"in c,b.removeChild(c).style.display="none"}),a.extend(a.ui,{plugin:{add:function(b,c,d){var e=a.ui[b].prototype;for(var f in d)e.plugins[f]=e.plugins[f]||[],e.plugins[f].push([c,d[f]])},call:function(a,b,c){var d=a.plugins[b];if(!!d&&!!a.element[0].parentNode)for(var e=0;e<d.length;e++)a.options[d[e][0]]&&d[e][1].apply(a.element,c)}},contains:function(a,b){return document.compareDocumentPosition?a.compareDocumentPosition(b)&16:a!==b&&a.contains(b)},hasScroll:function(b,c){if(a(b).css("overflow")==="hidden")return!1;var d=c&&c==="left"?"scrollLeft":"scrollTop",e=!1;if(b[d]>0)return!0;b[d]=1,e=b[d]>0,b[d]=0;return e},isOverAxis:function(a,b,c){return a>b&&a<b+c},isOver:function(b,c,d,e,f,g){return a.ui.isOverAxis(b,d,f)&&a.ui.isOverAxis(c,e,g)}}))})(jQuery);/*
 * jQuery UI Datepicker 1.8.18
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Datepicker
 *
 * Depends:
 *	jquery.ui.core.js
 */
(function($,undefined){function isArray(a){return a&&($.browser.safari&&typeof a=="object"&&a.length||a.constructor&&a.constructor.toString().match(/\Array\(\)/))}function extendRemove(a,b){$.extend(a,b);for(var c in b)if(b[c]==null||b[c]==undefined)a[c]=b[c];return a}function bindHover(a){var b="button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";return a.bind("mouseout",function(a){var c=$(a.target).closest(b);!c.length||c.removeClass("ui-state-hover ui-datepicker-prev-hover ui-datepicker-next-hover")}).bind("mouseover",function(c){var d=$(c.target).closest(b);!$.datepicker._isDisabledDatepicker(instActive.inline?a.parent()[0]:instActive.input[0])&&!!d.length&&(d.parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"),d.addClass("ui-state-hover"),d.hasClass("ui-datepicker-prev")&&d.addClass("ui-datepicker-prev-hover"),d.hasClass("ui-datepicker-next")&&d.addClass("ui-datepicker-next-hover"))})}function Datepicker(){this.debug=!1,this._curInst=null,this._keyEvent=!1,this._disabledInputs=[],this._datepickerShowing=!1,this._inDialog=!1,this._mainDivId="ui-datepicker-div",this._inlineClass="ui-datepicker-inline",this._appendClass="ui-datepicker-append",this._triggerClass="ui-datepicker-trigger",this._dialogClass="ui-datepicker-dialog",this._disableClass="ui-datepicker-disabled",this._unselectableClass="ui-datepicker-unselectable",this._currentClass="ui-datepicker-current-day",this._dayOverClass="ui-datepicker-days-cell-over",this.regional=[],this.regional[""]={closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],weekHeader:"Wk",dateFormat:"mm/dd/yy",firstDay:0,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},this._defaults={showOn:"focus",showAnim:"fadeIn",showOptions:{},defaultDate:null,appendText:"",buttonText:"...",buttonImage:"",buttonImageOnly:!1,hideIfNoPrevNext:!1,navigationAsDateFormat:!1,gotoCurrent:!1,changeMonth:!1,changeYear:!1,yearRange:"c-10:c+10",showOtherMonths:!1,selectOtherMonths:!1,showWeek:!1,calculateWeek:this.iso8601Week,shortYearCutoff:"+10",minDate:null,maxDate:null,duration:"fast",beforeShowDay:null,beforeShow:null,onSelect:null,onChangeMonthYear:null,onClose:null,numberOfMonths:1,showCurrentAtPos:0,stepMonths:1,stepBigMonths:12,altField:"",altFormat:"",constrainInput:!0,showButtonPanel:!1,autoSize:!1,disabled:!1},$.extend(this._defaults,this.regional[""]),this.dpDiv=bindHover($('<div id="'+this._mainDivId+'" class="ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>'))}$.extend($.ui,{datepicker:{version:"1.8.18"}});var PROP_NAME="datepicker",dpuuid=(new Date).getTime(),instActive;$.extend(Datepicker.prototype,{markerClassName:"hasDatepicker",maxRows:4,log:function(){this.debug&&console.log.apply("",arguments)},_widgetDatepicker:function(){return this.dpDiv},setDefaults:function(a){extendRemove(this._defaults,a||{});return this},_attachDatepicker:function(target,settings){var inlineSettings=null;for(var attrName in this._defaults){var attrValue=target.getAttribute("date:"+attrName);if(attrValue){inlineSettings=inlineSettings||{};try{inlineSettings[attrName]=eval(attrValue)}catch(err){inlineSettings[attrName]=attrValue}}}var nodeName=target.nodeName.toLowerCase(),inline=nodeName=="div"||nodeName=="span";target.id||(this.uuid+=1,target.id="dp"+this.uuid);var inst=this._newInst($(target),inline);inst.settings=$.extend({},settings||{},inlineSettings||{}),nodeName=="input"?this._connectDatepicker(target,inst):inline&&this._inlineDatepicker(target,inst)},_newInst:function(a,b){var c=a[0].id.replace(/([^A-Za-z0-9_-])/g,"\\\\$1");return{id:c,input:a,selectedDay:0,selectedMonth:0,selectedYear:0,drawMonth:0,drawYear:0,inline:b,dpDiv:b?bindHover($('<div class="'+this._inlineClass+' ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>')):this.dpDiv}},_connectDatepicker:function(a,b){var c=$(a);b.append=$([]),b.trigger=$([]);c.hasClass(this.markerClassName)||(this._attachments(c,b),c.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp).bind("setData.datepicker",function(a,c,d){b.settings[c]=d}).bind("getData.datepicker",function(a,c){return this._get(b,c)}),this._autoSize(b),$.data(a,PROP_NAME,b),b.settings.disabled&&this._disableDatepicker(a))},_attachments:function(a,b){var c=this._get(b,"appendText"),d=this._get(b,"isRTL");b.append&&b.append.remove(),c&&(b.append=$('<span class="'+this._appendClass+'">'+c+"</span>"),a[d?"before":"after"](b.append)),a.unbind("focus",this._showDatepicker),b.trigger&&b.trigger.remove();var e=this._get(b,"showOn");(e=="focus"||e=="both")&&a.focus(this._showDatepicker);if(e=="button"||e=="both"){var f=this._get(b,"buttonText"),g=this._get(b,"buttonImage");b.trigger=$(this._get(b,"buttonImageOnly")?$("<img/>").addClass(this._triggerClass).attr({src:g,alt:f,title:f}):$('<button type="button"></button>').addClass(this._triggerClass).html(g==""?f:$("<img/>").attr({src:g,alt:f,title:f}))),a[d?"before":"after"](b.trigger),b.trigger.click(function(){$.datepicker._datepickerShowing&&$.datepicker._lastInput==a[0]?$.datepicker._hideDatepicker():$.datepicker._datepickerShowing&&$.datepicker._lastInput!=a[0]?($.datepicker._hideDatepicker(),$.datepicker._showDatepicker(a[0])):$.datepicker._showDatepicker(a[0]);return!1})}},_autoSize:function(a){if(this._get(a,"autoSize")&&!a.inline){var b=new Date(2009,11,20),c=this._get(a,"dateFormat");if(c.match(/[DM]/)){var d=function(a){var b=0,c=0;for(var d=0;d<a.length;d++)a[d].length>b&&(b=a[d].length,c=d);return c};b.setMonth(d(this._get(a,c.match(/MM/)?"monthNames":"monthNamesShort"))),b.setDate(d(this._get(a,c.match(/DD/)?"dayNames":"dayNamesShort"))+20-b.getDay())}a.input.attr("size",this._formatDate(a,b).length)}},_inlineDatepicker:function(a,b){var c=$(a);c.hasClass(this.markerClassName)||(c.addClass(this.markerClassName).append(b.dpDiv).bind("setData.datepicker",function(a,c,d){b.settings[c]=d}).bind("getData.datepicker",function(a,c){return this._get(b,c)}),$.data(a,PROP_NAME,b),this._setDate(b,this._getDefaultDate(b),!0),this._updateDatepicker(b),this._updateAlternate(b),b.settings.disabled&&this._disableDatepicker(a),b.dpDiv.css("display","block"))},_dialogDatepicker:function(a,b,c,d,e){var f=this._dialogInst;if(!f){this.uuid+=1;var g="dp"+this.uuid;this._dialogInput=$('<input type="text" id="'+g+'" style="position: absolute; top: -100px; width: 0px; z-index: -10;"/>'),this._dialogInput.keydown(this._doKeyDown),$("body").append(this._dialogInput),f=this._dialogInst=this._newInst(this._dialogInput,!1),f.settings={},$.data(this._dialogInput[0],PROP_NAME,f)}extendRemove(f.settings,d||{}),b=b&&b.constructor==Date?this._formatDate(f,b):b,this._dialogInput.val(b),this._pos=e?e.length?e:[e.pageX,e.pageY]:null;if(!this._pos){var h=document.documentElement.clientWidth,i=document.documentElement.clientHeight,j=document.documentElement.scrollLeft||document.body.scrollLeft,k=document.documentElement.scrollTop||document.body.scrollTop;this._pos=[h/2-100+j,i/2-150+k]}this._dialogInput.css("left",this._pos[0]+20+"px").css("top",this._pos[1]+"px"),f.settings.onSelect=c,this._inDialog=!0,this.dpDiv.addClass(this._dialogClass),this._showDatepicker(this._dialogInput[0]),$.blockUI&&$.blockUI(this.dpDiv),$.data(this._dialogInput[0],PROP_NAME,f);return this},_destroyDatepicker:function(a){var b=$(a),c=$.data(a,PROP_NAME);if(!!b.hasClass(this.markerClassName)){var d=a.nodeName.toLowerCase();$.removeData(a,PROP_NAME),d=="input"?(c.append.remove(),c.trigger.remove(),b.removeClass(this.markerClassName).unbind("focus",this._showDatepicker).unbind("keydown",this._doKeyDown).unbind("keypress",this._doKeyPress).unbind("keyup",this._doKeyUp)):(d=="div"||d=="span")&&b.removeClass(this.markerClassName).empty()}},_enableDatepicker:function(a){var b=$(a),c=$.data(a,PROP_NAME);if(!!b.hasClass(this.markerClassName)){var d=a.nodeName.toLowerCase();if(d=="input")a.disabled=!1,c.trigger.filter("button").each(function(){this.disabled=!1}).end().filter("img").css({opacity:"1.0",cursor:""});else if(d=="div"||d=="span"){var e=b.children("."+this._inlineClass);e.children().removeClass("ui-state-disabled"),e.find("select.ui-datepicker-month, select.ui-datepicker-year").removeAttr("disabled")}this._disabledInputs=$.map(this._disabledInputs,function(b){return b==a?null:b})}},_disableDatepicker:function(a){var b=$(a),c=$.data(a,PROP_NAME);if(!!b.hasClass(this.markerClassName)){var d=a.nodeName.toLowerCase();if(d=="input")a.disabled=!0,c.trigger.filter("button").each(function(){this.disabled=!0}).end().filter("img").css({opacity:"0.5",cursor:"default"});else if(d=="div"||d=="span"){var e=b.children("."+this._inlineClass);e.children().addClass("ui-state-disabled"),e.find("select.ui-datepicker-month, select.ui-datepicker-year").attr("disabled","disabled")}this._disabledInputs=$.map(this._disabledInputs,function(b){return b==a?null:b}),this._disabledInputs[this._disabledInputs.length]=a}},_isDisabledDatepicker:function(a){if(!a)return!1;for(var b=0;b<this._disabledInputs.length;b++)if(this._disabledInputs[b]==a)return!0;return!1},_getInst:function(a){try{return $.data(a,PROP_NAME)}catch(b){throw"Missing instance data for this datepicker"}},_optionDatepicker:function(a,b,c){var d=this._getInst(a);if(arguments.length==2&&typeof b=="string")return b=="defaults"?$.extend({},$.datepicker._defaults):d?b=="all"?$.extend({},d.settings):this._get(d,b):null;var e=b||{};typeof b=="string"&&(e={},e[b]=c);if(d){this._curInst==d&&this._hideDatepicker();var f=this._getDateDatepicker(a,!0),g=this._getMinMaxDate(d,"min"),h=this._getMinMaxDate(d,"max");extendRemove(d.settings,e),g!==null&&e.dateFormat!==undefined&&e.minDate===undefined&&(d.settings.minDate=this._formatDate(d,g)),h!==null&&e.dateFormat!==undefined&&e.maxDate===undefined&&(d.settings.maxDate=this._formatDate(d,h)),this._attachments($(a),d),this._autoSize(d),this._setDate(d,f),this._updateAlternate(d),this._updateDatepicker(d)}},_changeDatepicker:function(a,b,c){this._optionDatepicker(a,b,c)},_refreshDatepicker:function(a){var b=this._getInst(a);b&&this._updateDatepicker(b)},_setDateDatepicker:function(a,b){var c=this._getInst(a);c&&(this._setDate(c,b),this._updateDatepicker(c),this._updateAlternate(c))},_getDateDatepicker:function(a,b){var c=this._getInst(a);c&&!c.inline&&this._setDateFromField(c,b);return c?this._getDate(c):null},_doKeyDown:function(a){var b=$.datepicker._getInst(a.target),c=!0,d=b.dpDiv.is(".ui-datepicker-rtl");b._keyEvent=!0;if($.datepicker._datepickerShowing)switch(a.keyCode){case 9:$.datepicker._hideDatepicker(),c=!1;break;case 13:var e=$("td."+$.datepicker._dayOverClass+":not(."+$.datepicker._currentClass+")",b.dpDiv);e[0]&&$.datepicker._selectDay(a.target,b.selectedMonth,b.selectedYear,e[0]);var f=$.datepicker._get(b,"onSelect");if(f){var g=$.datepicker._formatDate(b);f.apply(b.input?b.input[0]:null,[g,b])}else $.datepicker._hideDatepicker();return!1;case 27:$.datepicker._hideDatepicker();break;case 33:$.datepicker._adjustDate(a.target,a.ctrlKey?-$.datepicker._get(b,"stepBigMonths"):-$.datepicker._get(b,"stepMonths"),"M");break;case 34:$.datepicker._adjustDate(a.target,a.ctrlKey?+$.datepicker._get(b,"stepBigMonths"):+$.datepicker._get(b,"stepMonths"),"M");break;case 35:(a.ctrlKey||a.metaKey)&&$.datepicker._clearDate(a.target),c=a.ctrlKey||a.metaKey;break;case 36:(a.ctrlKey||a.metaKey)&&$.datepicker._gotoToday(a.target),c=a.ctrlKey||a.metaKey;break;case 37:(a.ctrlKey||a.metaKey)&&$.datepicker._adjustDate(a.target,d?1:-1,"D"),c=a.ctrlKey||a.metaKey,a.originalEvent.altKey&&$.datepicker._adjustDate(a.target,a.ctrlKey?-$.datepicker._get(b,"stepBigMonths"):-$.datepicker._get(b,"stepMonths"),"M");break;case 38:(a.ctrlKey||a.metaKey)&&$.datepicker._adjustDate(a.target,-7,"D"),c=a.ctrlKey||a.metaKey;break;case 39:(a.ctrlKey||a.metaKey)&&$.datepicker._adjustDate(a.target,d?-1:1,"D"),c=a.ctrlKey||a.metaKey,a.originalEvent.altKey&&$.datepicker._adjustDate(a.target,a.ctrlKey?+$.datepicker._get(b,"stepBigMonths"):+$.datepicker._get(b,"stepMonths"),"M");break;case 40:(a.ctrlKey||a.metaKey)&&$.datepicker._adjustDate(a.target,7,"D"),c=a.ctrlKey||a.metaKey;break;default:c=!1}else a.keyCode==36&&a.ctrlKey?$.datepicker._showDatepicker(this):c=!1;c&&(a.preventDefault(),a.stopPropagation())},_doKeyPress:function(a){var b=$.datepicker._getInst(a.target);if($.datepicker._get(b,"constrainInput")){var c=$.datepicker._possibleChars($.datepicker._get(b,"dateFormat")),d=String.fromCharCode(a.charCode==undefined?a.keyCode:a.charCode);return a.ctrlKey||a.metaKey||d<" "||!c||c.indexOf(d)>-1}},_doKeyUp:function(a){var b=$.datepicker._getInst(a.target);if(b.input.val()!=b.lastVal)try{var c=$.datepicker.parseDate($.datepicker._get(b,"dateFormat"),b.input?b.input.val():null,$.datepicker._getFormatConfig(b));c&&($.datepicker._setDateFromField(b),$.datepicker._updateAlternate(b),$.datepicker._updateDatepicker(b))}catch(a){$.datepicker.log(a)}return!0},_showDatepicker:function(a){a=a.target||a,a.nodeName.toLowerCase()!="input"&&(a=$("input",a.parentNode)[0]);if(!$.datepicker._isDisabledDatepicker(a)&&$.datepicker._lastInput!=a){var b=$.datepicker._getInst(a);$.datepicker._curInst&&$.datepicker._curInst!=b&&($.datepicker._curInst.dpDiv.stop(!0,!0),b&&$.datepicker._datepickerShowing&&$.datepicker._hideDatepicker($.datepicker._curInst.input[0]));var c=$.datepicker._get(b,"beforeShow"),d=c?c.apply(a,[a,b]):{};if(d===!1)return;extendRemove(b.settings,d),b.lastVal=null,$.datepicker._lastInput=a,$.datepicker._setDateFromField(b),$.datepicker._inDialog&&(a.value=""),$.datepicker._pos||($.datepicker._pos=$.datepicker._findPos(a),$.datepicker._pos[1]+=a.offsetHeight);var e=!1;$(a).parents().each(function(){e|=$(this).css("position")=="fixed";return!e}),e&&$.browser.opera&&($.datepicker._pos[0]-=document.documentElement.scrollLeft,$.datepicker._pos[1]-=document.documentElement.scrollTop);var f={left:$.datepicker._pos[0],top:$.datepicker._pos[1]};$.datepicker._pos=null,b.dpDiv.empty(),b.dpDiv.css({position:"absolute",display:"block",top:"-1000px"}),$.datepicker._updateDatepicker(b),f=$.datepicker._checkOffset(b,f,e),b.dpDiv.css({position:$.datepicker._inDialog&&$.blockUI?"static":e?"fixed":"absolute",display:"none",left:f.left+"px",top:f.top+"px"});if(!b.inline){var g=$.datepicker._get(b,"showAnim"),h=$.datepicker._get(b,"duration"),i=function(){var a=b.dpDiv.find("iframe.ui-datepicker-cover");if(!!a.length){var c=$.datepicker._getBorders(b.dpDiv);a.css({left:-c[0],top:-c[1],width:b.dpDiv.outerWidth(),height:b.dpDiv.outerHeight()})}};b.dpDiv.zIndex($(a).zIndex()+1),$.datepicker._datepickerShowing=!0,$.effects&&$.effects[g]?b.dpDiv.show(g,$.datepicker._get(b,"showOptions"),h,i):b.dpDiv[g||"show"](g?h:null,i),(!g||!h)&&i(),b.input.is(":visible")&&!b.input.is(":disabled")&&b.input.focus(),$.datepicker._curInst=b}}},_updateDatepicker:function(a){var b=this;b.maxRows=4;var c=$.datepicker._getBorders(a.dpDiv);instActive=a,a.dpDiv.empty().append(this._generateHTML(a));var d=a.dpDiv.find("iframe.ui-datepicker-cover");!d.length||d.css({left:-c[0],top:-c[1],width:a.dpDiv.outerWidth(),height:a.dpDiv.outerHeight()}),a.dpDiv.find("."+this._dayOverClass+" a").mouseover();var e=this._getNumberOfMonths(a),f=e[1],g=17;a.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""),f>1&&a.dpDiv.addClass("ui-datepicker-multi-"+f).css("width",g*f+"em"),a.dpDiv[(e[0]!=1||e[1]!=1?"add":"remove")+"Class"]("ui-datepicker-multi"),a.dpDiv[(this._get(a,"isRTL")?"add":"remove")+"Class"]("ui-datepicker-rtl"),a==$.datepicker._curInst&&$.datepicker._datepickerShowing&&a.input&&a.input.is(":visible")&&!a.input.is(":disabled")&&a.input[0]!=document.activeElement&&a.input.focus();if(a.yearshtml){var h=a.yearshtml;setTimeout(function(){h===a.yearshtml&&a.yearshtml&&a.dpDiv.find("select.ui-datepicker-year:first").replaceWith(a.yearshtml),h=a.yearshtml=null},0)}},_getBorders:function(a){var b=function(a){return{thin:1,medium:2,thick:3}[a]||a};return[parseFloat(b(a.css("border-left-width"))),parseFloat(b(a.css("border-top-width")))]},_checkOffset:function(a,b,c){var d=a.dpDiv.outerWidth(),e=a.dpDiv.outerHeight(),f=a.input?a.input.outerWidth():0,g=a.input?a.input.outerHeight():0,h=document.documentElement.clientWidth+$(document).scrollLeft(),i=document.documentElement.clientHeight+$(document).scrollTop();b.left-=this._get(a,"isRTL")?d-f:0,b.left-=c&&b.left==a.input.offset().left?$(document).scrollLeft():0,b.top-=c&&b.top==a.input.offset().top+g?$(document).scrollTop():0,b.left-=Math.min(b.left,b.left+d>h&&h>d?Math.abs(b.left+d-h):0),b.top-=Math.min(b.top,b.top+e>i&&i>e?Math.abs(e+g):0);return b},_findPos:function(a){var b=this._getInst(a),c=this._get(b,"isRTL");while(a&&(a.type=="hidden"||a.nodeType!=1||$.expr.filters.hidden(a)))a=a[c?"previousSibling":"nextSibling"];var d=$(a).offset();return[d.left,d.top]},_hideDatepicker:function(a){var b=this._curInst;if(!(!b||a&&b!=$.data(a,PROP_NAME))&&this._datepickerShowing){var c=this._get(b,"showAnim"),d=this._get(b,"duration"),e=this,f=function(){$.datepicker._tidyDialog(b),e._curInst=null};$.effects&&$.effects[c]?b.dpDiv.hide(c,$.datepicker._get(b,"showOptions"),d,f):b.dpDiv[c=="slideDown"?"slideUp":c=="fadeIn"?"fadeOut":"hide"](c?d:null,f),c||f(),this._datepickerShowing=!1;var g=this._get(b,"onClose");g&&g.apply(b.input?b.input[0]:null,[b.input?b.input.val():"",b]),this._lastInput=null,this._inDialog&&(this._dialogInput.css({position:"absolute",left:"0",top:"-100px"}),$.blockUI&&($.unblockUI(),$("body").append(this.dpDiv))),this._inDialog=!1}},_tidyDialog:function(a){a.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")},_checkExternalClick:function(a){if(!!$.datepicker._curInst){var b=$(a.target),c=$.datepicker._getInst(b[0]);(b[0].id!=$.datepicker._mainDivId&&b.parents("#"+$.datepicker._mainDivId).length==0&&!b.hasClass($.datepicker.markerClassName)&&!b.closest("."+$.datepicker._triggerClass).length&&$.datepicker._datepickerShowing&&(!$.datepicker._inDialog||!$.blockUI)||b.hasClass($.datepicker.markerClassName)&&$.datepicker._curInst!=c)&&$.datepicker._hideDatepicker()}},_adjustDate:function(a,b,c){var d=$(a),e=this._getInst(d[0]);this._isDisabledDatepicker(d[0])||(this._adjustInstDate(e,b+(c=="M"?this._get(e,"showCurrentAtPos"):0),c),this._updateDatepicker(e))},_gotoToday:function(a){var b=$(a),c=this._getInst(b[0]);if(this._get(c,"gotoCurrent")&&c.currentDay)c.selectedDay=c.currentDay,c.drawMonth=c.selectedMonth=c.currentMonth,c.drawYear=c.selectedYear=c.currentYear;else{var d=new Date;c.selectedDay=d.getDate(),c.drawMonth=c.selectedMonth=d.getMonth(),c.drawYear=c.selectedYear=d.getFullYear()}this._notifyChange(c),this._adjustDate(b)},_selectMonthYear:function(a,b,c){var d=$(a),e=this._getInst(d[0]);e["selected"+(c=="M"?"Month":"Year")]=e["draw"+(c=="M"?"Month":"Year")]=parseInt(b.options[b.selectedIndex].value,10),this._notifyChange(e),this._adjustDate(d)},_selectDay:function(a,b,c,d){var e=$(a);if(!$(d).hasClass(this._unselectableClass)&&!this._isDisabledDatepicker(e[0])){var f=this._getInst(e[0]);f.selectedDay=f.currentDay=$("a",d).html(),f.selectedMonth=f.currentMonth=b,f.selectedYear=f.currentYear=c,this._selectDate(a,this._formatDate(f,f.currentDay,f.currentMonth,f.currentYear))}},_clearDate:function(a){var b=$(a),c=this._getInst(b[0]);this._selectDate(b,"")},_selectDate:function(a,b){var c=$(a),d=this._getInst(c[0]);b=b!=null?b:this._formatDate(d),d.input&&d.input.val(b),this._updateAlternate(d);var e=this._get(d,"onSelect");e?e.apply(d.input?d.input[0]:null,[b,d]):d.input&&d.input.trigger("change"),d.inline?this._updateDatepicker(d):(this._hideDatepicker(),this._lastInput=d.input[0],typeof d.input[0]!="object"&&d.input.focus(),this._lastInput=null)},_updateAlternate:function(a){var b=this._get(a,"altField");if(b){var c=this._get(a,"altFormat")||this._get(a,"dateFormat"),d=this._getDate(a),e=this.formatDate(c,d,this._getFormatConfig(a));$(b).each(function(){$(this).val(e)})}},noWeekends:function(a){var b=a.getDay();return[b>0&&b<6,""]},iso8601Week:function(a){var b=new Date(a.getTime());b.setDate(b.getDate()+4-(b.getDay()||7));var c=b.getTime();b.setMonth(0),b.setDate(1);return Math.floor(Math.round((c-b)/864e5)/7)+1},parseDate:function(a,b,c){if(a==null||b==null)throw"Invalid arguments";b=typeof b=="object"?b.toString():b+"";if(b=="")return null;var d=(c?c.shortYearCutoff:null)||this._defaults.shortYearCutoff;d=typeof d!="string"?d:(new Date).getFullYear()%100+parseInt(d,10);var e=(c?c.dayNamesShort:null)||this._defaults.dayNamesShort,f=(c?c.dayNames:null)||this._defaults.dayNames,g=(c?c.monthNamesShort:null)||this._defaults.monthNamesShort,h=(c?c.monthNames:null)||this._defaults.monthNames,i=-1,j=-1,k=-1,l=-1,m=!1,n=function(b){var c=s+1<a.length&&a.charAt(s+1)==b;c&&s++;return c},o=function(a){var c=n(a),d=a=="@"?14:a=="!"?20:a=="y"&&c?4:a=="o"?3:2,e=new RegExp("^\\d{1,"+d+"}"),f=b.substring(r).match(e);if(!f)throw"Missing number at position "+r;r+=f[0].length;return parseInt(f[0],10)},p=function(a,c,d){var e=$.map(n(a)?d:c,function(a,b){return[[b,a]]}).sort(function(a,b){return-(a[1].length-b[1].length)}),f=-1;$.each(e,function(a,c){var d=c[1];if(b.substr(r,d.length).toLowerCase()==d.toLowerCase()){f=c[0],r+=d.length;return!1}});if(f!=-1)return f+1;throw"Unknown name at position "+r},q=function(){if(b.charAt(r)!=a.charAt(s))throw"Unexpected literal at position "+r;r++},r=0;for(var s=0;s<a.length;s++)if(m)a.charAt(s)=="'"&&!n("'")?m=!1:q();else switch(a.charAt(s)){case"d":k=o("d");break;case"D":p("D",e,f);break;case"o":l=o("o");break;case"m":j=o("m");break;case"M":j=p("M",g,h);break;case"y":i=o("y");break;case"@":var t=new Date(o("@"));i=t.getFullYear(),j=t.getMonth()+1,k=t.getDate();break;case"!":var t=new Date((o("!")-this._ticksTo1970)/1e4);i=t.getFullYear(),j=t.getMonth()+1,k=t.getDate();break;case"'":n("'")?q():m=!0;break;default:q()}if(r<b.length)throw"Extra/unparsed characters found in date: "+b.substring(r);i==-1?i=(new Date).getFullYear():i<100&&(i+=(new Date).getFullYear()-(new Date).getFullYear()%100+(i<=d?0:-100));if(l>-1){j=1,k=l;for(;;){var u=this._getDaysInMonth(i,j-1);if(k<=u)break;j++,k-=u}}var t=this._daylightSavingAdjust(new Date(i,j-1,k));if(t.getFullYear()!=i||t.getMonth()+1!=j||t.getDate()!=k)throw"Invalid date";return t},ATOM:"yy-mm-dd",COOKIE:"D, dd M yy",ISO_8601:"yy-mm-dd",RFC_822:"D, d M y",RFC_850:"DD, dd-M-y",RFC_1036:"D, d M y",RFC_1123:"D, d M yy",RFC_2822:"D, d M yy",RSS:"D, d M y",TICKS:"!",TIMESTAMP:"@",W3C:"yy-mm-dd",_ticksTo1970:(718685+Math.floor(492.5)-Math.floor(19.7)+Math.floor(4.925))*24*60*60*1e7,formatDate:function(a,b,c){if(!b)return"";var d=(c?c.dayNamesShort:null)||this._defaults.dayNamesShort,e=(c?c.dayNames:null)||this._defaults.dayNames,f=(c?c.monthNamesShort:null)||this._defaults.monthNamesShort,g=(c?c.monthNames:null)||this._defaults.monthNames,h=function(b){var c=m+1<a.length&&a.charAt(m+1)==b;c&&m++;return c},i=function(a,b,c){var d=""+b;if(h(a))while(d.length<c)d="0"+d;return d},j=function(a,b,c,d){return h(a)?d[b]:c[b]},k="",l=!1;if(b)for(var m=0;m<a.length;m++)if(l)a.charAt(m)=="'"&&!h("'")?l=!1:k+=a.charAt(m);else switch(a.charAt(m)){case"d":k+=i("d",b.getDate(),2);break;case"D":k+=j("D",b.getDay(),d,e);break;case"o":k+=i("o",Math.round(((new Date(b.getFullYear(),b.getMonth(),b.getDate())).getTime()-(new Date(b.getFullYear(),0,0)).getTime())/864e5),3);break;case"m":k+=i("m",b.getMonth()+1,2);break;case"M":k+=j("M",b.getMonth(),f,g);break;case"y":k+=h("y")?b.getFullYear():(b.getYear()%100<10?"0":"")+b.getYear()%100;break;case"@":k+=b.getTime();break;case"!":k+=b.getTime()*1e4+this._ticksTo1970;break;case"'":h("'")?k+="'":l=!0;break;default:k+=a.charAt(m)}return k},_possibleChars:function(a){var b="",c=!1,d=function(b){var c=e+1<a.length&&a.charAt(e+1)==b;c&&e++;return c};for(var e=0;e<a.length;e++)if(c)a.charAt(e)=="'"&&!d("'")?c=!1:b+=a.charAt(e);else switch(a.charAt(e)){case"d":case"m":case"y":case"@":b+="0123456789";break;case"D":case"M":return null;case"'":d("'")?b+="'":c=!0;break;default:b+=a.charAt(e)}return b},_get:function(a,b){return a.settings[b]!==undefined?a.settings[b]:this._defaults[b]},_setDateFromField:function(a,b){if(a.input.val()!=a.lastVal){var c=this._get(a,"dateFormat"),d=a.lastVal=a.input?a.input.val():null,e,f;e=f=this._getDefaultDate(a);var g=this._getFormatConfig(a);try{e=this.parseDate(c,d,g)||f}catch(h){this.log(h),d=b?"":d}a.selectedDay=e.getDate(),a.drawMonth=a.selectedMonth=e.getMonth(),a.drawYear=a.selectedYear=e.getFullYear(),a.currentDay=d?e.getDate():0,a.currentMonth=d?e.getMonth():0,a.currentYear=d?e.getFullYear():0,this._adjustInstDate(a)}},_getDefaultDate:function(a){return this._restrictMinMax(a,this._determineDate(a,this._get(a,"defaultDate"),new Date))},_determineDate:function(a,b,c){var d=function(a){var b=new Date;b.setDate(b.getDate()+a);return b},e=function(b){try{return $.datepicker.parseDate($.datepicker._get(a,"dateFormat"),b,$.datepicker._getFormatConfig(a))}catch(c){}var d=(b.toLowerCase().match(/^c/)?$.datepicker._getDate(a):null)||new Date,e=d.getFullYear(),f=d.getMonth(),g=d.getDate(),h=/([+-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,i=h.exec(b);while(i){switch(i[2]||"d"){case"d":case"D":g+=parseInt(i[1],10);break;case"w":case"W":g+=parseInt(i[1],10)*7;break;case"m":case"M":f+=parseInt(i[1],10),g=Math.min(g,$.datepicker._getDaysInMonth(e,f));break;case"y":case"Y":e+=parseInt(i[1],10),g=Math.min(g,$.datepicker._getDaysInMonth(e,f))}i=h.exec(b)}return new Date(e,f,g)},f=b==null||b===""?c:typeof b=="string"?e(b):typeof b=="number"?isNaN(b)?c:d(b):new Date(b.getTime());f=f&&f.toString()=="Invalid Date"?c:f,f&&(f.setHours(0),f.setMinutes(0),f.setSeconds(0),f.setMilliseconds(0));return this._daylightSavingAdjust(f)},_daylightSavingAdjust:function(a){if(!a)return null;a.setHours(a.getHours()>12?a.getHours()+2:0);return a},_setDate:function(a,b,c){var d=!b,e=a.selectedMonth,f=a.selectedYear,g=this._restrictMinMax(a,this._determineDate(a,b,new Date));a.selectedDay=a.currentDay=g.getDate(),a.drawMonth=a.selectedMonth=a.currentMonth=g.getMonth(),a.drawYear=a.selectedYear=a.currentYear=g.getFullYear(),(e!=a.selectedMonth||f!=a.selectedYear)&&!c&&this._notifyChange(a),this._adjustInstDate(a),a.input&&a.input.val(d?"":this._formatDate(a))},_getDate:function(a){var b=!a.currentYear||a.input&&a.input.val()==""?null:this._daylightSavingAdjust(new Date(a.currentYear,a.currentMonth,a.currentDay));return b},_generateHTML:function(a){var b=new Date;b=this._daylightSavingAdjust(new Date(b.getFullYear(),b.getMonth(),b.getDate()));var c=this._get(a,"isRTL"),d=this._get(a,"showButtonPanel"),e=this._get(a,"hideIfNoPrevNext"),f=this._get(a,"navigationAsDateFormat"),g=this._getNumberOfMonths(a),h=this._get(a,"showCurrentAtPos"),i=this._get(a,"stepMonths"),j=g[0]!=1||g[1]!=1,k=this._daylightSavingAdjust(a.currentDay?new Date(a.currentYear,a.currentMonth,a.currentDay):new Date(9999,9,9)),l=this._getMinMaxDate(a,"min"),m=this._getMinMaxDate(a,"max"),n=a.drawMonth-h,o=a.drawYear;n<0&&(n+=12,o--);if(m){var p=this._daylightSavingAdjust(new Date(m.getFullYear(),m.getMonth()-g[0]*g[1]+1,m.getDate()));p=l&&p<l?l:p;while(this._daylightSavingAdjust(new Date(o,n,1))>p)n--,n<0&&(n=11,o--)}a.drawMonth=n,a.drawYear=o;var q=this._get(a,"prevText");q=f?this.formatDate(q,this._daylightSavingAdjust(new Date(o,n-i,1)),this._getFormatConfig(a)):q;var r=this._canAdjustMonth(a,-1,o,n)?'<a class="ui-datepicker-prev ui-corner-all" onclick="DP_jQuery_'+dpuuid+".datepicker._adjustDate('#"+a.id+"', -"+i+", 'M');\""+' title="'+q+'"><span class="ui-icon ui-icon-circle-triangle-'+(c?"e":"w")+'">'+q+"</span></a>":e?"":'<a class="ui-datepicker-prev ui-corner-all ui-state-disabled" title="'+q+'"><span class="ui-icon ui-icon-circle-triangle-'+(c?"e":"w")+'">'+q+"</span></a>",s=this._get(a,"nextText");s=f?this.formatDate(s,this._daylightSavingAdjust(new Date(o,n+i,1)),this._getFormatConfig(a)):s;var t=this._canAdjustMonth(a,1,o,n)?'<a class="ui-datepicker-next ui-corner-all" onclick="DP_jQuery_'+dpuuid+".datepicker._adjustDate('#"+a.id+"', +"+i+", 'M');\""+' title="'+s+'"><span class="ui-icon ui-icon-circle-triangle-'+(c?"w":"e")+'">'+s+"</span></a>":e?"":'<a class="ui-datepicker-next ui-corner-all ui-state-disabled" title="'+s+'"><span class="ui-icon ui-icon-circle-triangle-'+(c?"w":"e")+'">'+s+"</span></a>",u=this._get(a,"currentText"),v=this._get(a,"gotoCurrent")&&a.currentDay?k:b;u=f?this.formatDate(u,v,this._getFormatConfig(a)):u;var w=a.inline?"":'<button type="button" class="ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all" onclick="DP_jQuery_'+dpuuid+'.datepicker._hideDatepicker();">'+this._get(a,"closeText")+"</button>",x=d?'<div class="ui-datepicker-buttonpane ui-widget-content">'+(c?w:"")+(this._isInRange(a,v)?'<button type="button" class="ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all" onclick="DP_jQuery_'+dpuuid+".datepicker._gotoToday('#"+a.id+"');\""+">"+u+"</button>":"")+(c?"":w)+"</div>":"",y=parseInt(this._get(a,"firstDay"),10);y=isNaN(y)?0:y;var z=this._get(a,"showWeek"),A=this._get(a,"dayNames"),B=this._get(a,"dayNamesShort"),C=this._get(a,"dayNamesMin"),D=this._get(a,"monthNames"),E=this._get(a,"monthNamesShort"),F=this._get(a,"beforeShowDay"),G=this._get(a,"showOtherMonths"),H=this._get(a,"selectOtherMonths"),I=this._get(a,"calculateWeek")||this.iso8601Week,J=this._getDefaultDate(a),K="";for(var L=0;L<g[0];L++){var M="";this.maxRows=4;for(var N=0;N<g[1];N++){var O=this._daylightSavingAdjust(new Date(o,n,a.selectedDay)),P=" ui-corner-all",Q="";if(j){Q+='<div class="ui-datepicker-group';if(g[1]>1)switch(N){case 0:Q+=" ui-datepicker-group-first",P=" ui-corner-"+(c?"right":"left");break;case g[1]-1:Q+=" ui-datepicker-group-last",P=" ui-corner-"+(c?"left":"right");break;default:Q+=" ui-datepicker-group-middle",P=""}Q+='">'}Q+='<div class="ui-datepicker-header ui-widget-header ui-helper-clearfix'+P+'">'+(/all|left/.test(P)&&L==0?c?t:r:"")+(/all|right/.test(P)&&L==0?c?r:t:"")+this._generateMonthYearHeader(a,n,o,l,m,L>0||N>0,D,E)+'</div><table class="ui-datepicker-calendar"><thead>'+"<tr>";var R=z?'<th class="ui-datepicker-week-col">'+this._get(a,"weekHeader")+"</th>":"";for(var S=0;S<7;S++){var T=(S+y)%7;R+="<th"+((S+y+6)%7>=5?' class="ui-datepicker-week-end"':"")+">"+'<span title="'+A[T]+'">'+C[T]+"</span></th>"}Q+=R+"</tr></thead><tbody>";var U=this._getDaysInMonth(o,n);o==a.selectedYear&&n==a.selectedMonth&&(a.selectedDay=Math.min(a.selectedDay,U));var V=(this._getFirstDayOfMonth(o,n)-y+7)%7,W=Math.ceil((V+U)/7),X=j?this.maxRows>W?this.maxRows:W:W;this.maxRows=X;var Y=this._daylightSavingAdjust(new Date(o,n,1-V));for(var Z=0;Z<X;Z++){Q+="<tr>";var _=z?'<td class="ui-datepicker-week-col">'+this._get(a,"calculateWeek")(Y)+"</td>":"";for(var S=0;S<7;S++){var ba=F?F.apply(a.input?a.input[0]:null,[Y]):[!0,""],bb=Y.getMonth()!=n,bc=bb&&!H||!ba[0]||l&&Y<l||m&&Y>m;_+='<td class="'+((S+y+6)%7>=5?" ui-datepicker-week-end":"")+(bb?" ui-datepicker-other-month":"")+(Y.getTime()==O.getTime()&&n==a.selectedMonth&&a._keyEvent||J.getTime()==Y.getTime()&&J.getTime()==O.getTime()?" "+this._dayOverClass:"")+(bc?" "+this._unselectableClass+" ui-state-disabled":"")+(bb&&!G?"":" "+ba[1]+(Y.getTime()==k.getTime()?" "+this._currentClass:"")+(Y.getTime()==b.getTime()?" ui-datepicker-today":""))+'"'+((!bb||G)&&ba[2]?' title="'+ba[2]+'"':"")+(bc?"":' onclick="DP_jQuery_'+dpuuid+".datepicker._selectDay('#"+a.id+"',"+Y.getMonth()+","+Y.getFullYear()+', this);return false;"')+">"+(bb&&!G?"&#xa0;":bc?'<span class="ui-state-default">'+Y.getDate()+"</span>":'<a class="ui-state-default'+(Y.getTime()==b.getTime()?" ui-state-highlight":"")+(Y.getTime()==k.getTime()?" ui-state-active":"")+(bb?" ui-priority-secondary":"")+'" href="#">'+Y.getDate()+"</a>")+"</td>",Y.setDate(Y.getDate()+1),Y=this._daylightSavingAdjust(Y)}Q+=_+"</tr>"}n++,n>11&&(n=0,o++),Q+="</tbody></table>"+(j?"</div>"+(g[0]>0&&N==g[1]-1?'<div class="ui-datepicker-row-break"></div>':""):""),M+=Q}K+=M}K+=x+($.browser.msie&&parseInt($.browser.version,10)<7&&!a.inline?'<iframe src="javascript:false;" class="ui-datepicker-cover" frameborder="0"></iframe>':""),
a._keyEvent=!1;return K},_generateMonthYearHeader:function(a,b,c,d,e,f,g,h){var i=this._get(a,"changeMonth"),j=this._get(a,"changeYear"),k=this._get(a,"showMonthAfterYear"),l='<div class="ui-datepicker-title">',m="";if(f||!i)m+='<span class="ui-datepicker-month">'+g[b]+"</span>";else{var n=d&&d.getFullYear()==c,o=e&&e.getFullYear()==c;m+='<select class="ui-datepicker-month" onchange="DP_jQuery_'+dpuuid+".datepicker._selectMonthYear('#"+a.id+"', this, 'M');\" "+">";for(var p=0;p<12;p++)(!n||p>=d.getMonth())&&(!o||p<=e.getMonth())&&(m+='<option value="'+p+'"'+(p==b?' selected="selected"':"")+">"+h[p]+"</option>");m+="</select>"}k||(l+=m+(f||!i||!j?"&#xa0;":""));if(!a.yearshtml){a.yearshtml="";if(f||!j)l+='<span class="ui-datepicker-year">'+c+"</span>";else{var q=this._get(a,"yearRange").split(":"),r=(new Date).getFullYear(),s=function(a){var b=a.match(/c[+-].*/)?c+parseInt(a.substring(1),10):a.match(/[+-].*/)?r+parseInt(a,10):parseInt(a,10);return isNaN(b)?r:b},t=s(q[0]),u=Math.max(t,s(q[1]||""));t=d?Math.max(t,d.getFullYear()):t,u=e?Math.min(u,e.getFullYear()):u,a.yearshtml+='<select class="ui-datepicker-year" onchange="DP_jQuery_'+dpuuid+".datepicker._selectMonthYear('#"+a.id+"', this, 'Y');\" "+">";for(;t<=u;t++)a.yearshtml+='<option value="'+t+'"'+(t==c?' selected="selected"':"")+">"+t+"</option>";a.yearshtml+="</select>",l+=a.yearshtml,a.yearshtml=null}}l+=this._get(a,"yearSuffix"),k&&(l+=(f||!i||!j?"&#xa0;":"")+m),l+="</div>";return l},_adjustInstDate:function(a,b,c){var d=a.drawYear+(c=="Y"?b:0),e=a.drawMonth+(c=="M"?b:0),f=Math.min(a.selectedDay,this._getDaysInMonth(d,e))+(c=="D"?b:0),g=this._restrictMinMax(a,this._daylightSavingAdjust(new Date(d,e,f)));a.selectedDay=g.getDate(),a.drawMonth=a.selectedMonth=g.getMonth(),a.drawYear=a.selectedYear=g.getFullYear(),(c=="M"||c=="Y")&&this._notifyChange(a)},_restrictMinMax:function(a,b){var c=this._getMinMaxDate(a,"min"),d=this._getMinMaxDate(a,"max"),e=c&&b<c?c:b;e=d&&e>d?d:e;return e},_notifyChange:function(a){var b=this._get(a,"onChangeMonthYear");b&&b.apply(a.input?a.input[0]:null,[a.selectedYear,a.selectedMonth+1,a])},_getNumberOfMonths:function(a){var b=this._get(a,"numberOfMonths");return b==null?[1,1]:typeof b=="number"?[1,b]:b},_getMinMaxDate:function(a,b){return this._determineDate(a,this._get(a,b+"Date"),null)},_getDaysInMonth:function(a,b){return 32-this._daylightSavingAdjust(new Date(a,b,32)).getDate()},_getFirstDayOfMonth:function(a,b){return(new Date(a,b,1)).getDay()},_canAdjustMonth:function(a,b,c,d){var e=this._getNumberOfMonths(a),f=this._daylightSavingAdjust(new Date(c,d+(b<0?b:e[0]*e[1]),1));b<0&&f.setDate(this._getDaysInMonth(f.getFullYear(),f.getMonth()));return this._isInRange(a,f)},_isInRange:function(a,b){var c=this._getMinMaxDate(a,"min"),d=this._getMinMaxDate(a,"max");return(!c||b.getTime()>=c.getTime())&&(!d||b.getTime()<=d.getTime())},_getFormatConfig:function(a){var b=this._get(a,"shortYearCutoff");b=typeof b!="string"?b:(new Date).getFullYear()%100+parseInt(b,10);return{shortYearCutoff:b,dayNamesShort:this._get(a,"dayNamesShort"),dayNames:this._get(a,"dayNames"),monthNamesShort:this._get(a,"monthNamesShort"),monthNames:this._get(a,"monthNames")}},_formatDate:function(a,b,c,d){b||(a.currentDay=a.selectedDay,a.currentMonth=a.selectedMonth,a.currentYear=a.selectedYear);var e=b?typeof b=="object"?b:this._daylightSavingAdjust(new Date(d,c,b)):this._daylightSavingAdjust(new Date(a.currentYear,a.currentMonth,a.currentDay));return this.formatDate(this._get(a,"dateFormat"),e,this._getFormatConfig(a))}}),$.fn.datepicker=function(a){if(!this.length)return this;$.datepicker.initialized||($(document).mousedown($.datepicker._checkExternalClick).find("body").append($.datepicker.dpDiv),$.datepicker.initialized=!0);var b=Array.prototype.slice.call(arguments,1);if(typeof a=="string"&&(a=="isDisabled"||a=="getDate"||a=="widget"))return $.datepicker["_"+a+"Datepicker"].apply($.datepicker,[this[0]].concat(b));if(a=="option"&&arguments.length==2&&typeof arguments[1]=="string")return $.datepicker["_"+a+"Datepicker"].apply($.datepicker,[this[0]].concat(b));return this.each(function(){typeof a=="string"?$.datepicker["_"+a+"Datepicker"].apply($.datepicker,[this].concat(b)):$.datepicker._attachDatepicker(this,a)})},$.datepicker=new Datepicker,$.datepicker.initialized=!1,$.datepicker.uuid=(new Date).getTime(),$.datepicker.version="1.8.18",window["DP_jQuery_"+dpuuid]=$})(jQuery);

//页面JS开始
$(document).ready(function () {
    
    var frmAutoResizer = function () {
    	
        var leftFrm = $("#layout_left").width();
        var topFrm=48;
        var windowFrmW = $(window).innerWidth();
        var ax = undefined;
        //加入判断是为了在不必要重新计算布局的时候，浪费资源
        if ($("#layout_right").width() != windowFrmW - leftFrm) {
            $("#layout_right").width(windowFrmW - leftFrm);
        }
        if ($("#layout_right").height() != $(window).innerHeight()) {
            $("#layout_right").height($(window).innerHeight());
        }
        if ($("#layout_mainbody").width() != windowFrmW - leftFrm) {
            $("#layout_mainbody").width(windowFrmW - leftFrm);
        }
        if ($("#layout_mainbody").height() != $(window).innerHeight()) {
            $("#layout_mainbody").height($(window).innerHeight());
        }
        if ($(".layout_left_menutab_body").height() != $(window).innerHeight()  - 40) {
            $(".layout_left_menutab_body").height($(window).innerHeight()  - 40);
        }
        $("#scrollbarContainer").height($(window).innerHeight() - topFrm);
        setTimeout(frmAutoResizer, 500);
    };
    setTimeout(frmAutoResizer, 10);

    $(".menu-nav li>a").click(function () {
        var $this = $(this);
        var $sub = $this.parent().find("dl.sub-menu");
        if ($sub.is(":visible")) {
            $this.removeClass("on");
            $sub.slideUp();
        } else {
            $this.addClass("on");
            $sub.slideDown();
        }
    });

    //渐变颜色计算函数
    var calcColor = function (color, offset) {
        var reRgb = /rgb\((.*),(.*),(.*)\)/i;
        var result = reRgb.exec(color);
        try {
            var r = parseInt(result[1]);
            var g = parseInt(result[2]);
            var b = parseInt(result[3]);

            r = r + offset;
            g = g + offset;
            b = b + offset;

            return "rgb(" + r + "," + g + "," + b + ")";
        }
        catch (e) {
            return color;
        }
    };
    //所有按钮渐变
    var needAnim = [".fade-button", ".login-info-more a", "#metrogrid>a", ".res-list-pager a.pre", ".res-list-pager a.next", ".res-list-pager span.pager-info input[type=button]", ".task-list li>a", "a.upload-res", "p.group-operator>a", "div.question-op>a", ".question-submit", "a.btn-add-answer", "a.ssjh-pager-prev", "a.ssjh-pager-next"];
    var needAnimTimer = 0.5;
    for (var c in needAnim) {
        var ctr = needAnim[c];
        $(ctr).each(function () {
            if (!$(this).attr("data-old-bg")) {
                $(this).attr("data-old-bg", $(this).css("background-color"));
            }
        });
        $(ctr).hover(function () {
            if ($(this).attr("data-fade-to")) {
                var fadeTo = $(this).attr("data-fade-to");
                TweenLite.to($(this), needAnimTimer, { backgroundColor: fadeTo });
            } else {
                var offset = $(this).attr("data-offset") == undefined ? -50 : parseInt($(this).attr("data-offset"));
                var color = calcColor($(this).css("background-color"), offset);
                TweenLite.to($(this), needAnimTimer, { backgroundColor: color });
            }
        },
        function () {
            TweenLite.to($(this), needAnimTimer, { backgroundColor: $(this).attr("data-old-bg") });
        });
    }

    $(".login-info").hover(function () {
        TweenLite.to($(".login-info>a"), needAnimTimer, { backgroundColor: "#504538" });
        $(".login-info>a").addClass("on");
        $(this).parent().find(".login-info-more").slideDown();
    }, function () {
        TweenLite.to($(".login-info>a"), needAnimTimer, { backgroundColor: "#ae9b84" });
        $(".login-info>a").removeClass("on");
        $(this).parent().find(".login-info-more").slideUp();
    });

    $(".res-controls a.rc").hover(function () {
        TweenLite.to($(this), needAnimTimer, { backgroundColor: "#893939" });
    }, function () {
        TweenLite.to($(this), needAnimTimer, { backgroundColor: "#ca4f4f" });
    });

    $(".layout_left_menutab_title>a").click(function () {
        var index = $(".layout_left_menutab_title>a").index(this);
        $(this).addClass("on").siblings().removeClass("on");
        $("ul.menutab_body").eq(index).show().siblings().hide();
    });

    $(".history-today .btn").click(function () {
        if ($(".history-today").attr("data-count") == undefined) {
            $(".history-today").attr("data-count", $(".history-today .historys li").length);
        }
        if ($(".history-today").attr("data-index") == undefined) {
            $(".history-today").attr("data-index", 1);
        }
        var type = $(this).attr("data-type");
        var historys = $(".history-today .historys ul");
        if (type == "pre") {
            if ($(".history-today").attr("data-index") >= $(".history-today").attr("data-count")) {
            	art.dialog.alert("后面没有了~~");
                return;
            }
            historys.animate({ left: "-=145px" });
            $(".history-today").attr("data-index", parseInt($(".history-today").attr("data-index")) + 1);
        } else if (type == "next") {
            if ($(".history-today").attr("data-index") <=1) {
            	art.dialog.alert('前面没有了!!!');
                return;
            }
            historys.animate({ left: "+=145px" });
            $(".history-today").attr("data-index", parseInt($(".history-today").attr("data-index")) - 1);
        }
    });

    //$(".list-table tbody tr").hover(function () {
    //    var oldBgcolor = $(this).css("background-color");
    //    $(this).attr("data-old-bgcolor", oldBgcolor);
    //    TweenLite.to($(this), needAnimTimer, { backgroundColor: "#d5d5d5" });
    //}, function () {
    //    var oldBgcolor = $(this).attr("data-old-bgcolor");
    //    TweenLite.to($(this), needAnimTimer, { backgroundColor: oldBgcolor });
    //});

    $(".reslist ul.pic-list li").hover(function () {
        var title = $(this).find("div.title");
        var span = title.find("span");
        var icons = title.find("p");
        TweenLite.to(title, needAnimTimer, { backgroundColor: "#491b1b", opacity: 0.9 });
        TweenLite.to(span, needAnimTimer, { top: 33 });
        TweenLite.to(icons, needAnimTimer, { top: 0 });
    }, function () {
        var title = $(this).find("div.title");
        var span = title.find("span");
        var icons = title.find("p");
        TweenLite.to(title, needAnimTimer, { backgroundColor: "#000000", opacity: 0.7 });
        TweenLite.to(span, needAnimTimer, { top: 0 });
        TweenLite.to(icons, needAnimTimer, { top: 33 });
    });

    $(".navigation .list-type a").hover(function () {
        TweenLite.to($(this), needAnimTimer, { backgroundColor: "#cacaca" });
    }, function () {
        TweenLite.to($(this), needAnimTimer, { backgroundColor: "#e7e7e7" });
    });

    /*首页JS*/
    $('.layout_left_menutab_body,#layout_mainbody,.hide-popup-content').rollbar({ zIndex: 10, pathPadding: "0px" });
    $('#calendar').datepicker({
        inline: true,
        firstDay: 1,
        dateFormat: "yy-mm-dd",
        showOtherMonths: true,
        dayNamesMin: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        onSelect: function (date, inst) {
            alert(date);
        }
    });

    $('.auto-tab').autoTab({
        tabTitleId: ".auto-tab-title",
        tabContentId: ".auto-tab-content",
        prevPageButton: ".auto-tab-prev",
        nextPageButton: ".auto-tab-next",
        titleContainerWidth: $('.auto-tab-title').width(),
        isAllowLastEmpty: false,
        interval: 2000,
        sliderPageTimeout: 500,
        visible: 6
    });

    if ($('#metrogrid').length > 0) {
        $('#metrogrid').masonry();
    }

    /*资源详细页面JS*/
    $(".res-controls li>a.rc").mouseover(function () {
        $(this).addClass("hover");
        $("div.hide-popup").fadeOut();
        $("div.popup-" + $(this).attr("data-type")).fadeIn();
    });
    $("div.hide-popup").mouseleave(function () {
        $(".res-controls li>a.rc").removeClass("hover");
        $("div.hide-popup").fadeOut();
    });

    $(".relative-res span.toggle").click(function () {
        if ($(".relative-res-body").height() > 0) {
            $(this).removeClass("on");
            $(".relative-res-body").animate({ height: 0 }, 500);
            $(this).find("a>b").text("展开")
        } else {
            $(this).addClass("on");
            $(".relative-res-body").animate({ height: 150 }, 500);
            $(this).find("a>b").text("收缩");
        }
    });

    $("#btn_scale a").hover(function () {
        $(this).parent().animate({ width: 40 });
    }, function () {
        $(this).parent().animate({ width: 24 });
    });
    $("#btn_scale a").click(function () {
        var leftWidth = $("#layout_left").width();
        if (leftWidth == 0) {
            $(".search-box").css({ left: 0 });
            $(".page-controller").css({ left: 0 });
            $(this).html("&lt;");
            $("#layout_left").show().animate({ width: 192 }, 500);
            $("#layout_right").stop(true,true).animate({ left: 192 });
            $("#btn_scale").stop(true, true).animate({ left: 192 });
        } else {
            $(".search-box").css({ left: 192 });
            $(".page-controller").css({ left: 192 });
            $("#layout_left").stop(true, true).animate({ width: 0 }, 500, function () {
                $(this).hide();
            });
            $("#btn_scale").stop(true, true).animate({ left: 0 }, 500);
            $("#layout_right").stop(true, true).animate({ left: 0 }, 500);
            $(this).html("&gt;");
        }
    });

    $(".relative-res-title a.tab").click(function () {
        if ($(".relative-res-body").height() <= 0) {
            $(".relative-res span.toggle").addClass("on");
            $(".relative-res-body").animate({ height: 150 }, 500);
            $(this).find("a>b").text("收缩");
        }
        $(".relative-res-title a.tab").removeClass("on");
        $(this).addClass("on");
        var index = $(".relative-res-title a.tab").index(this);
        $(".relative-res-body").find(".relative-res-container").hide().eq(index).show();
    });

    var resizeScroller = function () {
        if ($(".relative-res-container").length>0) {
            $(".relative-res-container").width($(window).innerWidth() - $("#layout_left").width() - 70 * 2).css("overflow", "hidden");
        }
    };
    $(window).resize(resizeScroller);
    resizeScroller();

    $(".relative-res-body .btn").click(function () {
        if ($(".relative-res-body").attr("data-count") == undefined) {
            $(".relative-res-body").attr("data-count", $(".relative-res-body .relative-res-container li").length);
        }
        if ($(".relative-res-body").attr("data-index") == undefined) {
            $(".relative-res-body").attr("data-index", 1);
        }
        var count = parseInt($(".relative-res-body").attr("data-count"));
        var index = parseInt($(".relative-res-body").attr("data-index"));
        var container = $(".relative-res-body .relative-res-container ul");
        var type = $(this).attr("data-type");

        var indexPlus = function () {
            if (index + 1 > count) {
                $(".relative-res-body").attr("data-index", count);
                return false;
            } else {
                $(".relative-res-body").attr("data-index", index + 1);
                return true;
            }
        };
        var indexMinus = function () {
            if (index == 1 || index - 1 < 0) {
                $(".relative-res-body").attr("data-index", 1);
                return false;
            } else {
                $(".relative-res-body").attr("data-index", index - 1);
                return true;
            }
        };

        if (type == "next") {
            if (indexPlus()) {
                container.animate({ left: "-=167px" });
            }
        } else if (type == "pre") {
            if (indexMinus()) {
                container.animate({ left: "+=167px" });
            }
        }
    });

    $("#layout_left").mouseleave(function () {
        if ($("#div_sub_submenu").is(":visible")) {
            setTimeout(function () {
                if ($("#div_sub_submenu").attr("isOnMouseOver") == undefined) {
                    $("#div_sub_submenu").hide();
                }
            },200);
        }
    });
    $("#div_sub_submenu").hover(function () {
        $(this).attr("isOnMouseOver", true);
        $(this).show();
    }, function () {
        $(this).hide();
        $(this).removeAttr("isOnMouseOver");
    });
    $("dl.sub-menu>dd").hover(function () {
        $("#div_sub_submenu").hide();
        var index = $("dl.sub-menu>dd").index(this);
        var submenus = $(this).find("textarea.sub-menu-data");
        var thirdMenu = $("#div_sub_submenu");
        var thirdMenuContainer = $("#div_sub_submenu>ul");
        var $this = $(this);
        if (submenus && submenus.length > 0) {
            thirdMenuContainer.empty();
            $(submenus.val()).appendTo(thirdMenuContainer);
            thirdMenu.css({ top: 130+index*35 }).show();
        }
    });

    //tabcontrol
    //tab切换控制器 by mrhuo.com
    var tabControl = {
        init: function (tab, changedType) {
            if ($(tab).length > 0) {
                changedType = changedType || "mousemove";
                var tabTitle = $(tab + ">p.tabtitle>a.tab");
                var tabContent = $(tab + ">div.tabcontents>div.tabcontent");

                tabTitle.each(function () {
                    var $this = $(this);
                    var $thisindex = $(this).index(tab + ">p.tabtitle>a.tab");
                    $this.bind(changedType, function () {
                        tabTitle.removeClass("on");
                        tabContent.hide();

                        $this.addClass("on");
                        tabContent.eq($thisindex).css("left", "0px").show();
                    });
                });
            }
        }
    };
    tabControl.init(".tabcontrol.ssjh-index-row1", "click");
    tabControl.init(".tabcontrol.ssjh-index-row2", "click");
    tabControl.init(".tabcontrol.ssjh-index-row3", "click");
    tabControl.init(".ssjh-index-row1 .right", "click");
    tabControl.init(".my-tasks", "click");
    tabControl.init(".my-answer", "click");
    tabControl.init(".my-res", "click");
});

