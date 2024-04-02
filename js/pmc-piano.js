var pmcPiano;!function(){"use strict";var e={357:function(e,n){var o=this&&this.__spreadArray||function(e,n,o){if(o||2===arguments.length)for(var t,i=0,a=n.length;i<a;i++)!t&&i in n||(t||(t=Array.prototype.slice.call(n,0,i)),t[i]=n[i]);return e.concat(t||Array.prototype.slice.call(n))};Object.defineProperty(n,"__esModule",{value:!0}),n.pianoConsent=void 0,n.pianoConsent={canDebug:window.pmcPianoData.canDebug,isConsentDisabled:window.pmcPianoData.isConsentDisabled,onetrustToPianoMapping:{C0001:{COMPOSER:1,DMP:1,ID:1,PA:1,VX:1,DL:1},C0002:{COMPOSER:1,DMP:2,ID:1,PA:1,VX:3,DL:1},C0003:{COMPOSER:3,DMP:2,ID:3,PA:3,VX:2,DL:1},C0004:{COMPOSER:2,DMP:3,ID:2,PA:2,VX:2,DL:2}},pianoProductModesConsentAll:{COMPOSER:3,DMP:3,ID:3,PA:3,VX:3,DL:3},pianoProductModes:{COMPOSER:1,DMP:1,ID:1,PA:1,VX:1,DL:1},pianoWeightsToModes:{1:"opt-out",2:"essential",3:"opt-in"},hookIntoOneTrust:function(){var e=this;e.isConsentDisabled||(e.canDebug&&console.log("PMC: Piano:","Consent Initialization.."),window.pmc.hooks.add_action("pmc_onetrust_consent_data_ready",e.determinePianoProductModes.bind(e)))},determinePianoProductModes:function(e){var n=e.groupsConsentedTo,t=this;t.canDebug&&console.log("PMC: Piano:","pmc_onetrust_consent_data_ready","OneTrust groups consented to",n);var i={COMPOSER:[],DMP:[],ID:[],PA:[],VX:[],DL:[]};if(0<n.length){n.forEach((function(e){Object.keys(i).forEach((function(n){t.onetrustToPianoMapping[e]&&i[n].push(t.onetrustToPianoMapping[e][n])}))})),t.canDebug&&console.log("PMC: Piano:","pianoProductsWeights",i);var a=n.length>=Object.keys(t.onetrustToPianoMapping).length;Object.keys(i).forEach((function(e){t.pianoProductModes[e]=Math.max.apply(Math,o(o([],i[e],!1),a?[t.pianoProductModesConsentAll[e]]:[],!1))})),t.canDebug&&console.log("PMC: Piano:","pianoProductModes",t.pianoProductModes)}window.tp.push(["init",t.setPianoProductModes.bind(t)])},setPianoProductModes:function(){var e,n,o,t,i,a,s=this;window.pdl=window.pdl||{},window.pdl.requireConsent=!0,window.tp.consent.set("ESP",{mode:"opt-out"}),window.tp.consent.set("Social Flow",{mode:"opt-out"}),window.tp.consent.set("COMPOSER",{mode:null!==(e=s.pianoWeightsToModes[s.pianoProductModes.COMPOSER])&&void 0!==e?e:"opt-out"}),window.tp.consent.set("DMP",{mode:null!==(n=s.pianoWeightsToModes[s.pianoProductModes.DMP])&&void 0!==n?n:"opt-out"}),window.tp.consent.set("ID",{mode:null!==(o=s.pianoWeightsToModes[s.pianoProductModes.ID])&&void 0!==o?o:"opt-out"}),window.tp.consent.set("PA",{mode:null!==(t=s.pianoWeightsToModes[s.pianoProductModes.PA])&&void 0!==t?t:"opt-out"}),window.tp.consent.set("VX",{mode:null!==(i=s.pianoWeightsToModes[s.pianoProductModes.VX])&&void 0!==i?i:"opt-out"}),window.tp.consent.set("DL",{mode:null!==(a=s.pianoWeightsToModes[s.pianoProductModes.DL])&&void 0!==a?a:"opt-out"}),s.canDebug&&console.log("PMC: Piano:","tp.consent.get()",window.tp.consent.get())}}},353:function(e,n,o){var t=this&&this.__awaiter||function(e,n,o,t){return new(o||(o=Promise))((function(i,a){function s(e){try{c(t.next(e))}catch(e){a(e)}}function r(e){try{c(t.throw(e))}catch(e){a(e)}}function c(e){var n;e.done?i(e.value):(n=e.value,n instanceof o?n:new o((function(e){e(n)}))).then(s,r)}c((t=t.apply(e,n||[])).next())}))},i=this&&this.__generator||function(e,n){var o,t,i,a,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return a={next:r(0),throw:r(1),return:r(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function r(r){return function(c){return function(r){if(o)throw new TypeError("Generator is already executing.");for(;a&&(a=0,r[0]&&(s=0)),s;)try{if(o=1,t&&(i=2&r[0]?t.return:r[0]?t.throw||((i=t.return)&&i.call(t),0):t.next)&&!(i=i.call(t,r[1])).done)return i;switch(t=0,i&&(r=[2&r[0],i.value]),r[0]){case 0:case 1:i=r;break;case 4:return s.label++,{value:r[1],done:!1};case 5:s.label++,t=r[1],r=[0];continue;case 7:r=s.ops.pop(),s.trys.pop();continue;default:if(!((i=(i=s.trys).length>0&&i[i.length-1])||6!==r[0]&&2!==r[0])){s=0;continue}if(3===r[0]&&(!i||r[1]>i[0]&&r[1]<i[3])){s.label=r[1];break}if(6===r[0]&&s.label<i[1]){s.label=i[1],i=r;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(r);break}i[2]&&s.ops.pop(),s.trys.pop();continue}r=n.call(e,s)}catch(e){r=[6,e],t=0}finally{o=i=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}([r,c])}}};Object.defineProperty(n,"__esModule",{value:!0});var a=o(357),s={initialized:!1,scriptUrl:window.pmcPianoData.scriptUrl,isIPUser:!1,isProd:window.pmcPianoData.isProd,canDebug:window.pmcPianoData.canDebug,userCustomFieldsEndpoint:"/wp-json/pmc/piano/v1/user/custom-fields",user:null,onLoggedInUserCallbacks:[],onLoggedOutUserCallbacks:[],onPageLoadNotHasUserCallbacks:[],onHasIPUserCallbacks:[],myAccountPageSelector:".js-subscription-my-account-component",passwordResetPageSelector:".js-subscription-password-reset-component",pianoPaywallSelector:"#piano-paywall",pmcPaywallSelector:".pmc-paywall",truncatedContentSelector:"a-article-cropped",primeTp:function(){this.canDebug&&console.log("PMC: Piano:","Priming window.tp.."),a.pianoConsent.hookIntoOneTrust()},checkTp:function(){window.tp&&!Array.isArray(window.tp)&&window.tp.pianoId?this.tpLoaded():setTimeout(this.checkTp.bind(this),500)},tpLoaded:function(){window.tp&&window.tp.push(["init",this.initialize.bind(this)])},initialize:function(){var e=this,n=window.tp;e.isProd||(n.push(["setSandbox",!0]),n.push(["setPianoIdUrl","https://sandbox.tinypass.com"])),e.canDebug&&(console.log("PMC: Piano:","Initializing.."),n.push(["setDebug",!0])),n.push(["setUsePianoIdUserProvider",!0]),n.push(["addHandler","loginSuccess",function(n){e.canDebug&&console.log("PMC: Piano: loginSuccess",n),e.setUserData.apply(e)}]),n.push(["addHandler","checkoutComplete",function(){/reader_id=amp/gi.exec(window.location.search)&&window.close()}]),n.push(["addHandler","externalCheckoutComplete",function(){location.reload()}]),window.addEventListener("message",e.registrationSuccess.bind(e)),e.setUserData.apply(e),e.registerOnPageLoadNotHasUserCallback(e.maybeRenderMyAccountPage.bind(e)),e.registerOnLoggedInUserCallback(e.maybeRenderMyAccountPage.bind(e)),e.registerOnLoggedOutUserCallback(e.maybeRenderMyAccountPage.bind(e)),e.registerOnLoggedInUserCallback(e.reRenderExperiences.bind(e)),e.registerOnLoggedOutUserCallback(e.reRenderExperiences.bind(e)),e.maybeRenderPasswordResetPage.apply(e),e.registerOnLoggedInUserCallback(e.setAuthenticatedUserId.bind(e)),e.registerOnPageLoadNotHasUserCallback(e.setGA4Config.bind(e)),e.registerOnLoggedInUserCallback(e.setGA4Config.bind(e));var o=window.pmcPiano.entitlements;window.pmcPiano&&window.pmcPiano.entitlements?(e.canDebug&&console.log("PMC: Loading Piano: entitlements"),e.registerOnLoggedInUserCallback((function(){o.setSubscriberData.apply(o),o.onPianoLoginSuccess.apply(o)})),e.registerOnPageLoadNotHasUserCallback((function(){o.setSubscriberData.apply(o),o.onPianoLoginSuccess.apply(o)}))):e.canDebug&&console.log("PMC: Piano: entitlements is undefined")},setGA4Config:function(){var e,n,o,t,i=this,a=window.tp,s=null===(e=i.getUser())||void 0===e?void 0:e.uid,r=null===(t=null===(o=null===(n=window.pmcPianoData)||void 0===n?void 0:n.trackingPixels)||void 0===o?void 0:o.ga)||void 0===t?void 0:t.measurement_id;if(r){var c={send_page_view:!1,page_location:document.URL,page_title:document.title};s&&(c.user_id=s),a.setGA4Config({measurementId:r,eventParameters:c}),i.canDebug&&console.log("PMC: Piano: tp.setGA4Config is loaded - measurement id: ".concat(a.ga4Service.getMeasurementId()))}else i.canDebug&&console.log("PMC: Piano: GA4 measurement_id is undefined.",window.pmcPianoData)},setAuthenticatedUserId:function(){var e=window.blogherads||{},n=this.getUser().uid;this.canDebug&&console.log("PMC: Piano: setAuthenticatedUserId",n),e.adq=e.adq||[],e.adq.push((function(){try{e.setAuthenticatedUserId(n,"piano")}catch(e){}}))},registrationSuccess:function(e){var n=this;if("string"==typeof e.data){var o=void 0;try{o=JSON.parse(e.data)}catch(e){return n.canDebug&&console.warn("PMC: Piano: registration",e),console.warn("PMC: Piano: registration",e),!1}o.sender&&o.sender.startsWith("piano-id")&&"registrationSuccess"===o.event&&(n.canDebug&&console.log("PMC: Piano: registrationSuccess",e),console.log("PMC: Piano: registrationSuccess",e),n.onLoggedInUserCallbacks=n.onLoggedInUserCallbacks.filter((function(e){return"bound reRenderExperiences"!==e.name})))}return!0},login:function(e){e.preventDefault(),window.tp.pianoId.show({screen:"login"})},logout:function(e){var n=window.pmcPiano.piano;e.preventDefault(),window.tp.pianoId.logout(n.onLogout)},onLogout:function(){var e=window.pmcPiano.piano;e.canDebug&&console.log("PMC: Piano: User logged-out",e.user),e.user=null,e.triggerOnLoggedOutUserCallbacks()},hasUser:function(){return!!this.user},hasIPUser:function(){return!!this.isIPUser},getUser:function(){return this.user},setUserData:function(){var e=this,n=window.tp;n.user.isUserValid()?n.pianoId.getUser()&&(e.initialized=!0,e.user=n.pianoId.getUser(),e.canDebug&&console.log("PMC: Piano: User logged-in",e.user),e.triggerOnLoggedInUserCallbacks()):(e.canDebug&&console.log("PMC: Piano: Page load, no user"),e.initialized=!0,e.user=null,e.triggerOnPageLoadNotHasUserCallbacks())},registerStickyFooter:function(e){var n=window.pmcPiano.piano;n.registerOnPageLoadNotHasUserCallback(function(){var o=document.querySelector(e.className||".js-subscription-sticky-footer");if(o){var t=document.getElementsByClassName(e.targetClassName||"footer"),i=function(){var e=function(){var e=window.scrollY,n=window.innerHeight,i=t[0].offsetTop;return e+n+("static"===o.style.position?o.clientHeight:0)>i};setTimeout(function(){this.stickyFooterPrevTime=this.stickyFooterPrevTime||Date.now(),this.stickyFooterPrevTime&&500>Date.now()-this.stickyFooterPrevTime||(this.stickyFooterPrevTime=Date.now(),e()||"fixed"===o.style.position?e()&&"static"!==o.style.position&&(o.style.position="static"):(o.style.position="fixed",o.style.bottom="0px"))}.bind(n),500)};i(),window.addEventListener("load",i),window.addEventListener("scroll",i),window.addEventListener("resize",i)}}.bind(n))},getUserCustomFields:function(){return t(this,void 0,void 0,(function(){return i(this,(function(e){return[2,window.pmcPiano.pianoApi.getFromEndpoint("".concat(this.userCustomFieldsEndpoint,"/").concat(this.user.uid))]}))}))},getAccountType:function(e){return["email_domain_contract","specific_email_addresses_contract"].includes(e)?"site_license":"individual"},registerOnLoggedInUserCallback:function(e){this.initialized&&this.hasUser()&&e(this.getUser()),this.onLoggedInUserCallbacks.push(e)},registerOnLoggedOutUserCallback:function(e){this.onLoggedOutUserCallbacks.push(e)},registerOnPageLoadNotHasUserCallback:function(e){this.initialized&&!this.hasUser()&&e(),this.onPageLoadNotHasUserCallbacks.push(e)},registerOnHasIPUserCallback:function(e){this.initialized&&!0===this.hasIPUser()&&e(),this.onHasIPUserCallbacks.push(e)},triggerOnLoggedInUserCallbacks:function(){var e=this;e.canDebug&&console.log("PMC: Piano: Running login callbacks",e.onLoggedInUserCallbacks),e.onLoggedInUserCallbacks.forEach((function(n){n(e.user)}))},triggerOnLoggedOutUserCallbacks:function(){var e=this;e.canDebug&&console.log("PMC: Piano: Running logout callbacks",e.onLoggedOutUserCallbacks),e.onLoggedOutUserCallbacks.forEach((function(e){e()}))},triggerOnPageLoadNotHasUserCallbacks:function(){var e=this;e.canDebug&&console.log("PMC: Piano: Running no-user callbacks",e.onPageLoadNotHasUserCallbacks),e.onPageLoadNotHasUserCallbacks.forEach((function(e){e()}))},triggerOnHasIPUserCallbacks:function(){var e=this;e.canDebug&&console.log("PMC: Piano: Running has-IP-user callbacks",e.onHasIPUserCallbacks),e.onHasIPUserCallbacks.forEach((function(e){e()}))},setIPUser:function(){var e=this;e.canDebug&&console.log("PMC: Piano: IP Match"),e.isIPUser=!0,e.triggerOnHasIPUserCallbacks()},maybeRenderMyAccountPage:function(){document.querySelector(this.myAccountPageSelector)&&window.tp.myaccount.show({displayMode:"inline",containerSelector:this.myAccountPageSelector})},maybeRenderPasswordResetPage:function(){if(!document.querySelector(this.passwordResetPageSelector))return"password reset element missing";var e=window.location.search.match(/reset_token=([A-Za-z0-9]+)/);return e?(window.onmessage=this.redirectHomeOnClosedMessage,window.tp.pianoId.show({resetPasswordToken:e[1],loggedIn:function(){window.location="/"}})):"invalid token"},redirectHomeOnClosedMessage:function(e){if("string"==typeof e.data){var n=JSON.parse(e.data);n.sender&&n.sender.startsWith("piano-id")&&"closed"===n.event&&(window.location="/")}},reRenderExperiences:function(){var e=this,n=window.tp;e.canDebug&&console.log("PMC: Piano: Re-rendering Experiences"),n.offer.closeInline(e.pianoPaywallSelector),n.offer.closeInline("#piano-right-rail"),n.offer.closeInline("#piano-mid-river"),n.offer.closeInline("#piano-sticky-footer"),n.offer.closeInline("#piano-fly-out");var o=document.querySelector(e.pmcPaywallSelector);o&&o.classList.remove(e.truncatedContentSelector),n.experience.execute()}};s.primeTp(),s.checkTp(),e.exports=s}},n={},o=function o(t){var i=n[t];if(void 0!==i)return i.exports;var a=n[t]={exports:{}};return e[t].call(a.exports,a,a.exports,o),a.exports}(353);(pmcPiano=void 0===pmcPiano?{}:pmcPiano).piano=o}();