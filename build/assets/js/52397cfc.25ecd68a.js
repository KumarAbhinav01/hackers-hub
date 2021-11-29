"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4590],{4137:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return d}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=p(t),d=o,m=f["".concat(s,".").concat(d)]||f[d]||c[d]||i;return t?r.createElement(m,a(a({ref:n},u),{},{components:t})):r.createElement(m,a({ref:n},u))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=f;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=t[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},8448:function(e,n,t){var r=t(7294);n.Z=function(e){var n=e.children,t=e.hidden,o=e.className;return r.createElement("div",{role:"tabpanel",hidden:t,className:o},n)}},7225:function(e,n,t){t.d(n,{Z:function(){return f}});var r=t(7462),o=t(7294),i=t(1048),a=t(2713);var l=function(){var e=(0,o.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},s=t(3309),p=t(6010),u="tabItem_vU9c";function c(e){var n,t,r,i=e.lazy,a=e.block,c=e.defaultValue,f=e.values,d=e.groupId,m=e.className,h=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=f?f:h.map((function(e){var n=e.props;return{value:n.value,label:n.label}})),y=(0,s.lx)(v,(function(e,n){return e.value===n.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===c?c:null!=(n=null!=c?c:null==(t=h.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(r=h[0])?void 0:r.props.value;if(null!==k&&!v.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=l(),g=b.tabGroupChoices,x=b.setTabGroupChoices,w=(0,o.useState)(k),N=w[0],C=w[1],T=[],E=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var O=g[d];null!=O&&O!==N&&v.some((function(e){return e.value===O}))&&C(O)}var P=function(e){var n=e.currentTarget,t=T.indexOf(n),r=v[t].value;r!==N&&(E(n),C(r),null!=d&&x(d,r))},j=function(e){var n,t=null;switch(e.key){case"ArrowRight":var r=T.indexOf(e.currentTarget)+1;t=T[r]||T[0];break;case"ArrowLeft":var o=T.indexOf(e.currentTarget)-1;t=T[o]||T[T.length-1]}null==(n=t)||n.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,p.Z)("tabs",{"tabs--block":a},m)},v.map((function(e){var n=e.value,t=e.label;return o.createElement("li",{role:"tab",tabIndex:N===n?0:-1,"aria-selected":N===n,className:(0,p.Z)("tabs__item",u,{"tabs__item--active":N===n}),key:n,ref:function(e){return T.push(e)},onKeyDown:j,onFocus:P,onClick:P},null!=t?t:n)}))),i?(0,o.cloneElement)(h.filter((function(e){return e.props.value===N}))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},h.map((function(e,n){return(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==N})}))))}function f(e){var n=(0,i.Z)();return o.createElement(c,(0,r.Z)({key:String(n)},e))}},2713:function(e,n,t){var r=(0,t(7294).createContext)(void 0);n.Z=r},6219:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return f}});var r=t(7462),o=t(3366),i=(t(7294),t(4137)),a=(t(7225),t(8448),["components"]),l={id:"firefox-profile-service",title:"Firefox Profile Service",custom_edit_url:"https://github.com/webdriverio/webdriverio/edit/main/packages/wdio-firefox-profile-service/README.md"},s=void 0,p={unversionedId:"firefox-profile-service",id:"firefox-profile-service",isDocsHomePage:!1,title:"Firefox Profile Service",description:"You want to run your Firefox browser with a specific extension or need to set couple preferences? Selenium allows you to use a profile for the Firefox browser by passing this profile as base64 string to the firefox_profile property in your desired capabilities. This requires to build that profile and convert it into base64. This service for the wdio testrunner takes the work of compiling the profile out of your hand and let's you define your desired options comfortable from the wdio.conf.js file.",source:"@site/docs/_firefox-profile-service.md",sourceDirName:".",slug:"/firefox-profile-service",permalink:"/docs/firefox-profile-service",editUrl:"https://github.com/webdriverio/webdriverio/edit/main/packages/wdio-firefox-profile-service/README.md",tags:[],version:"current",frontMatter:{id:"firefox-profile-service",title:"Firefox Profile Service",custom_edit_url:"https://github.com/webdriverio/webdriverio/edit/main/packages/wdio-firefox-profile-service/README.md"},sidebar:"docs",previous:{title:"Devtools Service",permalink:"/docs/devtools-service"},next:{title:"Sauce Service",permalink:"/docs/sauce-service"}},u=[{value:"Installation",id:"installation",children:[],level:2},{value:"Configuration",id:"configuration",children:[],level:2},{value:"Options",id:"options",children:[{value:"extensions",id:"extensions",children:[],level:3},{value:"profileDirectory",id:"profiledirectory",children:[],level:3},{value:"proxy",id:"proxy",children:[],level:3},{value:"legacy",id:"legacy",children:[],level:3}],level:2}],c={toc:u};function f(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"You want to run your Firefox browser with a specific extension or need to set couple preferences? Selenium allows you to use a profile for the Firefox browser by passing this profile as ",(0,i.kt)("inlineCode",{parentName:"p"},"base64")," string to the ",(0,i.kt)("inlineCode",{parentName:"p"},"firefox_profile")," property in your desired capabilities. This requires to build that profile and convert it into ",(0,i.kt)("inlineCode",{parentName:"p"},"base64"),". This service for the ",(0,i.kt)("a",{parentName:"p",href:"https://webdriver.io/docs/clioptions"},"wdio testrunner")," takes the work of compiling the profile out of your hand and let's you define your desired options comfortable from the ",(0,i.kt)("inlineCode",{parentName:"p"},"wdio.conf.js")," file."),(0,i.kt)("p",null,"To find all possible options just open ",(0,i.kt)("a",{parentName:"p",href:"about:config"},"about:config")," in your Firefox browser or go to ",(0,i.kt)("a",{parentName:"p",href:"http://kb.mozillazine.org/About:config_entries"},"mozillaZine")," website to find the whole documentation about each setting. In Addition to that you can define compiled (as ",(0,i.kt)("inlineCode",{parentName:"p"},"*.xpi"),") Firefox extensions that should get installed before the test starts."),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("p",null,"The easiest way is to keep ",(0,i.kt)("inlineCode",{parentName:"p"},"@wdio/firefox-profile-service")," as a devDependency in your ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json"),", via:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"npm install @wdio/firefox-profile-service --save-dev\n")),(0,i.kt)("p",null,"Instructions on how to install ",(0,i.kt)("inlineCode",{parentName:"p"},"WebdriverIO")," can be found ",(0,i.kt)("a",{parentName:"p",href:"https://webdriver.io/docs/gettingstarted"},"here.")),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,"Setup your profile by adding the ",(0,i.kt)("inlineCode",{parentName:"p"},"firefox-profile")," service to your service list. Then define your settings in the ",(0,i.kt)("inlineCode",{parentName:"p"},"firefoxProfile")," property like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// wdio.conf.js\nexport.config = {\n    // ...\n    services: [\n        ['firefox-profile', {\n            extensions: [\n                '/path/to/extensionA.xpi', // path to .xpi file\n                '/path/to/extensionB' // or path to unpacked Firefox extension\n            ],\n            'xpinstall.signatures.required': false,\n            'browser.startup.homepage': 'https://webdriver.io',\n            legacy: true // only use for firefox <= 55\n        }]\n    ],\n    // ...\n};\n")),(0,i.kt)("p",null,"If you have built a custom Firefox extension that you want to install in the browser make sure to set ",(0,i.kt)("inlineCode",{parentName:"p"},"'xpinstall.signatures.required': false")," as profile flag since Firefox extensions are required to be ",(0,i.kt)("a",{parentName:"p",href:"https://wiki.mozilla.org/Add-ons/Extension_Signing"},"signed by Mozilla"),"."),(0,i.kt)("p",null,"To use custom unsigned extensions you will also need to use ",(0,i.kt)("a",{parentName:"p",href:"https://www.mozilla.org/en-GB/firefox/developer/"},"Firefox Developer Edition")," since the regular Firefox 48 and newer ",(0,i.kt)("a",{parentName:"p",href:"https://wiki.mozilla.org/Add-ons/Extension_Signing#Timeline"},"do not allow this"),"."),(0,i.kt)("h2",{id:"options"},"Options"),(0,i.kt)("p",null,"Contains all settings as key value pair. You can find all available settings on the ",(0,i.kt)("inlineCode",{parentName:"p"},"about:config")," page."),(0,i.kt)("h3",{id:"extensions"},"extensions"),(0,i.kt)("p",null,"Add one or multiple extensions to the browser session. All entries can be either an absolute path to the ",(0,i.kt)("inlineCode",{parentName:"p"},".xpi")," file or the path to an unpacked Firefox extension directory."),(0,i.kt)("p",null,"Type: ",(0,i.kt)("inlineCode",{parentName:"p"},"String[]"),(0,i.kt)("br",null),"\nDefault: ",(0,i.kt)("inlineCode",{parentName:"p"},"[]")),(0,i.kt)("h3",{id:"profiledirectory"},"profileDirectory"),(0,i.kt)("p",null,"Create Firefox profile based on an existing one by setting an absolute path to that profile."),(0,i.kt)("p",null,"Type: ",(0,i.kt)("inlineCode",{parentName:"p"},"String"),(0,i.kt)("br",null),"\nDefault: ",(0,i.kt)("inlineCode",{parentName:"p"},"null")),(0,i.kt)("h3",{id:"proxy"},"proxy"),(0,i.kt)("p",null,"Set network proxy settings. The parameter ",(0,i.kt)("inlineCode",{parentName:"p"},"proxy")," is a hash which structure depends on the value of mandatory ",(0,i.kt)("inlineCode",{parentName:"p"},"proxyType")," key, which takes one of the following string values:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"direct")," - direct connection (no proxy)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"system")," - use operating system proxy settings"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"pac")," - use automatic proxy configuration set based on the value of ",(0,i.kt)("inlineCode",{parentName:"li"},"autoconfigUrl")," key"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"manual")," - manual proxy settings defined separately for different protocols using values from following keys: ",(0,i.kt)("inlineCode",{parentName:"li"},"ftpProxy"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"httpProxy"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"sslProxy"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"socksProxy"))),(0,i.kt)("p",null,"Type: ",(0,i.kt)("inlineCode",{parentName:"p"},"Object"),(0,i.kt)("br",null),"\nDefault: ",(0,i.kt)("inlineCode",{parentName:"p"},"null"),(0,i.kt)("br",null),"\nExample:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Automatic Proxy:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// wdio.conf.js\nexport.config = {\n    // ...\n    services: [\n        ['firefox-profile', {\n            proxy: {\n                proxyType: 'pac',\n                autoconfigUrl: 'http://myserver/proxy.pac'\n            }\n        }]\n    ],\n    // ...\n};\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Manual HTTP Proxy:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// wdio.conf.js\nexport.config = {\n    // ...\n    services: [\n        ['firefox-profile', {\n            proxy: {\n                proxyType: 'manual',\n                httpProxy: '127.0.0.1:8080'\n            }\n        }]\n    ],\n    // ...\n};\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Manual HTTP and HTTPS Proxy:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// wdio.conf.js\nexport.config = {\n    // ...\n    services: [\n        ['firefox-profile', {\n            proxy: {\n                proxyType: 'manual',\n                httpProxy: '127.0.0.1:8080',\n                sslProxy: '127.0.0.1:8080'\n            }\n        }]\n    ],\n    // ...\n};\n")))),(0,i.kt)("h3",{id:"legacy"},"legacy"),(0,i.kt)("p",null,"Please set this flag to ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," if you use Firefox v55 or lower."),(0,i.kt)("p",null,"Type: ",(0,i.kt)("inlineCode",{parentName:"p"},"Boolean"),(0,i.kt)("br",null),"\nDefault: ",(0,i.kt)("inlineCode",{parentName:"p"},"false")),(0,i.kt)("hr",null),(0,i.kt)("p",null,"For more information on WebdriverIO see the ",(0,i.kt)("a",{parentName:"p",href:"https://webdriver.io"},"homepage"),"."))}f.isMDXComponent=!0}}]);