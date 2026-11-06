"use strict";var u=function(r,e){return function(){try{return e||r((e={exports:{}}).exports,e),e.exports}catch(v){throw (e=0, v)}};};var s=u(function(m,a){
var y=require('@stdlib/utils-constant-function/dist'),q=y(!1);a.exports=q
});var t=u(function(D,f){
var c=require('@stdlib/assert-is-typed-array/dist'),A=require('@stdlib/assert-is-dataview/dist');function p(r){return c(r)||A(r)}f.exports=p
});var o=u(function(S,n){
var w=require('@stdlib/array-buffer/dist');function B(r){return w.isView(r)}n.exports=B
});var V=require('@stdlib/assert-has-arraybuffer-support/dist'),l=require('@stdlib/assert-is-function/dist'),x=require('@stdlib/array-buffer/dist'),F=s(),b=t(),d=o(),i;V()?l(x.isView)?i=d:i=b:i=F;module.exports=i;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
