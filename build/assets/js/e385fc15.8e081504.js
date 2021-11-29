"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1845],{4137:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return u}});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=o.createContext({}),l=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(r),u=n,m=d["".concat(c,".").concat(u)]||d[u]||h[u]||a;return r?o.createElement(m,i(i({ref:t},p),{},{components:r})):o.createElement(m,i({ref:t},p))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9779:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},assets:function(){return p},toc:function(){return h},default:function(){return u}});var o=r(7462),n=r(3366),a=(r(7294),r(4137)),i=["components"],s={title:"Sync API Deprecation",author:"Christian Bromann",authorURL:"http://twitter.com/bromann",authorImageURL:"https://s.gravatar.com/avatar/d98b16d7c93d15865f34a225dd4b1254?s=80"},c=void 0,l={permalink:"/blog/2021/07/28/sync-api-deprecation",editUrl:"https://github.com/Abhi6722/hackers-hub/edit/main/website/blog/blog/2021-07-28-sync-api-deprecation.md",source:"@site/blog/2021-07-28-sync-api-deprecation.md",title:"Sync API Deprecation",description:"For many years one of the selling features of the WebdriverIO framework was its synchronous API. Especially for folks coming from more synchronous oriented languages such as Java or Ruby, it has helped to avoid race conditions when executing commands. But also people that are more familiar with Promises tend to prefer synchronous execution as it made the code easier to read and handle.",date:"2021-07-28T00:00:00.000Z",formattedDate:"July 28, 2021",tags:[],readingTime:3,truncated:!1,authors:[{name:"Christian Bromann",url:"http://twitter.com/bromann",imageURL:"https://s.gravatar.com/avatar/d98b16d7c93d15865f34a225dd4b1254?s=80"}],prevItem:{title:"WebdriverIO, meet Serenity/JS",permalink:"/blog/2021/08/25/webdriverio-meet-serenity-js"},nextItem:{title:"Case Study - How WebdriverIO facilitated faster releases and better code quality for an online video company",permalink:"/blog/2021/06/22/jwplayer-case-study"}},p={authorsImageUrls:[void 0]},h=[],d={toc:h};function u(e){var t=e.components,r=(0,n.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"For many years one of the selling features of the WebdriverIO framework was its synchronous API. Especially for folks coming from more synchronous oriented languages such as Java or Ruby, it has helped to avoid race conditions when executing commands. But also people that are more familiar with ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise"},"Promises")," tend to prefer synchronous execution as it made the code easier to read and handle."),(0,a.kt)("p",null,"Running asynchronous commands in a synchronous way was possible with the help of the ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@wdio/sync"},(0,a.kt)("inlineCode",{parentName:"a"},"@wdio/sync"))," package. If installed, WebdriverIO would automatically wrap the commands with utility methods that were using the ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/fibers"},(0,a.kt)("inlineCode",{parentName:"a"},"fibers"))," package to create a synchronous execution environment. It uses some internal V8 APIs to allow to jump between multiple call stacks from within a single thread. This approach also has been popular among other projects, e.g. ",(0,a.kt)("a",{parentName:"p",href:"https://www.meteor.com/"},"Meteor"),", where most of the code is written using asynchronous APIs which causes developers to constantly start the line of code with ",(0,a.kt)("inlineCode",{parentName:"p"},"await"),"."),(0,a.kt)("p",null,"Last year the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/laverdet"},"author")," of the Fibers package ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/laverdet/node-fibers/commit/e2a0ed9c6d985f94c2b1947eaf72d5797e8a3278"},"announced")," that he would no longer continue to maintain the project anymore. He built Fibers when JavaScript did not have any proper mechanism to handle asynchronous code other than using callbacks. With JavaScript evolving and adding APIs like ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise"},"Promises")," or ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator"},"Generators")," there is technically no reason anymore for Fibers to exist other than preference of code style. Now with the release of Node.js v16 and the update to ",(0,a.kt)("a",{parentName:"p",href:"https://v8.dev/"},"V8")," v9 Fibers stopped working due to a ",(0,a.kt)("a",{parentName:"p",href:"https://chromium-review.googlesource.com/c/v8/v8/+/2537690"},"change in V8")," that would remove some internal interfaces Fibers was using. Given that a fix for this is non trivial and the maintainer already stepped down from the project it is unlikely that we will see support for Fibers in Node.js v16 and on."),(0,a.kt)("p",null,"After the WebdriverIO team discovered this we immediately took action and evaluated our options. We opened an ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/webdriverio/webdriverio/discussions/6702"},"RFC")," to discuss with the community in which direction the project should go. I would like to thank everyone who chimed in and provided their opinion. We experimented with some alternative options, e.g. using Babel to transpile synchronous code into asynchronous but they all failed due to various reasons. The ultimate decision was made to accept the fact that synchronous command execution won't be possible moving on and rather embrace asynchronicity."),(0,a.kt)("p",null,"With the release of WebdriverIO ",(0,a.kt)("inlineCode",{parentName:"p"},"v7.9")," we are happy to announce that we improved our asynchronous API and matched it with the synchronous one. When chaining element command calls users had to write aweful code like this before:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"await (await (await $('#foo')).$$('.bar'))[42].click()\n")),(0,a.kt)("p",null,"now this got simiplified to this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"await $('#foo').$$('.bar')[42].click()\n")),(0,a.kt)("p",null,"Thanks to the enormous power of the ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy"},"Proxy Object")," the API is now much more streamlined and less verbose. This will also help users migrating a project that uses the synchronous API to become asynchronous. The team will work on a ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/webdriverio/codemod/issues/1"},"codemod")," to help make this process as automated and easy as possible."),(0,a.kt)("p",null,"At this point the WebdriverIO team wants to thank Marcel Laverdet (",(0,a.kt)("inlineCode",{parentName:"p"},"@laverdet")," on ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/laverdet"},"GitHub"),") for building Fibers and maintaining it for so many years. It is time to move on and embrace all the great JavaScript language feature many people have worked hard on. While we have updated the code examples in our docs, ",(0,a.kt)("inlineCode",{parentName:"p"},"@wdio/sync")," will continue to be supported until we drop support for Node.js v14 and earlier which won't happen before April 2023. You will have enough time to slowly migrate your tests using ",(0,a.kt)("inlineCode",{parentName:"p"},"async/await"),"."),(0,a.kt)("p",null,"If you have any questions on this or the migration from a framework writing with synchronous commands to asynchronous code, feel free to drop us a line in our ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/webdriverio/webdriverio/discussions/new"},"discussion forum")," or on ",(0,a.kt)("a",{parentName:"p",href:"https://gitter.im/webdriverio/webdriverio"},"Gitter"),"."))}u.isMDXComponent=!0}}]);