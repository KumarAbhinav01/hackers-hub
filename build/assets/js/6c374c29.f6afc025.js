"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4426],{2735:function(e,t,r){function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function u(e){return void 0!==e&&!n(e)}r.d(t,{b:function(){return n},Z:function(){return u}})},9524:function(e,t,r){r.d(t,{C:function(){return i},Z:function(){return a}});var n=r(9962),u=r(2735);function i(){var e=(0,n.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,r=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,r,n){var i=void 0===n?{}:n,a=i.forcePrependBaseUrl,c=void 0!==a&&a,f=i.absolute,o=void 0!==f&&f;if(!r)return r;if(r.startsWith("#"))return r;if((0,u.b)(r))return r;if(c)return t+r;var s=r.startsWith(t)?r:t+r.replace(/^\//,"");return o?e+s:s}(i,r,e,t)}}}function a(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},702:function(e,t,r){r.r(t),r.d(t,{default:function(){return c}});var n=r(7294),u=r(6010),i=r(9524),a={features:"features_mjOc",featureImage:"featureImage_uLtO"};function c(e){var t=e.imageUrl,r=e.title,c=e.description,f=(0,i.Z)(t);return n.createElement("div",{className:(0,u.Z)("col col--4",a.feature)},f&&n.createElement("div",{className:"text--center"},n.createElement("img",{className:a.featureImage,src:f,alt:r})),n.createElement("h3",null,r),n.createElement("p",null,c))}}}]);