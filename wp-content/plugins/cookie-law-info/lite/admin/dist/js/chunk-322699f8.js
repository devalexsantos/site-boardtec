(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-322699f8"],{"0235":function(t,n,s){},"2a43":function(t,n,s){"use strict";s("2ea8")},"2ea8":function(t,n,s){},"39fa":function(t,n,s){t.exports=s.p+"img/language.svg"},6573:function(t,n,s){"use strict";s("9478")},"6aed":function(t,n,s){t.exports=s.p+"img/scan-history.svg"},"6c87":function(t,n,s){"use strict";s("b3ba")},"7dcd":function(t,n,s){},"919d":function(t,n,s){"use strict";var e=function(){var t=this,n=t.$createElement,s=t._self._c||n;return t.showConnectSuccess?s("div",{staticClass:"cky-connect-success",attrs:{id:"cky-connect-success"}},[t.syncing?s("div",{staticClass:"cky-connect-loader"},[s("cky-spinner"),s("h4",[t._v(" "+t._s(t.$i18n.__("Please wait while we connect your site to app.cookieyes.com","cookie-law-info"))+" ")])],1):s("div",{staticClass:"cky-connect-success-container"},[s("div",{staticClass:"cky-connect-success-icon"}),s("div",{staticClass:"cky-connect-success-message"},[t._t("message",(function(){return[s("h2",[t._v(" "+t._s(t.$i18n.__("Your website is connected to app.cookieyes.com","cookie-law-info"))+" ")]),s("p",[t._v(" "+t._s(t.$i18n.__("You can now continue to manage all your existing settings and access all free CookieYes features from your web app account","cookie-law-info"))+" ")])]}))],2),s("div",{staticClass:"cky-connect-success-actions"},[t._t("action",(function(){return[s("button",{staticClass:"cky-button cky-button-medium cky-external-link",on:{click:function(n){return t.redirectToApp()}}},[t._v(" "+t._s(t.$i18n.__("Go to CookieYes Web App","cookie-law-info"))+" ")])]}))],2)])]):t._e()},c=[],i=function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("span",{staticClass:"cky-spinner-loader"})},o=[],a={name:"CkySpinner",components:{}},r=a,l=(s("6c87"),s("2877")),u=Object(l["a"])(r,i,o,!1,null,null,null),d=u.exports,y={name:"CkyConnectSuccess",components:{CkySpinner:d},props:{timeout:{type:Number,default:6e3}},data(){return{showConnectSuccess:!1,syncing:!1}},methods:{showMessage(){this.showConnectSuccess=!0},redirectToApp(){this.$router.redirectToApp(),this.showConnectSuccess=!1,this.$router.redirectToDashboard(this.$route.name)}},created(){this.$root.$on("afterConnection",()=>{this.syncing=!0,this.showMessage()}),this.$root.$on("afterSyncing",async()=>{this.syncing=!1})}},k=y,g=(s("a209"),Object(l["a"])(k,e,c,!1,null,null,null));n["a"]=g.exports},"91db":function(t,n,s){t.exports=s.p+"img/regulation.svg"},9478:function(t,n,s){},"947c":function(t,n,s){t.exports=s.p+"img/banner-status.svg"},9573:function(t,n,s){"use strict";s.r(n);var e=function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"cky-section cky-section-dashboard cky-zero--padding cky-zero--margin"},[s("div",{staticClass:"cky-row"},[s("div",{staticClass:"cky-col-12"},[s("cky-connect-success"),s("cky-connect-notice")],1)]),t.loading?t._e():s("div",{staticClass:"cky-section-content"},[s("div",{staticClass:"cky-row"},[s("div",{staticClass:"cky-col-12"},[s("cky-dashboard-overview")],1)]),t.account.connected&&!t.syncing?s("div",{staticClass:"cky-row"},[s("div",{staticClass:"cky-col-7"},[s("div",{staticClass:"cky-row"},[s("div",{staticClass:"cky-col-12"},[s("cky-scan-summary")],1)])]),s("div",{staticClass:"cky-col-5"},[s("cky-consent-chart")],1)]):t._e()])])},c=[],i=function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("cky-card",{attrs:{title:t.$i18n.__("Cookie Summary","cookie-law-info"),loading:t.cardLoader},scopedSlots:t._u([{key:"body",fn:function(){return[s("div",{staticClass:"cky-stats-section"},t._l(t.statistics,(function(t){return s("cky-stats-card",{key:t.slug,attrs:{statistics:t}})})),1)]},proxy:!0}])})},o=[],a=s("f9c4"),r=s("9610"),l=function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"cky-stats-col"},[t.statistics.icon?s("div",{staticClass:"cky-stats-icon"},[s("cky-icon",{attrs:{icon:t.statistics.icon,width:t.iconWidth,color:t.iconColor}})],1):t._e(),s("div",{staticClass:"cky-stats-title"},[t._v(t._s(t.statistics.title))]),s("div",{staticClass:"cky-stats-count"},[t._v(t._s(t.statistics.count))])])},u=[],d=s("1f3d"),y={components:{CkyIcon:d["a"]},name:"CkyStatsCard",props:{statistics:Object,iconWidth:{type:String,default:"30"},iconColor:{type:String,default:"#000000"}},computed:{getLoadingClass(){return{"cky-loading":this.loading}}}},k=y,g=(s("c5a6"),s("2877")),f=Object(g["a"])(k,l,u,!1,null,null,null),_=f.exports,p={components:{CkyCard:r["a"],CkyStatsCard:_},data(){return{loading:!0,stats:[{slug:"cookies",icon:!1,title:this.$i18n.__("Total Cookies","cookie-law-info"),count:0},{slug:"categories",icon:!1,title:this.$i18n.__("Total Categories","cookie-law-info"),count:0},{slug:"pages",icon:!1,title:this.$i18n.__("Pages Scanned","cookie-law-info"),count:0}]}},methods:{async getstats(){this.loading=!0;try{const t=await a["a"].get({path:"dashboard/summary"});t&&this.stats.forEach((function(n){const s=t[n.slug]?t[n.slug]:0;n.count=s})),this.loading=!1}catch(t){console.error(t)}}},computed:{statistics(){return this.stats},cardLoader(){return!this.$store.state.settings.info||this.loading}},created(){this.getstats()}},C=p,h=Object(g["a"])(C,i,o,!1,null,null,null),v=h.exports,w=s("919d"),b=function(){var t=this,n=t.$createElement,s=t._self._c||n;return t.account.connected&&!t.syncing?s("cky-notice",{staticClass:"cky-connect-notice",attrs:{type:"default"}},[s("div",{staticClass:"cky-row"},[s("div",{staticClass:"cky-col-12"},[s("h4",{staticClass:"cky-admin-notice-header"},[s("cky-icon",{attrs:{icon:"successCircle",color:"#00aa63",width:"16px"}}),t._v(" "+t._s(t.$i18n.__("Your website is connected to CookieYes","cookie-law-info"))+" ")],1),s("div",{staticClass:"cky-connect-notice-message"},[s("p",[t._v(" "+t._s(t.$i18n.__("You can access all the plugin settings (Cookie Banner, Cookie Manager, Languages & Policy Generators) on the web app and unlock new features like Cookie Scan and Consent Log.","cookie-law-info"))+" ")])]),s("button",{staticClass:"cky-button cky-external-link",on:{click:function(n){return n.preventDefault(),t.$router.redirectToApp()}}},[t._v(" "+t._s(t.$i18n.__("Go to Web App","cookie-law-info"))+" ")])])])]):t.showNotice&&!t.tablesMissing?s("cky-notice",{staticClass:"cky-connect-notice cky-connect-notice-disabled",attrs:{type:"default",isDismissable:!0},on:{onDismiss:function(n){return t.removeNotice()}}},[s("div",{staticClass:"cky-row cky-align-center"},[s("div",{staticClass:"cky-col-8"},[s("h3",{staticClass:"cky-admin-notice-header"},[s("cky-icon",{attrs:{icon:"connect",width:"44px"}}),t._v(" "+t._s(t.$i18n.__("Connect your website to CookieYes","cookie-law-info"))+" ")],1),s("p",{staticStyle:{"margin-top":"10px"},domProps:{innerHTML:t._s(t.contents.connect)}}),s("div",{staticClass:"cky-connect-features"},[s("p",{staticClass:"cky-align-center"},[s("span",[t._v("✓")]),t._v(t._s(t.$i18n.__("Cookie Scanner - Discover cookies on your site and auto-block them prior to user consent (Legally required)","cookie-law-info"))+" ")]),s("p",[s("span",[t._v("✓")]),t._v(t._s(t.$i18n.__("Consent Log - Record user consents to demonstrate proof of compliance (Legally required)","cookie-law-info"))+" ")])])]),s("div",{staticClass:"cky-col-4 cky-justify-end"},[s("div",{staticClass:"cky-connect-button-container"},[s("cky-button",{ref:"ckyButtonConnectNew",staticClass:"cky-button-connect cky-button-medium",nativeOn:{click:function(n){return t.connectToApp()}}},[t._v(" "+t._s(t.$i18n.__("New? Create a Free Account","cookie-law-info"))+" "),s("template",{slot:"loader"},[t._v(t._s(t.$i18n.__("Connecting...","cookie-law-info")))])],2),s("cky-button",{ref:"ckyButtonConnectExisting",staticClass:"cky-button-connect cky-button-medium cky-button-outline",nativeOn:{click:function(n){return t.connectToApp(!0)}}},[t._v(" "+t._s(t.$i18n.__("Connect Your Existing Account","cookie-law-info"))+" "),s("template",{slot:"loader"},[t._v(t._s(t.$i18n.__("Connecting...","cookie-law-info")))])],2)],1)])])]):t._e()},m=[],$=s("462b"),S=s("c068"),x=s("2f62"),L={name:"CkyConnectNotice",mixins:[S["a"]],components:{CkyNotice:$["a"],CkyIcon:d["a"]},data(){return{syncing:!1,contents:{connect:this.$i18n.sprintf(this.$i18n.__("Create a free account to connect with %sCookieYes web app%s. After connecting, you can manage all your settings from the web app and access advanced features:","cookie-law-info"),"<b>","</b>")}}},methods:{async removeNotice(){await a["a"].post({path:"/settings/notices/connect_notice",data:{}})}},computed:{...Object(x["d"])("settings",["info"]),account(){return this.getOption("account")},showNotice(){return!!window.ckyAppNotices.connect_notice},tablesMissing(){return!!this.info.tables_missing}},mounted(){this.account.connected||(this.$root.$on("beforeConnection",()=>{this.syncing=!0}),this.$root.$on("afterConnection",()=>{}),this.$root.$on("afterSyncing",()=>{this.syncing=!1}))}},A=L,B=(s("2a43"),Object(g["a"])(A,b,m,!1,null,null,null)),O=B.exports,j=function(){var t=this,n=t.$createElement,e=t._self._c||n;return t.pluginStatus&&!t.tablesMissing?e("div",{class:["cky-dashboard-overview",{connected:!!t.account.connected}]},[e("div",{staticClass:"cky-row"},[e("div",{staticClass:"cky-col-12"},[e("div",{staticClass:"cky-card-header"},[e("h5",{staticClass:"cky-card-title"},[t._v(t._s(t.$i18n.__("Overview","cookie-law-info")))])])]),e("div",{staticClass:"cky-col-6"},[e("cky-card",{attrs:{loading:t.cardLoader},scopedSlots:t._u([{key:"body",fn:function(){return[e("div",{staticClass:"cky-card-row"},[e("div",{staticClass:"cky-info-widget-container"},[e("div",{staticClass:"cky-info-widget"},[e("div",{staticClass:"cky-info-widget-icon"},[e("img",{attrs:{src:s("947c"),alt:"layout"}})]),e("div",{staticClass:"cky-info-widget-content"},[e("span",{staticClass:"cky-info-widget-title"},[t._v(t._s(t.$i18n.__("Banner status","cookie-law-info")))]),e("span",{staticClass:"cky-info-widget-text",staticStyle:{color:"#00aa62"}},[t._v(" "+t._s(t.$i18n.__("Active","cookie-law-info"))+" ")])])]),e("div",{staticClass:"cky-info-widget"},[e("div",{staticClass:"cky-info-widget-icon"},[e("img",{attrs:{src:s("91db"),alt:"layout"}})]),e("div",{staticClass:"cky-info-widget-content"},[e("span",{staticClass:"cky-info-widget-title"},[t._v(t._s(t.$i18n.__("Regulation","cookie-law-info")))]),e("span",{staticClass:"cky-info-widget-text",staticStyle:{"text-transform":"uppercase"}},[t._v(" "+t._s(t.applicableLaws)+" ")])])])])]),e("div",{staticClass:"cky-card-row"},[e("div",{staticClass:"cky-info-widget-container"},[e("div",{staticClass:"cky-info-widget"},[e("div",{staticClass:"cky-info-widget-icon"},[e("img",{attrs:{src:s("6aed"),alt:"layout"}})]),e("div",{staticClass:"cky-info-widget-content"},[e("span",{staticClass:"cky-info-widget-title"},[t._v(t._s(t.$i18n.__("Last cookie scan","cookie-law-info")))]),e("span",{staticClass:"cky-info-widget-text"},[t.scans.date&&t.account.connected?e("span",{staticStyle:{"font-size":"14px"}},[t._v(" "+t._s(t.scans.date.date||t.$i18n.__("Not available","cookie-law-info"))+" "),e("span",{staticStyle:{"font-weight":"400"}},[t._v(t._s(t.scans.date.time||""))])]):e("span",[t._v(t._s(t.$i18n.__("Not available","cookie-law-info")))])])])]),e("div",{staticClass:"cky-info-widget"},[e("div",{staticClass:"cky-info-widget-icon"},[e("img",{attrs:{src:s("39fa"),alt:"layout"}})]),e("div",{staticClass:"cky-info-widget-content"},[e("span",{staticClass:"cky-info-widget-title"},[t._v(t._s(t.$i18n.__("Language","cookie-law-info")))]),e("span",{staticClass:"cky-info-widget-text"},[t._v(" "+t._s(t.defaultLanguage.name)+" ")])])])])]),t.account.connected?e("div",{staticClass:"cky-card-row"},[e("div",{staticClass:"cky-card-row-actions"},[e("a",{staticClass:"\n\t\t\t\t\t\t\t\t\tcky-button\n\t\t\t\t\t\t\t\t\tcky-button-outline\n\t\t\t\t\t\t\t\t\tcky-external-link\n\t\t\t\t\t\t\t\t\tcky-button-medium\n\t\t\t\t\t\t\t\t",on:{click:function(n){return t.$router.redirectToApp("customize")}}},[t._v(t._s(t.$i18n.__("Customize Banner","cookie-law-info"))+" ")]),e("a",{staticClass:"\n\t\t\t\t\t\t\t\t\tcky-link cky-actions-link cky-button-icon cky-external-link\n\t\t\t\t\t\t\t\t",attrs:{href:t.getSiteURL(),target:"_blank"}},[t._v(t._s(t.$i18n.__("Preview Banner","cookie-law-info"))+" ")])])]):e("div",{staticClass:"cky-card-row"},[e("div",{staticClass:"cky-card-row-actions"},[e("router-link",{attrs:{to:{name:"customize"},custom:""},scopedSlots:t._u([{key:"default",fn:function(n){var s=n.navigate;return[e("a",{staticClass:"cky-button cky-button-outline cky-button-medium",on:{click:s}},[t._v(t._s(t.$i18n.__("Customize Banner","cookie-law-info"))+" ")])]}}],null,!1,1347445872)}),e("a",{staticClass:"\n\t\t\t\t\t\t\t\t\tcky-link cky-actions-link cky-button-icon cky-external-link\n\t\t\t\t\t\t\t\t",attrs:{href:t.getSiteURL(),target:"_blank"}},[t._v(t._s(t.$i18n.__("Preview Banner","cookie-law-info"))+" ")])],1)])]},proxy:!0}],null,!1,2080448614)})],1),e("div",{staticClass:"cky-col-6"},[e("cky-card",{scopedSlots:t._u([{key:"body",fn:function(){return[e("iframe",{staticClass:"youtube-player",staticStyle:{width:"100%",height:"100%"},attrs:{src:"https://www.youtube.com/embed/g20giM91rs4?rel=0",allowfullscreen:"true",sandbox:"allow-scripts allow-same-origin allow-popups allow-presentation"}})]},proxy:!0}],null,!1,1974415397)})],1)])]):t._e()},I=[],N=s("c4aa"),T={name:"CkyDashboardOverview",components:{CkyCard:r["a"]},props:{},data(){return{loading:!0}},methods:{loadBanner:async function(){await N["a"].getActiveBanner()},getSiteURL(){const t=new URL(window.ckyGlobals.site.url);return t.searchParams.append("cky_preview",!0),t.toString()}},computed:{cardLoader(){return!this.$store.state.settings.info||this.loading},banner(){return this.$store.state.banners.current},consentLogs(){return this.getInfo("consent_logs")&&this.getInfo("consent_logs").status||!1},account(){return this.getOption("account")},scans(){return this.getInfo("scans")&&this.getInfo("scans")||{}},applicableLaws(){if(this.account.connected){const t=this.getInfo("banners");return t.laws&&t.laws||"gdpr"}return this.banner.properties.settings.applicableLaw},pluginStatus(){return this.$store.state.settings.status},tablesMissing(){return!!this.info.tables_missing},...Object(x["c"])("languages",{defaultLanguage:"getDefault"}),...Object(x["d"])("settings",["info"])},async created(){this.loading=!0,await this.loadBanner(),this.loading=!1}},E=T,D=(s("acb2"),Object(g["a"])(E,j,I,!1,null,null,null)),Y=D.exports,M={name:"Dashboard",mixins:[S["a"]],components:{CkyScanSummary:v,CkyConnectSuccess:w["a"],CkyConnectNotice:O,CkyDashboardOverview:Y,CkyConsentChart:()=>s.e("chunk-55c96061").then(s.bind(null,"03b4"))},props:{},data(){return{scanStatus:!0,loading:!0,syncing:!1}},methods:{loadBanner:async function(){await N["a"].getActiveBanner()},connectScan(){this.connectToApp(),this.$root.$on("afterConnection",()=>{this.$refs.ckyButtonConnectScan.startLoading()})},connectLog(){this.connectToApp(),this.$root.$on("afterConnection",()=>{this.$refs.ckyButtonConnectLog.startLoading()})},getSiteURL(){const t=new URL(window.ckyGlobals.site.url);return t.searchParams.append("cky_preview",!0),t.toString()}},computed:{banner(){return this.$store.state.banners.current},consentLogs(){return this.getInfo("consent_logs")&&this.getInfo("consent_logs").status||!1},account(){return this.getOption("account")},bannerStatus(){return this.getInfo("banners")&&this.getInfo("banners").status||!1},scans(){return this.getInfo("scans")&&this.getInfo("scans")||{}},...Object(x["c"])("languages",{defaultLanguage:"getDefault"})},async created(){this.loading=!0;try{await this.loadBanner(),this.loading=!1,this.$root.$on("beforeConnection",()=>{this.syncing=!0}),this.$root.$on("afterSyncing",()=>{this.syncing=!1})}catch(t){console.error(t)}}},P=M,R=(s("6573"),Object(g["a"])(P,e,c,!1,null,"2710f015",null));n["default"]=R.exports},9610:function(t,n,s){"use strict";var e=function(){var t=this,n=t.$createElement,s=t._self._c||n;return t.pluginStatus?s("div",{staticClass:"cky-card",class:t.getLoadingClass},[t.title?s("div",{staticClass:"cky-card-header"},[s("h5",{staticClass:"cky-card-title"},[t._v(" "+t._s(t.title)+" ")]),t.hasActions?s("div",{staticClass:"cky-card-actions"},[t._t("headerAction")],2):t._e()]):t._e(),t.hasBodySlot?s("div",{class:t.getBodyClass},[t.loading?s("cky-card-loader"):t._t("body")],2):t._e(),t._t("outside"),t.hasFooterSlot?s("div",{staticClass:"cky-card-footer"},[t._t("footer")],2):t._e()],2):t._e()},c=[],i=s("17aa"),o={components:{CkyCardLoader:i["a"]},name:"CkyCard",props:{title:{type:String,required:!1},bodyClass:{type:String,default:""},loading:{type:Boolean,default:!1},fullWidth:{type:Boolean,default:!1}},computed:{hasActions(){return!!this.$slots.headerAction},hasBodySlot(){return!!this.$slots.body},hasFooterSlot(){return!!this.$slots.footer},getLoadingClass(){return{"cky-loading":this.loading}},getBodyClass(){return{"cky-card-body":!0,"cky-card-body--full":this.fullWidth,[this.bodyClass]:this.bodyClass}},pluginStatus(){return this.$store.state.settings.status}}},a=o,r=s("2877"),l=Object(r["a"])(a,e,c,!1,null,null,null);n["a"]=l.exports},a209:function(t,n,s){"use strict";s("d6c6")},acb2:function(t,n,s){"use strict";s("7dcd")},b3ba:function(t,n,s){},c5a6:function(t,n,s){"use strict";s("0235")},d6c6:function(t,n,s){}}]);