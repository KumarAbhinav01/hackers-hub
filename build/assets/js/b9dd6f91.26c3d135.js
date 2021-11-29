"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1803],{4137:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return v}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(r),v=a,m=p["".concat(s,".").concat(v)]||p[v]||d[v]||i;return r?n.createElement(m,o(o({ref:t},c),{},{components:r})):n.createElement(m,o({ref:t},c))}));function v(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},8448:function(e,t,r){var n=r(7294);t.Z=function(e){var t=e.children,r=e.hidden,a=e.className;return n.createElement("div",{role:"tabpanel",hidden:r,className:a},t)}},7225:function(e,t,r){r.d(t,{Z:function(){return p}});var n=r(7462),a=r(7294),i=r(1048),o=r(2713);var l=function(){var e=(0,a.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},s=r(3309),u=r(6010),c="tabItem_vU9c";function d(e){var t,r,n,i=e.lazy,o=e.block,d=e.defaultValue,p=e.values,v=e.groupId,m=e.className,f=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=p?p:f.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),b=(0,s.lx)(h,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===d?d:null!=(t=null!=d?d:null==(r=f.find((function(e){return e.props.default})))?void 0:r.props.value)?t:null==(n=f[0])?void 0:n.props.value;if(null!==k&&!h.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=l(),w=g.tabGroupChoices,y=g.setTabGroupChoices,N=(0,a.useState)(k),O=N[0],C=N[1],j=[],E=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=v){var T=w[v];null!=T&&T!==O&&h.some((function(e){return e.value===T}))&&C(T)}var S=function(e){var t=e.currentTarget,r=j.indexOf(t),n=h[r].value;n!==O&&(E(t),C(n),null!=v&&y(v,n))},x=function(e){var t,r=null;switch(e.key){case"ArrowRight":var n=j.indexOf(e.currentTarget)+1;r=j[n]||j[0];break;case"ArrowLeft":var a=j.indexOf(e.currentTarget)-1;r=j[a]||j[j.length-1]}null==(t=r)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":o},m)},h.map((function(e){var t=e.value,r=e.label;return a.createElement("li",{role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,className:(0,u.Z)("tabs__item",c,{"tabs__item--active":O===t}),key:t,ref:function(e){return j.push(e)},onKeyDown:x,onFocus:S,onClick:S},null!=r?r:t)}))),i?(0,a.cloneElement)(f.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}function p(e){var t=(0,i.Z)();return a.createElement(d,(0,n.Z)({key:String(t)},e))}},2713:function(e,t,r){var n=(0,r(7294).createContext)(void 0);t.Z=n},649:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return c},default:function(){return p}});var n=r(7462),a=r(3366),i=(r(7294),r(4137)),o=(r(7225),r(8448),["components"]),l={id:"static-server-service",title:"Static Server Service",custom_edit_url:"https://github.com/webdriverio/webdriverio/edit/main/packages/wdio-static-server-service/README.md"},s=void 0,u={unversionedId:"static-server-service",id:"static-server-service",isDocsHomePage:!1,title:"Static Server Service",description:"Some projects are front-end assets only, and don't run on more than a static server. This service helps you to run a static file server during testing.",source:"@site/docs/_static-server-service.md",sourceDirName:".",slug:"/static-server-service",permalink:"/docs/static-server-service",editUrl:"https://github.com/webdriverio/webdriverio/edit/main/packages/wdio-static-server-service/README.md",tags:[],version:"current",frontMatter:{id:"static-server-service",title:"Static Server Service",custom_edit_url:"https://github.com/webdriverio/webdriverio/edit/main/packages/wdio-static-server-service/README.md"},sidebar:"docs",previous:{title:"Shared Store Service",permalink:"/docs/shared-store-service"},next:{title:"Testingbot Service",permalink:"/docs/testingbot-service"}},c=[{value:"Installation",id:"installation",children:[],level:2},{value:"Configuration",id:"configuration",children:[],level:2},{value:"Options",id:"options",children:[{value:"<code>folders</code> (required)",id:"folders-required",children:[],level:3},{value:"<code>port</code>",id:"port",children:[],level:3},{value:"<code>middleware</code>",id:"middleware",children:[],level:3}],level:2}],d={toc:c};function p(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Some projects are front-end assets only, and don't run on more than a static server. This service helps you to run a static file server during testing."),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("p",null,"The easiest way is to add ",(0,i.kt)("inlineCode",{parentName:"p"},"@wdio/static-server-service")," as a ",(0,i.kt)("inlineCode",{parentName:"p"},"devDependency")," in your ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json"),", via:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"npm install @wdio/static-server-service --save-dev\n")),(0,i.kt)("p",null,"Instructions on how to install ",(0,i.kt)("inlineCode",{parentName:"p"},"WebdriverIO")," can be found ",(0,i.kt)("a",{parentName:"p",href:"https://webdriver.io/docs/gettingstarted"},"here"),"."),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,"To use the static server service, add ",(0,i.kt)("inlineCode",{parentName:"p"},"static-server")," to your service array:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// wdio.conf.js\nexport.config = {\n    // ...\n    services: ['static-server'],\n    // ...\n};\n")),(0,i.kt)("h2",{id:"options"},"Options"),(0,i.kt)("h3",{id:"folders-required"},(0,i.kt)("inlineCode",{parentName:"h3"},"folders")," (required)"),(0,i.kt)("p",null,"Array of folder paths and mount points."),(0,i.kt)("p",null,"Type: ",(0,i.kt)("inlineCode",{parentName:"p"},"Array<Object>"),"\nProps:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"mount ",(0,i.kt)("inlineCode",{parentName:"li"},"{String}")," - URL endpoint where folder will be mounted."),(0,i.kt)("li",{parentName:"ul"},"path ",(0,i.kt)("inlineCode",{parentName:"li"},"{String}")," - Path to the folder to mount.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"}," // wdio.conf.js\n export.config = {\n    // ...\n    services: [\n        ['static-server', {\n            folders: [\n                { mount: '/fixtures', path: './tests/fixtures' },\n                { mount: '/dist', path: './dist' },\n            ]\n        }]\n    ],\n    // ...\n };\n")),(0,i.kt)("h3",{id:"port"},(0,i.kt)("inlineCode",{parentName:"h3"},"port")),(0,i.kt)("p",null,"Port to bind the server."),(0,i.kt)("p",null,"Type: ",(0,i.kt)("inlineCode",{parentName:"p"},"Number")),(0,i.kt)("p",null,"Default: ",(0,i.kt)("inlineCode",{parentName:"p"},"4567")),(0,i.kt)("h3",{id:"middleware"},(0,i.kt)("inlineCode",{parentName:"h3"},"middleware")),(0,i.kt)("p",null,"Array of middleware objects. Load and instatiate these in the config, and pass them in for the static server to use."),(0,i.kt)("p",null,"Type: ",(0,i.kt)("inlineCode",{parentName:"p"},"Array<Object>"),"\nProps:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"mount ",(0,i.kt)("inlineCode",{parentName:"li"},"{String}")," - URL endpoint where middleware will be mounted."),(0,i.kt)("li",{parentName:"ul"},"middleware ",(0,i.kt)("inlineCode",{parentName:"li"},"<Object>")," - Middleware function callback.")),(0,i.kt)("p",null,"Default: ",(0,i.kt)("inlineCode",{parentName:"p"},"[]")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"// wdio.conf.js\nconst middleware = require('middleware-package')\n\nexport.config = {\n    // ...\n    services: [\n        ['static-server', {\n            middleware: [{\n                mount: '/',\n                middleware: middleware(/* middleware options */),\n            }],\n        }]\n    ],\n    // ...\n};\n")),(0,i.kt)("hr",null),(0,i.kt)("p",null,"For more information on WebdriverIO, see the ",(0,i.kt)("a",{parentName:"p",href:"http://webdriver.io"},"homepage"),"."))}p.isMDXComponent=!0}}]);