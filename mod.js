// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function r(r){var t=r.default;if("function"==typeof t){var n=function(){return t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(r).forEach((function(t){var e=Object.getOwnPropertyDescriptor(r,t);Object.defineProperty(n,t,e.get?e:{enumerable:!0,get:function(){return r[t]}})})),n}var t=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var n=function(){return t&&"symbol"==typeof Symbol.toStringTag},e=Object.prototype.toString,o=e;var i=function(r){return o.call(r)},a=Object.prototype.hasOwnProperty;var u=function(r,t){return null!=r&&a.call(r,t)},f="function"==typeof Symbol?Symbol.toStringTag:"",c=u,y=f,l=e;var p=i,v=function(r){var t,n,e;if(null==r)return l.call(r);n=r[y],t=c(r,y);try{r[y]=void 0}catch(t){return l.call(r)}return e=l.call(r),t?r[y]=n:delete r[y],e},A=n()?v:p,s=A,b="function"==typeof ArrayBuffer;var d=function(r){return b&&r instanceof ArrayBuffer||"[object ArrayBuffer]"===s(r)},w=A,m="function"==typeof Float64Array;var j="function"==typeof Float64Array?Float64Array:null,h=function(r){return m&&r instanceof Float64Array||"[object Float64Array]"===w(r)},_=j;var g=function(){var r,t;if("function"!=typeof _)return!1;try{t=new _([1,3.14,-3.14,NaN]),r=h(t)&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r};var U="function"==typeof Float64Array?Float64Array:void 0,I=function(){throw new Error("not implemented")},E=g()?U:I,O="function"==typeof ArrayBuffer?ArrayBuffer:null,F=d,P=E,S=O;var B=function(){var r,t,n;if("function"!=typeof S)return!1;try{n=new S(16),(r=F(n)&&"function"==typeof S.isView)&&((t=new P(n))[0]=-3.14,t[1]=NaN,r=r&&S.isView(t)&&16===n.byteLength&&-3.14===t[0]&&t[1]!=t[1])}catch(t){r=!1}return r},V=/./,C="function"==typeof Object.defineProperty?Object.defineProperty:null;var T=function(){try{return C({},"x",{}),!0}catch(r){return!1}},N=Object.defineProperty,x=Object.prototype,G=x.toString,k=x.__defineGetter__,D=x.__defineSetter__,L=x.__lookupGetter__,M=x.__lookupSetter__;var R=function(r,t,n){var e,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===G.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof n||null===n||"[object Array]"===G.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((o="value"in n)&&(L.call(r,t)||M.call(r,t)?(e=r.__proto__,r.__proto__=x,delete r[t],r[t]=n.value,r.__proto__=e):r[t]=n.value),i="get"in n,a="set"in n,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&k&&k.call(r,t,n.get),a&&D&&D.call(r,t,n.set),r},X=N,z=R,Y=T()?X:z;var q=function(r,t,n){Y(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})},H=q;var J=function(r){return"boolean"==typeof r},K=Boolean.prototype.toString;var Q=A,W=function(r){try{return K.call(r),!0}catch(r){return!1}},Z=n();var $=function(r){return"object"==typeof r&&(r instanceof Boolean||(Z?W(r):"[object Boolean]"===Q(r)))},rr=J,tr=$;var nr=H,er=function(r){return rr(r)||tr(r)},or=$;nr(er,"isPrimitive",J),nr(er,"isObject",or);var ir=er;var ar=function(){return new Function("return this;")()},ur="object"==typeof self?self:null,fr="object"==typeof window?window:null,cr="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},yr="object"==typeof cr?cr:null;module.exports=yr;var lr=ir.isPrimitive,pr=ar,vr=ur,Ar=fr,sr=r(Object.freeze({__proto__:null}));var br=function(r){if(arguments.length){if(!lr(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return pr()}if(vr)return vr;if(Ar)return Ar;if(sr)return sr;throw new Error("unexpected error. Unable to resolve global object.")},dr=br(),wr=dr.document&&dr.document.childNodes,mr=Int8Array,jr=V,hr=wr,_r=mr;var gr=function(){return"function"==typeof jr||"object"==typeof _r||"function"==typeof hr};var Ur=function(){return/^\s*function\s*([^(]*)/i},Ir=Ur;H(Ir,"REGEXP",Ur());var Er=Ir,Or=A;var Fr=Array.isArray?Array.isArray:function(r){return"[object Array]"===Or(r)};var Pr=function(r){return null!==r&&"object"==typeof r};H(Pr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(t){var n,e;if(!Fr(t))return!1;if(0===(n=t.length))return!1;for(e=0;e<n;e++)if(!1===r(t[e]))return!1;return!0}}(Pr));var Sr=Pr;var Br=A,Vr=Er.REGEXP,Cr=function(r){return Sr(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))};var Tr=function(r){var t,n,e;if(("Object"===(n=Br(r).slice(8,-1))||"Error"===n)&&r.constructor){if("string"==typeof(e=r.constructor).name)return e.name;if(t=Vr.exec(e.toString()))return t[1]}return Cr(r)?"Buffer":n},Nr=Tr,xr=Nr;var Gr=Nr;var kr=function(r){var t;return null===r?"null":"object"===(t=typeof r)?xr(r).toLowerCase():t},Dr=function(r){return Gr(r).toLowerCase()},Lr=gr()?Dr:kr;var Mr=function(r){return"function"===Lr(r)};var Rr="function"==typeof ArrayBuffer?ArrayBuffer:void 0,Xr=function(){throw new Error("not implemented")},zr=B()?Rr:Xr;var Yr=function(r){return function(){return r}}(!1);var qr=function(){};var Hr=Mr,Jr=Er.REGEXP,Kr=function(){return"foo"===qr.name}();var Qr=function(r){if(!1===Hr(r))throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return Kr?r.name:Jr.exec(r.toString())[1]},Wr=Object.getPrototypeOf;var Zr=function(r){return r.__proto__},$r=A,rt=Zr;var tt=function(r){var t=rt(r);return t||null===t?t:"[object Function]"===$r(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null},nt=Wr,et=tt,ot=Mr(Object.getPrototypeOf)?nt:et;var it=function(r){return null==r?null:(r=Object(r),ot(r))},at=A,ut="function"==typeof Int8Array;var ft="function"==typeof Int8Array?Int8Array:null,ct=function(r){return ut&&r instanceof Int8Array||"[object Int8Array]"===at(r)},yt=ft;var lt="function"==typeof Int8Array?Int8Array:void 0,pt=function(){throw new Error("not implemented")},vt=function(){var r,t;if("function"!=typeof yt)return!1;try{t=new yt([1,3.14,-3.14,128]),r=ct(t)&&1===t[0]&&3===t[1]&&-3===t[2]&&-128===t[3]}catch(t){r=!1}return r}()?lt:pt,At=A,st="function"==typeof Uint8Array;var bt="function"==typeof Uint8Array?Uint8Array:null,dt=function(r){return st&&r instanceof Uint8Array||"[object Uint8Array]"===At(r)},wt=bt;var mt="function"==typeof Uint8Array?Uint8Array:void 0,jt=function(){throw new Error("not implemented")},ht=function(){var r,t;if("function"!=typeof wt)return!1;try{t=new wt(t=[1,3.14,-3.14,256,257]),r=dt(t)&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?mt:jt,_t=A,gt="function"==typeof Uint8ClampedArray;var Ut="function"==typeof Uint8ClampedArray?Uint8ClampedArray:null,It=function(r){return gt&&r instanceof Uint8ClampedArray||"[object Uint8ClampedArray]"===_t(r)},Et=Ut;var Ot="function"==typeof Uint8ClampedArray?Uint8ClampedArray:void 0,Ft=function(){throw new Error("not implemented")},Pt=function(){var r,t;if("function"!=typeof Et)return!1;try{t=new Et([-1,0,1,3.14,4.99,255,256]),r=It(t)&&0===t[0]&&0===t[1]&&1===t[2]&&3===t[3]&&5===t[4]&&255===t[5]&&255===t[6]}catch(t){r=!1}return r}()?Ot:Ft,St=A,Bt="function"==typeof Int16Array;var Vt="function"==typeof Int16Array?Int16Array:null,Ct=function(r){return Bt&&r instanceof Int16Array||"[object Int16Array]"===St(r)},Tt=Vt;var Nt="function"==typeof Int16Array?Int16Array:void 0,xt=function(){throw new Error("not implemented")},Gt=function(){var r,t;if("function"!=typeof Tt)return!1;try{t=new Tt([1,3.14,-3.14,32768]),r=Ct(t)&&1===t[0]&&3===t[1]&&-3===t[2]&&-32768===t[3]}catch(t){r=!1}return r}()?Nt:xt,kt=A,Dt="function"==typeof Uint16Array;var Lt="function"==typeof Uint16Array?Uint16Array:null,Mt=function(r){return Dt&&r instanceof Uint16Array||"[object Uint16Array]"===kt(r)},Rt=Lt;var Xt="function"==typeof Uint16Array?Uint16Array:void 0,zt=function(){throw new Error("not implemented")},Yt=function(){var r,t;if("function"!=typeof Rt)return!1;try{t=new Rt(t=[1,3.14,-3.14,65536,65537]),r=Mt(t)&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Xt:zt,qt=A,Ht="function"==typeof Int32Array;var Jt="function"==typeof Int32Array?Int32Array:null,Kt=function(r){return Ht&&r instanceof Int32Array||"[object Int32Array]"===qt(r)},Qt=Jt;var Wt="function"==typeof Int32Array?Int32Array:void 0,Zt=function(){throw new Error("not implemented")},$t=function(){var r,t;if("function"!=typeof Qt)return!1;try{t=new Qt([1,3.14,-3.14,2147483648]),r=Kt(t)&&1===t[0]&&3===t[1]&&-3===t[2]&&-2147483648===t[3]}catch(t){r=!1}return r}()?Wt:Zt,rn=A,tn="function"==typeof Uint32Array;var nn="function"==typeof Uint32Array?Uint32Array:null,en=function(r){return tn&&r instanceof Uint32Array||"[object Uint32Array]"===rn(r)},on=nn;var an="function"==typeof Uint32Array?Uint32Array:void 0,un=function(){throw new Error("not implemented")},fn=function(){var r,t;if("function"!=typeof on)return!1;try{t=new on(t=[1,3.14,-3.14,4294967296,4294967297]),r=en(t)&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?an:un,cn=A,yn="function"==typeof Float32Array;var ln=function(r){return yn&&r instanceof Float32Array||"[object Float32Array]"===cn(r)},pn=Number.POSITIVE_INFINITY,vn="function"==typeof Float32Array?Float32Array:null,An=ln,sn=pn,bn=vn;var dn,wn="function"==typeof Float32Array?Float32Array:void 0,mn=function(){throw new Error("not implemented")};dn=function(){var r,t;if("function"!=typeof bn)return!1;try{t=new bn([1,3.14,-3.14,5e40]),r=An(t)&&1===t[0]&&3.140000104904175===t[1]&&-3.140000104904175===t[2]&&t[3]===sn}catch(t){r=!1}return r}()?wn:mn;var jn=Nr,hn=Qr,_n=it,gn=E,Un=[E,dn,$t,fn,Gt,Yt,vt,ht,Pt],In=["Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Uint16Array","Int32Array","Uint32Array","Float32Array","Float64Array"],En=g()?_n(gn):On;function On(){}En="TypedArray"===hn(En)?En:On;var Fn=function(r){var t,n;if("object"!=typeof r||null===r)return!1;if(r instanceof En)return!0;for(n=0;n<Un.length;n++)if(r instanceof Un[n])return!0;for(;r;){for(t=jn(r),n=0;n<In.length;n++)if(In[n]===t)return!0;r=_n(r)}return!1},Pn=A,Sn="function"==typeof DataView;var Bn=function(r){return Sn&&r instanceof DataView||"[object DataView]"===Pn(r)};var Vn=B()?Mr(zr.isView)?function(r){return zr.isView(r)}:function(r){return Fn(r)||Bn(r)}:Yr;export{Vn as default};
//# sourceMappingURL=mod.js.map
