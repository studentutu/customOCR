!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.Tesseract=t():e.Tesseract=t()}(this,function(){return function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var r={};return t.m=e,t.c=r,t.p="",t(0)}([function(e,t){"use strict";function r(e,t){return a||(a=o(g.coreUrl,g.workerUrl,g.langUrl)),a.recognize(e,t)}function n(e){return a||(a=o(g.coreUrl,g.workerUrl,g.langUrl)),a.detect(e)}function o(){function e(e,t){var r=s++;u[r]={};var n=0;return Object.getOwnPropertyNames(t).filter(function(e){return"function"==typeof t[e]}).forEach(function(o){n++,t[o](function(a){t[o]=a,0==--n&&i.postMessage({jobId:r,action:e,args:t})})}),0==n&&i.postMessage({jobId:r,action:e,args:t}),{then:function(e){return u[r].result=e,this},error:function(e){return u[r].error=e,this},progress:function(e){return u[r].progress=e,this}}}function t(e){if(e.match&&e.match(/^https?:\/\//))return function(r){var n=new Image;n.src=e,n.onload=function(){return r(t(n))}};if("string"==typeof e&&(e=document.querySelector(e)),e.getContext)e=e.getContext("2d");else if("IMG"==e.tagName||"VIDEO"==e.tagName){var r=document.createElement("canvas");r.width=e.naturalWidth||e.videoWidth,r.height=e.naturalHeight||e.videoHeight;var n=r.getContext("2d");n.drawImage(e,0,0),e=n}return e.getImageData&&(e=e.getImageData(0,0,e.canvas.width,e.canvas.height)),e}var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g.coreUrl,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:g.workerUrl,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:g.langUrl,a=new Blob(["importScripts('"+r+"');\n\t\t                  importScripts('"+n+"');"]),i=new Worker(window.URL.createObjectURL(a)),c=!1,s=0,u={};return i.onmessage=function(e){var t=e.data,r=t.jobId,n=t.progress,o=t.error,a=t.result,i=u[r];n&&i.progress&&i.progress(n),o&&i.error&&i.error(o),a&&i.result&&i.result(a)},e("init",{mem:100663296,langUrl:o}),{detect:function(r){return e("detect",{image:t(r)})},recognize:function(r){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"eng";return"string"==typeof n?n={lang:n}:n.lang=n.lang||"eng",c||["chi_sim","chi_tra","jpn"].indexOf(n.lang)==-1||(e("init",{mem:167772160,langUrl:o}),c=!0),e("recognize",{options:n,image:t(r)})}}}var a,i="https://cdn.rawgit.com/naptha/tesseract.js-core/master/index.js",c="https://cdn.rawgit.com/naptha/tesseract.js/8b915dc/dist/tesseract.worker.js",s="https://cdn.rawgit.com/naptha/tessdata/gh-pages/3.02/",g={coreUrl:i,workerUrl:c,langUrl:s,recognize:r,detect:n,createWorker:o};e.exports=g}])});