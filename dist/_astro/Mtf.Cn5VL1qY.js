import{r as j}from"./index.BL7xzsR_.js";var re={exports:{}},M={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var we;function st(){if(we)return M;we=1;var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(r,s,o){var i=null;if(o!==void 0&&(i=""+o),s.key!==void 0&&(i=""+s.key),"key"in s){o={};for(var c in s)c!=="key"&&(o[c]=s[c])}else o=s;return s=o.ref,{$$typeof:e,type:r,key:i,ref:s!==void 0?s:null,props:o}}return M.Fragment=t,M.jsx=n,M.jsxs=n,M}var ge;function ot(){return ge||(ge=1,re.exports=st()),re.exports}var O=ot();function je(e,t){return function(){return e.apply(t,arguments)}}const{toString:it}=Object.prototype,{getPrototypeOf:he}=Object,Y=(e=>t=>{const n=it.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),_=e=>(e=e.toLowerCase(),t=>Y(t)===e),Q=e=>t=>typeof t===e,{isArray:q}=Array,v=Q("undefined");function at(e){return e!==null&&!v(e)&&e.constructor!==null&&!v(e.constructor)&&N(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Ue=_("ArrayBuffer");function ct(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Ue(e.buffer),t}const lt=Q("string"),N=Q("function"),Be=Q("number"),Z=e=>e!==null&&typeof e=="object",ut=e=>e===!0||e===!1,V=e=>{if(Y(e)!=="object")return!1;const t=he(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},ft=_("Date"),dt=_("File"),pt=_("Blob"),ht=_("FileList"),mt=e=>Z(e)&&N(e.pipe),yt=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||N(e.append)&&((t=Y(e))==="formdata"||t==="object"&&N(e.toString)&&e.toString()==="[object FormData]"))},bt=_("URLSearchParams"),[wt,gt,Rt,Et]=["ReadableStream","Request","Response","Headers"].map(_),St=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function z(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,s;if(typeof e!="object"&&(e=[e]),q(e))for(r=0,s=e.length;r<s;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),i=o.length;let c;for(r=0;r<i;r++)c=o[r],t.call(null,e[c],c,e)}}function ke(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,s;for(;r-- >0;)if(s=n[r],t===s.toLowerCase())return s;return null}const U=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,qe=e=>!v(e)&&e!==U;function ce(){const{caseless:e}=qe(this)&&this||{},t={},n=(r,s)=>{const o=e&&ke(t,s)||s;V(t[o])&&V(r)?t[o]=ce(t[o],r):V(r)?t[o]=ce({},r):q(r)?t[o]=r.slice():t[o]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&z(arguments[r],n);return t}const xt=(e,t,n,{allOwnKeys:r}={})=>(z(t,(s,o)=>{n&&N(s)?e[o]=je(s,n):e[o]=s},{allOwnKeys:r}),e),Tt=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),Ot=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},At=(e,t,n,r)=>{let s,o,i;const c={};if(t=t||{},e==null)return t;do{for(s=Object.getOwnPropertyNames(e),o=s.length;o-- >0;)i=s[o],(!r||r(i,e,t))&&!c[i]&&(t[i]=e[i],c[i]=!0);e=n!==!1&&he(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},Ct=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},Nt=e=>{if(!e)return null;if(q(e))return e;let t=e.length;if(!Be(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},Pt=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&he(Uint8Array)),Ft=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let s;for(;(s=r.next())&&!s.done;){const o=s.value;t.call(e,o[0],o[1])}},_t=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},Dt=_("HTMLFormElement"),Lt=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),Re=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),jt=_("RegExp"),Ie=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};z(n,(s,o)=>{let i;(i=t(s,o,e))!==!1&&(r[o]=i||s)}),Object.defineProperties(e,r)},Ut=e=>{Ie(e,(t,n)=>{if(N(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(N(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},Bt=(e,t)=>{const n={},r=s=>{s.forEach(o=>{n[o]=!0})};return q(e)?r(e):r(String(e).split(t)),n},kt=()=>{},qt=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t,se="abcdefghijklmnopqrstuvwxyz",Ee="0123456789",Me={DIGIT:Ee,ALPHA:se,ALPHA_DIGIT:se+se.toUpperCase()+Ee},It=(e=16,t=Me.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function Mt(e){return!!(e&&N(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const Ht=e=>{const t=new Array(10),n=(r,s)=>{if(Z(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[s]=r;const o=q(r)?[]:{};return z(r,(i,c)=>{const d=n(i,s+1);!v(d)&&(o[c]=d)}),t[s]=void 0,o}}return r};return n(e,0)},vt=_("AsyncFunction"),zt=e=>e&&(Z(e)||N(e))&&N(e.then)&&N(e.catch),He=((e,t)=>e?setImmediate:t?((n,r)=>(U.addEventListener("message",({source:s,data:o})=>{s===U&&o===n&&r.length&&r.shift()()},!1),s=>{r.push(s),U.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",N(U.postMessage)),Jt=typeof queueMicrotask<"u"?queueMicrotask.bind(U):typeof process<"u"&&process.nextTick||He,a={isArray:q,isArrayBuffer:Ue,isBuffer:at,isFormData:yt,isArrayBufferView:ct,isString:lt,isNumber:Be,isBoolean:ut,isObject:Z,isPlainObject:V,isReadableStream:wt,isRequest:gt,isResponse:Rt,isHeaders:Et,isUndefined:v,isDate:ft,isFile:dt,isBlob:pt,isRegExp:jt,isFunction:N,isStream:mt,isURLSearchParams:bt,isTypedArray:Pt,isFileList:ht,forEach:z,merge:ce,extend:xt,trim:St,stripBOM:Tt,inherits:Ot,toFlatObject:At,kindOf:Y,kindOfTest:_,endsWith:Ct,toArray:Nt,forEachEntry:Ft,matchAll:_t,isHTMLForm:Dt,hasOwnProperty:Re,hasOwnProp:Re,reduceDescriptors:Ie,freezeMethods:Ut,toObjectSet:Bt,toCamelCase:Lt,noop:kt,toFiniteNumber:qt,findKey:ke,global:U,isContextDefined:qe,ALPHABET:Me,generateString:It,isSpecCompliantForm:Mt,toJSONObject:Ht,isAsyncFn:vt,isThenable:zt,setImmediate:He,asap:Jt};function y(e,t,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s,this.status=s.status?s.status:null)}a.inherits(y,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:a.toJSONObject(this.config),code:this.code,status:this.status}}});const ve=y.prototype,ze={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{ze[e]={value:e}});Object.defineProperties(y,ze);Object.defineProperty(ve,"isAxiosError",{value:!0});y.from=(e,t,n,r,s,o)=>{const i=Object.create(ve);return a.toFlatObject(e,i,function(d){return d!==Error.prototype},c=>c!=="isAxiosError"),y.call(i,e.message,t,n,r,s),i.cause=e,i.name=e.name,o&&Object.assign(i,o),i};const $t=null;function le(e){return a.isPlainObject(e)||a.isArray(e)}function Je(e){return a.endsWith(e,"[]")?e.slice(0,-2):e}function Se(e,t,n){return e?e.concat(t).map(function(s,o){return s=Je(s),!n&&o?"["+s+"]":s}).join(n?".":""):t}function Vt(e){return a.isArray(e)&&!e.some(le)}const Wt=a.toFlatObject(a,{},null,function(t){return/^is[A-Z]/.test(t)});function ee(e,t,n){if(!a.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=a.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(m,h){return!a.isUndefined(h[m])});const r=n.metaTokens,s=n.visitor||u,o=n.dots,i=n.indexes,d=(n.Blob||typeof Blob<"u"&&Blob)&&a.isSpecCompliantForm(t);if(!a.isFunction(s))throw new TypeError("visitor must be a function");function l(p){if(p===null)return"";if(a.isDate(p))return p.toISOString();if(!d&&a.isBlob(p))throw new y("Blob is not supported. Use a Buffer instead.");return a.isArrayBuffer(p)||a.isTypedArray(p)?d&&typeof Blob=="function"?new Blob([p]):Buffer.from(p):p}function u(p,m,h){let R=p;if(p&&!h&&typeof p=="object"){if(a.endsWith(m,"{}"))m=r?m:m.slice(0,-2),p=JSON.stringify(p);else if(a.isArray(p)&&Vt(p)||(a.isFileList(p)||a.endsWith(m,"[]"))&&(R=a.toArray(p)))return m=Je(m),R.forEach(function(x,P){!(a.isUndefined(x)||x===null)&&t.append(i===!0?Se([m],P,o):i===null?m:m+"[]",l(x))}),!1}return le(p)?!0:(t.append(Se(h,m,o),l(p)),!1)}const f=[],b=Object.assign(Wt,{defaultVisitor:u,convertValue:l,isVisitable:le});function E(p,m){if(!a.isUndefined(p)){if(f.indexOf(p)!==-1)throw Error("Circular reference detected in "+m.join("."));f.push(p),a.forEach(p,function(R,S){(!(a.isUndefined(R)||R===null)&&s.call(t,R,a.isString(S)?S.trim():S,m,b))===!0&&E(R,m?m.concat(S):[S])}),f.pop()}}if(!a.isObject(e))throw new TypeError("data must be an object");return E(e),t}function xe(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function me(e,t){this._pairs=[],e&&ee(e,this,t)}const $e=me.prototype;$e.append=function(t,n){this._pairs.push([t,n])};$e.toString=function(t){const n=t?function(r){return t.call(this,r,xe)}:xe;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function Kt(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Ve(e,t,n){if(!t)return e;const r=n&&n.encode||Kt;a.isFunction(n)&&(n={serialize:n});const s=n&&n.serialize;let o;if(s?o=s(t,n):o=a.isURLSearchParams(t)?t.toString():new me(t,n).toString(r),o){const i=e.indexOf("#");i!==-1&&(e=e.slice(0,i)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class Te{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){a.forEach(this.handlers,function(r){r!==null&&t(r)})}}const We={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Xt=typeof URLSearchParams<"u"?URLSearchParams:me,Gt=typeof FormData<"u"?FormData:null,Yt=typeof Blob<"u"?Blob:null,Qt={isBrowser:!0,classes:{URLSearchParams:Xt,FormData:Gt,Blob:Yt},protocols:["http","https","file","blob","url","data"]},ye=typeof window<"u"&&typeof document<"u",ue=typeof navigator=="object"&&navigator||void 0,Zt=ye&&(!ue||["ReactNative","NativeScript","NS"].indexOf(ue.product)<0),en=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",tn=ye&&window.location.href||"http://localhost",nn=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:ye,hasStandardBrowserEnv:Zt,hasStandardBrowserWebWorkerEnv:en,navigator:ue,origin:tn},Symbol.toStringTag,{value:"Module"})),A={...nn,...Qt};function rn(e,t){return ee(e,new A.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,o){return A.isNode&&a.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function sn(e){return a.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function on(e){const t={},n=Object.keys(e);let r;const s=n.length;let o;for(r=0;r<s;r++)o=n[r],t[o]=e[o];return t}function Ke(e){function t(n,r,s,o){let i=n[o++];if(i==="__proto__")return!0;const c=Number.isFinite(+i),d=o>=n.length;return i=!i&&a.isArray(s)?s.length:i,d?(a.hasOwnProp(s,i)?s[i]=[s[i],r]:s[i]=r,!c):((!s[i]||!a.isObject(s[i]))&&(s[i]=[]),t(n,r,s[i],o)&&a.isArray(s[i])&&(s[i]=on(s[i])),!c)}if(a.isFormData(e)&&a.isFunction(e.entries)){const n={};return a.forEachEntry(e,(r,s)=>{t(sn(r),s,n,0)}),n}return null}function an(e,t,n){if(a.isString(e))try{return(t||JSON.parse)(e),a.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(0,JSON.stringify)(e)}const J={transitional:We,adapter:["xhr","http","fetch"],transformRequest:[function(t,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,o=a.isObject(t);if(o&&a.isHTMLForm(t)&&(t=new FormData(t)),a.isFormData(t))return s?JSON.stringify(Ke(t)):t;if(a.isArrayBuffer(t)||a.isBuffer(t)||a.isStream(t)||a.isFile(t)||a.isBlob(t)||a.isReadableStream(t))return t;if(a.isArrayBufferView(t))return t.buffer;if(a.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let c;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return rn(t,this.formSerializer).toString();if((c=a.isFileList(t))||r.indexOf("multipart/form-data")>-1){const d=this.env&&this.env.FormData;return ee(c?{"files[]":t}:t,d&&new d,this.formSerializer)}}return o||s?(n.setContentType("application/json",!1),an(t)):t}],transformResponse:[function(t){const n=this.transitional||J.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(a.isResponse(t)||a.isReadableStream(t))return t;if(t&&a.isString(t)&&(r&&!this.responseType||s)){const i=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(t)}catch(c){if(i)throw c.name==="SyntaxError"?y.from(c,y.ERR_BAD_RESPONSE,this,null,this.response):c}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:A.classes.FormData,Blob:A.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};a.forEach(["delete","get","head","post","put","patch"],e=>{J.headers[e]={}});const cn=a.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),ln=e=>{const t={};let n,r,s;return e&&e.split(`
`).forEach(function(i){s=i.indexOf(":"),n=i.substring(0,s).trim().toLowerCase(),r=i.substring(s+1).trim(),!(!n||t[n]&&cn[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},Oe=Symbol("internals");function H(e){return e&&String(e).trim().toLowerCase()}function W(e){return e===!1||e==null?e:a.isArray(e)?e.map(W):String(e)}function un(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const fn=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function oe(e,t,n,r,s){if(a.isFunction(r))return r.call(this,t,n);if(s&&(t=n),!!a.isString(t)){if(a.isString(r))return t.indexOf(r)!==-1;if(a.isRegExp(r))return r.test(t)}}function dn(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function pn(e,t){const n=a.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(s,o,i){return this[r].call(this,t,s,o,i)},configurable:!0})})}class C{constructor(t){t&&this.set(t)}set(t,n,r){const s=this;function o(c,d,l){const u=H(d);if(!u)throw new Error("header name must be a non-empty string");const f=a.findKey(s,u);(!f||s[f]===void 0||l===!0||l===void 0&&s[f]!==!1)&&(s[f||d]=W(c))}const i=(c,d)=>a.forEach(c,(l,u)=>o(l,u,d));if(a.isPlainObject(t)||t instanceof this.constructor)i(t,n);else if(a.isString(t)&&(t=t.trim())&&!fn(t))i(ln(t),n);else if(a.isHeaders(t))for(const[c,d]of t.entries())o(d,c,r);else t!=null&&o(n,t,r);return this}get(t,n){if(t=H(t),t){const r=a.findKey(this,t);if(r){const s=this[r];if(!n)return s;if(n===!0)return un(s);if(a.isFunction(n))return n.call(this,s,r);if(a.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=H(t),t){const r=a.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||oe(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let s=!1;function o(i){if(i=H(i),i){const c=a.findKey(r,i);c&&(!n||oe(r,r[c],c,n))&&(delete r[c],s=!0)}}return a.isArray(t)?t.forEach(o):o(t),s}clear(t){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const o=n[r];(!t||oe(this,this[o],o,t,!0))&&(delete this[o],s=!0)}return s}normalize(t){const n=this,r={};return a.forEach(this,(s,o)=>{const i=a.findKey(r,o);if(i){n[i]=W(s),delete n[o];return}const c=t?dn(o):String(o).trim();c!==o&&delete n[o],n[c]=W(s),r[c]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return a.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=t&&a.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(s=>r.set(s)),r}static accessor(t){const r=(this[Oe]=this[Oe]={accessors:{}}).accessors,s=this.prototype;function o(i){const c=H(i);r[c]||(pn(s,i),r[c]=!0)}return a.isArray(t)?t.forEach(o):o(t),this}}C.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);a.reduceDescriptors(C.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});a.freezeMethods(C);function ie(e,t){const n=this||J,r=t||n,s=C.from(r.headers);let o=r.data;return a.forEach(e,function(c){o=c.call(n,o,s.normalize(),t?t.status:void 0)}),s.normalize(),o}function Xe(e){return!!(e&&e.__CANCEL__)}function I(e,t,n){y.call(this,e??"canceled",y.ERR_CANCELED,t,n),this.name="CanceledError"}a.inherits(I,y,{__CANCEL__:!0});function Ge(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new y("Request failed with status code "+n.status,[y.ERR_BAD_REQUEST,y.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function hn(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function mn(e,t){e=e||10;const n=new Array(e),r=new Array(e);let s=0,o=0,i;return t=t!==void 0?t:1e3,function(d){const l=Date.now(),u=r[o];i||(i=l),n[s]=d,r[s]=l;let f=o,b=0;for(;f!==s;)b+=n[f++],f=f%e;if(s=(s+1)%e,s===o&&(o=(o+1)%e),l-i<t)return;const E=u&&l-u;return E?Math.round(b*1e3/E):void 0}}function yn(e,t){let n=0,r=1e3/t,s,o;const i=(l,u=Date.now())=>{n=u,s=null,o&&(clearTimeout(o),o=null),e.apply(null,l)};return[(...l)=>{const u=Date.now(),f=u-n;f>=r?i(l,u):(s=l,o||(o=setTimeout(()=>{o=null,i(s)},r-f)))},()=>s&&i(s)]}const X=(e,t,n=3)=>{let r=0;const s=mn(50,250);return yn(o=>{const i=o.loaded,c=o.lengthComputable?o.total:void 0,d=i-r,l=s(d),u=i<=c;r=i;const f={loaded:i,total:c,progress:c?i/c:void 0,bytes:d,rate:l||void 0,estimated:l&&c&&u?(c-i)/l:void 0,event:o,lengthComputable:c!=null,[t?"download":"upload"]:!0};e(f)},n)},Ae=(e,t)=>{const n=e!=null;return[r=>t[0]({lengthComputable:n,total:e,loaded:r}),t[1]]},Ce=e=>(...t)=>a.asap(()=>e(...t)),bn=A.hasStandardBrowserEnv?((e,t)=>n=>(n=new URL(n,A.origin),e.protocol===n.protocol&&e.host===n.host&&(t||e.port===n.port)))(new URL(A.origin),A.navigator&&/(msie|trident)/i.test(A.navigator.userAgent)):()=>!0,wn=A.hasStandardBrowserEnv?{write(e,t,n,r,s,o){const i=[e+"="+encodeURIComponent(t)];a.isNumber(n)&&i.push("expires="+new Date(n).toGMTString()),a.isString(r)&&i.push("path="+r),a.isString(s)&&i.push("domain="+s),o===!0&&i.push("secure"),document.cookie=i.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function gn(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function Rn(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function Ye(e,t){return e&&!gn(t)?Rn(e,t):t}const Ne=e=>e instanceof C?{...e}:e;function k(e,t){t=t||{};const n={};function r(l,u,f,b){return a.isPlainObject(l)&&a.isPlainObject(u)?a.merge.call({caseless:b},l,u):a.isPlainObject(u)?a.merge({},u):a.isArray(u)?u.slice():u}function s(l,u,f,b){if(a.isUndefined(u)){if(!a.isUndefined(l))return r(void 0,l,f,b)}else return r(l,u,f,b)}function o(l,u){if(!a.isUndefined(u))return r(void 0,u)}function i(l,u){if(a.isUndefined(u)){if(!a.isUndefined(l))return r(void 0,l)}else return r(void 0,u)}function c(l,u,f){if(f in t)return r(l,u);if(f in e)return r(void 0,l)}const d={url:o,method:o,data:o,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,withXSRFToken:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:c,headers:(l,u,f)=>s(Ne(l),Ne(u),f,!0)};return a.forEach(Object.keys(Object.assign({},e,t)),function(u){const f=d[u]||s,b=f(e[u],t[u],u);a.isUndefined(b)&&f!==c||(n[u]=b)}),n}const Qe=e=>{const t=k({},e);let{data:n,withXSRFToken:r,xsrfHeaderName:s,xsrfCookieName:o,headers:i,auth:c}=t;t.headers=i=C.from(i),t.url=Ve(Ye(t.baseURL,t.url),e.params,e.paramsSerializer),c&&i.set("Authorization","Basic "+btoa((c.username||"")+":"+(c.password?unescape(encodeURIComponent(c.password)):"")));let d;if(a.isFormData(n)){if(A.hasStandardBrowserEnv||A.hasStandardBrowserWebWorkerEnv)i.setContentType(void 0);else if((d=i.getContentType())!==!1){const[l,...u]=d?d.split(";").map(f=>f.trim()).filter(Boolean):[];i.setContentType([l||"multipart/form-data",...u].join("; "))}}if(A.hasStandardBrowserEnv&&(r&&a.isFunction(r)&&(r=r(t)),r||r!==!1&&bn(t.url))){const l=s&&o&&wn.read(o);l&&i.set(s,l)}return t},En=typeof XMLHttpRequest<"u",Sn=En&&function(e){return new Promise(function(n,r){const s=Qe(e);let o=s.data;const i=C.from(s.headers).normalize();let{responseType:c,onUploadProgress:d,onDownloadProgress:l}=s,u,f,b,E,p;function m(){E&&E(),p&&p(),s.cancelToken&&s.cancelToken.unsubscribe(u),s.signal&&s.signal.removeEventListener("abort",u)}let h=new XMLHttpRequest;h.open(s.method.toUpperCase(),s.url,!0),h.timeout=s.timeout;function R(){if(!h)return;const x=C.from("getAllResponseHeaders"in h&&h.getAllResponseHeaders()),w={data:!c||c==="text"||c==="json"?h.responseText:h.response,status:h.status,statusText:h.statusText,headers:x,config:e,request:h};Ge(function(F){n(F),m()},function(F){r(F),m()},w),h=null}"onloadend"in h?h.onloadend=R:h.onreadystatechange=function(){!h||h.readyState!==4||h.status===0&&!(h.responseURL&&h.responseURL.indexOf("file:")===0)||setTimeout(R)},h.onabort=function(){h&&(r(new y("Request aborted",y.ECONNABORTED,e,h)),h=null)},h.onerror=function(){r(new y("Network Error",y.ERR_NETWORK,e,h)),h=null},h.ontimeout=function(){let P=s.timeout?"timeout of "+s.timeout+"ms exceeded":"timeout exceeded";const w=s.transitional||We;s.timeoutErrorMessage&&(P=s.timeoutErrorMessage),r(new y(P,w.clarifyTimeoutError?y.ETIMEDOUT:y.ECONNABORTED,e,h)),h=null},o===void 0&&i.setContentType(null),"setRequestHeader"in h&&a.forEach(i.toJSON(),function(P,w){h.setRequestHeader(w,P)}),a.isUndefined(s.withCredentials)||(h.withCredentials=!!s.withCredentials),c&&c!=="json"&&(h.responseType=s.responseType),l&&([b,p]=X(l,!0),h.addEventListener("progress",b)),d&&h.upload&&([f,E]=X(d),h.upload.addEventListener("progress",f),h.upload.addEventListener("loadend",E)),(s.cancelToken||s.signal)&&(u=x=>{h&&(r(!x||x.type?new I(null,e,h):x),h.abort(),h=null)},s.cancelToken&&s.cancelToken.subscribe(u),s.signal&&(s.signal.aborted?u():s.signal.addEventListener("abort",u)));const S=hn(s.url);if(S&&A.protocols.indexOf(S)===-1){r(new y("Unsupported protocol "+S+":",y.ERR_BAD_REQUEST,e));return}h.send(o||null)})},xn=(e,t)=>{const{length:n}=e=e?e.filter(Boolean):[];if(t||n){let r=new AbortController,s;const o=function(l){if(!s){s=!0,c();const u=l instanceof Error?l:this.reason;r.abort(u instanceof y?u:new I(u instanceof Error?u.message:u))}};let i=t&&setTimeout(()=>{i=null,o(new y(`timeout ${t} of ms exceeded`,y.ETIMEDOUT))},t);const c=()=>{e&&(i&&clearTimeout(i),i=null,e.forEach(l=>{l.unsubscribe?l.unsubscribe(o):l.removeEventListener("abort",o)}),e=null)};e.forEach(l=>l.addEventListener("abort",o));const{signal:d}=r;return d.unsubscribe=()=>a.asap(c),d}},Tn=function*(e,t){let n=e.byteLength;if(n<t){yield e;return}let r=0,s;for(;r<n;)s=r+t,yield e.slice(r,s),r=s},On=async function*(e,t){for await(const n of An(e))yield*Tn(n,t)},An=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}const t=e.getReader();try{for(;;){const{done:n,value:r}=await t.read();if(n)break;yield r}}finally{await t.cancel()}},Pe=(e,t,n,r)=>{const s=On(e,t);let o=0,i,c=d=>{i||(i=!0,r&&r(d))};return new ReadableStream({async pull(d){try{const{done:l,value:u}=await s.next();if(l){c(),d.close();return}let f=u.byteLength;if(n){let b=o+=f;n(b)}d.enqueue(new Uint8Array(u))}catch(l){throw c(l),l}},cancel(d){return c(d),s.return()}},{highWaterMark:2})},te=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",Ze=te&&typeof ReadableStream=="function",Cn=te&&(typeof TextEncoder=="function"?(e=>t=>e.encode(t))(new TextEncoder):async e=>new Uint8Array(await new Response(e).arrayBuffer())),et=(e,...t)=>{try{return!!e(...t)}catch{return!1}},Nn=Ze&&et(()=>{let e=!1;const t=new Request(A.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!t}),Fe=64*1024,fe=Ze&&et(()=>a.isReadableStream(new Response("").body)),G={stream:fe&&(e=>e.body)};te&&(e=>{["text","arrayBuffer","blob","formData","stream"].forEach(t=>{!G[t]&&(G[t]=a.isFunction(e[t])?n=>n[t]():(n,r)=>{throw new y(`Response type '${t}' is not supported`,y.ERR_NOT_SUPPORT,r)})})})(new Response);const Pn=async e=>{if(e==null)return 0;if(a.isBlob(e))return e.size;if(a.isSpecCompliantForm(e))return(await new Request(A.origin,{method:"POST",body:e}).arrayBuffer()).byteLength;if(a.isArrayBufferView(e)||a.isArrayBuffer(e))return e.byteLength;if(a.isURLSearchParams(e)&&(e=e+""),a.isString(e))return(await Cn(e)).byteLength},Fn=async(e,t)=>{const n=a.toFiniteNumber(e.getContentLength());return n??Pn(t)},_n=te&&(async e=>{let{url:t,method:n,data:r,signal:s,cancelToken:o,timeout:i,onDownloadProgress:c,onUploadProgress:d,responseType:l,headers:u,withCredentials:f="same-origin",fetchOptions:b}=Qe(e);l=l?(l+"").toLowerCase():"text";let E=xn([s,o&&o.toAbortSignal()],i),p;const m=E&&E.unsubscribe&&(()=>{E.unsubscribe()});let h;try{if(d&&Nn&&n!=="get"&&n!=="head"&&(h=await Fn(u,r))!==0){let w=new Request(t,{method:"POST",body:r,duplex:"half"}),g;if(a.isFormData(r)&&(g=w.headers.get("content-type"))&&u.setContentType(g),w.body){const[F,L]=Ae(h,X(Ce(d)));r=Pe(w.body,Fe,F,L)}}a.isString(f)||(f=f?"include":"omit");const R="credentials"in Request.prototype;p=new Request(t,{...b,signal:E,method:n.toUpperCase(),headers:u.normalize().toJSON(),body:r,duplex:"half",credentials:R?f:void 0});let S=await fetch(p);const x=fe&&(l==="stream"||l==="response");if(fe&&(c||x&&m)){const w={};["status","statusText","headers"].forEach($=>{w[$]=S[$]});const g=a.toFiniteNumber(S.headers.get("content-length")),[F,L]=c&&Ae(g,X(Ce(c),!0))||[];S=new Response(Pe(S.body,Fe,F,()=>{L&&L(),m&&m()}),w)}l=l||"text";let P=await G[a.findKey(G,l)||"text"](S,e);return!x&&m&&m(),await new Promise((w,g)=>{Ge(w,g,{data:P,headers:C.from(S.headers),status:S.status,statusText:S.statusText,config:e,request:p})})}catch(R){throw m&&m(),R&&R.name==="TypeError"&&/fetch/i.test(R.message)?Object.assign(new y("Network Error",y.ERR_NETWORK,e,p),{cause:R.cause||R}):y.from(R,R&&R.code,e,p)}}),de={http:$t,xhr:Sn,fetch:_n};a.forEach(de,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const _e=e=>`- ${e}`,Dn=e=>a.isFunction(e)||e===null||e===!1,tt={getAdapter:e=>{e=a.isArray(e)?e:[e];const{length:t}=e;let n,r;const s={};for(let o=0;o<t;o++){n=e[o];let i;if(r=n,!Dn(n)&&(r=de[(i=String(n)).toLowerCase()],r===void 0))throw new y(`Unknown adapter '${i}'`);if(r)break;s[i||"#"+o]=r}if(!r){const o=Object.entries(s).map(([c,d])=>`adapter ${c} `+(d===!1?"is not supported by the environment":"is not available in the build"));let i=t?o.length>1?`since :
`+o.map(_e).join(`
`):" "+_e(o[0]):"as no adapter specified";throw new y("There is no suitable adapter to dispatch the request "+i,"ERR_NOT_SUPPORT")}return r},adapters:de};function ae(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new I(null,e)}function De(e){return ae(e),e.headers=C.from(e.headers),e.data=ie.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),tt.getAdapter(e.adapter||J.adapter)(e).then(function(r){return ae(e),r.data=ie.call(e,e.transformResponse,r),r.headers=C.from(r.headers),r},function(r){return Xe(r)||(ae(e),r&&r.response&&(r.response.data=ie.call(e,e.transformResponse,r.response),r.response.headers=C.from(r.response.headers))),Promise.reject(r)})}const nt="1.7.9",ne={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{ne[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const Le={};ne.transitional=function(t,n,r){function s(o,i){return"[Axios v"+nt+"] Transitional option '"+o+"'"+i+(r?". "+r:"")}return(o,i,c)=>{if(t===!1)throw new y(s(i," has been removed"+(n?" in "+n:"")),y.ERR_DEPRECATED);return n&&!Le[i]&&(Le[i]=!0,console.warn(s(i," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,i,c):!0}};ne.spelling=function(t){return(n,r)=>(console.warn(`${r} is likely a misspelling of ${t}`),!0)};function Ln(e,t,n){if(typeof e!="object")throw new y("options must be an object",y.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let s=r.length;for(;s-- >0;){const o=r[s],i=t[o];if(i){const c=e[o],d=c===void 0||i(c,o,e);if(d!==!0)throw new y("option "+o+" must be "+d,y.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new y("Unknown option "+o,y.ERR_BAD_OPTION)}}const K={assertOptions:Ln,validators:ne},D=K.validators;class B{constructor(t){this.defaults=t,this.interceptors={request:new Te,response:new Te}}async request(t,n){try{return await this._request(t,n)}catch(r){if(r instanceof Error){let s={};Error.captureStackTrace?Error.captureStackTrace(s):s=new Error;const o=s.stack?s.stack.replace(/^.+\n/,""):"";try{r.stack?o&&!String(r.stack).endsWith(o.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+o):r.stack=o}catch{}}throw r}}_request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=k(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:o}=n;r!==void 0&&K.assertOptions(r,{silentJSONParsing:D.transitional(D.boolean),forcedJSONParsing:D.transitional(D.boolean),clarifyTimeoutError:D.transitional(D.boolean)},!1),s!=null&&(a.isFunction(s)?n.paramsSerializer={serialize:s}:K.assertOptions(s,{encode:D.function,serialize:D.function},!0)),K.assertOptions(n,{baseUrl:D.spelling("baseURL"),withXsrfToken:D.spelling("withXSRFToken")},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let i=o&&a.merge(o.common,o[n.method]);o&&a.forEach(["delete","get","head","post","put","patch","common"],p=>{delete o[p]}),n.headers=C.concat(i,o);const c=[];let d=!0;this.interceptors.request.forEach(function(m){typeof m.runWhen=="function"&&m.runWhen(n)===!1||(d=d&&m.synchronous,c.unshift(m.fulfilled,m.rejected))});const l=[];this.interceptors.response.forEach(function(m){l.push(m.fulfilled,m.rejected)});let u,f=0,b;if(!d){const p=[De.bind(this),void 0];for(p.unshift.apply(p,c),p.push.apply(p,l),b=p.length,u=Promise.resolve(n);f<b;)u=u.then(p[f++],p[f++]);return u}b=c.length;let E=n;for(f=0;f<b;){const p=c[f++],m=c[f++];try{E=p(E)}catch(h){m.call(this,h);break}}try{u=De.call(this,E)}catch(p){return Promise.reject(p)}for(f=0,b=l.length;f<b;)u=u.then(l[f++],l[f++]);return u}getUri(t){t=k(this.defaults,t);const n=Ye(t.baseURL,t.url);return Ve(n,t.params,t.paramsSerializer)}}a.forEach(["delete","get","head","options"],function(t){B.prototype[t]=function(n,r){return this.request(k(r||{},{method:t,url:n,data:(r||{}).data}))}});a.forEach(["post","put","patch"],function(t){function n(r){return function(o,i,c){return this.request(k(c||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:i}))}}B.prototype[t]=n(),B.prototype[t+"Form"]=n(!0)});class be{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(s=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](s);r._listeners=null}),this.promise.then=s=>{let o;const i=new Promise(c=>{r.subscribe(c),o=c}).then(s);return i.cancel=function(){r.unsubscribe(o)},i},t(function(o,i,c){r.reason||(r.reason=new I(o,i,c),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const t=new AbortController,n=r=>{t.abort(r)};return this.subscribe(n),t.signal.unsubscribe=()=>this.unsubscribe(n),t.signal}static source(){let t;return{token:new be(function(s){t=s}),cancel:t}}}function jn(e){return function(n){return e.apply(null,n)}}function Un(e){return a.isObject(e)&&e.isAxiosError===!0}const pe={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(pe).forEach(([e,t])=>{pe[t]=e});function rt(e){const t=new B(e),n=je(B.prototype.request,t);return a.extend(n,B.prototype,t,{allOwnKeys:!0}),a.extend(n,t,null,{allOwnKeys:!0}),n.create=function(s){return rt(k(e,s))},n}const T=rt(J);T.Axios=B;T.CanceledError=I;T.CancelToken=be;T.isCancel=Xe;T.VERSION=nt;T.toFormData=ee;T.AxiosError=y;T.Cancel=T.CanceledError;T.all=function(t){return Promise.all(t)};T.spread=jn;T.isAxiosError=Un;T.mergeConfig=k;T.AxiosHeaders=C;T.formToJSON=e=>Ke(a.isHTMLForm(e)?new FormData(e):e);T.getAdapter=tt.getAdapter;T.HttpStatusCode=pe;T.default=T;function Bn(){return O.jsx("div",{className:"flex justify-center items-center h-auto bg-white",children:O.jsx("div",{className:"border-8 border-slate-200 border-t-8 border-t-blue-500 w-14 h-14 rounded-full animate-spin"})})}const qn=()=>{const[e,t]=j.useState(null),[n,r]=j.useState(""),[s,o]=j.useState(null),[i,c]=j.useState(null),[d,l]=j.useState(!1),[u,f]=j.useState(""),[b,E]=j.useState(0),p=3,m=1e3,h=w=>{const g=w.target.files[0];g&&(t(g),x(g))},R=w=>{w.preventDefault(),w.stopPropagation()},S=w=>{w.preventDefault(),w.stopPropagation();const g=w.dataTransfer.files[0];g&&(t(g),x(g))},x=w=>{const g=new FileReader;g.onload=F=>{o(F.target.result)},g.readAsDataURL(w)},P=async()=>{if(l(!0),f("Calculating MTF... Please wait in a couple of minutes!"),E(0),r(""),!e){alert("No file selected."),l(!1),f("");return}const w=new FormData;w.append("file",e);for(let g=1;g<=p;g++)try{if((await T.get("https://thisone-py.onrender.com")).data.message=="Hello from FastAPI"){const $=await T.post("https://thisone-py.onrender.com/upload",w,{headers:{"Content-Type":"multipart/form-data"}});f(""),r("Your result is ready"),l(!1),c($.data)}else f("server is busy, please refresh this page"),r(""),l(!1)}catch{E(g),g===p?(f("Request time out, please refresh the page!"),l(!1)):(f(`Attempt ${g} failed. Retrying in ${m/1e3} seconds...`),await new Promise(L=>setTimeout(L,m)))}};return O.jsxs("div",{className:"bg-mtf-bg backdrop-blur-md bg-opacity-5 bg-top flex flex-col items-center justify-center min-h-screen",children:[O.jsxs("div",{className:"min-w-72 min-h-52 flex flex-col justify-center items-center border-2 border-dashed border-red-950 rounded-lg text-center bg-fuchsia-100 shadow-md",onDragOver:R,onDrop:S,children:[O.jsx("p",{className:"text-red-950 text-center font-bold text-4xl px-20 mb-4",children:"MTF 10% Calculator"}),O.jsx("p",{className:"text-red-950 text-center px-20",children:"Drag and drop your DICOM file here, or click below to select a file"})]}),O.jsx("div",{className:"mx-10",children:O.jsx("input",{type:"file",onChange:h,className:"text-red-950 ml-20 mt-4"})}),e&&O.jsxs("p",{className:"mt-2 text-sm bg-green-500 p-1 text-red-950",children:["Selected File: ",O.jsx("span",{className:"font-medium",children:e.name})]}),O.jsx("button",{onClick:P,className:"mt-4 px-16 py-3 bg-fuchsia-500 text-white rounded-lg shadow",disabled:d,children:d?"Processing...":"Upload & Calculate"}),u&&O.jsx("p",{className:"mt-4 text-red-950 text-2xl",children:u}),b>0&&O.jsxs("p",{className:"mt-2 text-red-950 text-xl",children:["Retry count: ",b,"/",p]}),n&&O.jsx("p",{className:`mt-4 text-2xl underline font-medium ${n.includes("Your result is ready")?"text-green-900":"text-red-500"}`,children:n}),d&&O.jsx(Bn,{}),i&&O.jsxs("div",{children:[O.jsxs("p",{className:"text-green-950 text-2xl font-bold mt-2",children:["MTF 10% Frequency: ",i.mtf_10_frequency]}),O.jsx("img",{src:i.plot,alt:"MTF Plot"})]})]})};export{qn as default};
