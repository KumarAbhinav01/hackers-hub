"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3634],{4137:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return p}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),m=s(n),p=a,b=m["".concat(l,".").concat(p)]||m[p]||d[p]||o;return n?r.createElement(b,i(i({ref:t},c),{},{components:n})):r.createElement(b,i({ref:t},c))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:a,i[1]=u;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8448:function(e,t,n){var r=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},7225:function(e,t,n){n.d(t,{Z:function(){return m}});var r=n(7462),a=n(7294),o=n(1048),i=n(2713);var u=function(){var e=(0,a.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=n(3309),s=n(6010),c="tabItem_vU9c";function d(e){var t,n,r,o=e.lazy,i=e.block,d=e.defaultValue,m=e.values,p=e.groupId,b=e.className,v=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=m?m:v.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),f=(0,l.lx)(h,(function(e,t){return e.value===t.value}));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===d?d:null!=(t=null!=d?d:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(r=v[0])?void 0:r.props.value;if(null!==g&&!h.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=u(),y=w.tabGroupChoices,k=w.setTabGroupChoices,O=(0,a.useState)(g),N=O[0],E=O[1],x=[],j=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=p){var T=y[p];null!=T&&T!==N&&h.some((function(e){return e.value===T}))&&E(T)}var P=function(e){var t=e.currentTarget,n=x.indexOf(t),r=h[n].value;r!==N&&(j(t),E(r),null!=p&&k(p,r))},C=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=x.indexOf(e.currentTarget)+1;n=x[r]||x[0];break;case"ArrowLeft":var a=x.indexOf(e.currentTarget)-1;n=x[a]||x[x.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":i},b)},h.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,className:(0,s.Z)("tabs__item",c,{"tabs__item--active":N===t}),key:t,ref:function(e){return x.push(e)},onKeyDown:C,onFocus:P,onClick:P},null!=n?n:t)}))),o?(0,a.cloneElement)(v.filter((function(e){return e.props.value===N}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==N})}))))}function m(e){var t=(0,o.Z)();return a.createElement(d,(0,r.Z)({key:String(t)},e))}},2713:function(e,t,n){var r=(0,n(7294).createContext)(void 0);t.Z=r},7084:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return m},default:function(){return b}});var r=n(7462),a=n(3366),o=(n(7294),n(4137)),i=n(7225),u=n(8448),l=["components"],s={id:"debug",title:"debug",custom_edit_url:"https://github.com/Abhi6722/hackers-hub/edit/main/packages/webdriverio/src/commands/browser/debug.ts"},c=void 0,d={unversionedId:"api/browser/debug",id:"api/browser/debug",isDocsHomePage:!1,title:"debug",description:"This command helps you to debug your integration tests. It stops the running browser and gives",source:"@site/docs/api/browser/_debug.md",sourceDirName:"api/browser",slug:"/api/browser/debug",permalink:"/docs/api/browser/debug",editUrl:"https://github.com/Abhi6722/hackers-hub/edit/main/packages/webdriverio/src/commands/browser/debug.ts",tags:[],version:"current",frontMatter:{id:"debug",title:"debug",custom_edit_url:"https://github.com/Abhi6722/hackers-hub/edit/main/packages/webdriverio/src/commands/browser/debug.ts"},sidebar:"api",previous:{title:"custom$",permalink:"/docs/api/browser/custom$"},next:{title:"deleteCookies",permalink:"/docs/api/browser/deleteCookies"}},m=[{value:"Usage",id:"usage",children:[],level:5},{value:"Example",id:"example",children:[],level:5}],p={toc:m};function b(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This command helps you to debug your integration tests. It stops the running browser and gives\nyou time to jump into it and check the state of your application (e.g. using dev tools).\nYour terminal transforms into a ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Read%E2%80%93eval%E2%80%93print_loop"},"REPL"),"\ninterface that will allow you to try out certain commands, find elements and test actions on\nthem."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://webdriver.io/img/repl.gif"},(0,o.kt)("img",{parentName:"a",src:"https://webdriver.io/img/repl.gif",alt:"WebdriverIO REPL"}))),(0,o.kt)("p",null,"If you run the WDIO testrunner make sure you increase the timeout property of the test framework\nyou are using (e.g. Mocha or Jasmine) in order to prevent test termination due to a test timeout.\nAlso avoid executing the command with multiple capabilities running at the same time."),(0,o.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/xWwP-3B_YyE",frameborder:"0",allowFullScreen:!0}),(0,o.kt)("h5",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"browser.debug()\n")),(0,o.kt)("h5",{id:"example"},"Example"),(0,o.kt)(i.Z,{defaultValue:"async",className:"runtime",values:[{label:"Asynchronous Mode",value:"async"},{label:"Synchronous Mode",value:"sync"}],mdxType:"Tabs"},(0,o.kt)(u.Z,{value:"async",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="debug.js"',title:'"debug.js"'},"it('should demonstrate the debug command', async () => {\n    await $('#input').setValue('FOO')\n    await browser.debug() // jumping into the browser and change value of #input to 'BAR'\n    const value = await $('#input').getValue()\n    console.log(value) // outputs: \"BAR\"\n})\n"))),(0,o.kt)(u.Z,{value:"sync",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="debug.js"',title:'"debug.js"'},"it('should demonstrate the debug command', () => {\n    $('#input').setValue('FOO')\n    browser.debug() // jumping into the browser and change value of #input to 'BAR'\n    const value = $('#input').getValue()\n    console.log(value) // outputs: \"BAR\"\n})\n")),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Synchronous Mode will depcrecated with Node.js v16. With an update to the\nunderlying Chromium version it became technically impossible to provide the\nsame synchronous behavior. We recommend to start transition to asynchronous\ncommand execution. For more information, see our ",(0,o.kt)("a",{href:"https://github.com/webdriverio/webdriverio/discussions/6702"},"RFC"),"."))))))}b.isMDXComponent=!0}}]);