"use strict";var u=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var s=u(function(h,a){
var v=require('@stdlib/utils-constant-function/dist'),y=v(!1);a.exports=y
});var t=u(function(m,f){
var q=require('@stdlib/assert-is-typed-array/dist'),c=require('@stdlib/assert-is-dataview/dist');function A(r){return q(r)||c(r)}f.exports=A
});var o=u(function(D,n){
var p=require('@stdlib/array-buffer/dist');function w(r){return p.isView(r)}n.exports=w
});var B=require('@stdlib/assert-has-arraybuffer-support/dist'),V=require('@stdlib/assert-is-function/dist'),l=require('@stdlib/array-buffer/dist'),x=s(),F=t(),b=o(),i;B()?V(l.isView)?i=b:i=F:i=x;module.exports=i;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
