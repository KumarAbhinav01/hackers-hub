"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3029],{4137:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},l=Object.keys(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=i.createContext({}),u=function(e){var t=i.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=u(e.components);return i.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,v=p["".concat(o,".").concat(m)]||p[m]||c[m]||l;return n?i.createElement(v,s(s({ref:t},d),{},{components:n})):i.createElement(v,s({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,s=new Array(l);s[0]=p;var r={};for(var o in t)hasOwnProperty.call(t,o)&&(r[o]=t[o]);r.originalType=e,r.mdxType="string"==typeof e?e:a,s[1]=r;for(var u=2;u<l;u++)s[u]=n[u];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8448:function(e,t,n){var i=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return i.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},7225:function(e,t,n){n.d(t,{Z:function(){return p}});var i=n(7462),a=n(7294),l=n(1048),s=n(2713);var r=function(){var e=(0,a.useContext)(s.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},o=n(3309),u=n(6010),d="tabItem_vU9c";function c(e){var t,n,i,l=e.lazy,s=e.block,c=e.defaultValue,p=e.values,m=e.groupId,v=e.className,y=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=p?p:y.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),h=(0,o.lx)(f,(function(e,t){return e.value===t.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===c?c:null!=(t=null!=c?c:null==(n=y.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(i=y[0])?void 0:i.props.value;if(null!==b&&!f.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=r(),D=g.tabGroupChoices,w=g.setTabGroupChoices,k=(0,a.useState)(b),N=k[0],x=k[1],O=[],E=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var j=D[m];null!=j&&j!==N&&f.some((function(e){return e.value===j}))&&x(j)}var T=function(e){var t=e.currentTarget,n=O.indexOf(t),i=f[n].value;i!==N&&(E(t),x(i),null!=m&&w(m,i))},C=function(e){var t,n=null;switch(e.key){case"ArrowRight":var i=O.indexOf(e.currentTarget)+1;n=O[i]||O[0];break;case"ArrowLeft":var a=O.indexOf(e.currentTarget)-1;n=O[a]||O[O.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":s},v)},f.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,className:(0,u.Z)("tabs__item",d,{"tabs__item--active":N===t}),key:t,ref:function(e){return O.push(e)},onKeyDown:C,onFocus:T,onClick:T},null!=n?n:t)}))),l?(0,a.cloneElement)(y.filter((function(e){return e.props.value===N}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==N})}))))}function p(e){var t=(0,l.Z)();return a.createElement(c,(0,i.Z)({key:String(t)},e))}},2713:function(e,t,n){var i=(0,n(7294).createContext)(void 0);t.Z=i},6753:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return d},metadata:function(){return c},toc:function(){return p},default:function(){return v}});var i=n(7462),a=n(3366),l=(n(7294),n(4137)),s=n(7225),r=n(8448),o=["components"],u={id:"isDisplayed",title:"isDisplayed",custom_edit_url:"https://github.com/Abhi6722/hackers-hub/edit/main/packages/webdriverio/src/commands/element/isDisplayed.ts"},d=void 0,c={unversionedId:"api/element/isDisplayed",id:"api/element/isDisplayed",isDocsHomePage:!1,title:"isDisplayed",description:"Return true if the selected DOM-element is displayed.",source:"@site/docs/api/element/_isDisplayed.md",sourceDirName:"api/element",slug:"/api/element/isDisplayed",permalink:"/docs/api/element/isDisplayed",editUrl:"https://github.com/Abhi6722/hackers-hub/edit/main/packages/webdriverio/src/commands/element/isDisplayed.ts",tags:[],version:"current",frontMatter:{id:"isDisplayed",title:"isDisplayed",custom_edit_url:"https://github.com/Abhi6722/hackers-hub/edit/main/packages/webdriverio/src/commands/element/isDisplayed.ts"},sidebar:"api",previous:{title:"isClickable",permalink:"/docs/api/element/isClickable"},next:{title:"isDisplayedInViewport",permalink:"/docs/api/element/isDisplayedInViewport"}},p=[{value:"Usage",id:"usage",children:[],level:5},{value:"Examples",id:"examples",children:[],level:5}],m={toc:p};function v(e){var t=e.components,n=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Return true if the selected DOM-element is displayed."),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"As opposed to other element commands WebdriverIO will not wait for the element\nto exist to execute this command."))),(0,l.kt)("h5",{id:"usage"},"Usage"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"$(selector).isDisplayed()\n")),(0,l.kt)("h5",{id:"examples"},"Examples"),(0,l.kt)(s.Z,{defaultValue:"async",className:"runtime",values:[{label:"Asynchronous Mode",value:"async"},{label:"Synchronous Mode",value:"sync"}],mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"async",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="index.html"',title:'"index.html"'},'<div id="notDisplayed" style="display: none"></div>\n<div id="notVisible" style="visibility: hidden"></div>\n<div id="notInViewport" style="position:absolute; left: 9999999"></div>\n<div id="zeroOpacity" style="opacity: 0"></div>\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="isDisplayed.js"',title:'"isDisplayed.js"'},"it('should detect if an element is displayed', async () => {\n    let elem = await $('#notDisplayed');\n    let isDisplayed = await elem.isDisplayed();\n    console.log(isDisplayed); // outputs: false\n\n    elem = await $('#notVisible');\n\n    isDisplayed = await elem.isDisplayed();\n    console.log(isDisplayed); // outputs: false\n\n    elem = await $('#notExisting');\n    isDisplayed = await elem.isDisplayed();\n    console.log(isDisplayed); // outputs: false\n\n    elem = await $('#notInViewport');\n    isDisplayed = await elem.isDisplayed();\n    console.log(isDisplayed); // outputs: true\n\n    elem = await $('#zeroOpacity');\n    isDisplayed = await elem.isDisplayed();\n    console.log(isDisplayed); // outputs: true\n});\n"))),(0,l.kt)(r.Z,{value:"sync",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="index.html"',title:'"index.html"'},'<div id="notDisplayed" style="display: none"></div>\n<div id="notVisible" style="visibility: hidden"></div>\n<div id="notInViewport" style="position:absolute; left: 9999999"></div>\n<div id="zeroOpacity" style="opacity: 0"></div>\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="isDisplayed.js"',title:'"isDisplayed.js"'},"it('should detect if an element is displayed', () => {\n    let elem = $('#notDisplayed');\n    let isDisplayed = elem.isDisplayed();\n    console.log(isDisplayed); // outputs: false\n\n    elem = $('#notVisible');\n\n    isDisplayed = elem.isDisplayed();\n    console.log(isDisplayed); // outputs: false\n\n    elem = $('#notExisting');\n    isDisplayed = elem.isDisplayed();\n    console.log(isDisplayed); // outputs: false\n\n    elem = $('#notInViewport');\n    isDisplayed = elem.isDisplayed();\n    console.log(isDisplayed); // outputs: true\n\n    elem = $('#zeroOpacity');\n    isDisplayed = elem.isDisplayed();\n    console.log(isDisplayed); // outputs: true\n});\n")),(0,l.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Synchronous Mode will depcrecated with Node.js v16. With an update to the\nunderlying Chromium version it became technically impossible to provide the\nsame synchronous behavior. We recommend to start transition to asynchronous\ncommand execution. For more information, see our ",(0,l.kt)("a",{href:"https://github.com/webdriverio/webdriverio/discussions/6702"},"RFC"),"."))))))}v.isMDXComponent=!0}}]);