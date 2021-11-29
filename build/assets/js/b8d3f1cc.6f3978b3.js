"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5772],{4137:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,h=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8448:function(e,t,n){var r=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},7225:function(e,t,n){n.d(t,{Z:function(){return d}});var r=n(7462),a=n(7294),o=n(1048),i=n(2713);var l=function(){var e=(0,a.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},c=n(3309),s=n(6010),u="tabItem_vU9c";function p(e){var t,n,r,o=e.lazy,i=e.block,p=e.defaultValue,d=e.values,m=e.groupId,h=e.className,b=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=d?d:b.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),f=(0,c.lx)(v,(function(e,t){return e.value===t.value}));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===p?p:null!=(t=null!=p?p:null==(n=b.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(r=b[0])?void 0:r.props.value;if(null!==y&&!v.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=l(),k=g.tabGroupChoices,w=g.setTabGroupChoices,x=(0,a.useState)(y),N=x[0],T=x[1],O=[],j=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var A=k[m];null!=A&&A!==N&&v.some((function(e){return e.value===A}))&&T(A)}var E=function(e){var t=e.currentTarget,n=O.indexOf(t),r=v[n].value;r!==N&&(j(t),T(r),null!=m&&w(m,r))},C=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=O.indexOf(e.currentTarget)+1;n=O[r]||O[0];break;case"ArrowLeft":var a=O.indexOf(e.currentTarget)-1;n=O[a]||O[O.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":i},h)},v.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,className:(0,s.Z)("tabs__item",u,{"tabs__item--active":N===t}),key:t,ref:function(e){return O.push(e)},onKeyDown:C,onFocus:E,onClick:E},null!=n?n:t)}))),o?(0,a.cloneElement)(b.filter((function(e){return e.props.value===N}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},b.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==N})}))))}function d(e){var t=(0,o.Z)();return a.createElement(p,(0,r.Z)({key:String(t)},e))}},2713:function(e,t,n){var r=(0,n(7294).createContext)(void 0);t.Z=r},7819:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return d},default:function(){return h}});var r=n(7462),a=n(3366),o=(n(7294),n(4137)),i=n(7225),l=n(8448),c=["components"],s={id:"executeAsync",title:"executeAsync",custom_edit_url:"https://github.com/Abhi6722/hackers-hub/edit/main/packages/webdriverio/src/commands/browser/executeAsync.ts"},u=void 0,p={unversionedId:"api/browser/executeAsync",id:"api/browser/executeAsync",isDocsHomePage:!1,title:"executeAsync",description:"Inject a snippet of JavaScript into the page for execution in the context of the currently selected",source:"@site/docs/api/browser/_executeAsync.md",sourceDirName:"api/browser",slug:"/api/browser/executeAsync",permalink:"/docs/api/browser/executeAsync",editUrl:"https://github.com/Abhi6722/hackers-hub/edit/main/packages/webdriverio/src/commands/browser/executeAsync.ts",tags:[],version:"current",frontMatter:{id:"executeAsync",title:"executeAsync",custom_edit_url:"https://github.com/Abhi6722/hackers-hub/edit/main/packages/webdriverio/src/commands/browser/executeAsync.ts"},sidebar:"api",previous:{title:"execute",permalink:"/docs/api/browser/execute"},next:{title:"getCookies",permalink:"/docs/api/browser/getCookies"}},d=[{value:"Usage",id:"usage",children:[],level:5},{value:"Parameters",id:"parameters",children:[],level:5},{value:"Example",id:"example",children:[],level:5}],m={toc:d};function h(e){var t=e.components,n=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Inject a snippet of JavaScript into the page for execution in the context of the currently selected\nframe. The executed script is assumed to be asynchronous and must signal that is done by invoking\nthe provided callback, which is always provided as the final argument to the function. The value\nto this callback will be returned to the client."),(0,o.kt)("p",null,"Asynchronous script commands may not span page loads. If an unload event is fired while waiting\nfor a script result, an error should be returned to the client."),(0,o.kt)("p",null,"The script argument defines the script to execute in the form of a function body. The function will\nbe invoked with the provided args array and the values may be accessed via the arguments object\nin the order specified. The final argument will always be a callback function that must be invoked\nto signal that the script has finished."),(0,o.kt)("p",null,"Arguments may be any JSON-primitive, array, or JSON object. JSON objects that define a WebElement\nreference will be converted to the corresponding DOM element. Likewise, any WebElements in the script\nresult will be returned to the client as WebElement JSON objects."),(0,o.kt)("h5",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"browser.executeAsync(script, arguments)\n")),(0,o.kt)("h5",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Details"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("code",null,(0,o.kt)("var",null,"script"))),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("code",null,"String"),", ",(0,o.kt)("code",null,"Function")),(0,o.kt)("td",{parentName:"tr",align:null},"The script to execute.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("code",null,(0,o.kt)("var",null,"arguments")),(0,o.kt)("br",null),(0,o.kt)("span",{class:"label labelWarning"},"optional")),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"script arguments")))),(0,o.kt)("h5",{id:"example"},"Example"),(0,o.kt)(i.Z,{defaultValue:"async",className:"runtime",values:[{label:"Asynchronous Mode",value:"async"},{label:"Synchronous Mode",value:"sync"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"async",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="executeAsync.js"',title:'"executeAsync.js"'},"it('should execute async JavaScript on the page', async () => {\n    await browser.setTimeout({ script: 5000 })\n    const result = await browser.executeAsync(function(a, b, c, d, done) {\n        // browser context - you may not access client or console\n        setTimeout(() => {\n            done(a + b + c + d)\n        }, 3000);\n    }, 1, 2, 3, 4)\n    // node.js context - client and console are available\n    console.log(result) // outputs: 10\n});\n"))),(0,o.kt)(l.Z,{value:"sync",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="executeAsync.js"',title:'"executeAsync.js"'},"it('should execute JavaScript on the page', () => {\n    browser.setTimeout({ script: 5000 })\n    const result = browser.executeAsync(function(a, b, c, d, done) {\n        // browser context - you may not access client or console\n        setTimeout(() => {\n            done(a + b + c + d)\n        }, 3000);\n    }, 1, 2, 3, 4)\n    // node.js context - client and console are available\n    console.log(result) // outputs: 10\n});\n")),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Synchronous Mode will depcrecated with Node.js v16. With an update to the\nunderlying Chromium version it became technically impossible to provide the\nsame synchronous behavior. We recommend to start transition to asynchronous\ncommand execution. For more information, see our ",(0,o.kt)("a",{href:"https://github.com/webdriverio/webdriverio/discussions/6702"},"RFC"),"."))))))}h.isMDXComponent=!0}}]);