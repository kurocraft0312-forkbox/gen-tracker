(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{"8b24":function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-page",[a("q-splitter",{staticStyle:{height:"calc(100vh - 50px)"},attrs:{horizontal:""},scopedSlots:t._u([{key:"before",fn:function(){return[a("map-management")]},proxy:!0},{key:"separator",fn:function(){return[a("q-avatar",{attrs:{color:"grey","text-color":"white",size:"20px",icon:"drag_indicator"}})]},proxy:!0},{key:"after",fn:function(){return[a("q-tabs",{staticClass:"bg-primary text-white",attrs:{dense:""},model:{value:t.selectedTab,callback:function(e){t.selectedTab=e},expression:"selectedTab"}},[a("q-tab",{attrs:{name:"tab-1",label:"Report Log"}},[a("q-badge",{attrs:{color:"red",floating:""}},[t._v(t._s(t.devReports.length))])],1),a("q-tab",{attrs:{name:"tab-2",label:"Driver Management"}},[a("q-badge",{attrs:{color:"red",floating:""}},[t._v(t._s(t.devFingers.length))])],1),a("q-tab",{attrs:{name:"tab-3",label:"Configuration"}})],1),a("q-tab-panels",{attrs:{swipeable:""},model:{value:t.selectedTab,callback:function(e){t.selectedTab=e},expression:"selectedTab"}},[a("q-tab-panel",{attrs:{name:"tab-1"}},[a("report-log",{attrs:{"content-style":t.contentStyle}})],1),a("q-tab-panel",{attrs:{name:"tab-2"}},[a("driver-management",{attrs:{"content-style":t.contentStyle}})],1),a("q-tab-panel",{attrs:{name:"tab-3"}},[a("global-configuration",{attrs:{"content-style":t.contentStyle}})],1)],1)]},proxy:!0}]),model:{value:t.splitter,callback:function(e){t.splitter=e},expression:"splitter"}})],1)},n=[],r=a("ded3"),i=a.n(r),l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-splitter",{attrs:{value:t.showStreetView?50:100},scopedSlots:t._u([{key:"before",fn:function(){return[a("gmap-map",{staticClass:"fit",attrs:{center:t.center,zoom:t.zoom,options:t.options,"map-type-id":"roadmap"}},[t.position.valid?a("gmap-marker",{attrs:{position:t.position}}):t._e(),t.path.length>0?a("gmap-polyline",{ref:"polyline",attrs:{path:t.path}}):t._e()],1)]},proxy:!0},t.showStreetView?{key:"separator",fn:function(){return[a("q-avatar",{attrs:{color:"grey","text-color":"white",size:"20px",icon:"drag_indicator"}})]},proxy:!0}:null,t.showStreetView?{key:"after",fn:function(){return[a("gmap-street-view-panorama",{staticClass:"fit",attrs:{position:t.position,pov:t.pov,zoom:1},on:{pano_changed:t.updatePano,pov_changed:t.updatePov}})]},proxy:!0}:null],null,!0)})},s=[],c=a("4082"),d=a.n(c),p=a("110e");const m=({lng:t,lat:e})=>{let{borderIndonesia:a}=p["a"].map;return t>a.lngMin&&t<a.lngMax&&e>a.latMin&&e<a.latMax},u=({frameID:t,gpsLatitude:e,gpsLongitude:a})=>{let o=i()(i()({},p["a"].map.centerIndonesia),{},{valid:!1});return t.val===p["a"].frame.id.FULL&&(o.lat=e.val,o.lng=a.val,o.valid=m(o)),o},b=({frameID:t,gpsHeading:e})=>t.val===p["a"].frame.id.FULL?e.val:0;var f=a("d87e"),v=a("2f62"),g={data(){return{center:i()({},p["a"].map.centerIndonesia),position:i()(i()({},p["a"].map.centerIndonesia),{},{valid:!1}),zoom:p["a"].map.zoom,pov:null,pano:null,path:[],options:{zoomControl:!0,mapTypeControl:!1,scaleControl:!0,streetViewControl:!1,rotateControl:!1,fullscreenControl:!0,disableDefaultUi:!0}}},computed:i()(i()(i()({},Object(v["e"])("db",["report"])),Object(v["c"])("db",[f["f"]])),{},{showStreetView(){return this.$q.screen.gt.xs}}),methods:{updatePov(t){this.pov=t},updatePano(t){this.pano=t},setPosition(t){let{valid:e}=t,a=d()(t,["valid"]);e?(this.zoom=17,this.center=i()({},a)):(this.zoom=p["a"].map.zoom,this.center=i()({},p["a"].map.centerIndonesia)),this.position=i()(i()({},a),{},{valid:e})}},watch:{"devReports.0":{immediate:!0,handler(t){if(!t)return;let e=u(t);e.valid&&this.path.push(e)}},report:{immediate:!0,handler(t){t&&(this.setPosition(u(t)),this.pov&&this.updatePov(i()(i()({},this.pov),{},{heading:b(t)})))}}}},h=g,y=a("2877"),S=a("8562"),x=a("cb32"),q=a("eebe"),_=a.n(q),w=Object(y["a"])(h,l,s,!1,null,null,null),k=w.exports;_()(w,"components",{QSplitter:S["a"],QAvatar:x["a"]});var O=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{style:t.contentStyle},[0==t.devReports.length?a("q-banner",{scopedSlots:t._u([{key:"avatar",fn:function(){return[a("q-icon",{attrs:{name:"info"}})]},proxy:!0}],null,!1,1899737995)},[t._v("\n    No report yet\n  ")]):a("q-virtual-scroll",{attrs:{items:t.devReports,separator:""},scopedSlots:t._u([{key:"default",fn:function(e){var o=e.item,n=e.index;return[a("q-item",{key:n,attrs:{active:o.hex===t.report.hex,"active-class":"bg-primary text-white",clickable:"",dense:""},on:{click:function(e){return t.SET_REPORT(o)}}},[a("q-item-section",{attrs:{avatar:""}},[a("div",[a("q-chip",{staticClass:"q-ml-sm text-center",staticStyle:{width:"60px"},attrs:{color:"FULL"==o.frameID.out?"green":"light-green",dark:"",dense:"",square:""}},[t._v(t._s(o.frameID.out))]),a("q-chip",{attrs:{color:"primary",dark:"",dense:"",square:""}},[t._v(t._s(t.getDatetime(o.logDatetime)))])],1)]),a("q-item-section",[a("q-item-label",{staticClass:"ellipsis"},[t._v(t._s(o.hex))])],1)],1)]}}])}),a("q-page-sticky",{attrs:{position:"bottom-right",offset:[18,18]}},[a("q-btn",{attrs:{icon:t.followState?"lock":"lock_open",color:t.followState?"secondary":"grey",disable:0==t.devReports.length,"fab-mini":""},on:{click:function(e){t.followState=!t.followState}}},[a("q-tooltip",{attrs:{anchor:"top middle",self:"bottom middle"}},[t._v(t._s(t.followState?"Unfollow":"Follow"))])],1)],1)],1)},C=[],T=a("c1df"),I=a.n(T),Q=a("a7bc"),D=a("5662"),j=a("ae51"),E={mixins:[j["a"]],props:{contentStyle:{type:String,required:!0}},computed:i()(i()(i()(i()({},Object(v["e"])("db",["report"])),Object(v["e"])("common",["follow"])),Object(v["c"])("db",[f["f"]])),{},{followState:{get(){return this.follow},set(t){this.SET_FOLLOW(t)}}}),methods:i()(i()(i()({},Object(v["d"])("db",[Q["j"]])),Object(v["d"])("common",[D["c"]])),{},{getDatetime(t){return I.a.unix(t.val).format("HH:mm:ss")}})},M=E,L=a("54e1"),F=a("0016"),A=a("a12b"),N=a("66e5"),R=a("4074"),$=a("b047"),P=a("0170"),z=a("de5e"),H=a("9c40"),V=a("05c0"),J=Object(y["a"])(M,O,C,!1,null,null,null),B=J.exports;_()(J,"components",{QBanner:L["a"],QIcon:F["a"],QVirtualScroll:A["a"],QItem:N["a"],QItemSection:R["a"],QChip:$["a"],QItemLabel:P["a"],QPageSticky:z["a"],QBtn:H["a"],QTooltip:V["a"]});var U=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{style:t.contentStyle},[a("div",{staticClass:"text-subtitle2"},[t._v("Last fetch: "+t._s(t.fingerTime()))]),0==t.devFingers.length?a("q-banner",{scopedSlots:t._u([{key:"avatar",fn:function(){return[a("q-icon",{attrs:{name:"info"}})]},proxy:!0}],null,!1,1899737995)},[t._v("\n    No finger driver yet\n  ")]):a("q-virtual-scroll",{attrs:{items:t.devFingers,separator:""},scopedSlots:t._u([{key:"default",fn:function(e){var o=e.item,n=e.index;return[a("q-item",{key:n,attrs:{dense:""}},[a("q-item-section",{attrs:{avatar:""}},[a("q-chip",{attrs:{color:"primary",dark:"",square:""}},[t._v(t._s(o.fingerID))])],1),a("q-item-section",[a("q-item-label",[t._v("Mr. "+t._s(t.name[o.fingerID-1]))])],1),a("q-item-section",{attrs:{side:""}},[a("q-btn",{attrs:{loading:t.loading,size:"sm",icon:"delete",outline:"",unelevated:"",round:""},on:{click:function(e){return t.remove(o)}}})],1)],1)]}}])}),a("q-page-sticky",{attrs:{position:"bottom-right",offset:[18,18]}},[a("q-fab",{attrs:{"external-label":"","vertical-actions-align":"right",color:"secondary",icon:"keyboard_arrow_left",direction:"left","label-position":"top",padding:"sm",disable:t.loading},model:{value:t.fab,callback:function(e){t.fab=e},expression:"fab"}},[a("q-fab-action",{attrs:{disable:t.loading||!t.unitID,"label-position":"top",color:"primary",icon:"download",label:"Fetch","external-label":""},on:{click:t.fetch}}),a("q-fab-action",{attrs:{disable:t.loading||!t.unitID,"label-position":"top",color:"green",icon:"upload",label:"Add","external-label":""},on:{click:t.add}}),a("q-fab-action",{attrs:{disable:t.loading||!t.unitID,"label-position":"top",color:"orange",icon:"delete_forever",label:"Reset","external-label":""},on:{click:t.clear}})],1)],1)],1)},G=[],Y=a("41f5"),W=a("2ef0"),K={mixins:[j["a"]],props:{contentStyle:{type:String,required:!0}},data(){return{name:["One","Two","Three","Four","Five"],fab:!1}},computed:i()(i()({},Object(v["e"])("db",["unitID"])),Object(v["c"])("db",[f["d"],f["b"]])),methods:i()(i()({},Object(v["d"])("db",[Q["i"]])),{},{fingerTime(){let t=Object(W["get"])(this.devDevice,"fingerTime");return t?I.a.unix(t).format("DD-MM-YY HH:mm:ss"):"Unknown"},fetch(){this.SET_COMMAND({payload:"FINGER_FETCH"})},add(){this.SET_COMMAND({payload:"FINGER_ADD"})},remove({fingerID:t}){Object(Y["a"])(`Are you sure to remove this fingerprint ${t} ?`).onOk((()=>this.SET_COMMAND({payload:`FINGER_DEL=${t}`})))},clear(){Object(Y["a"])("Are you sure to clear all fingerprints  ?").onOk((()=>this.SET_COMMAND({payload:"FINGER_RST"})))}})},X=K,Z=a("c294"),tt=a("72db"),et=Object(y["a"])(X,U,G,!1,null,null,null),at=et.exports;_()(et,"components",{QBanner:L["a"],QIcon:F["a"],QVirtualScroll:A["a"],QItem:N["a"],QItemSection:R["a"],QChip:$["a"],QItemLabel:P["a"],QBtn:H["a"],QPageSticky:z["a"],QFab:Z["a"],QFabAction:tt["a"]});var ot=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{style:t.contentStyle},[a("div",{staticClass:"row q-gutter-xs"},[a("div",{staticClass:"col-auto"},[a("q-btn",{attrs:{icon:"delete",color:"negative",label:"Clear data",disable:0==t.devices.length},on:{click:function(e){return t.clearStore()}}})],1),a("div",{staticClass:"col-auto"},[a("q-btn",{attrs:{icon:"stop",color:"primary",label:"Ignore command",disable:!t.command.exec},on:{click:function(e){return t.$root.$emit("ignoreCommand")}}})],1),a("div",{staticClass:"col-auto"},[a("q-btn",{attrs:{icon:"cloud_download",color:"green",label:"Export CSV",disable:0==t.reports.length},nativeOn:{click:function(e){return t.exportCSV()}}})],1),a("div",{staticClass:"col-auto"},[a("q-btn",{attrs:{icon:"cloud_download",color:"purple",label:"Export JSON",disable:0==t.reports.length},nativeOn:{click:function(e){return t.exportJSON()}}})],1)]),a("div",{staticClass:"row q-gutter-xs q-mt-xs"},[a("div",{staticClass:"col-auto"},[a("q-uploader",{ref:"importer",attrs:{factory:t.importJSON,accept:".json",label:"Import JSON"},on:{finishImport:t.finishImport}})],1)]),a("div",{staticClass:"row q-gutter-xs q-mt-xs"},[a("div",{staticClass:"col-auto"},[a("q-toggle",{attrs:{disable:0==t.devices.length,label:"Time Calibration"},model:{value:t.calibrationState,callback:function(e){t.calibrationState=e},expression:"calibrationState"}})],1)])])},nt=[],rt=(a("13d5"),a("e6cf"),a("ab1c")),it=a("f23f"),lt=a("2e92");const st=t=>t.map((t=>i()({},rt["a"].reduce(((e,{field:a,no:o})=>i()(i()({},e),{},{[o]:t[a]?t[a].out:""})),{})))),ct=()=>rt["a"].reduce(((t,{title:e,unit:a})=>t.concat([e+(a?` (${a})`:"")])),[]),dt=t=>{const e=new it["ExportToCsv"]({fieldSeparator:",",quoteStrings:'"',decimalSeparator:".",showLabels:!0,showTitle:!1,title:"My Awesome CSV",useTextFile:!1,useBom:!0,useKeysAsHeaders:!1,headers:ct()});e.generateCsv(st(t))},pt=t=>t?t.map((({hex:t})=>t)):[],mt=t=>{const e=`tracking-${I()().format("YYMMDDHHmmss")}`,a=pt(t),o="json";Object(lt["a"])({data:a,fileName:e,exportType:o})},ut=t=>new Promise(((e,a)=>{t||a();let o=new FileReader;o.onload=t=>e(JSON.parse(t.target.result)),o.readAsText(t)}));var bt={mixins:[j["a"]],props:{contentStyle:{type:String,required:!0}},computed:i()(i()({},Object(v["e"])("db",["devices","command","reports"])),{},{calibrationState:{get(){return this.calibration},set(t){this.SET_CALIBRATION(t)}}}),methods:i()(i()(i()({},Object(v["d"])("common",[D["a"]])),Object(v["d"])("db",[Q["e"]])),{},{finishImport(){this.$refs.importer.reset()},exportJSON(){mt(this.reports)},exportCSV(){dt(this.reports)},importJSON(t){ut(t[0]).then((t=>this.$root.$emit("importData",t)))},clearStore(){Object(Y["a"])("Are you sure to remove all data?").onOk((()=>this.CLEAR_ALL()))}})},ft=bt,vt=a("ee89"),gt=a("9564"),ht=Object(y["a"])(ft,ot,nt,!1,null,null,null),yt=ht.exports;_()(ht,"components",{QBtn:H["a"],QUploader:vt["a"],QToggle:gt["a"]});var St={mixins:[j["a"]],components:{MapManagement:k,ReportLog:B,DriverManagement:at,GlobalConfiguration:yt},data(){return{selectedTab:"tab-1",mapHeight:300,paneHeight:0,pageWidth:0,splitter:50}},computed:i()(i()({},Object(v["c"])("db",[f["f"],f["d"]])),{},{contentStyle(){return`height: calc(100vh - ${this.splitter}vh - 95px)`}})},xt=St,qt=a("9989"),_t=a("429b"),wt=a("7460"),kt=a("58a81"),Ot=a("adad"),Ct=a("823b"),Tt=Object(y["a"])(xt,o,n,!1,null,null,null);e["default"]=Tt.exports;_()(Tt,"components",{QPage:qt["a"],QSplitter:S["a"],QAvatar:x["a"],QTabs:_t["a"],QTab:wt["a"],QBadge:kt["a"],QTabPanels:Ot["a"],QTabPanel:Ct["a"]})}}]);