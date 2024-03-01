// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-ndarray-like@v0.2.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-collection@v0.2.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-float64array@v0.2.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-float32array@v0.2.1-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.1-esm/index.mjs";import{ndarray as i}from"https://cdn.jsdelivr.net/gh/stdlib-js/blas-base-ddot@v0.2.1-esm/index.mjs";import{ndarray as a}from"https://cdn.jsdelivr.net/gh/stdlib-js/blas-base-sdot@v0.2.1-esm/index.mjs";import{ndarray as n}from"https://cdn.jsdelivr.net/gh/stdlib-js/blas-base-gdot@v0.2.1-esm/index.mjs";function o(o,l){var m,f,h,j,g,p,v,b;if(g=s(o),v=s(l),p=g&&1===o.ndims&&1===o.strides.length,b=v&&1===l.ndims&&1===l.strides.length,p)f=!(m=e(o.data))&&r(o.data);else{if(!1!==g||!t(o))throw new TypeError(d("0G53T",o));f=!(m=e(o))&&r(o)}if(b)j=!(h=e(l.data))&&r(l.data);else{if(!1!==v||!t(l))throw new TypeError(d("0G53U",l));j=!(h=e(l))&&r(l)}if(o.length!==l.length)throw new RangeError(d("0G53S",o.length,l.length));return p&&b?m&&h?i(o.length,o.data,o.strides[0],o.offset,l.data,l.strides[0],l.offset):f&&j?a(o.length,o.data,o.strides[0],o.offset,l.data,l.strides[0],l.offset):n(o.length,o.data,o.strides[0],o.offset,l.data,l.strides[0],l.offset):p?n(o.length,o.data,o.strides[0],o.offset,l,1,0):b?n(o.length,o,1,0,l.data,l.strides[0],l.offset):n(o.length,o,1,0,l,1,0)}export{o as default};
//# sourceMappingURL=index.mjs.map
