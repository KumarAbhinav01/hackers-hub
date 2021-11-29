"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9740],{4137:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(t),m=o,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return t?r.createElement(f,i(i({ref:n},c),{},{components:t})):r.createElement(f,i({ref:n},c))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8448:function(e,n,t){var r=t(7294);n.Z=function(e){var n=e.children,t=e.hidden,o=e.className;return r.createElement("div",{role:"tabpanel",hidden:t,className:o},n)}},7225:function(e,n,t){t.d(n,{Z:function(){return d}});var r=t(7462),o=t(7294),a=t(1048),i=t(2713);var l=function(){var e=(0,o.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},s=t(3309),u=t(6010),c="tabItem_vU9c";function p(e){var n,t,r,a=e.lazy,i=e.block,p=e.defaultValue,d=e.values,m=e.groupId,f=e.className,h=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=d?d:h.map((function(e){var n=e.props;return{value:n.value,label:n.label}})),v=(0,s.lx)(k,(function(e,n){return e.value===n.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===p?p:null!=(n=null!=p?p:null==(t=h.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(r=h[0])?void 0:r.props.value;if(null!==b&&!k.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=l(),w=g.tabGroupChoices,y=g.setTabGroupChoices,N=(0,o.useState)(b),O=N[0],C=N[1],I=[],T=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var E=w[m];null!=E&&E!==O&&k.some((function(e){return e.value===E}))&&C(E)}var j=function(e){var n=e.currentTarget,t=I.indexOf(n),r=k[t].value;r!==O&&(T(n),C(r),null!=m&&y(m,r))},x=function(e){var n,t=null;switch(e.key){case"ArrowRight":var r=I.indexOf(e.currentTarget)+1;t=I[r]||I[0];break;case"ArrowLeft":var o=I.indexOf(e.currentTarget)-1;t=I[o]||I[I.length-1]}null==(n=t)||n.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":i},f)},k.map((function(e){var n=e.value,t=e.label;return o.createElement("li",{role:"tab",tabIndex:O===n?0:-1,"aria-selected":O===n,className:(0,u.Z)("tabs__item",c,{"tabs__item--active":O===n}),key:n,ref:function(e){return I.push(e)},onKeyDown:x,onFocus:j,onClick:j},null!=t?t:n)}))),a?(0,o.cloneElement)(h.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},h.map((function(e,n){return(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==O})}))))}function d(e){var n=(0,a.Z)();return o.createElement(p,(0,r.Z)({key:String(n)},e))}},2713:function(e,n,t){var r=(0,t(7294).createContext)(void 0);n.Z=r},7140:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return d},default:function(){return f}});var r=t(7462),o=t(3366),a=(t(7294),t(4137)),i=t(7225),l=t(8448),s=["components"],u={id:"clioptions",title:"WDIO CLI Options"},c=void 0,p={unversionedId:"clioptions",id:"clioptions",isDocsHomePage:!1,title:"WDIO CLI Options",description:"WebdriverIO comes with its own test runner to help you start testing as quickly as possible.",source:"@site/docs/CLI.md",sourceDirName:".",slug:"/clioptions",permalink:"/docs/clioptions",editUrl:"https://github.com/Abhi6722/hackers-hub/edit/main/website/docs/CLI.md",tags:[],version:"current",frontMatter:{id:"clioptions",title:"WDIO CLI Options"},sidebar:"docs",previous:{title:"REPL interface",permalink:"/docs/repl"},next:{title:"Testrunner Configuration",permalink:"/docs/configurationfile"}},d=[{value:"Commands",id:"commands",children:[{value:"<code>wdio config</code>",id:"wdio-config",children:[],level:3},{value:"<code>wdio run</code>",id:"wdio-run",children:[],level:3},{value:"<code>wdio install</code>",id:"wdio-install",children:[{value:"List of supported services",id:"list-of-supported-services",children:[],level:4},{value:"List of supported reporters",id:"list-of-supported-reporters",children:[],level:4},{value:"List of supported frameworks",id:"list-of-supported-frameworks",children:[],level:4}],level:3},{value:"<code>wdio repl</code>",id:"wdio-repl",children:[],level:3}],level:2}],m={toc:d};function f(e){var n=e.components,u=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},m,u,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"WebdriverIO comes with its own test runner to help you start testing as quickly as possible."),(0,a.kt)("p",null,"Fiddling around hooking up WebdriverIO with a test framework is a thing of the past. The WebdriverIO runner does all the work for you, and helps you to run your tests as efficiently as possible."),(0,a.kt)("p",null,"Starting with v5, WebdriverIO's testrunner is bundled separately in the NPM package ",(0,a.kt)("inlineCode",{parentName:"p"},"@wdio/cli"),"."),(0,a.kt)("p",null,"Install it like this:"),(0,a.kt)(i.Z,{defaultValue:"npm",groupId:"npm2yarn",values:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"npm install @wdio/cli\n"))),(0,a.kt)(l.Z,{value:"yarn",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"yarn add @wdio/cli\n")))),(0,a.kt)("p",null,"To see the command line interface help, just type the following command in your terminal:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"$ npx wdio --help\n\nwdio <command>\n\nCommands:\n  wdio config                           Initialize WebdriverIO and setup configuration in\n                                        your current project.\n  wdio install <type> <name>            Add a `reporter`, `service`, or `framework` to\n                                        your WebdriverIO project\n  wdio repl <option> [capabilities]     Run WebDriver session in command line\n  wdio run <configPath>                 Run your WDIO configuration file to initialize\n                                        your tests.\n\nOptions:\n  --version  Show version number                                       [boolean]\n  --help     Show help                                                 [boolean]\n")),(0,a.kt)("p",null,"Sweet! Now you need to define a configuration file where all information about your tests, capabilities, and settings are set.\nSwitch over to the ",(0,a.kt)("a",{parentName:"p",href:"/docs/configurationfile"},"Configuration File")," section to see what that file should look like."),(0,a.kt)("p",null,"With the ",(0,a.kt)("inlineCode",{parentName:"p"},"wdio")," configuration helper, it is super easy to generate your config file. Just run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"$ npx wdio config\n")),(0,a.kt)("p",null,"...and it launches the helper utility."),(0,a.kt)("p",null,"It will ask you questions and generate a config file for you in less than a minute."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"WDIO configuration utility",src:t(2696).Z})),(0,a.kt)("p",null,"Once you have your configuration file set up, you can start your tests by running:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"npx wdio run wdio.conf.js\n")),(0,a.kt)("p",null,"You can also initialize your test run without the ",(0,a.kt)("inlineCode",{parentName:"p"},"run")," command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"npx wdio wdio.conf.js\n")),(0,a.kt)("p",null,"That's it! Now, you can access to the selenium instance via the global variable ",(0,a.kt)("inlineCode",{parentName:"p"},"browser"),"."),(0,a.kt)("h2",{id:"commands"},"Commands"),(0,a.kt)("h3",{id:"wdio-config"},(0,a.kt)("inlineCode",{parentName:"h3"},"wdio config")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"config")," command runs the WebdriverIO configuration helper. This helper will ask you a few questions about your WebdriverIO project and create a ",(0,a.kt)("inlineCode",{parentName:"p"},"wdio.conf.js")," file based on your answers."),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"wdio config\n")),(0,a.kt)("p",null,"Options:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"--help            prints WebdriverIO help menu                                [boolean]\n--npm             Wether to install the packages using NPM instead of yarn    [boolean]\n")),(0,a.kt)("h3",{id:"wdio-run"},(0,a.kt)("inlineCode",{parentName:"h3"},"wdio run")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"This is the default command to run your configuration.")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"run")," command initializes your WebdriverIO configuration file and runs your tests."),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"wdio run ./wdio.conf.js --watch\n")),(0,a.kt)("p",null,"Options:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'--help                prints WebdriverIO help menu                   [boolean]\n--version             prints WebdriverIO version                     [boolean]\n--hostname, -h        automation driver host address                  [string]\n--port, -p            automation driver port                          [number]\n--user, -u            username if using a cloud service as automation backend\n                                                                        [string]\n--key, -k             corresponding access key to the user            [string]\n--watch               watch specs for changes                        [boolean]\n--logLevel, -l        level of logging verbosity\n                            [choices: "trace", "debug", "info", "warn", "error", "silent"]\n--bail                stop test runner after specific amount of tests have\n                        failed                                          [number]\n--baseUrl             shorten url command calls by setting a base url [string]\n--waitforTimeout, -w  timeout for all waitForXXX commands             [number]\n--framework, -f       defines the framework (Mocha, Jasmine or Cucumber) to\n                        run the specs                                   [string]\n--reporters, -r       reporters to print out the results on stdout     [array]\n--suite               overwrites the specs attribute and runs the defined\n                        suite                                            [array]\n--spec                run only a certain spec file - overrides specs piped\n                        from stdin                                       [array]\n--exclude             exclude spec file(s) from a run - overrides specs piped\n                        from stdin                                       [array]\n--mochaOpts           Mocha options\n--jasmineOpts         Jasmine options\n--cucumberOpts        Cucumber options\n')),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Note: Autocompiling can be easily controlled with the appropriate library's ENV Vars. See also Test Runner's Auto Compilation functionality documented in ",(0,a.kt)("a",{parentName:"p",href:"/docs/typescript"},"TypeScript (ts-node)")," and ",(0,a.kt)("a",{parentName:"p",href:"/docs/babel"},"Babel (@babel/register)")," pages.")),(0,a.kt)("h3",{id:"wdio-install"},(0,a.kt)("inlineCode",{parentName:"h3"},"wdio install")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"install")," command allows you to add reporters and services to your WebdriverIO projects via the CLI."),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"wdio install service sauce # installs @wdio/sauce-service\nwdio install reporter dot # installs @wdio/dot-reporter\nwdio install framework mocha # installs @wdio/mocha-framework\n")),(0,a.kt)("p",null,"If you want to install the packages using ",(0,a.kt)("inlineCode",{parentName:"p"},"yarn")," instead, you can pass the ",(0,a.kt)("inlineCode",{parentName:"p"},"--yarn")," flag to the command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"wdio install service sauce --yarn\n")),(0,a.kt)("p",null,"You could also pass a custom configuration path if your WDIO config file is not in the same folder you're working on:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'wdio install service sauce --config="./path/to/wdio.conf.js"\n')),(0,a.kt)("h4",{id:"list-of-supported-services"},"List of supported services"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"sauce\ntestingbot\nfirefox-profile\nselenium-standalone\ndevtools\nbrowserstack\nappium\nchromedriver\nintercept\nzafira-listener\nreportportal\ndocker\nwiremock\nlambdatest\n")),(0,a.kt)("h4",{id:"list-of-supported-reporters"},"List of supported reporters"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"dot\nspec\njunit\nallure\nsumologic\nconcise\nreportportal\nvideo\nhtml\njson\nmochawesome\ntimeline\n")),(0,a.kt)("h4",{id:"list-of-supported-frameworks"},"List of supported frameworks"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"mocha\njasmine\ncucumber\n")),(0,a.kt)("h3",{id:"wdio-repl"},(0,a.kt)("inlineCode",{parentName:"h3"},"wdio repl")),(0,a.kt)("p",null,"The repl command allows to start an interactive command line interface to run WebdriverIO commands. It can be used for testing purposes or to just quickly spin up WebdriverIO session."),(0,a.kt)("p",null,"Run tests in local chrome:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"wdio repl chrome\n")),(0,a.kt)("p",null,"or run tests on Sauce Labs:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"wdio repl chrome -u $SAUCE_USERNAME -k $SAUCE_ACCESS_KEY\n")),(0,a.kt)("p",null,"You can apply the same arguments as you can in the ",(0,a.kt)("a",{parentName:"p",href:"#wdio-run"},"run command"),"."))}f.isMDXComponent=!0},2696:function(e,n,t){n.Z=t.p+"assets/images/config-utility-99970a49000afa3117919fef8ec11dec.gif"}}]);