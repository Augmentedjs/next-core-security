!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("next-core-security",[],t):"object"==typeof exports?exports["next-core-security"]=t():e["next-core-security"]=t()}(this,(function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/dist/",r(r.s=5)}([function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n={};n.OAUTH2=Symbol("oauth2"),n.ACL=Symbol("acl"),t.default=n},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,o=r(6),i=r(0);(n=i)&&n.__esModule;class s extends o.AugmentedObject{constructor(e){super(),this._type=e,this._uri=""}get uri(){return this._uri}set uri(e){this._uri=e}get type(){return this._type}}t.default=s},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(r(1)),o=i(r(0));function i(e){return e&&e.__esModule?e:{default:e}}class s extends n.default{constructor(){super(o.default.OAUTH2),this.accessToken="",this.authorizationToken=""}authorize(e){this.authorizationToken=""}access(e){this.accessToken=""}}t.default=s},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(r(1)),o=i(r(0));function i(e){return e&&e.__esModule?e:{default:e}}class s extends n.default{constructor(){super(o.default.ACL)}authenticate(e,t){return null}}t.default=s},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=class{constructor(e){e&&e.id?this._id=e.id:this._id=0,e&&e.email?this._email=e.email:this._email="",e&&e.login?this._login=e.login:this._login="",e&&e.fullName?this._fullName=e.fullName:this._fullName=""}get fullName(){return this._fullName}set fullName(e){this._fullName=e}get id(){return this._id}set id(e){this._id=e}get login(){return this._login}set login(e){this._login=e}get email(){return this._email}set email(e){this._email=e}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OAUTH2Client=t.ACLClient=t.AbstractSecurityClient=t.Principal=t.Entry=t.Context=t.AuthenticationFactory=t.ClientType=void 0;var n=f(r(1)),o=f(r(2)),i=f(r(3)),s=f(r(0)),u=f(r(7)),l=f(r(4)),c=f(r(8)),a=f(r(9));function f(e){return e&&e.__esModule?e:{default:e}}t.ClientType=s.default,t.AuthenticationFactory=u.default,t.Context=a.default,t.Entry=c.default,t.Principal=l.default,t.AbstractSecurityClient=n.default,t.ACLClient=i.default,t.OAUTH2Client=o.default},function(e,t,r){e.exports=function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/dist/",r(r.s=1)}([function(e,t,r){e.exports=function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/dist/",r(r.s=3)}([function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=e=>{const t=typeof e;return"function"===t||"object"===t&&!!e}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=e=>"[object Function]"==Object.prototype.toString.call(e)},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=arguments;const o=(e,t)=>{let r,o;if("function"!=typeof t)throw new TypeError(FUNC_ERROR_TEXT);return o=Number.parseInt(e),()=>(--o>0&&(r=t.apply(void 0,n)),o<=1&&(t=void 0),r)};t.default=o},function(e,t,r){"use strict";(function(e){var n=A(r(5)),o=A(r(1)),i=A(r(6)),s=A(r(7)),u=A(r(8)),l=A(r(9)),c=A(r(0)),a=A(r(10)),f=A(r(11)),d=A(r(12)),p=A(r(13)),_=A(r(14)),b=A(r(15)),y=A(r(16)),h=A(r(17)),g=A(r(2)),m=A(r(18)),O=r(19),v=r(20),j=r(21),x=A(r(22)),M=r(23),P=A(r(24)),S=r(25),T=A(r(26));function A(e){return e&&e.__esModule?e:{default:e}}e.exports.shuffle=v.shuffle,e.exports.prettyPrint=v.prettyPrint,e.exports.binarySearch=v.binarySearch,e.exports.TransformerType=v.TransformerType,e.exports.Transformer=v.Transformer,e.exports.wrap=v.wrap,e.exports.filterObject=v.filterObject,e.exports.findByMatchingProperties=v.findByMatchingProperties,e.exports.sortObjects=j.sortObjects,e.exports.mergeSort=j.mergeSort,e.exports.quickSort=j.quickSort,e.exports.insertionSort=j.insertionSort,e.exports.bubbleSort=j.bubbleSort,e.exports.formatDate=x.default,e.exports.formatBinary=M.formatBinary,e.exports.binaryToHex=M.binaryToHex,e.exports.isString=n.default,e.exports.isFunction=o.default,e.exports.extend=i.default,e.exports.pad=s.default,e.exports.uniqueId=u.default,e.exports.has=l.default,e.exports.isObject=c.default,e.exports.allKeys=a.default,e.exports.create=f.default,e.exports.result=d.default,e.exports.arrayHas=p.default,e.exports.exec=_.default,e.exports.isDefined=b.default,e.exports.some=y.default,e.exports.splice=h.default,e.exports.before=g.default,e.exports.once=m.default,e.exports.filter=P.default,e.exports.fibonacci=O.fibonacci,e.exports.fibonacciSequence=O.fibonacciSequence,e.exports.sizeOf=S.sizeOf,e.exports.formatByteSize=S.formatByteSize,e.exports.memorySizeOf=S.memorySizeOf,t.hammingDistance=T.default}).call(this,r(4)(e))},function(e,t,r){"use strict";e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=e=>"string"==typeof e||!!e&&"object"==typeof e&&"[object String]"===Object.prototype.toString.call(e)},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=(...e)=>{let t=0;const r=e.length;for(t=1;t<r;t++){let r;for(r in e[t])e[t].hasOwnProperty(r)&&(e[0][r]=e[t][r])}return e[0]}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=(e,t,r)=>void 0===t?e:r?`${e}${t}`:`${t}${e}`},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});let n=0;t.default=e=>`${e}${++n}`},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=(e,t)=>null!==e&&hasOwnProperty.call(e,t)},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,o=(n=r(0))&&n.__esModule?n:{default:n};t.default=e=>(0,o.default)(e)?Object.getOwnPropertyNames(e):[]},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,o=(n=r(0))&&n.__esModule?n:{default:n};t.default=(e,t)=>{const r=(e=>(0,o.default)(e)?Object.create(e):{})(e);return t&&Object.assign(r,t),r}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,o=(n=r(1))&&n.__esModule?n:{default:n};t.default=(e,t)=>{if(null===e)return;const r=e[t];return(0,o.default)(r)?r.call(e):r}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=(e,t)=>-1!==e.indexOf(t)},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=(e,t,...r)=>{const n=e.split("."),o=n.pop(),i=n.length;let s=0;for(s=0;s<i;s++)t=t[n[s]];return t[o].apply(t,r)}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=e=>void 0!==e},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=(e,t)=>!!Array.isArray(e)&&e.some(t)},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=(e,t,r)=>{r=Math.min(Math.max(r,0),e.length);let n=Array(e.length-r);const o=t.length;let i;for(i=0;i<n.length;i++)n[i]=e[i+r];for(i=0;i<o;i++)e[i+r]=t[i];for(i=0;i<n.length;i++)e[i+o+r]=n[i]}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,o=(n=r(2))&&n.__esModule?n:{default:n};t.default=e=>(0,o.default)(2,e)},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=t.fibonacci=e=>{const t=(1+Math.sqrt(5))/2,r=Math.pow(t,e)/Math.sqrt(5);return Math.round(r)};t.fibonacciSequence=e=>{const t=[];let r=0;for(r=0;r<e;r++)t.push(n(r));return t}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=arguments;t.shuffle=e=>{const t=e.slice(0);let r,n,o=0;for(o=e.length-1;o>0;o--)n=Math.floor(Math.random()*(o+1)),r=t[o],t[o]=t[n],t[n]=r;return t},t.prettyPrint=(e,t,r)=>{let n="\t";return t&&(n=" ".repeat(r)),JSON.stringify(e,null,n)},t.binarySearch=(e,t,r)=>{let n,o,i=0,s=e.length-1;for(;i<=s;)if(n=Math.floor((i+s)/2),o=r(e[n],t),o<0)i=n+1;else{if(!(o>0))return n;s=n-1}return null};const o=t.TransformerType={};o.STRING=Symbol("String"),o.INTEGER=Symbol("Integer"),o.NUMBER=Symbol("Number"),o.BOOLEAN=Symbol("Boolean"),o.ARRAY=Symbol("Array"),o.OBJECT=Symbol("Object"),o.NULL=Symbol("Null");class i{constructor(){this.type=o}static transform(e,t){let r=null;switch(t){case o.STRING:r="object"==typeof e?JSON.stringify(e):String(e);break;case o.INTEGER:r=parseInt(e);break;case o.NUMBER:r=Number(e);break;case o.BOOLEAN:r=Boolean(e);break;case o.ARRAY:Array.isArray(e)?r=e:(r=[],r[0]=e);break;case o.OBJECT:"object"!=typeof e?(r={},r[e]=e):r=e}return r}static isType(e){return null===e?o.NULL:"string"==typeof e?o.STRING:"number"==typeof e?o.NUMBER:"boolean"==typeof e?o.BOOLEAN:Array.isArray(e)?o.ARRAY:"object"==typeof e?o.OBJECT:void 0}}t.Transformer=i,t.wrap=(e,t)=>()=>t.apply(void 0,[e].concat(Array.prototype.slice.call(n))),t.filterObject=(e,t)=>{const r={};if(e&&t){const n=t.length;let o=0;for(o=0;o<n;o++)r[t[o]]=e[t[o]]}return r},t.findByMatchingProperties=(e,t)=>e.filter(e=>Object.keys(t).every(r=>e[r]===t[r]))},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.sortObjects=(e,t)=>e.sort((e,r)=>{const n=e[t],o=r[t];return n<o?-1:n>o?1:0});const n=t.mergeSort=e=>{if(1===e.length)return e;const t=Math.floor(e.length/2),r=e.slice(0,t),i=e.slice(t);return o(n(r),n(i))},o=(e,t)=>{let r=[],n=0,o=0;for(;n<e.length&&o<t.length;)e[n]<t[o]?(r.push(e[n]),n++):(r.push(t[o]),o++);return r.concat(e.slice(n)).concat(t.slice(o))},i=t.quickSort=e=>{if(0===e.length)return[];let t=1;const r=e.length,n=[],o=[],s=e[0];for(t=1;t<r;t++)e[t]<s?n.push(e[t]):o.push(e[t]);return i(n).concat(s,i(o))};t.insertionSort=e=>{let t=[];if(e){t=e.slice();const r=t.length;let n,o,i;for(n=1;n<r;n++){for(i=t[n],o=n-1;o>=0&&t[o]>i;o--)t[o+1]=t[o];t[o+1]=i}}return t},t.bubbleSort=e=>{let t=[];if(e){let r,n,o;t=e.slice();const i=t.length-1;do{for(r=!1,n=0;n<i;n++)t[n]>t[n+1]&&(o=t[n],t[n]=t[n+1],t[n+1]=o,r=!0)}while(r)}return t}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=(e,t)=>{const r=e.getFullYear(),n=e.getMonth()+1,o=e.getDate(),i=e.getHours(),s=e.getMinutes();return e.getSeconds(),t?`${n}/${o}/${r}`:`${n}/${o}/${r} ${i%12||12}:${s<10?"0"+s:s}${i<12?"am":"pm"}`}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.formatBinary=(e,t)=>(e=>{let t=0,r=e,n="";for(t=0;t<32;t++,n+=String(r>>>31),r<<=1);return n})(e).split("").reverse().join("").substring(0,t),t.binaryToHex=(e,t)=>{const r=parseInt(e.split("").reverse().join(""),2);let n="";return r<16&&t&&(n="0"),`${n}${r.toString(16)}`}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=(e,t)=>e&&t?[].filter.call(e,e=>e!=t).join(""):null},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=e=>{let t=0;if(null!=e)switch(typeof e){case"number":t+=8;break;case"string":t+=2*e.length;break;case"boolean":t+=4;break;case"object":let r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r||"Array"===r){let r=null;for(r in e)e.hasOwnProperty(r)&&(t+=n(e[r]))}else t+=2*e.toString().length}return t},o=e=>e<1024?e+" bytes":e<1048576?(e/1024).toFixed(3)+" KB":e<1073741824?(e/1048576).toFixed(3)+" MB":(e/1073741824).toFixed(3)+" GB";t.sizeOf=n,t.formatByteSize=o,t.memorySizeOf=e=>o(n(e))},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=(e,t)=>{let r=0,n=e.toString(2),o=t.toString(2),i=o.length-n.length;if(i>0){let e="";for(;i;)e+="0",i--;n=e+n}else if(i<0){let e="";for(;i;)e+="0",i++;o=e+o}return n.split("").forEach((e,t)=>{e!==o[t]&&r++}),r}}])},function(e,t,r){"use strict";r.r(t),r.d(t,"AugmentedObject",(function(){return f})),r.d(t,"Configuration",(function(){return d})),r.d(t,"eventsApi",(function(){return i})),r.d(t,"internalOn",(function(){return s})),r.d(t,"offApi",(function(){return l})),r.d(t,"triggerApi",(function(){return c}));var n=r(0);const o=/\s+/,i=(e,t,r,n,...s)=>{let u,l=0;if(r&&"object"==typeof r){void 0!==n&&"context"in s&&void 0===s.context&&(s.context=n);for(u=Object.keys(r);l<u.length;l++)t=i(e,t,u[l],r[u[l]],...s)}else if(r&&o.test(r))for(u=r.split(o);l<u.length;l++)t=e(t,u[l],n,...s);else t=e(t,r,n,...s);return t},s=(e,t,r,n,o)=>(e._events=i(u,e._events||{},t,r,{context:n,ctx:e,listening:o}),o&&((e._listeners||(e._listeners={}))[o.id]=o),e),u=(e,t,r,n)=>{if(r){const o=e[t]||(e[t]=[]),i=n.context,s=n.ctx,u=n.listening;u&&u.count++,o.push({callback:r,context:i,ctx:i||s,listening:u})}return e},l=(e,t,r,n)=>{if(!e)return;let o,i=0;const s=n.context,u=n.listeners;if(!t&&!r&&!s){const e=Object.keys(u);for(;i<e.length;i++)o=u[e[i]],delete u[o.id],delete o.listeningTo[o.objId];return}let l=t?[t]:Object.keys(e);for(;i<l.length;i++){const n=e[t=l[i]];if(!n)break;const c=[];let a=0;for(a=0;a<n.length;a++){const e=n[a];r&&r!==e.callback&&r!==e.callback._callback||s&&s!==e.context?c.push(e):(o=e.listening,o&&0==--o.count&&(delete u[o.id],delete o.listeningTo[o.objId]))}c.length?e[t]=c:delete e[t]}return e},c=(e,t,r,...n)=>{if(e){const r=e[t];let o=e.all;r&&o&&(o=o.slice()),r&&a(r,...n),o&&a(o,[t].concat(...n))}return e},a=(e,...t)=>{let r,n=-1;const o=e.length;for(;++n<o;)(r=e[n]).callback.apply(r.ctx,...t)};var f=class{constructor(e){e||(e={}),this._options||(this._options={}),Object.assign(this._options,e),e&&e.events?this._events=e.events:this._events={},this._listeningTo={},this._listenId={},this._listeners={}}initialize(...e){return this}get options(){return this._options}set options(e){this._options=e}get events(){return this._events}set events(e){this._events=e}trigger(e,...t){if(this._events){const r=Array.isArray(t)?t:Array.from(t);i(c,this._events,e,void 0,r)}return this}once(e,t,r){const n=i(this._onceMap,{},e,t,this.off.bind(this));return"string"==typeof e&&null==r&&(t=void 0),this.on(n,t,r)}off(e,t,r){return this._events&&(this._events=i(l,this._events,e,t,{context:r,listeners:this._listeners})),this}stopListening(e,t,r){const n=this._listeningTo;if(n){const o=e?[e._listenId]:Object.keys(n);let i=0;for(i=0;i<o.length;i++){const e=n[o[i]];if(!e)break;e.obj.off(t,r,this)}}return this}on(e,t,r){return s(this,e,t,r)}listenTo(e,t,r){if(e){const o=e._listenId||(e._listenId=Object(n.uniqueId)("l")),i=this._listeningTo||(this._listeningTo={});let u=i[o];if(!u){const t=this._listenId||(this._listenId=Object(n.uniqueId)("l"));u=i[o]={obj:e,objId:o,id:t,listeningTo:i,count:0}}s(e,t,r,this,u)}return this}listenToOnce(e,t,r){const n=i(this._onceMap,{},t,r,this.stopListening.bind(this,e));return this.listenTo(e,n)}_onceMap(e,t,r,o){if(r){const i=e[t]=Object(n.once)(()=>{o(t,i),r.apply(this,arguments)});i._callback=r}return e}},d={LoggerLevel:"error",MessageBundle:"Messages",AsynchronousQueueTimeout:2e3,ApplicationInitProcessTimeout:1e3}}])},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=s(r(0)),o=s(r(2)),i=s(r(3));function s(e){return e&&e.__esModule?e:{default:e}}t.default=class{constructor(){}static getSecurityClient(e){return e===n.default.OAUTH2?new o.default:e===n.default.ACL?new i.default:null}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=class{constructor(e,t){this._permissions=e||[],this._neg=t||!1}isNegative(){return this._neg}get permissions(){return this._permissions}set permissions(e){this._permissions=e}addPermission(e){this._permissions.push(e)}removePermission(e){const t=this._permissions.indexOf(e);this._permissions.splice(t,1)}hasPermission(e){return-1!=this._permissions.indexOf(e)}setNegative(e){this.neg=e}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,o=r(4);(n=o)&&n.__esModule;t.default=class{constructor(e,t){this._principal=e||((new Principal).login="guest"),this._permissions=t||[]}get principal(){return this._principal}get permissions(){return this._permissions}set permissions(e){this._permissions=e}addPermission(e){this._permissions.push(e)}removePermission(e){const t=this._permissions.indexOf(e);this._permissions.splice(t,1)}hasPermission(e){return-1!==this._permissions.indexOf(e)}}}])}));
//# sourceMappingURL=next-core-security.js.map