(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{QfWi:function(t,e,o){"use strict";o.r(e);var n=["#FFFFFF","#2196F3","#4CAF50","#FF9800","#009688","#795548"],a=null,r={start:document.querySelector('button[data-action="start"]'),stop:document.querySelector('button[data-action="stop"]'),body:document.querySelector("body")};r.stop.disabled=!0;r.start.addEventListener("click",(function(){a||(a=setInterval(d,1e3),r.start.disabled=!0,r.stop.disabled=!1)})),r.stop.addEventListener("click",(function(){clearInterval(a),a=null,r.start.disabled=!1,r.stop.disabled=!0}));var d=function(){var t=n[s(0,n.length-1)];r.body.style.backgroundColor=""+t},s=function(t,e){return Math.floor(Math.random()*(e-t+1)+t)}}},[["QfWi",1]]]);
//# sourceMappingURL=main.07352cbe0e0f112ad054.js.map