"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3749],{4137:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(r),m=o,h=d["".concat(l,".").concat(m)]||d[m]||c[m]||i;return r?n.createElement(h,a(a({ref:t},u),{},{components:r})):n.createElement(h,a({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6752:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var n=r(7462),o=r(3366),i=(r(7294),r(4137)),a=["components"],s={id:"customreporter",title:"Custom Reporter"},l=void 0,p={unversionedId:"customreporter",id:"customreporter",isDocsHomePage:!1,title:"Custom Reporter",description:"You can write your own custom reporter for the WDIO test runner that is tailored to your needs. And it\u2019s easy!",source:"@site/docs/CustomReporter.md",sourceDirName:".",slug:"/customreporter",permalink:"/docs/customreporter",editUrl:"https://github.com/Abhi6722/hackers-hub/edit/main/website/docs/CustomReporter.md",tags:[],version:"current",frontMatter:{id:"customreporter",title:"Custom Reporter"},sidebar:"docs",previous:{title:"Watch Test Files",permalink:"/docs/watcher"},next:{title:"Custom Services",permalink:"/docs/customservices"}},u=[{value:"Event Handler",id:"event-handler",children:[],level:2},{value:"Wait Until <code>isSynchronised</code>",id:"wait-until-issynchronised",children:[],level:2},{value:"Publish Reporter on NPM",id:"publish-reporter-on-npm",children:[{value:"Add Published Service to WDIO CLI and Docs",id:"add-published-service-to-wdio-cli-and-docs",children:[],level:3}],level:2}],c={toc:u};function d(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"You can write your own custom reporter for the WDIO test runner that is tailored to your needs. And it\u2019s easy!"),(0,i.kt)("p",null,"All you need to do is to create a node module that inherits from the ",(0,i.kt)("inlineCode",{parentName:"p"},"@wdio/reporter")," package, so it can receive messages from the test."),(0,i.kt)("p",null,"The basic setup should look like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import WDIOReporter from '@wdio/reporter'\n\nexport default class CustomReporter extends WDIOReporter {\n    constructor(options) {\n        /*\n         * make reporter to write to the output stream by default\n         */\n        options = Object.assign(options, { stdout: true })\n        super(options)\n    }\n\n    onTestPass(test) {\n        this.write(`Congratulations! Your test \"${test.title}\" passed \ud83d\udc4f`)\n    }\n}\n")),(0,i.kt)("p",null,"To use this reporter, all you need to do is assign it to the ",(0,i.kt)("inlineCode",{parentName:"p"},"reporter")," property in your configuration."),(0,i.kt)("p",null,"Your ",(0,i.kt)("inlineCode",{parentName:"p"},"wdio.conf.js")," file should look like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const CustomReporter = require('./reporter/my.custom.reporter')\n\nexports.config = {\n    // ...\n    reporters: [\n        /**\n         * use imported reporter class\n         */\n        [CustomReporter, {\n            someOption: 'foobar'\n        }]\n        /**\n         * use absolute path to reporter\n         */\n        ['/path/to/reporter.js', {\n            someOption: 'foobar'\n        }]\n    ],\n    // ...\n}\n")),(0,i.kt)("p",null,"You can also publish the reporter to NPM so everyone can use it. Name the package like other reporters ",(0,i.kt)("inlineCode",{parentName:"p"},"wdio-<reportername>-reporter"),", and tag it with keywords like ",(0,i.kt)("inlineCode",{parentName:"p"},"wdio")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"wdio-reporter"),"."),(0,i.kt)("h2",{id:"event-handler"},"Event Handler"),(0,i.kt)("p",null,"You can register an event handler for several events which are triggered during testing. All of the following handlers will receive payloads with useful information about the current state and progress."),(0,i.kt)("p",null,"The structure of these payload objects depend on the event, and are unified across the frameworks (Mocha, Jasmine, and Cucumber). Once you implement a custom reporter, it should work for all frameworks."),(0,i.kt)("p",null,"The following list contains all possible methods you can add to your reporter class:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import WDIOReporter from '@wdio/reporter'\n\nexport default class CustomReporter extends WDIOReporter {\n    onRunnerStart() {}\n    onBeforeCommand() {}\n    onAfterCommand() {}\n    onSuiteStart() {}\n    onHookStart() {}\n    onHookEnd() {}\n    onTestStart() {}\n    onTestPass() {}\n    onTestFail() {}\n    onTestSkip() {}\n    onTestEnd() {}\n    onSuiteEnd() {}\n    onRunnerEnd() {}\n}\n")),(0,i.kt)("p",null,"The method names are pretty self explanatory."),(0,i.kt)("p",null,"To print something on a certain event, use the ",(0,i.kt)("inlineCode",{parentName:"p"},"this.write(...)")," method, which is provided by the parent ",(0,i.kt)("inlineCode",{parentName:"p"},"WDIOReporter")," class. It either streams the content to ",(0,i.kt)("inlineCode",{parentName:"p"},"stdout"),", or to a log file (depending on the options of the reporter)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import WDIOReporter from '@wdio/reporter'\n\nexport default class CustomReporter extends WDIOReporter {\n    onTestPass(test) {\n        this.write(`Congratulations! Your test \"${test.title}\" passed \ud83d\udc4f`)\n    }\n}\n")),(0,i.kt)("p",null,"Note that you cannot defer the test execution in any way."),(0,i.kt)("p",null,"All event handlers should execute synchronous routines (or you\u2019ll run into race conditions)."),(0,i.kt)("p",null,"Be sure to check out the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/webdriverio/webdriverio/tree/main/examples/wdio"},"example section")," where you can find an example custom reporter that prints the event name for each event."),(0,i.kt)("p",null,"If you have implemented a custom reporter that could be useful for the community, don't hesitate to make a Pull Request so we can make the reporter available for the public!"),(0,i.kt)("p",null,"Also, if you run the WDIO testrunner via the ",(0,i.kt)("inlineCode",{parentName:"p"},"Launcher")," interface, you can't apply a custom reporter as function as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import Launcher from '@wdio/cli'\n\nimport CustomReporter from './reporter/my.custom.reporter'\n\nconst launcher = new Launcher('/path/to/config.file.js', {\n    // this will NOT work, because CustomReporter is not serializable\n    reporters: ['dot', CustomReporter]\n})\n")),(0,i.kt)("h2",{id:"wait-until-issynchronised"},"Wait Until ",(0,i.kt)("inlineCode",{parentName:"h2"},"isSynchronised")),(0,i.kt)("p",null,"If your reporter has to execute async operations to report the data (e.g. upload of log files or other assets) you can overwrite the ",(0,i.kt)("inlineCode",{parentName:"p"},"isSynchronised")," method in your custom reporter to let the WebdriverIO runner wait until you have computed everything. An example of this can be seen in the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/webdriverio/webdriverio/blob/main/packages/wdio-sumologic-reporter/src/index.js"},(0,i.kt)("inlineCode",{parentName:"a"},"@wdio/sumologic-reporter")),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"export default class SumoLogicReporter extends WDIOReporter {\n    constructor (options) {\n        // ...\n        this.unsynced = []\n        this.interval = setInterval(::this.sync, this.options.syncInterval)\n        // ...\n    }\n\n    /**\n     * overwrite isSynchronised method\n     */\n    get isSynchronised () {\n        return this.unsynced.length === 0\n    }\n\n    /**\n     * sync log files\n     */\n    sync () {\n        // ...\n        request({\n            method: 'POST',\n            uri: this.options.sourceAddress,\n            body: logLines\n        }, (err, resp) => {\n            // ...\n            /**\n             * remove transferred logs from log bucket\n             */\n            this.unsynced.splice(0, MAX_LINES)\n            // ...\n        }\n    }\n}\n")),(0,i.kt)("p",null,"This way the runner will wait until all log information are uploaded."),(0,i.kt)("h2",{id:"publish-reporter-on-npm"},"Publish Reporter on NPM"),(0,i.kt)("p",null,"To make reporter easier to consume and discover by the WebdriverIO community, please follow these recommendations:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Services should use this naming convention: ",(0,i.kt)("inlineCode",{parentName:"li"},"wdio-*-reporter")),(0,i.kt)("li",{parentName:"ul"},"Use NPM keywords: ",(0,i.kt)("inlineCode",{parentName:"li"},"wdio-plugin"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"wdio-reporter")),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"main")," entry should ",(0,i.kt)("inlineCode",{parentName:"li"},"export")," an instance of the reporter"),(0,i.kt)("li",{parentName:"ul"},"Example reporter: ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/webdriverio/webdriverio/tree/main/packages/wdio-dot-reporter"},(0,i.kt)("inlineCode",{parentName:"a"},"@wdio/dot-service")))),(0,i.kt)("p",null,"Following the recommended naming pattern allows services to be added by name:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// Add wdio-custom-reporter\nexports.config = {\n    // ...\n    reporter: ['custom'],\n    // ...\n}\n")),(0,i.kt)("h3",{id:"add-published-service-to-wdio-cli-and-docs"},"Add Published Service to WDIO CLI and Docs"),(0,i.kt)("p",null,"We really appreciate every new plugin that could help other people run better tests! If you have created such a plugin, please consider adding it to our CLI and docs to make it easier to be found."),(0,i.kt)("p",null,"Please raise a pull request with the following changes:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"add your service to the list of ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/webdriverio/webdriverio/blob/main/packages/wdio-cli/src/constants.ts#L74-L91"},"supported reporters"),") in the CLI module"),(0,i.kt)("li",{parentName:"ul"},"enhance the ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/webdriverio/webdriverio/blob/main/scripts/docs-generation/3rd-party/reporters.json"},"reporter list")," for adding your docs to the official Webdriver.io page")))}d.isMDXComponent=!0}}]);