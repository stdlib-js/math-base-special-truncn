"use strict";var N=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var E=N(function(P,f){
var t=require('@stdlib/math-base-assert-is-nan/dist'),a=require('@stdlib/math-base-assert-is-infinite/dist'),v=require('@stdlib/math-base-special-pow/dist'),_=require('@stdlib/math-base-special-abs/dist'),n=require('@stdlib/math-base-special-trunc/dist'),M=require('@stdlib/constants-float64-max-safe-integer/dist'),q=require('@stdlib/constants-float64-max-base10-exponent/dist'),X=require('@stdlib/constants-float64-min-base10-exponent/dist'),c=require('@stdlib/constants-float64-min-base10-exponent-subnormal/dist'),A=M+1,s=1e308;function I(e,r){var i,u;return t(e)||t(r)||a(r)?NaN:a(e)||e===0||r<c||_(e)>A&&r<=0?e:r>q?0*e:r<X?(i=v(10,-(r+q)),u=e*s*i,a(u)?e:n(u)/s/i):(i=v(10,-r),u=e*i,a(u)?e:n(u)/i)}f.exports=I
});var o=E();module.exports=o;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
