(this["webpackJsonpreact-antd-button-svg-icons-example"]=this["webpackJsonpreact-antd-button-svg-icons-example"]||[]).push([[0],{40:function(e,t,n){e.exports=n(52)},41:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){"use strict";n.r(t);n(41);var l=n(0),a=n.n(l),c=n(12),i=n.n(c);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e}).apply(this,arguments)}function r(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},c=Object.keys(e);for(l=0;l<c.length;l++)n=c[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(l=0;l<c.length;l++)n=c[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createElement("circle",{cx:15.4023,cy:14.7453,r:14.652,fill:"white"}),u=a.a.createElement("g",{clipPath:"url(#clip2)"},a.a.createElement("path",{d:"M21.6737 8.88622L20.52 7.73254C20.0513 7.2631 19.4157 7 18.7525 7H9.12504C8.17564 7 7.40625 7.76939 7.40625 8.71879V20.2812C7.40625 21.2306 8.17564 22 9.12504 22H20.6875C21.6369 22 22.4062 21.2306 22.4062 20.2812V10.6538C22.4062 9.99057 22.1432 9.35497 21.6737 8.88622ZM9.90621 10.9062V9.34375C9.90621 9.085 10.1162 8.875 10.375 8.875H16.9375C17.1962 8.875 17.4062 9.085 17.4062 9.34375V10.9062C17.4062 11.165 17.1962 11.375 16.9375 11.375H10.375C10.1162 11.375 9.90621 11.165 9.90621 10.9062ZM14.9062 19.5C13.3532 19.5 12.0938 18.2406 12.0938 16.6875C12.0938 15.1343 13.3532 13.875 14.9062 13.875C16.4593 13.875 17.7188 15.1343 17.7188 16.6875C17.7188 18.2406 16.4593 19.5 14.9062 19.5Z",fill:""})),m=a.a.createElement("defs",null,a.a.createElement("clipPath",{id:"clip2"},a.a.createElement("rect",{width:15,height:15,fill:"white",transform:"translate(7.40625 7)"})));const d=e=>{let t=e.svgRef,n=e.title,l=r(e,["svgRef","title"]);return a.a.createElement("svg",o({width:31,height:30,viewBox:"0 0 31 30",fill:"#1790FF",ref:t},l),n?a.a.createElement("title",null,n):null,s,u,m)},b=a.a.forwardRef((e,t)=>a.a.createElement(d,o({svgRef:t},e)));n.p;var p=n(21),f=n(27),h=n(56),C=n(25),g=n.n(C),y="_styles-module__flex__3z8Cu",_="_styles-module__flexRevert__3aWzG",k="_styles-module__primary__3ljpl",v="_styles-module__iconBtn__16ivm",E="_styles-module__iconBtnRevert__2mKGi",F="_styles-module__buttonName__2GQvQ",O="_styles-module__buttonNameRevert__1gJQa";const w=({iconComponent:e,name:t,onClick:n,size:l,disable:c,loading:i,width:o,height:r,key:s,margin:u,padding:m,block:d,className:b,minWidth:C,minHeight:w,background:j="#1790FF",borderColor:H="#1790FF",iconRevert:x=!1,onKeyClick:z=null})=>{const B=g()("ctrl"),R=Object(f.a)(B,1)[0],V=g()("command"),G=Object(f.a)(V,1)[0];return a.a.createElement(h.a,{className:"".concat(k," ").concat(x?_:y," ").concat(b),icon:e?Object(p.a)(Object(p.a)({},e),{},{props:Object(p.a)(Object(p.a)({},e.props),{},{className:x?E:v})}):null,size:l,onClick:()=>{if(G||R)return z&&"function"===typeof z?z():null;n&&"function"===typeof n&&n()},disabled:c,loading:i,style:{width:o,height:r,margin:u,padding:m,minWidth:C,minHeight:w,background:j,borderColor:H},key:s,block:d},a.a.createElement("div",{className:x?O:F},t))};n(51);var j=n(54);var H=()=>a.a.createElement("div",{style:{width:"100%",display:"grid",justifyContent:"center",alignItems:"center",marginTop:30}},a.a.createElement(w,{name:"ClassFunc",size:"default",iconComponent:a.a.createElement(b,null),onClick:()=>{j.b.success("Hello CLFButtonSVG",.2)},onKeyClick:()=>{j.b.success("This is key + click",.2)},disable:!1,width:150,height:30}),a.a.createElement(w,{name:"ClassFunc",size:"default",iconComponent:a.a.createElement(b,null),iconRevert:!0,onClick:()=>{j.b.success("Hello CLFButtonSVG",.2)},onKeyClick:()=>{j.b.success("This is key + click",.2)},disable:!1,width:150,height:30,background:"#1790FF",borderColor:"#1790FF"}),a.a.createElement(w,{name:"Full Width",size:"default",iconComponent:a.a.createElement(b,null),onClick:()=>{j.b.success("Hello CLFButtonSVG",.2)},onKeyClick:()=>{j.b.success("This is key + click",.2)},disable:!1,block:!0}),a.a.createElement(w,{name:"Full Width Loading",size:"default",iconComponent:a.a.createElement(b,null),onClick:()=>{j.b.success("Hello CLFButtonSVG",.2)},disable:!1,loading:!0,block:!0}),a.a.createElement(w,{name:"Full Width Disable",size:"default",iconComponent:a.a.createElement(b,null),onClick:()=>{j.b.success("Hello CLFButtonSVG",.2)},disable:!0,loading:!1,block:!0}));i.a.render(a.a.createElement(H,null),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.bb189a16.chunk.js.map