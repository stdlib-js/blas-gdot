// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("path")):"function"==typeof define&&define.amd?define(["path"],e):(t="undefined"!=typeof globalThis?globalThis:t||self).gdot=e(t.require$$0)}(this,(function(t){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var r,n=Object.defineProperty,i=Object.prototype,o=i.toString,a=i.__defineGetter__,f=i.__defineSetter__,u=i.__lookupGetter__,s=i.__lookupSetter__;r=function(){try{return e({},"x",{}),!0}catch(t){return!1}}()?n:function(t,e,r){var n,c,l,p;if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((c="value"in r)&&(u.call(t,e)||s.call(t,e)?(n=t.__proto__,t.__proto__=i,delete t[e],t[e]=r.value,t.__proto__=n):t[e]=r.value),l="get"in r,p="set"in r,c&&(l||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return l&&a&&a.call(t,e,r.get),p&&f&&f.call(t,e,r.set),t};var c=r;function l(t,e,r){c(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}function p(t){return"boolean"==typeof t}var h="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function y(){return h&&"symbol"==typeof Symbol.toStringTag}var g=Object.prototype.toString;var d=Object.prototype.hasOwnProperty;function _(t,e){return null!=t&&d.call(t,e)}var b="function"==typeof Symbol?Symbol.toStringTag:"";var m=y()?function(t){var e,r,n;if(null==t)return g.call(t);r=t[b],e=_(t,b);try{t[b]=void 0}catch(e){return g.call(t)}return n=g.call(t),e?t[b]=r:delete t[b],n}:function(t){return g.call(t)},v=Boolean.prototype.toString;var w=y();function O(t){return"object"==typeof t&&(t instanceof Boolean||(w?function(t){try{return v.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===m(t)))}function j(t){return p(t)||O(t)}function A(){return new Function("return this;")()}l(j,"isPrimitive",p),l(j,"isObject",O);var E="object"==typeof self?self:null,I="object"==typeof window?window:null,S="object"==typeof global?global:null;function x(t){if(arguments.length){if(!p(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return A()}if(E)return E;if(I)return I;if(S)return S;throw new Error("unexpected error. Unable to resolve global object.")}var U=x();function T(t,e,r){c(t,e,{configurable:!1,enumerable:!1,get:r})}var N={binary:1,bool:1,complex64:8,complex128:16,float16:2,bfloat16:2,float32:4,float64:8,float128:16,generic:null,int8:1,int16:2,int32:4,int64:8,int128:16,int256:32,uint8:1,uint8c:1,uint16:2,uint32:4,uint64:8,uint128:16,uint256:32};function F(t){return Math.abs(t)}function R(t,e){return e&&(2===t||3===t)}function V(t,e){return e&&(1===t||3===t)}function B(t,e,r){var n,i,o,a,f;for(n=t.length,i=r,o=r,f=0;f<n;f++){if(0===t[f])return[r,r];(a=e[f])>0?o+=a*(t[f]-1):a<0&&(i+=a*(t[f]-1))}return[i,o]}function L(t){return t.re}function C(t){return t.im}function k(t){return"string"==typeof t}l(B,"assign",(function(t,e,r,n){var i,o,a,f,u;for(i=t.length,o=r,a=r,u=0;u<i;u++){if(0===t[u])return n[0]=r,n[1]=r,n;(f=e[u])>0?a+=f*(t[u]-1):f<0&&(o+=f*(t[u]-1))}return n[0]=o,n[1]=a,n}));var M=String.prototype.valueOf;var P=y();function D(t){return"object"==typeof t&&(t instanceof String||(P?function(t){try{return M.call(t),!0}catch(t){return!1}}(t):"[object String]"===m(t)))}function G(t){return k(t)||D(t)}function $(t){return"number"==typeof t}function Y(t){var e,r="";for(e=0;e<t;e++)r+="0";return r}function J(t,e,r){var n=!1,i=e-t.length;return i<0||(function(t){return"-"===t[0]}(t)&&(n=!0,t=t.substr(1)),t=r?t+Y(i):Y(i)+t,n&&(t="-"+t)),t}l(G,"isPrimitive",k),l(G,"isObject",D);var W=String.prototype.toLowerCase,q=String.prototype.toUpperCase;function X(t){var e,r,n;switch(t.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(r=t.arg,n=parseInt(r,10),!isFinite(n)){if(!$(r))throw new Error("invalid integer. Value: "+r);n=0}return n<0&&("u"===t.specifier||10!==e)&&(n=4294967295+n+1),n<0?(r=(-n).toString(e),t.precision&&(r=J(r,t.precision,t.padRight)),r="-"+r):(r=n.toString(e),n||t.precision?t.precision&&(r=J(r,t.precision,t.padRight)):r="",t.sign&&(r=t.sign+r)),16===e&&(t.alternate&&(r="0x"+r),r=t.specifier===q.call(t.specifier)?q.call(r):W.call(r)),8===e&&t.alternate&&"0"!==r.charAt(0)&&(r="0"+r),r}function Z(t){return"string"==typeof t}var H=Math.abs,z=String.prototype.toLowerCase,K=String.prototype.toUpperCase,Q=String.prototype.replace,tt=/e\+(\d)$/,et=/e-(\d)$/,rt=/^(\d+)$/,nt=/^(\d+)e/,it=/\.0$/,ot=/\.0*e/,at=/(\..*[^0])0*e/;function ft(t){var e,r,n=parseFloat(t.arg);if(!isFinite(n)){if(!$(t.arg))throw new Error("invalid floating-point number. Value: "+r);n=t.arg}switch(t.specifier){case"e":case"E":r=n.toExponential(t.precision);break;case"f":case"F":r=n.toFixed(t.precision);break;case"g":case"G":H(n)<1e-4?((e=t.precision)>0&&(e-=1),r=n.toExponential(e)):r=n.toPrecision(t.precision),t.alternate||(r=Q.call(r,at,"$1e"),r=Q.call(r,ot,"e"),r=Q.call(r,it,""));break;default:throw new Error("invalid double notation. Value: "+t.specifier)}return r=Q.call(r,tt,"e+0$1"),r=Q.call(r,et,"e-0$1"),t.alternate&&(r=Q.call(r,rt,"$1."),r=Q.call(r,nt,"$1.e")),n>=0&&t.sign&&(r=t.sign+r),r=t.specifier===K.call(t.specifier)?K.call(r):z.call(r)}function ut(t){var e,r="";for(e=0;e<t;e++)r+=" ";return r}function st(t,e,r){var n=e-t.length;return n<0?t:t=r?t+ut(n):ut(n)+t}var ct=String.fromCharCode,lt=isNaN,pt=Array.isArray;function ht(t){var e={};return e.specifier=t.specifier,e.precision=void 0===t.precision?1:t.precision,e.width=t.width,e.flags=t.flags||"",e.mapping=t.mapping,e}function yt(t){var e,r,n,i,o,a,f,u,s;if(!pt(t))throw new TypeError("invalid argument. First argument must be an array. Value: `"+t+"`.");for(a="",f=1,u=0;u<t.length;u++)if(Z(n=t[u]))a+=n;else{if(e=void 0!==n.precision,!(n=ht(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+n+"`.");for(n.mapping&&(f=n.mapping),r=n.flags,s=0;s<r.length;s++)switch(i=r.charAt(s)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=r.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[f],10),f+=1,lt(n.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[f],10),f+=1,lt(n.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[f],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=X(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!lt(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=lt(o)?String(n.arg):ct(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=ft(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=J(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=st(n.arg,n.width,n.padRight)),a+=n.arg||"",f+=1}return a}var gt=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function dt(t){var e={mapping:t[1]?parseInt(t[1],10):void 0,flags:t[2],width:t[3],precision:t[5],specifier:t[6]};return"."===t[4]&&void 0===t[5]&&(e.precision="1"),e}function _t(t){var e,r,n,i;for(r=[],i=0,n=gt.exec(t);n;)(e=t.slice(i,gt.lastIndex-n[0].length)).length&&r.push(e),r.push(dt(n)),i=gt.lastIndex,n=gt.exec(t);return(e=t.slice(i)).length&&r.push(e),r}function bt(t){return"string"==typeof t}function mt(t){var e,r,n;if(!bt(t))throw new TypeError(mt("invalid argument. First argument must be a string. Value: `%s`.",t));for(e=_t(t),(r=new Array(arguments.length))[0]=e,n=1;n<r.length;n++)r[n]=arguments[n];return yt.apply(null,r)}var vt=/[-\/\\^$*+?.()|[\]{}]/g;var wt=/./,Ot=x(),jt=Ot.document&&Ot.document.childNodes,At=Int8Array;function Et(){return/^\s*function\s*([^(]*)/i}var It=/^\s*function\s*([^(]*)/i;l(Et,"REGEXP",It);var St=Array.isArray?Array.isArray:function(t){return"[object Array]"===m(t)};function xt(t){return null!==t&&"object"==typeof t}function Ut(t){var e,r,n,i;if(("Object"===(r=m(t).slice(8,-1))||"Error"===r)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(e=It.exec(n.toString()))return e[1]}return xt(i=t)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":r}l(xt,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(e){var r,n;if(!St(e))return!1;if(0===(r=e.length))return!1;for(n=0;n<r;n++)if(!1===t(e[n]))return!1;return!0}}(xt));var Tt="function"==typeof wt||"object"==typeof At||"function"==typeof jt?function(t){return Ut(t).toLowerCase()}:function(t){var e;return null===t?"null":"object"===(e=typeof t)?Ut(t).toLowerCase():e};function Nt(t){return"function"===Tt(t)}var Ft=RegExp.prototype.exec;var Rt=y();function Vt(t){return"object"==typeof t&&(t instanceof RegExp||(Rt?function(t){try{return Ft.call(t),!0}catch(t){return!1}}(t):"[object RegExp]"===m(t)))}function Bt(t,e,r){if(!k(t))throw new TypeError(mt("invalid argument. First argument must be a string. Value: `%s`.",t));if(k(e))e=function(t){var e,r;if(!k(t))throw new TypeError(mt("invalid argument. Must provide a regular expression string. Value: `%s`.",t));if("/"===t[0])for(r=t.length-1;r>=0&&"/"!==t[r];r--);return void 0===r||r<=0?t.replace(vt,"\\$&"):(e=(e=t.substring(1,r)).replace(vt,"\\$&"),t=t[0]+e+t.substring(r))}(e),e=new RegExp(e,"g");else if(!Vt(e))throw new TypeError(mt("invalid argument. Second argument must be a string or regular expression. Value: `%s`.",e));if(!k(r)&&!Nt(r))throw new TypeError(mt("invalid argument. Third argument must be a string or replacement function. Value: `%s`.",r));return t.replace(e,r)}var Lt={int8:"new Int8Array( [ {{data}} ] )",uint8:"new Uint8Array( [ {{data}} ] )",uint8c:"new Uint8ClampedArray( [ {{data}} ] )",int16:"new Int16Array( [ {{data}} ] )",uint16:"new Uint16Array( [ {{data}} ] )",int32:"new Int32Array( [ {{data}} ] )",uint32:"new Uint32Array( [ {{data}} ] )",float32:"new Float32Array( [ {{data}} ] )",float64:"new Float64Array( [ {{data}} ] )",generic:"[ {{data}} ]",binary:"new Buffer( [ {{data}} ] )",complex64:"new Complex64Array( [ {{data}} ] )",complex128:"new Complex128Array( [ {{data}} ] )"};var Ct="function"==typeof Uint8Array;var kt="function"==typeof Uint8Array?Uint8Array:null;var Mt,Pt="function"==typeof Uint8Array?Uint8Array:void 0;Mt=function(){var t,e,r;if("function"!=typeof kt)return!1;try{e=new kt(e=[1,3.14,-3.14,256,257]),r=e,t=(Ct&&r instanceof Uint8Array||"[object Uint8Array]"===m(r))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){t=!1}return t}()?Pt:function(){throw new Error("not implemented")};var Dt=Mt,Gt="function"==typeof Uint16Array;var $t="function"==typeof Uint16Array?Uint16Array:null;var Yt,Jt="function"==typeof Uint16Array?Uint16Array:void 0;Yt=function(){var t,e,r;if("function"!=typeof $t)return!1;try{e=new $t(e=[1,3.14,-3.14,65536,65537]),r=e,t=(Gt&&r instanceof Uint16Array||"[object Uint16Array]"===m(r))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){t=!1}return t}()?Jt:function(){throw new Error("not implemented")};var Wt,qt={uint16:Yt,uint8:Dt};(Wt=new qt.uint16(1))[0]=4660;var Xt=52===new qt.uint8(Wt.buffer)[0],Zt="function"==typeof ArrayBuffer;var Ht="function"==typeof Float64Array;function zt(t){return Ht&&t instanceof Float64Array||"[object Float64Array]"===m(t)}var Kt="function"==typeof Float64Array?Float64Array:null;var Qt,te="function"==typeof Float64Array?Float64Array:void 0;Qt=function(){var t,e;if("function"!=typeof Kt)return!1;try{t=zt(e=new Kt([1,3.14,-3.14,NaN]))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){t=!1}return t}()?te:function(){throw new Error("not implemented")};var ee=Qt,re="function"==typeof ArrayBuffer?ArrayBuffer:null;var ne,ie="function"==typeof ArrayBuffer?ArrayBuffer:void 0;ne=function(){var t,e,r,n;if("function"!=typeof re)return!1;try{r=new re(16),n=r,(t=(Zt&&n instanceof ArrayBuffer||"[object ArrayBuffer]"===m(n))&&"function"==typeof re.isView)&&((e=new ee(r))[0]=-3.14,e[1]=NaN,t=t&&re.isView(e)&&16===r.byteLength&&-3.14===e[0]&&e[1]!=e[1])}catch(e){t=!1}return t}()?ie:function(){throw new Error("not implemented")};var oe=ne,ae="function"==typeof DataView;var fe="function"==typeof DataView?DataView:null;var ue,se="function"==typeof DataView?DataView:void 0;ue=function(){var t,e,r,n;if("function"!=typeof fe)return!1;try{r=new oe(24),e=new fe(r,8),n=e,(t=(ae&&n instanceof DataView||"[object DataView]"===m(n))&&"function"==typeof e.getFloat64&&"function"==typeof e.setFloat64)&&(e.setFloat64(0,-3.14),e.setFloat64(8,NaN),t=t&&e.buffer===r&&16===e.byteLength&&8===e.byteOffset&&-3.14===e.getFloat64(0)&&e.getFloat64(8)!=e.getFloat64(8))}catch(e){t=!1}return t}()?se:function(){throw new Error("not implemented")};var ce=ue,le="function"==typeof BigInt?BigInt:void 0,pe=["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"];function he(){return pe.slice()}function ye(){return{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256}}function ge(t,e,r){c(t,e,{configurable:!1,enumerable:!0,writable:!1,value:r})}function de(t){return Object.keys(Object(t))}var _e,be=void 0!==Object.keys;function me(t){return"[object Arguments]"===m(t)}_e=function(){return me(arguments)}();var ve=_e;function we(t){return"number"==typeof t}var Oe=Number,je=Oe.prototype.toString;var Ae=y();function Ee(t){return"object"==typeof t&&(t instanceof Oe||(Ae?function(t){try{return je.call(t),!0}catch(t){return!1}}(t):"[object Number]"===m(t)))}function Ie(t){return we(t)||Ee(t)}function Se(t){return t!=t}function xe(t){return we(t)&&Se(t)}function Ue(t){return Ee(t)&&Se(t.valueOf())}function Te(t){return xe(t)||Ue(t)}l(Ie,"isPrimitive",we),l(Ie,"isObject",Ee),l(Te,"isPrimitive",xe),l(Te,"isObject",Ue);var Ne=Number.POSITIVE_INFINITY,Fe=Oe.NEGATIVE_INFINITY,Re=Math.floor;function Ve(t){return Re(t)===t}function Be(t){return t<Ne&&t>Fe&&Ve(t)}function Le(t){return we(t)&&Be(t)}function Ce(t){return Ee(t)&&Be(t.valueOf())}function ke(t){return Le(t)||Ce(t)}l(ke,"isPrimitive",Le),l(ke,"isObject",Ce);var Me=Object.prototype.propertyIsEnumerable;var Pe=!Me.call("beep","0");function De(t,e){var r;return null!=t&&(!(r=Me.call(t,e))&&Pe&&G(t)?!xe(e=+e)&&Le(e)&&e>=0&&e<t.length:r)}var Ge=ve?me:function(t){return null!==t&&"object"==typeof t&&!St(t)&&"number"==typeof t.length&&Ve(t.length)&&t.length>=0&&t.length<=4294967295&&_(t,"callee")&&!De(t,"callee")},$e=Array.prototype.slice;var Ye=De((function(){}),"prototype"),Je=!De({toString:null},"toString");function We(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&Ve(t.length)&&t.length>=0&&t.length<=9007199254740991}function qe(t,e,r){var n,i;if(!We(t)&&!k(t))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+t+"`.");if(0===(n=t.length))return-1;if(3===arguments.length){if(!Le(r))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+r+"`.");if(r>=0){if(r>=n)return-1;i=r}else(i=n+r)<0&&(i=0)}else i=0;if(Te(e)){for(;i<n;i++)if(Te(t[i]))return i}else for(;i<n;i++)if(t[i]===e)return i;return-1}function Xe(t){return t.constructor&&t.constructor.prototype===t}var Ze=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],He="undefined"==typeof window?void 0:window;var ze=function(){var t;if("undefined"===Tt(He))return!1;for(t in He)try{-1===qe(Ze,t)&&_(He,t)&&null!==He[t]&&"object"===Tt(He[t])&&Xe(He[t])}catch(t){return!0}return!1}(),Ke="undefined"!=typeof window;var Qe,tr=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];Qe=be?function(){return 2!==(de(arguments)||"").length}(1,2)?function(t){return Ge(t)?de($e.call(t)):de(t)}:de:function(t){var e,r,n,i,o,a,f;if(i=[],Ge(t)){for(f=0;f<t.length;f++)i.push(f.toString());return i}if("string"==typeof t){if(t.length>0&&!_(t,"0"))for(f=0;f<t.length;f++)i.push(f.toString())}else{if(!1==(n="function"==typeof t)&&!xt(t))return i;r=Ye&&n}for(o in t)r&&"prototype"===o||!_(t,o)||i.push(String(o));if(Je)for(e=function(t){if(!1===Ke&&!ze)return Xe(t);try{return Xe(t)}catch(t){return!1}}(t),f=0;f<tr.length;f++)a=tr[f],e&&"constructor"===a||!_(t,a)||i.push(String(a));return i};var er=Qe;l(he,"enum",ye),function(t,e){var r,n,i;for(r=er(e),i=0;i<r.length;i++)ge(t,n=r[i],e[n])}(he,{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256});var rr=["row-major","column-major"];function nr(){return{"row-major":1,"column-major":2}}l((function(){return rr.slice()}),"enum",nr);var ir=["throw","clamp","wrap"];function or(){return{throw:1,clamp:2,wrap:3}}l((function(){return ir.slice()}),"enum",or);var ar={bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256},fr={"row-major":1,"column-major":2},ur={throw:1,clamp:2,wrap:3};var sr=new Dt(8),cr=new ce(sr.buffer);function lr(t,e,r,n){var i,o,a;if(0===t){for(a=0;a<sr.length;a++)e[n]=0,n+=r;return e}for(o=(4294967295&t)>>>0,i=Re(t/4294967296),Xt?(cr.setUint32(0,o,Xt),cr.setUint32(4,i,Xt)):(cr.setUint32(0,i,Xt),cr.setUint32(4,o,Xt)),a=0;a<sr.length;a++)e[n]=sr[a],n+=r;return e}l((function(t){var e,r,n,i;return e=new Dt(8),0===t||(i=(4294967295&t)>>>0,n=Re(t/4294967296),r=new ce(e.buffer),Xt?(r.setUint32(0,i,Xt),r.setUint32(4,n,Xt)):(r.setUint32(0,n,Xt),r.setUint32(4,i,Xt))),e}),"assign",lr);var pr={bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256},hr={"row-major":1,"column-major":2},yr={throw:1,clamp:2,wrap:3};function gr(t,e,r,n,i,o){var a,f,u,s,c;if(!(this instanceof gr))return new gr(t,e,r,n,i,o);for(s=1,c=0;c<r.length;c++)s*=r[c];return f=e.BYTES_PER_ELEMENT?e.BYTES_PER_ELEMENT*s:null,this._byteLength=f,this._bytesPerElement=function(t){return N[t]||null}(t),this._buffer=e,this._dtype=t,this._length=s,this._ndims=r.length,this._offset=i,this._order=o,this._shape=r,this._strides=n,this._accessors=Boolean(e.get&&e.set),this._iterationOrder=function(t){var e,r;for(e=0,r=0;r<t.length;r++)t[r]<0&&(e+=1);return 0===e?1:e===t.length?-1:0}(n),a=function(t,e,r,n,i){var o;return 0!==t&&0!==i&&t===(o=B(e,r,n))[1]-o[0]+1}(s,r,n,i,this._iterationOrder),u=function(t){var e,r,n,i,o,a;if(0===(r=t.length))return 0;for(e=!0,n=!0,i=F(t[0]),a=1;a<r;a++){if(o=F(t[a]),e&&o<i?e=!1:n&&o>i&&(n=!1),!n&&!e)return 0;i=o}return n&&e?3:n?1:2}(n),this._flags={ROW_MAJOR_CONTIGUOUS:V(u,a),COLUMN_MAJOR_CONTIGUOUS:R(u,a),READONLY:!1},this.__meta_dataview__=null,this}function dr(t){return t instanceof gr||null!==t&&"object"==typeof t&&"object"==typeof t.data&&"object"==typeof t.shape&&"object"==typeof t.strides&&"number"==typeof t.offset&&"string"==typeof t.order&&"number"==typeof t.ndims&&"string"==typeof t.dtype&&"number"==typeof t.length&&"object"==typeof t.flags&&"function"==typeof t.get&&"function"==typeof t.set}l(gr,"name","ndarray"),T(gr.prototype,"byteLength",(function(){return this._byteLength})),T(gr.prototype,"BYTES_PER_ELEMENT",(function(){return this._bytesPerElement})),T(gr.prototype,"data",(function(){return this._buffer})),T(gr.prototype,"dtype",(function(){return this._dtype})),T(gr.prototype,"flags",(function(){return{ROW_MAJOR_CONTIGUOUS:(t=this._flags).ROW_MAJOR_CONTIGUOUS,COLUMN_MAJOR_CONTIGUOUS:t.COLUMN_MAJOR_CONTIGUOUS,READONLY:t.READONLY};var t})),T(gr.prototype,"length",(function(){return this._length})),T(gr.prototype,"ndims",(function(){return this._ndims})),T(gr.prototype,"offset",(function(){return this._offset})),T(gr.prototype,"order",(function(){return this._order})),T(gr.prototype,"shape",(function(){return this._shape.slice()})),T(gr.prototype,"strides",(function(){return this._strides.slice()})),l(gr.prototype,"get",(function(){var t,e;for(t=this._offset,e=0;e<arguments.length;e++)t+=this._strides[e]*arguments[e];return this._accessors?this._buffer.get(t):this._buffer[t]})),l(gr.prototype,"iget",(function(t){var e,r,n,i,o,a;if(0===(n=this._ndims))return this._accessors?this._buffer.get(this._offset):this._buffer[this._offset];if(this._flags.ROW_MAJOR_CONTIGUOUS||this._flags.COLUMN_MAJOR_CONTIGUOUS){if(1===this._iterationOrder)return this._accessors?this._buffer.get(this._offset+t):this._buffer[this._offset+t];if(-1===this._iterationOrder)return this._accessors?this._buffer.get(this.offset-t):this._buffer[this._offset-t]}if(r=this._shape,e=this._strides,i=this._offset,"column-major"===this._order){for(a=0;a<n;a++)t-=o=t%r[a],t/=r[a],i+=o*e[a];return this._accessors?this._buffer.get(i):this._buffer[i]}for(a=n-1;a>=0;a--)t-=o=t%r[a],t/=r[a],i+=o*e[a];return this._accessors?this._buffer.get(i):this._buffer[i]})),l(gr.prototype,"set",(function(){var t,e;for(t=this._offset,e=0;e<arguments.length-1;e++)t+=this._strides[e]*arguments[e];return this._accessors?this._buffer.set(arguments[e],t):this._buffer[t]=arguments[e],this})),l(gr.prototype,"iset",(function(t,e){var r,n,i,o,a,f;if(0===(i=this._ndims))return this._accessors?this._buffer.set(t,this._offset):this._buffer[this._offset]=t,this;if(this._flags.ROW_MAJOR_CONTIGUOUS||this._flags.COLUMN_MAJOR_CONTIGUOUS){if(1===this._iterationOrder)return this._accessors?this._buffer.set(e,this._offset+t):this._buffer[this._offset+t]=e,this;if(-1===this._iterationOrder)return this._accessors?this._buffer.set(e,this._offset-t):this._buffer[this._offset-t]=e,this}if(n=this._shape,r=this._strides,o=this._offset,"column-major"===this._order){for(f=0;f<i;f++)t-=a=t%n[f],t/=n[f],o+=a*r[f];return this._accessors?this._buffer.set(e,o):this._buffer[o]=e,this}for(f=i-1;f>=0;f--)t-=a=t%n[f],t/=n[f],o+=a*r[f];return this._accessors?this._buffer.set(e,o):this._buffer[o]=e,this})),l(gr.prototype,"toString",(function(){var t,e,r,n,i,o;if(e=this._shape.length,r="ndarray( '"+(n=this._dtype)+"', ",t="",this._length<=100)if("complex64"===n||"complex128"===n)for(o=0;o<this._length;o++)t+=L(i=this.iget(o))+", "+C(i),o<this._length-1&&(t+=", ");else for(o=0;o<this._length;o++)t+=this.iget(o),o<this._length-1&&(t+=", ");else{if("complex64"===n||"complex128"===n)for(o=0;o<3;o++)t+=L(i=this.iget(o))+", "+C(i),o<2&&(t+=", ");else for(o=0;o<3;o++)t+=this.iget(o),o<2&&(t+=", ");if(t+=", ..., ","complex64"===n||"complex128"===n)for(o=2;o>=0;o--)t+=L(i=this.iget(this._length-1-o))+", "+C(i),o>0&&(t+=", ");else for(o=2;o>=0;o--)t+=this.iget(this._length-1-o),o>0&&(t+=", ")}if(r+=Bt(Lt[this.dtype],"{{data}}",t),r+=", ",r+=0===e?"[]":"[ "+this._shape.join(", ")+" ]",r+=", ",r+="[ ",0===e)r+="0";else for(o=0;o<e;o++)this._strides[o]<0?r+=-this._strides[o]:r+=this._strides[o],o<e-1&&(r+=", ");return r+=" ]",r+=", ",r+="0",r+=", ",r+="'"+this._order+"'",r+=" )"})),l(gr.prototype,"toJSON",(function(){var t,e,r,n;for(e=this._length,(t={}).type="ndarray",t.dtype=this.dtype,t.flags={READONLY:this._flags.READONLY},t.order=this._order,t.shape=this._shape.slice(),t.strides=this._strides.slice(),n=0;n<e;n++)t.strides[n]<0&&(t.strides[n]*=-1);if(t.data=[],"complex64"===t.dtype||"complex128"===t.dtype)for(n=0;n<e;n++)r=this.iget(n),t.data.push(L(r),C(r));else for(n=0;n<e;n++)t.data.push(this.iget(n));return t})),l(gr.prototype,"__array_meta_dataview__","function"==typeof U.BigInt&&"function"==typeof BigInt&&"bigint"==typeof U.BigInt("1")&&"bigint"==typeof BigInt("1")?function(){var t,e,r,n,i,o,a,f,u,s,c,l,p,h;if(u=this._mode||"throw",a=this._submode||[u],r=33+16*(l=this._ndims)+(p=a.length),(f=this.__meta_dataview__)&&f.byteLength===r)return f;for(f=new ce(new oe(r)),i=this._shape,o=this._strides,n=this._dtype,t=this._bytesPerElement,s=0,f.setInt8(s,Xt?1:0),s+=1,f.setInt16(s,ar[n],Xt),s+=2,f.setBigInt64(s,le(l),Xt),c=8*l,s+=8,h=0;h<l;h++)f.setBigInt64(s,le(i[h]),Xt),f.setBigInt64(s+c,le(o[h]*t),Xt),s+=8;for(s+=c,f.setBigInt64(s,le(this._offset*t),Xt),s+=8,f.setInt8(s,fr[this._order]),s+=1,f.setInt8(s,ur[u]),s+=1,f.setBigInt64(s,le(p),Xt),s+=8,h=0;h<p;h++)f.setInt8(s,ur[a[h]]),s+=1;return e=0,e|=this._flags.READONLY?4:0,f.setInt32(s,e,Xt),this.__meta_dataview__=f,f}:function(){var t,e,r,n,i,o,a,f,u,s,c,l,p,h,y;if(s=this._mode||"throw",f=this._submode||[s],n=33+16*(p=this._ndims)+(h=f.length),(u=this.__meta_dataview__)&&u.byteLength===n)return u;for(u=new ce(new oe(n)),e=new Dt(u.buffer),o=this._shape,a=this._strides,i=this._dtype,t=this._bytesPerElement,c=0,u.setInt8(c,Xt?1:0),c+=1,u.setInt16(c,pr[i],Xt),lr(p,e,1,c+=2),l=8*p,c+=8,y=0;y<p;y++)lr(o[y],e,1,c),lr(a[y]*t,e,1,c+l),c+=8;for(c+=l,lr(this._offset*t,e,1,c),c+=8,u.setInt8(c,hr[this._order]),c+=1,u.setInt8(c,yr[s]),lr(h,e,1,c+=1),c+=8,y=0;y<h;y++)u.setInt8(c,yr[f[y]]),c+=1;return r=0,r|=this._flags.READONLY?4:0,u.setInt32(c,r,Xt),this.__meta_dataview__=u,u});var _r="function"==typeof Float32Array;function br(t){return _r&&t instanceof Float32Array||"[object Float32Array]"===m(t)}function mr(){var t,e=arguments,r=e[0],n="https://stdlib.io/e/"+r+"?";for(t=1;t<e.length;t++)n+="&arg[]="+encodeURIComponent(e[t]);return n}var vr,wr=Object.getPrototypeOf;vr=Nt(Object.getPrototypeOf)?wr:function(t){var e=function(t){return t.__proto__}(t);return e||null===e?e:"[object Function]"===m(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var Or=vr;function jr(t){return null==t?null:(t=Object(t),Or(t))}function Ar(t){if("object"!=typeof t||null===t)return!1;if(t instanceof Error)return!0;for(;t;){if("[object Error]"===m(t))return!0;t=jr(t)}return!1}function Er(t){try{return function(t){throw new Error('Could not dynamically require "'+t+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}(t)}catch(t){return Ar(t)?t:"object"==typeof t?new Error(JSON.stringify(t)):new Error(t.toString())}}function Ir(t,e,r,n,i){var o,a,f,u,s;if(o=0,t<=0)return o;if(1===r&&1===i){if((u=t%5)>0)for(s=0;s<u;s++)o+=e[s]*n[s];if(t<5)return o;for(s=u;s<t;s+=5)o+=e[s]*n[s]+e[s+1]*n[s+1]+e[s+2]*n[s+2]+e[s+3]*n[s+3]+e[s+4]*n[s+4];return o}for(a=r<0?(1-t)*r:0,f=i<0?(1-t)*i:0,s=0;s<t;s++)o+=e[a]*n[f],a+=r,f+=i;return o}l(Ir,"ndarray",(function(t,e,r,n,i,o,a){var f,u,s,c,l;if(f=0,t<=0)return f;if(u=n,s=a,1===r&&1===o){if((c=t%5)>0)for(l=0;l<c;l++)f+=e[u]*i[s],u+=1,s+=1;if(t<5)return f;for(l=c;l<t;l+=5)f+=e[u]*i[s]+e[u+1]*i[s+1]+e[u+2]*i[s+2]+e[u+3]*i[s+3]+e[u+4]*i[s+4],u+=5,s+=5;return f}for(l=0;l<t;l++)f+=e[u]*i[s],u+=r,s+=o;return f}));var Sr,xr=Er((0,t.join)(__dirname,"./native.js"));Sr=Ar(xr)?Ir:xr;const{ndarray:Ur}=Sr;var Tr="function"==typeof Math.fround?Math.fround:null,Nr="function"==typeof Float32Array?Float32Array:null;var Fr,Rr="function"==typeof Float32Array?Float32Array:void 0;Fr=function(){var t,e;if("function"!=typeof Nr)return!1;try{t=br(e=new Nr([1,3.14,-3.14,5e40]))&&1===e[0]&&3.140000104904175===e[1]&&-3.140000104904175===e[2]&&e[3]===Ne}catch(e){t=!1}return t}()?Rr:function(){throw new Error("not implemented")};var Vr=new Fr(1);var Br="function"==typeof Tr?Tr:function(t){return Vr[0]=t,Vr[0]};function Lr(t,e,r,n,i){var o,a,f,u;if(o=0,t<=0)return o;for(a=r<0?(1-t)*r:0,f=i<0?(1-t)*i:0,u=0;u<t;u++)o=Br(o+Br(e[a]*n[f])),a+=r,f+=i;return o}l(Lr,"ndarray",(function(t,e,r,n,i,o,a){var f,u,s,c;if(f=0,t<=0)return f;for(u=n,s=a,c=0;c<t;c++)f=Br(f+Br(e[u]*i[s])),u+=r,s+=o;return f}));var Cr,kr=Er((0,t.join)(__dirname,"./native.js"));Cr=Ar(kr)?Lr:kr;const{ndarray:Mr}=Cr;function Pr(t,e,r,n,i,o,a){var f,u,s,c,l;if(f=0,t<=0)return f;if(u=n,s=a,1===r&&1===o){if((c=t%5)>0)for(l=0;l<c;l++)f+=e[u]*i[s],u+=1,s+=1;if(t<5)return f;for(l=c;l<t;l+=5)f+=e[u]*i[s]+e[u+1]*i[s+1]+e[u+2]*i[s+2]+e[u+3]*i[s+3]+e[u+4]*i[s+4],u+=5,s+=5;return f}for(l=0;l<t;l++)f+=e[u]*i[s],u+=r,s+=o;return f}return l((function(t,e,r,n,i){var o,a,f,u,s;if(o=0,t<=0)return o;if(1===r&&1===i){if((u=t%5)>0)for(s=0;s<u;s++)o+=e[s]*n[s];if(t<5)return o;for(s=u;s<t;s+=5)o+=e[s]*n[s]+e[s+1]*n[s+1]+e[s+2]*n[s+2]+e[s+3]*n[s+3]+e[s+4]*n[s+4];return o}for(a=r<0?(1-t)*r:0,f=i<0?(1-t)*i:0,s=0;s<t;s++)o+=e[a]*n[f],a+=r,f+=i;return o}),"ndarray",Pr),function(t,e){var r,n,i,o,a,f,u,s;if(a=dr(t),u=dr(e),f=a&&1===t.ndims&&1===t.strides.length,s=u&&1===e.ndims&&1===e.strides.length,f)n=!(r=zt(t.data))&&br(t.data);else{if(!1!==a||!We(t))throw new TypeError(mr("invalid argument. First argument must be either an array-like object or a one-dimensional ndarray. Value: `%s`.",t));n=!(r=zt(t))&&br(t)}if(s)o=!(i=zt(e.data))&&br(e.data);else{if(!1!==u||!We(e))throw new TypeError(mr("invalid argument. Second argument must be either an array-like object or a one-dimensional ndarray. Value: `%s`.",e));o=!(i=zt(e))&&br(e)}if(t.length!==e.length)throw new RangeError(mr("invalid argument. Arrays must be the same length. First argument length: `%u`. Second argument length: `%u`.",t.length,e.length));return f&&s?r&&i?Ur(t.length,t.data,t.strides[0],t.offset,e.data,e.strides[0],e.offset):n&&o?Mr(t.length,t.data,t.strides[0],t.offset,e.data,e.strides[0],e.offset):Pr(t.length,t.data,t.strides[0],t.offset,e.data,e.strides[0],e.offset):f?Pr(t.length,t.data,t.strides[0],t.offset,e,1,0):s?Pr(t.length,t,1,0,e.data,e.strides[0],e.offset):Pr(t.length,t,1,0,e,1,0)}}));
//# sourceMappingURL=index.js.map
