"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4618],{4137:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,h=u["".concat(l,".").concat(d)]||u[d]||p[d]||i;return n?r.createElement(h,o(o({ref:t},m),{},{components:n})):r.createElement(h,o({ref:t},m))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},353:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return m},default:function(){return u}});var r=n(7462),a=n(3366),i=(n(7294),n(4137)),o=["components"],s={id:"multiremote",title:"Multiremote"},l=void 0,c={unversionedId:"multiremote",id:"multiremote",isDocsHomePage:!1,title:"Multiremote",description:"WebdriverIO allows you to run multiple automated sessions in a single test. This becomes handy when you\u2019re testing features that require multiple users (for example, chat or WebRTC applications).",source:"@site/docs/Multiremote.md",sourceDirName:".",slug:"/multiremote",permalink:"/docs/multiremote",editUrl:"https://github.com/Abhi6722/hackers-hub/edit/main/website/docs/Multiremote.md",tags:[],version:"current",frontMatter:{id:"multiremote",title:"Multiremote"},sidebar:"docs",previous:{title:"Automation Protocols",permalink:"/docs/automationProtocols"},next:{title:"Auto-waiting",permalink:"/docs/autowait"}},m=[{value:"Using Standalone Mode",id:"using-standalone-mode",children:[],level:2},{value:"Using WDIO Testrunner",id:"using-wdio-testrunner",children:[],level:2},{value:"Accessing browser instances using strings via the browser object",id:"accessing-browser-instances-using-strings-via-the-browser-object",children:[],level:2}],p={toc:m};function u(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"WebdriverIO allows you to run multiple automated sessions in a single test. This becomes handy when you\u2019re testing features that require multiple users (for example, chat or WebRTC applications)."),(0,i.kt)("p",null,"Instead of creating a couple of remote instances where you need to execute common commands like ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/webdriver#newsession"},(0,i.kt)("inlineCode",{parentName:"a"},"newSession"))," or ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/browser/url"},(0,i.kt)("inlineCode",{parentName:"a"},"url"))," on each instance, you can simply create a ",(0,i.kt)("strong",{parentName:"p"},"multiremote")," instance and control all browsers at the same time."),(0,i.kt)("p",null,"To do so, just use the ",(0,i.kt)("inlineCode",{parentName:"p"},"multiremote()")," function, and pass in an object with names keyed to ",(0,i.kt)("inlineCode",{parentName:"p"},"capabilities")," for values. By giving each capability a name, you can easily select and access that single instance when executing commands on a single instance."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Multiremote is ",(0,i.kt)("em",{parentName:"p"},"not")," meant to execute all your tests in parallel.\nIt is intended to help coordinate multiple browsers and/or mobile devices for special integration tests (e.g. chat applications)."))),(0,i.kt)("p",null,"All multiremote instances return an array of results. The first result represents the capability defined first in the capability object the second result the second capability and so on."),(0,i.kt)("h2",{id:"using-standalone-mode"},"Using Standalone Mode"),(0,i.kt)("p",null,"Here is an example of how to create a multiremote instance in ",(0,i.kt)("strong",{parentName:"p"},"standalone mode"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import { multiremote } from 'webdriverio'\n\n(async () => {\n    const browser = await multiremote({\n        myChromeBrowser: {\n            capabilities: {\n                browserName: 'chrome'\n            }\n        },\n        myFirefoxBrowser: {\n            capabilities: {\n                browserName: 'firefox'\n            }\n        }\n    })\n\n    // open url with both browser at the same time\n    await browser.url('http://json.org')\n\n    // call commands at the same time\n    const title = await browser.getTitle()\n    expect(title).toEqual(['JSON', 'JSON'])\n\n    // click on an element at the same time\n    const elem = await browser.$('#someElem')\n    await elem.click()\n\n    // only click with one browser (Firefox)\n    await elem.myFirefoxBrowser.click()\n})()\n")),(0,i.kt)("h2",{id:"using-wdio-testrunner"},"Using WDIO Testrunner"),(0,i.kt)("p",null,"In order to use multiremote in the WDIO testrunner, just define the ",(0,i.kt)("inlineCode",{parentName:"p"},"capabilities")," object in your ",(0,i.kt)("inlineCode",{parentName:"p"},"wdio.conf.js")," as an object with the browser names as keys (instead of a list of capabilities):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"export.config = {\n    // ...\n    capabilities: {\n        myChromeBrowser: {\n            capabilities: {\n                browserName: 'chrome'\n            }\n        },\n        myFirefoxBrowser: {\n            capabilities: {\n                browserName: 'firefox'\n            }\n        }\n    }\n    // ...\n}\n")),(0,i.kt)("p",null,"This will create two WebDriver sessions with Chrome and Firefox. Instead of just Chrome and Firefox you can also boot up two mobile devices using ",(0,i.kt)("a",{parentName:"p",href:"http://appium.io"},"Appium")," or one mobile device and one browser."),(0,i.kt)("p",null,"You can even boot up one of the ",(0,i.kt)("a",{parentName:"p",href:"https://webdriver.io/docs/cloudservices.html"},"cloud services backend")," together with local Webdriver/Appium, or Selenium Standalone instances. WebdriverIO automatically detect cloud backend capabilities if you specified either of ",(0,i.kt)("inlineCode",{parentName:"p"},"bstack:options")," (",(0,i.kt)("a",{parentName:"p",href:"https://webdriver.io/docs/browserstack-service.html"},"Browserstack"),"), ",(0,i.kt)("inlineCode",{parentName:"p"},"sauce:options")," (",(0,i.kt)("a",{parentName:"p",href:"https://webdriver.io/docs/sauce-service.html"},"SauceLabs"),"), or ",(0,i.kt)("inlineCode",{parentName:"p"},"tb:options")," (",(0,i.kt)("a",{parentName:"p",href:"https://webdriver.io/docs/testingbot-service.html"},"TestingBot"),") in browser capabilities."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"export.config = {\n    // ...\n    user: process.env.BROWSERSTACK_USERNAME,\n    key: process.env.BROWSERSTACK_ACCESS_KEY,\n    capabilities: {\n        myChromeBrowser: {\n            capabilities: {\n                browserName: 'chrome'\n            }\n        },\n        myBrowserStackFirefoxBrowser: {\n            capabilities: {\n                browserName: 'firefox',\n                'bstack:options': {\n                    // ...\n                }\n            }\n        }\n    },\n    services: [\n        ['browserstack', 'selenium-standalone']\n    ],\n    // ...\n}\n")),(0,i.kt)("p",null,"Any kind of OS/browser combination is possible here (including mobile and desktop browsers). All commands your tests call via the ",(0,i.kt)("inlineCode",{parentName:"p"},"browser")," variable are executed in parallel with each instance. This helps streamline your integration tests and speed up their execution."),(0,i.kt)("p",null,"For example, if you open up a URL:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"browser.url('https://socketio-chat-h9jt.herokuapp.com/')\n")),(0,i.kt)("p",null,"Each command\u2019s result will be an object with the browser names as the key, and the command result as value, like so:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// wdio testrunner example\nawait browser.url('https://www.whatismybrowser.com')\n\nconst elem = await $('.string-major')\nconst result = await elem.getText()\n\nconsole.log(result[0]) // returns: 'Chrome 40 on Mac OS X (Yosemite)'\nconsole.log(result[1]) // returns: 'Firefox 35 on Mac OS X (Yosemite)'\n")),(0,i.kt)("p",null,"Notice that each command is executed one by one. This means that the command finishes once all browsers have executed it. This is helpful because it keeps the browser actions synced, which makes it easier to understand what\u2019s currently happening."),(0,i.kt)("p",null,"Sometimes it is necessary to do different things in each browser in order to test something. For instance, if we want to test a chat application, there has to be one browser who sends a text message while another browser waits to receive it, and then run an assertion on it."),(0,i.kt)("p",null,"When using the WDIO testrunner, it registers the browser names with their instances to the global scope:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"myChromeBrowser.$('#message').setValue('Hi, I am Chrome')\nmyChromeBrowser.$('#send').click()\n\n// wait until messages arrive\n$('.messages').waitForExist()\n// check if one of the messages contain the Chrome message\nassert.true(\n    (\n        await $$('.messages').map((m) => m.getText())\n    ).includes('Hi, I am Chrome')\n)\n")),(0,i.kt)("p",null,"In this example, the ",(0,i.kt)("inlineCode",{parentName:"p"},"myFirefoxBrowser")," instance will start waiting on a message once the ",(0,i.kt)("inlineCode",{parentName:"p"},"myChromeBrowser")," instance has clicked on ",(0,i.kt)("inlineCode",{parentName:"p"},"#send")," button."),(0,i.kt)("p",null,"Multiremote makes it easy and convenient to control multiple browsers, whether you want them doing the same thing in parallel, or different things in concert."),(0,i.kt)("h2",{id:"accessing-browser-instances-using-strings-via-the-browser-object"},"Accessing browser instances using strings via the browser object"),(0,i.kt)("p",null,"In addition to accessing the browser instance via their global variables (e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"myChromeBrowser"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"myFirefoxBrowser"),"), you can also access them via the ",(0,i.kt)("inlineCode",{parentName:"p"},"browser")," object, e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},'browser["myChromeBrowser"]')," or ",(0,i.kt)("inlineCode",{parentName:"p"},'browser["myFirefoxBrowser"]'),". You can get a list of all your instances via ",(0,i.kt)("inlineCode",{parentName:"p"},"browser.instances"),". This is especially useful when writing re-usable test steps that can be performed in either browser, e.g.:"),(0,i.kt)("p",null,"wdio.conf.js:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"    capabilities: {\n        userA: {\n            capabilities: {\n                browserName: 'chrome'\n            }\n        },\n        userB: {\n            capabilities: {\n                browserName: 'chrome'\n            }\n        }\n    }\n")),(0,i.kt)("p",null,"Cucumber file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"```feature\nWhen User A types a message into the chat\n```\n")),(0,i.kt)("p",null,"Step definition file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"When(/^User (.) types a message into the chat/, async (userId) => {\n    await browser[`user${userId}`].$('#message').setValue('Hi, I am Chrome')\n    await browser[`user${userId}`].$('#send').click()\n})\n")))}u.isMDXComponent=!0}}]);