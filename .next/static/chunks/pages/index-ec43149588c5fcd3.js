(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{4184:function(e,t){var r;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(){"use strict";var n={}.hasOwnProperty;function i(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var a=typeof r;if("string"===a||"number"===a)e.push(r);else if(Array.isArray(r)){if(r.length){var s=i.apply(null,r);s&&e.push(s)}}else if("object"===a){if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]")){e.push(r.toString());continue}for(var o in r)n.call(r,o)&&r[o]&&e.push(o)}}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0!==(r=(function(){return i}).apply(t,[]))&&(e.exports=r)}()},8312:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(2075)}])},2075:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return v}});var n=r(5893),i=r(9008),a=r.n(i);r(8054);var s=r(8182),o=r(7964),c=r.n(o);function l(e){let{children:t}=e;return(0,n.jsx)("div",{className:c().container,children:t})}var u=r(682),d=r(7294),f=r(3247),p=r(7155);let x=(0,f.IO)((0,f.hJ)(p.db,"Users"));function h(){let[e,t]=(0,d.useState)([]);return(0,d.useEffect)(()=>{let e=(0,f.cf)(x,e=>{let r=[];e.forEach(e=>{r.push(e.data()),console.log(e)}),t(r),console.log(r)});return()=>{e()}},[]),(0,n.jsxs)("div",{children:[(0,n.jsx)("h1",{children:"Post List"}),e.map((e,t)=>(0,n.jsxs)("div",{children:[(0,n.jsxs)("h2",{children:[e.firstName," ",e.lastName]}),(0,n.jsx)("p",{children:e.dateOfBirth})]},t))]})}function v(){return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(l,{children:[(0,n.jsxs)(a(),{children:[(0,n.jsx)("title",{children:"Home"}),(0,n.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,n.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,n.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,n.jsx)("div",{className:"container",children:(0,n.jsx)(s.Z,{children:(0,n.jsxs)(s.Z.Body,{children:[(0,n.jsx)("h1",{children:"Welcome to Pet Story"}),(0,n.jsx)(u.Z,{children:(0,n.jsx)(h,{})})]})})})]})})}},7964:function(e){e.exports={container:"layout_container__fbLkO"}},9008:function(e,t,r){e.exports=r(3121)},8182:function(e,t,r){"use strict";r.d(t,{Z:function(){return Z}});var n=r(4184),i=r.n(n),a=r(7294),s=r(6792),o=r(6611),c=r(9602),l=r(5893);let u=a.forwardRef(({bsPrefix:e,className:t,variant:r,as:n="img",...a},o)=>{let c=(0,s.vE)(e,"card-img");return(0,l.jsx)(n,{ref:o,className:i()(r?`${c}-${r}`:c,t),...a})});u.displayName="CardImg";var d=r(9059);let f=a.forwardRef(({bsPrefix:e,className:t,as:r="div",...n},o)=>{let c=(0,s.vE)(e,"card-header"),u=(0,a.useMemo)(()=>({cardHeaderBsPrefix:c}),[c]);return(0,l.jsx)(d.Z.Provider,{value:u,children:(0,l.jsx)(r,{ref:o,...n,className:i()(t,c)})})});f.displayName="CardHeader";let p=(0,c.Z)("h5"),x=(0,c.Z)("h6"),h=(0,o.Z)("card-body"),v=(0,o.Z)("card-title",{Component:p}),m=(0,o.Z)("card-subtitle",{Component:x}),j=(0,o.Z)("card-link",{Component:"a"}),y=(0,o.Z)("card-text",{Component:"p"}),g=(0,o.Z)("card-footer"),N=(0,o.Z)("card-img-overlay"),C=a.forwardRef(({bsPrefix:e,className:t,bg:r,text:n,border:a,body:o,children:c,as:u="div",...d},f)=>{let p=(0,s.vE)(e,"card");return(0,l.jsx)(u,{ref:f,...d,className:i()(t,p,r&&`bg-${r}`,n&&`text-${n}`,a&&`border-${a}`),children:o?(0,l.jsx)(h,{children:c}):c})});C.displayName="Card",C.defaultProps={body:!1};var Z=Object.assign(C,{Img:u,Title:v,Subtitle:m,Body:h,Link:j,Text:y,Header:f,Footer:g,ImgOverlay:N})},9059:function(e,t,r){"use strict";var n=r(7294);let i=n.createContext(null);i.displayName="CardHeaderContext",t.Z=i},682:function(e,t,r){"use strict";var n=r(4184),i=r.n(n),a=r(7294),s=r(6792),o=r(5893);let c=a.forwardRef(({bsPrefix:e,fluid:t,as:r="div",className:n,...a},c)=>{let l=(0,s.vE)(e,"container"),u="string"==typeof t?`-${t}`:"-fluid";return(0,o.jsx)(r,{ref:c,...a,className:i()(n,t?`${l}${u}`:l)})});c.displayName="Container",c.defaultProps={fluid:!1},t.Z=c},6792:function(e,t,r){"use strict";r.d(t,{pi:function(){return c},vE:function(){return o},zG:function(){return l}});var n=r(7294);r(5893);let i=n.createContext({prefixes:{},breakpoints:["xxl","xl","lg","md","sm","xs"],minBreakpoint:"xs"}),{Consumer:a,Provider:s}=i;function o(e,t){let{prefixes:r}=(0,n.useContext)(i);return e||r[t]||t}function c(){let{breakpoints:e}=(0,n.useContext)(i);return e}function l(){let{minBreakpoint:e}=(0,n.useContext)(i);return e}},6611:function(e,t,r){"use strict";r.d(t,{Z:function(){return u}});var n=r(4184),i=r.n(n),a=/-(.)/g,s=r(7294),o=r(6792),c=r(5893);let l=e=>e[0].toUpperCase()+e.replace(a,function(e,t){return t.toUpperCase()}).slice(1);function u(e,{displayName:t=l(e),Component:r,defaultProps:n}={}){let a=s.forwardRef(({className:t,bsPrefix:n,as:a=r||"div",...s},l)=>{let u=(0,o.vE)(n,e);return(0,c.jsx)(a,{ref:l,className:i()(t,u),...s})});return a.defaultProps=n,a.displayName=t,a}},9602:function(e,t,r){"use strict";var n=r(7294),i=r(4184),a=r.n(i),s=r(5893);t.Z=e=>n.forwardRef((t,r)=>(0,s.jsx)("div",{...t,ref:r,className:a()(t.className,e)}))}},function(e){e.O(0,[774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);