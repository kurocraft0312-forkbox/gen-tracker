(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{"8b24":function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-page",[a("q-splitter",{staticStyle:{height:"calc(100vh - 50px)"},attrs:{horizontal:""},scopedSlots:e._u([{key:"before",fn:function(){return[a("map-management")]},proxy:!0},{key:"separator",fn:function(){return[a("q-avatar",{attrs:{color:"grey","text-color":"white",size:"20px",icon:"drag_indicator"}})]},proxy:!0},{key:"after",fn:function(){return[a("q-tabs",{staticClass:"bg-primary text-white",attrs:{dense:""},model:{value:e.selectedTab,callback:function(t){e.selectedTab=t},expression:"selectedTab"}},[a("q-tab",{attrs:{name:"tab-1",label:"Report Log"}},[a("q-badge",{attrs:{color:"red",floating:""}},[e._v(e._s(e.devReports.length))])],1),a("q-tab",{attrs:{name:"tab-2",label:"Driver Management"}},[a("q-badge",{attrs:{color:"red",floating:""}},[e._v(e._s(e.devFingers.length))])],1),a("q-tab",{attrs:{name:"tab-3",label:"Configuration"}})],1),a("q-tab-panels",{attrs:{swipeable:""},model:{value:e.selectedTab,callback:function(t){e.selectedTab=t},expression:"selectedTab"}},[a("q-tab-panel",{attrs:{name:"tab-1"}},[a("report-log",{attrs:{"content-style":e.contentStyle}})],1),a("q-tab-panel",{attrs:{name:"tab-2"}},[a("driver-management",{attrs:{"content-style":e.contentStyle}})],1),a("q-tab-panel",{attrs:{name:"tab-3"}},[a("global-configuration",{attrs:{"content-style":e.contentStyle}})],1)],1)]},proxy:!0}]),model:{value:e.splitter,callback:function(t){e.splitter=t},expression:"splitter"}})],1)},n=[],r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-splitter",{attrs:{value:e.showPano?50:100},scopedSlots:e._u([{key:"before",fn:function(){return[a("gmap-map",{staticClass:"fit",attrs:{center:e.center,zoom:e.zoom,options:e.options,"map-type-id":"roadmap"}},[e.position.valid?a("gmap-marker",{attrs:{position:e.position}}):e._e(),e.path.length>0?a("gmap-polyline",{ref:"polyline",attrs:{path:e.path}}):e._e()],1)]},proxy:!0},e.showPano?{key:"separator",fn:function(){return[a("q-avatar",{attrs:{color:"grey","text-color":"white",size:"20px",icon:"drag_indicator"}})]},proxy:!0}:null,e.showPano?{key:"after",fn:function(){return[a("gmap-street-view-panorama",{staticClass:"fit",attrs:{position:e.position,pov:e.pov,zoom:1},on:{pano_changed:e.updatePano,pov_changed:e.updatePov}})]},proxy:!0}:null],null,!0)})},l=[],i=a("4082"),s=a.n(i),c=a("ded3"),d=a.n(c),p=a("9482"),u=a("9944");const b=({lng:e,lat:t})=>{let{borderIndonesia:a}=p["a"].map;return e>a.lngMin&&e<a.lngMax&&t>a.latMin&&t<a.latMax},v=({frameID:e,gpsLatitude:t,gpsLongitude:a})=>{let o=d()(d()({},p["a"].map.centerIndonesia),{},{valid:!1});return e.val===Object(u["e"])("FULL")&&(o.lat=t.val,o.lng=a.val,o.valid=b(o)),o},m=({frameID:e,gpsHeading:t})=>e.val===Object(u["e"])("FULL")?t.val:0;var f=a("09f9"),g=a("e4fd"),h=a("8d7e"),y={setup(e){const{useState:t,useGetters:a}=Object(h["a"])("db"),{report:o}=t(["report"]),{devReports:n}=a(["devReports"]),{centerIndonesia:r,zoom:l}=p["a"].map,i=Object(g["reactive"])({pov:null,pano:null,path:[],zoom:l,center:d()({},r),position:d()(d()({},r),{},{valid:!1}),options:{zoomControl:!0,mapTypeControl:!1,scaleControl:!0,streetViewControl:!1,rotateControl:!1,fullscreenControl:!0,disableDefaultUi:!0}}),c=Object(g["computed"])((()=>f["a"].gt.xs)),u=e=>i.pov=e,b=e=>i.pano=e,y=e=>{let{valid:t}=e,a=s()(e,["valid"]);i.zoom=t?17:l,i.center=d()({},t?a:r),i.position=d()(d()({},a),{},{valid:t})};return Object(g["watch"])((()=>n.value[0]),(e=>{if(!e)return;let t=v(e);t.valid&&i.path.push(t)}),{lazy:!1}),Object(g["watch"])((()=>o.value),(e=>{e&&(y(v(e)),i.pov&&u(d()(d()({},i.pov),{},{heading:m(e)})))}),{lazy:!1}),d()(d()({},Object(g["toRefs"])(i)),{},{showPano:c,updatePov:u,updatePano:b})}},S=y,q=a("2877"),x=a("8562"),_=a("cb32"),k=a("eebe"),O=a.n(k),w=Object(q["a"])(S,r,l,!1,null,null,null),j=w.exports;O()(w,"components",{QSplitter:x["a"],QAvatar:_["a"]});var C=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{style:e.contentStyle},[0==e.devReports.length?a("q-banner",{scopedSlots:e._u([{key:"avatar",fn:function(){return[a("q-icon",{attrs:{name:"info"}})]},proxy:!0}],null,!1,1899737995)},[e._v("\n    No report yet\n  ")]):a("q-virtual-scroll",{attrs:{items:e.devReports,separator:""},scopedSlots:e._u([{key:"default",fn:function(t){var o=t.item,n=t.index;return[a("q-item",{key:n,attrs:{active:o.hex===e.report.hex,"active-class":"bg-primary text-white",clickable:"",dense:""},on:{click:function(t){return e.setReport(o)}}},[a("q-item-section",{attrs:{avatar:""}},[a("div",[a("q-chip",{staticClass:"q-ml-sm text-center",staticStyle:{width:"60px"},attrs:{color:"FULL"==o.frameID.out?"green":"light-green",dark:"",dense:"",square:""}},[e._v(e._s(o.frameID.out))]),a("q-chip",{attrs:{color:"primary",dark:"",dense:"",square:""}},[e._v(e._s(e.getDatetime(o.logDatetime)))])],1)]),a("q-item-section",[a("q-item-label",{staticClass:"ellipsis"},[e._v(e._s(o.hex))])],1)],1)]}}])}),a("q-page-sticky",{attrs:{position:"bottom-right",offset:[18,18]}},[a("q-btn",{attrs:{icon:e.followState?"lock":"lock_open",color:e.followState?"secondary":"grey",disable:0==e.devReports.length,"fab-mini":""},on:{click:function(t){e.followState=!e.followState}}},[a("q-tooltip",{attrs:{anchor:"top middle",self:"bottom middle"}},[e._v(e._s(e.followState?"Unfollow":"Follow"))])],1)],1)],1)},Q=[],I=a("c1df"),D=a.n(I),F=a("a7bc"),T=a("5662"),R={props:{contentStyle:{type:String,required:!0}},setup(e){const t=Object(h["a"])("db"),{report:a}=t.useState(["report"]),{devReports:o}=t.useGetters(["devReports"]),{[F["i"]]:n}=t.useMutations([F["i"]]),r=Object(h["a"])("common"),{follow:l}=r.useState(["follow"]),{[T["c"]]:i}=r.useMutations([T["c"]]),s=Object(g["computed"])({get:()=>l.value,set:e=>i(e)}),c=e=>D.a.unix(e.val).format("HH:mm:ss");return{report:a,devReports:o,followState:s,setReport:n,getDatetime:c}}},M=R,L=a("54e1"),E=a("0016"),P=a("a12b"),z=a("66e5"),N=a("4074"),A=a("b047"),$=a("0170"),G=a("de5e"),H=a("9c40"),B=a("05c0"),J=Object(q["a"])(M,C,Q,!1,null,null,null),U=J.exports;O()(J,"components",{QBanner:L["a"],QIcon:E["a"],QVirtualScroll:P["a"],QItem:z["a"],QItemSection:N["a"],QChip:A["a"],QItemLabel:$["a"],QPageSticky:G["a"],QBtn:H["a"],QTooltip:B["a"]});var V=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{style:e.contentStyle},[a("div",{staticClass:"text-subtitle2"},[e._v("Last fetch: "+e._s(e.getFingerTime()))]),0==e.devFingers.length?a("q-banner",{scopedSlots:e._u([{key:"avatar",fn:function(){return[a("q-icon",{attrs:{name:"info"}})]},proxy:!0}],null,!1,1899737995)},[e._v("\n    No finger driver yet\n  ")]):a("q-virtual-scroll",{attrs:{items:e.devFingers,separator:""},scopedSlots:e._u([{key:"default",fn:function(t){var o=t.item,n=t.index;return[a("q-item",{key:n,attrs:{dense:""}},[a("q-item-section",{attrs:{avatar:""}},[a("q-chip",{attrs:{color:"primary",dark:"",square:""}},[e._v(e._s(o.fingerID))])],1),a("q-item-section",[a("q-item-label",[e._v("Mr. "+e._s(e.name[o.fingerID-1]))])],1),a("q-item-section",{attrs:{side:""}},[a("q-btn",{attrs:{loading:e.processing,size:"sm",icon:"delete",outline:"",unelevated:"",round:""},on:{click:function(t){return e.remove(o)}}})],1)],1)]}}])}),a("q-page-sticky",{attrs:{position:"bottom-right",offset:[18,18]}},[a("q-fab",{attrs:{"external-label":"","vertical-actions-align":"right",color:"secondary",icon:"keyboard_arrow_left",direction:"left","label-position":"top",padding:"sm",disable:e.processing},model:{value:e.fab,callback:function(t){e.fab=t},expression:"fab"}},[a("q-fab-action",{attrs:{disable:e.processing||!e.devDevice,"label-position":"top",color:"primary",icon:"download",label:"Fetch","external-label":""},on:{click:e.fetch}}),a("q-fab-action",{attrs:{disable:e.processing||!e.devDevice,"label-position":"top",color:"green",icon:"upload",label:"Add","external-label":""},on:{click:e.add}}),a("q-fab-action",{attrs:{disable:e.processing||!e.devDevice,"label-position":"top",color:"orange",icon:"delete_forever",label:"Reset","external-label":""},on:{click:e.clear}})],1)],1)],1)},Y=[],K=a("b7fa3"),W=a("2ef0"),X=a("6ad4"),Z={props:{contentStyle:{type:String,required:!0}},setup(e){const{useGetters:t,useActions:a}=Object(h["a"])("db"),{devFingers:o,devDevice:n}=t(["devFingers","devDevice"]),{[X["a"]]:r}=a([X["a"]]),l=Object(g["ref"])(["One","Two","Three","Four","Five"]),i=Object(g["ref"])(!1),s=()=>{let e=Object(W["get"])(n.value,"fingerTime");return e?D.a.unix(e).format("DD-MM-YY HH:mm:ss"):"Unknown"},c=()=>r({payload:"FINGER_FETCH"}),d=()=>r({payload:"FINGER_ADD"}),p=({fingerID:e})=>Object(K["a"])(`Are you sure to remove this fingerprint ${e} ?`).onOk((()=>r({payload:`FINGER_DEL=${e}`}))),u=()=>Object(K["a"])("Are you sure to clear all fingerprints  ?").onOk((()=>r({payload:"FINGER_RST"})));return{name:l,fab:i,devFingers:o,devDevice:n,getFingerTime:s,fetch:c,add:d,remove:p,clear:u}}},ee=Z,te=a("c294"),ae=a("72db"),oe=Object(q["a"])(ee,V,Y,!1,null,null,null),ne=oe.exports;O()(oe,"components",{QBanner:L["a"],QIcon:E["a"],QVirtualScroll:P["a"],QItem:z["a"],QItemSection:N["a"],QChip:A["a"],QItemLabel:$["a"],QBtn:H["a"],QPageSticky:G["a"],QFab:te["a"],QFabAction:ae["a"]});var re=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{style:e.contentStyle},[a("div",{staticClass:"row q-gutter-xs"},[a("div",{staticClass:"col-auto"},[a("q-btn",{attrs:{icon:"delete",color:"negative",label:"Clear data",disable:0==e.devices.length},on:{click:function(t){return e.clearStore()}}})],1),a("div",{staticClass:"col-auto"},[a("q-btn",{attrs:{icon:"stop",color:"primary",label:"Ignore command",disable:!e.command.exec},on:{click:function(t){return e.ignoreCommand()}}})],1),a("div",{staticClass:"col-auto"},[a("q-btn",{attrs:{icon:"cloud_download",color:"green",label:"Export CSV",disable:0==e.reports.length},nativeOn:{click:function(t){return e.exportCSV(e.reports)}}})],1),a("div",{staticClass:"col-auto"},[a("q-btn",{attrs:{icon:"cloud_download",color:"purple",label:"Export JSON",disable:0==e.reports.length},nativeOn:{click:function(t){return e.exportJSON(e.reports)}}})],1)]),a("div",{staticClass:"row q-gutter-xs q-mt-xs"},[a("div",{staticClass:"col-auto"},[a("q-uploader",{ref:"uploader",attrs:{factory:e.importData,accept:".json",label:"Import JSON"}})],1)]),a("div",{staticClass:"row q-gutter-xs q-mt-xs"},[a("div",{staticClass:"col-auto"},[a("q-toggle",{attrs:{disable:0==e.devices.length,label:"Time Calibration"},model:{value:e.calibrationState,callback:function(t){e.calibrationState=t},expression:"calibrationState"}})],1),a("div",{staticClass:"col-auto"},[a("q-toggle",{attrs:{label:"Notification"},model:{value:e.notificationState,callback:function(t){e.notificationState=t},expression:"notificationState"}})],1)])])},le=[],ie=(a("ddb0"),a("13d5"),a("e6cf"),a("af6a")),se=a("f23f"),ce=a("2e92");const de=e=>e.map((e=>d()({},ie["a"].reduce(((t,{field:a,no:o})=>d()(d()({},t),{},{[o]:e[a]?e[a].out:""})),{})))),pe=()=>ie["a"].reduce(((e,{title:t,unit:a})=>e.concat([t+(a?` (${a})`:"")])),[]),ue=e=>{const t=new se["ExportToCsv"]({fieldSeparator:",",quoteStrings:'"',decimalSeparator:".",showLabels:!0,showTitle:!1,title:"My Awesome CSV",useTextFile:!1,useBom:!0,useKeysAsHeaders:!1,headers:pe()});t.generateCsv(de(e))},be=e=>e?e.map((({hex:e})=>e)):[],ve=e=>{const t=`tracking-${D()().format("YYMMDDHHmmss")}`,a=be(e),o="json";Object(ce["a"])({data:a,fileName:t,exportType:o})},me=e=>new Promise(((t,a)=>{e||a();let o=new FileReader;o.onload=e=>t(JSON.parse(e.target.result)),o.readAsText(e)}));var fe={props:{contentStyle:{type:String,required:!0}},setup(e){const t=Object(h["a"])("db"),{devices:a,command:o,reports:n}=t.useState(["devices","command","reports"]),{[F["e"]]:r,[X["d"]]:l}=t.useMutations([F["e"],X["d"]]),i=Object(h["a"])("common"),{calibration:s,notification:c}=i.useState(["calibration","notification"]),{[T["a"]]:d,[T["d"]]:p}=i.useMutations([T["a"],T["d"]]),u=Object(g["ref"])(null),b=Object(g["reactive"])({hInterval:null,dialog:null,buffer:[],buflen:0}),v=Object(g["computed"])({get:()=>s.value,set:e=>d(e)}),m=Object(g["computed"])({get:()=>c.value,set:e=>p(e)}),f=()=>Object(K["a"])("Are you sure to remove all data?").onOk((()=>r())),y=()=>{Object(K["c"])("Command ignored.","warning"),l()},S=()=>{if(b.buffer.length>0){let e=100*b.buffer.length/b.buflen;b.dialog.update({message:`${e.toFixed(2)}%`})}else b.hInterval&&clearInterval(b.hInterval),b.dialog&&b.dialog.hide(),u.value&&u.value.reset()},q=([e])=>me(e).then((e=>{b.buffer=e,b.buflen=e.length,b.dialog=Object(K["b"])("Importing..."),b.hInterval=setInterval(S,100)}));return{uploader:u,devices:a,command:o,reports:n,calibrationState:v,notificationState:m,clearStore:f,ignoreCommand:y,importData:q,exportJSON:ve,exportCSV:ue}}},ge=fe,he=a("ee89"),ye=a("9564"),Se=Object(q["a"])(ge,re,le,!1,null,null,null),qe=Se.exports;O()(Se,"components",{QBtn:H["a"],QUploader:he["a"],QToggle:ye["a"]});var xe={components:{MapManagement:j,ReportLog:U,DriverManagement:ne,GlobalConfiguration:qe},setup(e){const{useGetters:t}=Object(h["a"])("db"),{devReports:a,devFingers:o}=t(["devReports","devFingers"]),n=Object(g["ref"])("tab-1"),r=Object(g["ref"])(50),l=Object(g["computed"])((()=>`height: calc(100vh - ${r.value}vh - 95px)`));return{selectedTab:n,splitter:r,devReports:a,devFingers:o,contentStyle:l}}},_e=xe,ke=a("9989"),Oe=a("429b"),we=a("7460"),je=a("58a81"),Ce=a("adad"),Qe=a("823b"),Ie=Object(q["a"])(_e,o,n,!1,null,null,null);t["default"]=Ie.exports;O()(Ie,"components",{QPage:ke["a"],QSplitter:x["a"],QAvatar:_["a"],QTabs:Oe["a"],QTab:we["a"],QBadge:je["a"],QTabPanels:Ce["a"],QTabPanel:Qe["a"]})}}]);