// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,t;r=this,t=function(){"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function t(){return r&&"symbol"==typeof Symbol.toStringTag}var n,e=Object.prototype.toString,o=Object.prototype.hasOwnProperty,i="function"==typeof Symbol?Symbol:void 0,a="function"==typeof i?i.toStringTag:"";n=t()?function(r){var t,n,i,c,f;if(null==r)return e.call(r);n=r[a],f=a,t=null!=(c=r)&&o.call(c,f);try{r[a]=void 0}catch(t){return e.call(r)}return i=e.call(r),t?r[a]=n:delete r[a],i}:function(r){return e.call(r)};var c=n,f="function"==typeof ArrayBuffer,u="function"==typeof Float64Array,l="function"==typeof Float64Array?Float64Array:null;function p(){var r,t,n;if("function"!=typeof l)return!1;try{t=new l([1,3.14,-3.14,NaN]),n=t,r=(u&&n instanceof Float64Array||"[object Float64Array]"===c(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}var y="function"==typeof Float64Array?Float64Array:void 0,s=p()?y:function(){throw new Error("not implemented")},d="function"==typeof ArrayBuffer?ArrayBuffer:null;function g(){var r,t,n,e;if("function"!=typeof d)return!1;try{n=new d(16),e=n,(r=(f&&e instanceof ArrayBuffer||"[object ArrayBuffer]"===c(e))&&"function"==typeof d.isView)&&((t=new s(n))[0]=-3.14,t[1]=NaN,r=r&&d.isView(t)&&16===n.byteLength&&-3.14===t[0]&&t[1]!=t[1])}catch(t){r=!1}return r}var w=/./,h="function"==typeof Object.defineProperty?Object.defineProperty:null,v=Object.defineProperty;function A(r){return"number"==typeof r}function b(r){var t,n="";for(t=0;t<r;t++)n+="0";return n}function m(r,t,n){var e=!1,o=t-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(e=!0,r=r.substr(1)),r=n?r+b(o):b(o)+r,e&&(r="-"+r)),r}var j=String.prototype.toLowerCase,I=String.prototype.toUpperCase;function E(r){var t,n,e;switch(r.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(n=r.arg,e=parseInt(n,10),!isFinite(e)){if(!A(n))throw new Error("invalid integer. Value: "+n);e=0}return e<0&&("u"===r.specifier||10!==t)&&(e=4294967295+e+1),e<0?(n=(-e).toString(t),r.precision&&(n=m(n,r.precision,r.padRight)),n="-"+n):(n=e.toString(t),e||r.precision?r.precision&&(n=m(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===t&&(r.alternate&&(n="0x"+n),n=r.specifier===I.call(r.specifier)?I.call(n):j.call(n)),8===t&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function U(r){return"string"==typeof r}var _=Math.abs,F=String.prototype.toLowerCase,S=String.prototype.toUpperCase,V=String.prototype.replace,x=/e\+(\d)$/,T=/e-(\d)$/,k=/^(\d+)$/,O=/^(\d+)e/,C=/\.0$/,B=/\.0*e/,P=/(\..*[^0])0*e/;function N(r){var t,n,e=parseFloat(r.arg);if(!isFinite(e)){if(!A(r.arg))throw new Error("invalid floating-point number. Value: "+n);e=r.arg}switch(r.specifier){case"e":case"E":n=e.toExponential(r.precision);break;case"f":case"F":n=e.toFixed(r.precision);break;case"g":case"G":_(e)<1e-4?((t=r.precision)>0&&(t-=1),n=e.toExponential(t)):n=e.toPrecision(r.precision),r.alternate||(n=V.call(n,P,"$1e"),n=V.call(n,B,"e"),n=V.call(n,C,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=V.call(n,x,"e+0$1"),n=V.call(n,T,"e-0$1"),r.alternate&&(n=V.call(n,k,"$1."),n=V.call(n,O,"$1.e")),e>=0&&r.sign&&(n=r.sign+n),n=r.specifier===S.call(r.specifier)?S.call(n):F.call(n)}function $(r){var t,n="";for(t=0;t<r;t++)n+=" ";return n}function L(r,t,n){var e=t-r.length;return e<0?r:r=n?r+$(e):$(e)+r}var R=String.fromCharCode,G=isNaN,Z=Array.isArray;function M(r){var t={};return t.specifier=r.specifier,t.precision=void 0===r.precision?1:r.precision,t.width=r.width,t.flags=r.flags||"",t.mapping=r.mapping,t}function W(r){var t,n,e,o,i,a,c,f,u;if(!Z(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(a="",c=1,f=0;f<r.length;f++)if(U(e=r[f]))a+=e;else{if(t=void 0!==e.precision,!(e=M(e)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+e+"`.");for(e.mapping&&(c=e.mapping),n=e.flags,u=0;u<n.length;u++)switch(o=n.charAt(u)){case" ":e.sign=" ";break;case"+":e.sign="+";break;case"-":e.padRight=!0,e.padZeros=!1;break;case"0":e.padZeros=n.indexOf("-")<0;break;case"#":e.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===e.width){if(e.width=parseInt(arguments[c],10),c+=1,G(e.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+e.width+"`.");e.width<0&&(e.padRight=!0,e.width=-e.width)}if(t&&"*"===e.precision){if(e.precision=parseInt(arguments[c],10),c+=1,G(e.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+e.precision+"`.");e.precision<0&&(e.precision=1,t=!1)}switch(e.arg=arguments[c],e.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(e.padZeros=!1),e.arg=E(e);break;case"s":e.maxWidth=t?e.precision:-1;break;case"c":if(!G(e.arg)){if((i=parseInt(e.arg,10))<0||i>127)throw new Error("invalid character code. Value: "+e.arg);e.arg=G(i)?String(e.arg):R(i)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(e.precision=6),e.arg=N(e);break;default:throw new Error("invalid specifier: "+e.specifier)}e.maxWidth>=0&&e.arg.length>e.maxWidth&&(e.arg=e.arg.substring(0,e.maxWidth)),e.padZeros?e.arg=m(e.arg,e.width||e.precision,e.padRight):e.width&&(e.arg=L(e.arg,e.width,e.padRight)),a+=e.arg||"",c+=1}return a}var D=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function X(r){var t={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(t.precision="1"),t}function z(r){var t,n,e,o;for(n=[],o=0,e=D.exec(r);e;)(t=r.slice(o,D.lastIndex-e[0].length)).length&&n.push(t),n.push(X(e)),o=D.lastIndex,e=D.exec(r);return(t=r.slice(o)).length&&n.push(t),n}function Y(r){return"string"==typeof r}function q(r){var t,n,e;if(!Y(r))throw new TypeError(q("invalid argument. First argument must be a string. Value: `%s`.",r));for(t=z(r),(n=new Array(arguments.length))[0]=t,e=1;e<n.length;e++)n[e]=arguments[e];return W.apply(null,n)}var H,J=Object.prototype,K=J.toString,Q=J.__defineGetter__,rr=J.__defineSetter__,tr=J.__lookupGetter__,nr=J.__lookupSetter__;H=function(){try{return h({},"x",{}),!0}catch(r){return!1}}()?v:function(r,t,n){var e,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===K.call(r))throw new TypeError(q("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===K.call(n))throw new TypeError(q("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((o="value"in n)&&(tr.call(r,t)||nr.call(r,t)?(e=r.__proto__,r.__proto__=J,delete r[t],r[t]=n.value,r.__proto__=e):r[t]=n.value),i="get"in n,a="set"in n,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&Q&&Q.call(r,t,n.get),a&&rr&&rr.call(r,t,n.set),r};var er=H;function or(r,t,n){er(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}function ir(r){return"boolean"==typeof r}var ar=Boolean,cr=Boolean.prototype.toString,fr=t();function ur(r){return"object"==typeof r&&(r instanceof ar||(fr?function(r){try{return cr.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===c(r)))}function lr(r){return ir(r)||ur(r)}function pr(){return new Function("return this;")()}or(lr,"isPrimitive",ir),or(lr,"isObject",ur);var yr="object"==typeof self?self:null,sr="object"==typeof window?window:null,dr="object"==typeof globalThis?globalThis:null,gr=function(r){if(arguments.length){if(!ir(r))throw new TypeError(q("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return pr()}if(dr)return dr;if(yr)return yr;if(sr)return sr;throw new Error("unexpected error. Unable to resolve global object.")}(),wr=gr.document&&gr.document.childNodes,hr=Int8Array;function vr(){return/^\s*function\s*([^(]*)/i}var Ar,br=/^\s*function\s*([^(]*)/i;or(vr,"REGEXP",br),Ar=Array.isArray?Array.isArray:function(r){return"[object Array]"===c(r)};var mr=Ar;function jr(r){return null!==r&&"object"==typeof r}var Ir=function(r){if("function"!=typeof r)throw new TypeError(q("invalid argument. Must provide a function. Value: `%s`.",r));return function(t){var n,e;if(!mr(t))return!1;if(0===(n=t.length))return!1;for(e=0;e<n;e++)if(!1===r(t[e]))return!1;return!0}}(jr);function Er(r){var t,n,e,o;if(("Object"===(n=c(r).slice(8,-1))||"Error"===n)&&r.constructor){if("string"==typeof(e=r.constructor).name)return e.name;if(t=br.exec(e.toString()))return t[1]}return jr(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":n}or(jr,"isObjectLikeArray",Ir);var Ur="function"==typeof w||"object"==typeof hr||"function"==typeof wr?function(r){return Er(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"==(t=typeof r)?Er(r).toLowerCase():t};function _r(r){return"function"===Ur(r)}var Fr,Sr="function"==typeof ArrayBuffer?ArrayBuffer:void 0,Vr=g()?Sr:function(){throw new Error("not implemented")},xr=(Fr=!1,function(){return Fr});function Tr(){}var kr,Or="foo"===Tr.name,Cr=Object,Br=Object.getPrototypeOf;kr=_r(Object.getPrototypeOf)?Br:function(r){var t=function(r){return r.__proto__}(r);return t||null===t?t:"[object Function]"===c(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Pr=kr;function Nr(r){return null==r?null:(r=Cr(r),Pr(r))}var $r,Lr="function"==typeof Int8Array,Rr="function"==typeof Int8Array?Int8Array:null,Gr="function"==typeof Int8Array?Int8Array:void 0;$r=function(){var r,t;if("function"!=typeof Rr)return!1;try{r=function(r){return Lr&&r instanceof Int8Array||"[object Int8Array]"===c(r)}(t=new Rr([1,3.14,-3.14,128]))&&1===t[0]&&3===t[1]&&-3===t[2]&&-128===t[3]}catch(t){r=!1}return r}()?Gr:function(){throw new Error("not implemented")};var Zr,Mr=$r,Wr="function"==typeof Uint8Array,Dr="function"==typeof Uint8Array?Uint8Array:null,Xr="function"==typeof Uint8Array?Uint8Array:void 0;Zr=function(){var r,t;if("function"!=typeof Dr)return!1;try{r=function(r){return Wr&&r instanceof Uint8Array||"[object Uint8Array]"===c(r)}(t=new Dr(t=[1,3.14,-3.14,256,257]))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Xr:function(){throw new Error("not implemented")};var zr,Yr=Zr,qr="function"==typeof Uint8ClampedArray,Hr="function"==typeof Uint8ClampedArray?Uint8ClampedArray:null,Jr="function"==typeof Uint8ClampedArray?Uint8ClampedArray:void 0;zr=function(){var r,t;if("function"!=typeof Hr)return!1;try{r=function(r){return qr&&r instanceof Uint8ClampedArray||"[object Uint8ClampedArray]"===c(r)}(t=new Hr([-1,0,1,3.14,4.99,255,256]))&&0===t[0]&&0===t[1]&&1===t[2]&&3===t[3]&&5===t[4]&&255===t[5]&&255===t[6]}catch(t){r=!1}return r}()?Jr:function(){throw new Error("not implemented")};var Kr,Qr=zr,rt="function"==typeof Int16Array,tt="function"==typeof Int16Array?Int16Array:null,nt="function"==typeof Int16Array?Int16Array:void 0;Kr=function(){var r,t;if("function"!=typeof tt)return!1;try{r=function(r){return rt&&r instanceof Int16Array||"[object Int16Array]"===c(r)}(t=new tt([1,3.14,-3.14,32768]))&&1===t[0]&&3===t[1]&&-3===t[2]&&-32768===t[3]}catch(t){r=!1}return r}()?nt:function(){throw new Error("not implemented")};var et,ot=Kr,it="function"==typeof Uint16Array,at="function"==typeof Uint16Array?Uint16Array:null,ct="function"==typeof Uint16Array?Uint16Array:void 0;et=function(){var r,t;if("function"!=typeof at)return!1;try{r=function(r){return it&&r instanceof Uint16Array||"[object Uint16Array]"===c(r)}(t=new at(t=[1,3.14,-3.14,65536,65537]))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?ct:function(){throw new Error("not implemented")};var ft,ut=et,lt="function"==typeof Int32Array,pt="function"==typeof Int32Array?Int32Array:null,yt="function"==typeof Int32Array?Int32Array:void 0;ft=function(){var r,t;if("function"!=typeof pt)return!1;try{r=function(r){return lt&&r instanceof Int32Array||"[object Int32Array]"===c(r)}(t=new pt([1,3.14,-3.14,2147483648]))&&1===t[0]&&3===t[1]&&-3===t[2]&&-2147483648===t[3]}catch(t){r=!1}return r}()?yt:function(){throw new Error("not implemented")};var st,dt=ft,gt="function"==typeof Uint32Array,wt="function"==typeof Uint32Array?Uint32Array:null,ht="function"==typeof Uint32Array?Uint32Array:void 0;st=function(){var r,t;if("function"!=typeof wt)return!1;try{r=function(r){return gt&&r instanceof Uint32Array||"[object Uint32Array]"===c(r)}(t=new wt(t=[1,3.14,-3.14,4294967296,4294967297]))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?ht:function(){throw new Error("not implemented")};var vt,At=st,bt="function"==typeof Float32Array,mt=Number.POSITIVE_INFINITY,jt="function"==typeof Float32Array?Float32Array:null,It="function"==typeof Float32Array?Float32Array:void 0;vt=function(){var r,t;if("function"!=typeof jt)return!1;try{r=function(r){return bt&&r instanceof Float32Array||"[object Float32Array]"===c(r)}(t=new jt([1,3.14,-3.14,5e40]))&&1===t[0]&&3.140000104904175===t[1]&&-3.140000104904175===t[2]&&t[3]===mt}catch(t){r=!1}return r}()?It:function(){throw new Error("not implemented")};var Et=[s,vt,dt,At,ot,ut,Mr,Yr,Qr],Ut=["Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Uint16Array","Int32Array","Uint32Array","Float32Array","Float64Array"],_t=p()?Nr(s):Ft;function Ft(){}_t="TypedArray"===function(r){if(!1===_r(r))throw new TypeError(q("invalid argument. Must provide a function. Value: `%s`.",r));return Or?r.name:br.exec(r.toString())[1]}(_t)?_t:Ft;var St,Vt="function"==typeof DataView;return St=g()?_r(Vr.isView)?function(r){return Vr.isView(r)}:function(r){return function(r){var t,n;if("object"!=typeof r||null===r)return!1;if(r instanceof _t)return!0;for(n=0;n<Et.length;n++)if(r instanceof Et[n])return!0;for(;r;){for(t=Er(r),n=0;n<Ut.length;n++)if(Ut[n]===t)return!0;r=Nr(r)}return!1}(r)||function(r){return Vt&&r instanceof DataView||"[object DataView]"===c(r)}(r)}:xr,St},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(r="undefined"!=typeof globalThis?globalThis:r||self).isArrayBufferView=t();
//# sourceMappingURL=browser.js.map
