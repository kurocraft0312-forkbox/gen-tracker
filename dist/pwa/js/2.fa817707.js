(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{ae51:function(t,e,a){"use strict";var r=a("ded3"),s=a.n(r),n=a("2f62");e["a"]={computed:s()(s()({},Object(n["e"])("db",["loading","darker"])),{},{darkerClass(){return this.darker?"bg-dark text-white":"bg-white text-grey-9"}})}},f2410:function(t,e,a){"use strict";a.r(e);var r,s,n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-layout",{attrs:{view:"lHr LpR lFr"}},[a("q-header",[a("q-toolbar",{staticClass:"bg-primary text-white"},[a("q-btn",{attrs:{flat:"",dense:"",round:""},on:{click:function(e){t.drawerOpen.left=!t.drawerOpen.left}}},[a("q-icon",{attrs:{name:"menu"}})],1),a("q-toolbar-title",[t._v("\n        "+t._s(t.$config.app.title)+"\n        "),a("div",{attrs:{slot:"subtitle"},slot:"subtitle"},[t._v("\n          v."+t._s(t.$config.app.version)+" © "+t._s(t.$config.app.subTitle)+"\n        ")])]),t.$q.fullscreen.isCapable?a("q-btn",{attrs:{flat:"",dense:"",round:""},on:{click:function(e){return t.$q.fullscreen.toggle()}}},[a("q-icon",{attrs:{name:t.$q.fullscreen.isActive?"fullscreen_exit":"fullscreen"}})],1):t._e(),a("q-btn",{attrs:{flat:"",dense:"",round:""},on:{click:function(e){t.drawerOpen.right=!t.drawerOpen.right}}},[a("q-icon",{attrs:{name:"apps"}})],1)],1)],1),a("q-drawer",{attrs:{bordered:""},model:{value:t.drawerOpen.left,callback:function(e){t.$set(t.drawerOpen,"left",e)},expression:"drawerOpen.left"}},[a("unit-management",{attrs:{height:t.height.top}}),a("report-reader",{attrs:{height:t.height.bottom-73}})],1),a("q-drawer",{attrs:{side:"right",bordered:""},model:{value:t.drawerOpen.right,callback:function(e){t.$set(t.drawerOpen,"right",e)},expression:"drawerOpen.right"}},[a("command-management"),a("response-log",{attrs:{height:t.height.bottom-73}})],1),a("q-page-container",[a("router-view")],1)],1)},i=[],l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"shadow-1",class:t.darkerClass},[a("div",{staticClass:"q-pa-xs bg-purple text-white text-subtitle1"},[t._v("\n    Report Reader\n    "),t.theReport?a("q-chip",{attrs:{color:t.fullFrame?"green":"light-green",dark:"",dense:"",square:""}},[t._v("\n      "+t._s(t.fullFrame?"FULL":"SIMPLE")+"\n    ")]):t._e()],1),a("q-scroll-area",{style:{height:(t.height<150?150:t.height)+"px"}},[t.theReport?a("q-list",{attrs:{dark:t.darker,separator:""}},t._l(t.reportFields,(function(e){return a("q-item",{key:e,attrs:{clickable:t.readyHistory(e),focused:t.historyField==e,dark:t.darker,"manual-focus":""},on:{click:function(a){return t.openHistory(e)}}},[a("q-item-section",[a("q-item-label",{attrs:{lines:"1"}},[t._v("\n            "+t._s(t.getSubField(e,"title"))+"\n          ")]),a("q-item-label",{attrs:{lines:"2",caption:""}},[t._v("\n            "+t._s(t.theReportData[e].out)+"\n            "+t._s(t.getSubField(e,"unit"))+"\n          ")])],1),a("q-item-section",{attrs:{side:""}},[a("q-icon",{attrs:{name:t.realtimeField(e)?"cloud_download":"cloud_off",color:t.realtimeField(e)?"green":"red"}})],1)],1)})),1):a("q-banner",{attrs:{dark:t.darker},scopedSlots:t._u([{key:"avatar",fn:function(){return[a("q-icon",{attrs:{name:"info"}})]},proxy:!0}])},[t._v("\n      No active report yet\n    ")])],1),a("report-history-modal",{attrs:{height:t.height-210},model:{value:t.historyField,callback:function(e){t.historyField=e},expression:"historyField"}})],1)},o=[],d=a("ded3"),c=a.n(d),h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-dialog",{attrs:{"full-width":""},on:{show:function(e){t.history.render=!0},hide:function(e){return t.stopRender()}},model:{value:t.modalOpen,callback:function(e){t.modalOpen=e},expression:"modalOpen"}},[t.history.render?a("q-card",{attrs:{dark:t.darker}},[a("q-card-section",{staticClass:"bg-primary text-white"},[t._v("\n      REPORT HISTORY\n      "),t.chart.data?a("q-chip",{attrs:{dark:"",dense:"",square:""}},[t._v("\n        "+t._s(t.chart.data.labels.length)+"\n      ")]):t._e()],1),a("q-card-section",{staticClass:"scroll q-ma-sm",staticStyle:{"max-height":"70vh"}},[a("div",{staticClass:"row"},[a("div",{class:t.eventGroup?"col-xs-12 col-sm-12 col-md-8 col-lg-9":"col-12"},[a("div",{staticClass:"q-pa-sm"},[a("line-chart",{attrs:{styles:{height:(t.height<200?200:t.height)+"px"},param:t.chart,update:t.history.update,dark:t.darker}}),a("q-range",{attrs:{min:t.range.min,max:t.range.max,disable:t.range.disable,"drag-range":t.control.drag,snap:"",square:""},model:{value:t.range.value,callback:function(e){t.$set(t.range,"value",e)},expression:"range.value"}}),a("div",{staticClass:"row justify-between items-center content-center"},[a("div",{staticClass:"col-auto"},[a("q-toggle",{staticClass:"q-ma-xs",attrs:{label:"Begin Zero",dark:t.darker},model:{value:t.control.beginAtZero,callback:function(e){t.$set(t.control,"beginAtZero",e)},expression:"control.beginAtZero"}}),a("q-toggle",{staticClass:"q-ma-xs",attrs:{disable:t.control.maximize,label:"Lock Window",dark:t.darker},model:{value:t.control.drag,callback:function(e){t.$set(t.control,"drag",e)},expression:"control.drag"}}),a("q-toggle",{staticClass:"q-ma-xs",attrs:{disable:t.control.maximize,label:"Follow Data",dark:t.darker},model:{value:t.control.follow,callback:function(e){t.$set(t.control,"follow",e)},expression:"control.follow"}}),a("q-toggle",{staticClass:"q-ma-xs",attrs:{label:"Max Range",dark:t.darker},model:{value:t.control.maximize,callback:function(e){t.$set(t.control,"maximize",e)},expression:"control.maximize"}})],1),a("div",{staticClass:"col-auto"},[a("q-input",{staticClass:"q-ma-xs",staticStyle:{width:"130px"},attrs:{value:t.rangeSample,dark:t.darker,type:"number",prefix:"Sample :",disable:"","hide-bottom-space":"",filled:"",dense:""}})],1)])],1)]),t.eventGroup?a("div",{staticClass:"col-xs-12 col-sm-12 col-md-4 col-lg-3"},[a("div",{staticClass:"q-pa-sm scroll",style:{height:(t.height<150?150:t.height)+100+"px"}},[a("event-group-reader",{attrs:{"current-value":t.currentValue}})],1)]):t._e()])]),a("q-card-actions",{staticClass:"bg-primary text-white"},[a("q-btn",{attrs:{unelevated:"",label:"Close"},on:{click:function(e){t.modalOpen=!1}}})],1)],1):t._e()],1)},p=[],m=(a("26e9"),a("d87e")),u=a("2f62"),g=a("1a0d"),b=a("110e"),x=a("2ef0"),f=a("ab1c"),v=a("1fca"),k={extends:v["a"],props:{param:{type:Object,required:!0},update:{type:Object,required:!0},dark:{type:Boolean,default:!1}},mounted(){this.render()},methods:{render(){this.renderChart(this.param.data,this.param.options)}},watch:{"update.data":function(t){this.$data._chart.update()},"update.options":function(t){this.render()}}},q=k,_=a("2877"),y=Object(_["a"])(q,r,s,!1,null,null,null),C=y.exports,O=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-list",{attrs:{dark:t.darker,bordered:""}},t._l(t.devEvents,(function(e,r){return a("q-expansion-item",{key:r,attrs:{label:r+" ",caption:"("+e.length+") times","header-class":"text-"+(t.activeEvent(r)?"green":"grey"),dark:t.darker,"expand-separator":""}},[a("q-list",{attrs:{dark:t.darker,separator:"",dense:"",bordered:""}},t._l(e,(function(e){return a("q-item",{key:r+"-"+e.time,attrs:{dark:t.darker}},[a("q-item-section",[a("q-item-label",{attrs:{caption:""}},[t._v("\n            "+t._s(e.time)+"\n          ")])],1)],1)})),1)],1)})),1)},w=[],Q=a("95e6"),R=a("ae51"),M={props:{currentValue:Number},mixins:[R["a"]],data(){return{EVENT_LIST:this.$_.cloneDeep(Q["a"])}},computed:c()({},Object(u["c"])("db",[m["b"]])),methods:{activeEvent(t){let e=Q["a"].find((({name:e})=>e===t)).bit;return Object(Q["b"])(this.currentValue,e)}}},L=M,$=a("1c1c"),S=a("3b73"),F=a("66e5"),I=a("4074"),j=a("0170"),A=a("eebe"),E=a.n(A),T=Object(_["a"])(L,O,w,!1,null,null,null),D=T.exports;E()(T,"components",{QList:$["a"],QExpansionItem:S["a"],QItem:F["a"],QItemSection:I["a"],QItemLabel:j["a"]});var B={props:{value:{required:!0},height:Number},mixins:[R["a"]],components:{LineChart:C,EventGroupReader:D},data(){return{currentValue:0,modalOpen:!1,chart:Object(x["cloneDeep"])(b["a"]),tmp:{max:null,sample:null,follow:!1,drag:!1},range:{disable:!1,sample:10,min:0,max:null,value:{min:0,max:null}},control:{beginAtZero:!1,maximize:!0,follow:!1,drag:!1},history:{render:!1,update:{data:!1,options:!1}}}},computed:c()(c()({},Object(u["c"])("db",[m["d"],m["b"]])),{},{historyField:{get(){return this.value},set(t){this.$emit("input",t)}},eventGroup(){return"eventsGroup"===this.historyField&&this.devEvents},rangeSample(){let{xiMin:t,xiMax:e}=this.findRange(this.range.value);return e-t+1}}),methods:{getLabel(t){let{labels:e}=this.chart.data;return t>=0?e[t]:e[e.length-1]},findRange({min:t,max:e}){let{labels:a}=this.chart.data,r=t?a.findIndex((e=>e>=t)):0,s=e?this.$_.findLastIndex(a,(t=>t<=e)):a.length-1;return{xiMin:r,xiMax:s}},findRangeX({xiMin:t,xiMax:e}){let{labels:a}=this.chart.data,r=a[t],s=a[e];return{xMin:r,xMax:s}},findRangeY({xiMin:t,xiMax:e}){let{data:a}=this.chart.data.datasets[0],r=a.filter(((a,r)=>r>=t&&r<=e)),s=this.$_.min(r),n=this.$_.max(r);return this.control.beginAtZero&&(s>0?s=0:n=0),n==s&&(s>=0?n+=1:s-=1),{yMin:s,yMax:n}},applyRange(t){let{xiMin:e,xiMax:a}=this.findRange(this.range.value),{xMax:r}=this.findRangeX({xiMin:e,xiMax:a}),s=a-e;(this.control.maximize||this.control.follow)&&(a=this.chart.data.labels.length-1,r=this.getLabel(a),this.control.maximize&&(e=0)),t?t--:(t=a-e,this.control.drag&&(t=s,this.control.follow||(r=this.getLabel(e+t)))),this.range.value={min:this.getLabel(a-t),max:r}},scaleChart(){let{xiMin:t,xiMax:e}=this.findRange(this.range.value),{xMin:a,xMax:r}=this.findRangeX({xiMin:t,xiMax:e}),{yMin:s,yMax:n}=this.findRangeY({xiMin:t,xiMax:e});this.currentValue=r,this.chart.options.scales.xAxes[0].ticks.max=r,this.chart.options.scales.xAxes[0].ticks.min=a,this.chart.options.scales.yAxes[0].ticks.max=n,this.chart.options.scales.yAxes[0].ticks.min=s,this.chart.options.scales.yAxes[0].ticks.beginAtZero=this.control.beginAtZero,this.history.update.options=!this.history.update.options,this.$nextTick((()=>this.modalOpen=!0))},grabLabelsAndDatasets(t){let e=[],a=[];return t.forEach((t=>{t[this.historyField]&&(e.push(t[this.historyField].val),a.push(t.logDatetime.val))})),{datasets:e.reverse(),labels:a.reverse()}},writeChart(t){let{labels:e,datasets:a}=this.grabLabelsAndDatasets(t);t.length>1?(this.chart.data.labels=e,this.chart.data.datasets[0].data=a):(this.chart.data.labels.push(e[0]),this.chart.data.datasets[0].data.push(a[0])),this.range.min=this.getLabel(0),this.range.max=this.getLabel(-1),this.history.update.data=!this.history.update.data},prepareChart(){let{title:t,unit:e}=Object(g["d"])(f["a"],this.historyField);this.chart.data.datasets[0].label=t,this.chart.options.scales.yAxes[0].scaleLabel.labelString=e||"Value",this.history.update.options=!this.history.update.options},stopRender(){this.history.render=!1,this.historyField=null},changeColor(t){this.chart.options.legend.labels.fontColor=t,this.chart.options.scales.xAxes[0].ticks.fontColor=t,this.chart.options.scales.xAxes[0].scaleLabel.fontColor=t,this.chart.options.scales.xAxes[0].gridLines.color=t,this.chart.options.scales.yAxes[0].ticks.fontColor=t,this.chart.options.scales.yAxes[0].scaleLabel.fontColor=t,this.chart.options.scales.yAxes[0].gridLines.color=t}},watch:{historyField:{handler(t){t&&(this.prepareChart(),this.writeChart(this.devReports),this.applyRange())}},devReports:{handler(t){if(this.history.render){let e=t[0];e[this.historyField]&&(this.writeChart([e]),this.applyRange())}}},"control.maximize":{immediate:!0,handler(t){let e=null;t?(this.tmp.max=this.range.value.max,this.tmp.sample=this.rangeSample,this.tmp.drag=this.control.drag,this.tmp.follow=this.control.follow,this.range.disable=!0,this.control.follow=!1,this.control.drag=!1):(this.range.disable=!1,this.control.follow=this.tmp.follow,this.control.drag=this.tmp.drag,this.range.value.max=this.tmp.max,e=this.tmp.sample),this.applyRange(e)}},"range.value":{deep:!0,handler(t){this.scaleChart()}},"control.beginAtZero":{handler(t){this.scaleChart()}},darker:{immediate:!0,handler(t){this.changeColor(t?"#FFF":"#666"),this.history.update.options=!this.history.update.options}}}},N=B,U=a("24e8"),H=a("f09f"),z=a("a370"),Z=a("b047"),V=a("7bbf"),G=a("9564"),P=a("27f9"),X=a("4b7e"),Y=a("9c40"),J=Object(_["a"])(N,h,p,!1,null,null,null),W=J.exports;E()(J,"components",{QDialog:U["a"],QCard:H["a"],QCardSection:z["a"],QChip:Z["a"],QRange:V["a"],QToggle:G["a"],QInput:P["a"],QCardActions:X["a"],QBtn:Y["a"]});var K={props:{height:Number},mixins:[R["a"]],components:{ReportHistoryModal:W},data(){return{historyField:null}},computed:c()(c()(c()({},Object(u["e"])("db",["theReport"])),Object(u["c"])("db",[m["d"]])),{},{theReportData(){return c()(c()({},Object(f["b"])(this.theReport,this.devReports)),this.theReport)},reportFields(){return Object.keys(this.$_.omit(this.theReportData,"hex"))},fullFrame(){return this.theReport.frameID.val===this.$config.frame.id.FULL}}),methods:{openHistory(t){this.readyHistory(t)&&(this.historyField=t)},readyHistory(t){let{chartable:e}=Object(g["d"])(f["a"],t),a=this.devReports.filter((({[t]:e})=>e));return e&&a.length>=2},realtimeField(t){let{required:e}=Object(g["d"])(f["a"],t);return this.theReport.frameID.val===this.$config.frame.id.FULL||e},getSubField(t,e){return Object(g["d"])(f["a"],t)[e]}}},tt=K,et=a("4983"),at=a("0016"),rt=a("54e1"),st=Object(_["a"])(tt,l,o,!1,null,null,null),nt=st.exports;E()(st,"components",{QChip:Z["a"],QScrollArea:et["a"],QList:$["a"],QItem:F["a"],QItemSection:I["a"],QItemLabel:j["a"],QIcon:at["a"],QBanner:rt["a"]});var it=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"shadow-1",class:t.darkerClass},[a("div",{staticClass:"q-pa-xs bg-purple text-white text-subtitle1"},[t._v("\n    Unit Management\n    "),t.units.length>0?a("q-badge",{attrs:{color:"red",align:"top"}},[t._v("\n      "+t._s(t.units.length)+"\n    ")]):t._e()],1),a("q-scroll-area",{style:{height:(t.height<90?90:t.height)+"px"}},[t.units.length>0&&t.theUnit?a("q-list",{attrs:{dark:t.darker,dense:"",separator:""}},t._l(t.units,(function(e,r){return a("q-item",{key:r,attrs:{focused:e===t.theUnit,dark:t.darker,clickable:"","manual-focus":""},on:{click:function(a){return t.setTheUnit(e)}}},[a("q-item-section",[a("q-item-label",{staticClass:"text-subtitle2"},[t._v("\n            "+t._s(e.toString())+"\n          ")])],1),a("q-item-section",{attrs:{side:""}},[a("q-chip",{attrs:{dark:!t.darker,dense:"",square:""}},[t._v("\n            "+t._s(t.getTotalReports(e))+"\n          ")])],1)],1)})),1):a("q-banner",{attrs:{dark:t.darker},scopedSlots:t._u([{key:"avatar",fn:function(){return[a("q-icon",{attrs:{name:"info"}})]},proxy:!0}])},[t._v("\n      No unit yet\n    ")])],1)],1)},lt=[],ot=a("a7bc"),dt={props:{height:Number},mixins:[R["a"]],computed:c()(c()({},Object(u["e"])("db",["units","theUnit"])),Object(u["c"])("db",[m["e"]])),methods:c()(c()({},Object(u["d"])("db",[ot["n"]])),{},{setTheUnit(t){this.loading||this.SET_THE_UNIT(t)}})},ct=dt,ht=a("58a81"),pt=Object(_["a"])(ct,it,lt,!1,null,null,null),mt=pt.exports;E()(pt,"components",{QBadge:ht["a"],QScrollArea:et["a"],QList:$["a"],QItem:F["a"],QItemSection:I["a"],QItemLabel:j["a"],QChip:Z["a"],QBanner:rt["a"],QIcon:at["a"]});var ut=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"shadow-1",class:t.darkerClass},[a("div",{staticClass:"q-pa-xs bg-purple text-white text-subtitle1"},[t._v("\n    Response Log\n    "),t.devCommands.length>0?a("q-badge",{attrs:{color:"red",align:"top"}},[t._v("\n      "+t._s(t.devCommands.length)+"\n    ")]):t._e()],1),a("q-scroll-area",{style:{height:(t.height<150?150:t.height)+"px"}},[t.devCommands.length>0?a("q-list",{attrs:{dark:t.darker,separator:""}},t._l(t.devCommands,(function(e,r){return a("q-item",{key:r,attrs:{dark:t.darker,clickable:""},on:{click:function(a){return t.applyCommand(e.payload)}}},[a("q-item-section",[a("q-item-label",{attrs:{lines:"1"}},[t._v(t._s(e.payload))]),a("q-item-label",{attrs:{lines:"2",caption:""}},[t._v("\n            "+t._s(e.message)+"\n          ")])],1),a("q-item-section",{attrs:{side:""}},[a("q-chip",{attrs:{color:t.parseResCode(e.resCode).color,dark:"",dense:"",square:""}},[t._v("\n            "+t._s(t.parseResCode(e.resCode).title)+"\n          ")])],1)],1)})),1):a("q-banner",{attrs:{dark:t.darker},scopedSlots:t._u([{key:"avatar",fn:function(){return[a("q-icon",{attrs:{name:"info"}})]},proxy:!0}])},[t._v("\n      No response yet\n    ")])],1)],1)},gt=[],bt=a("595a"),xt={props:{height:Number},mixins:[R["a"]],computed:c()(c()({},Object(u["e"])("db",["loading"])),Object(u["c"])("db",[m["a"]])),methods:c()(c()({},Object(u["d"])("db",[ot["k"]])),{},{applyCommand(t){this.loading||this.SET_THE_CMD_BUFFER(t)},parseResCode(t){return Object(bt["a"])(t)}})},ft=xt,vt=Object(_["a"])(ft,ut,gt,!1,null,null,null),kt=vt.exports;E()(vt,"components",{QBadge:ht["a"],QScrollArea:et["a"],QList:$["a"],QItem:F["a"],QItemSection:I["a"],QItemLabel:j["a"],QChip:Z["a"],QBanner:rt["a"],QIcon:at["a"]});var qt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"shadow-1",class:t.darkerClass},[a("div",{staticClass:"q-pa-xs bg-purple text-white text-subtitle1"},[t._v("\n    Command Management\n    "),t.COMMAND_LIST.length>0?a("q-badge",{attrs:{align:"top",color:"red"},nativeOn:{click:function(e){t.modalOpen=!0}}},[a("q-icon",{staticClass:"cursor-pointer",attrs:{name:"info"}})],1):t._e()],1),a("div",{staticClass:"q-pa-sm"},[a("q-input",{attrs:{label:"Input Command:",hint:"Press ENTER to send.",type:"text","stack-label":"",dark:t.darker,disable:t.loading||!t.theUnit,readonly:t.loading,loading:t.loading},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.execCommand()}},scopedSlots:t._u([{key:"append",fn:function(){return[a("q-icon",{staticClass:"cursor-pointer",attrs:{name:"send"},on:{click:function(e){return t.execCommand()}}})]},proxy:!0}]),model:{value:t.commandBuffer,callback:function(e){t.commandBuffer=e},expression:"commandBuffer"}})],1),a("command-list-modal",{on:{select:t.selectCommand},model:{value:t.modalOpen,callback:function(e){t.modalOpen=e},expression:"modalOpen"}})],1)},_t=[],yt=a("95f8"),Ct=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-dialog",{attrs:{"full-width":""},model:{value:t.modalOpen,callback:function(e){t.modalOpen=e},expression:"modalOpen"}},[a("q-card",{attrs:{dark:t.darker}},[a("q-card-section",{staticClass:"bg-primary text-white"},[t._v("\n      COMMAND LIST\n      "),t.COMMAND_LIST.length>0?a("q-badge",{attrs:{color:"red",align:"top"}},[t._v("\n        "+t._s(t.COMMAND_LIST.length)+"\n      ")]):t._e()],1),a("q-separator"),a("q-card-section",{staticClass:"scroll",staticStyle:{"max-height":"70vh"}},[a("q-list",{attrs:{dark:t.darker,separator:""}},t._l(t.searchResult,(function(e,r){return a("q-item",{key:r,attrs:{dark:t.darker,clickable:""},on:{click:function(a){return t.$emit("select",e.command)}}},[a("q-item-section",[a("q-item-label",{attrs:{lines:"1"}},[t._v(t._s(e.command))]),a("q-item-label",{attrs:{lines:"2",caption:""}},[t._v(t._s(e.desc))])],1),e.type?a("q-item-section",{attrs:{side:""}},[a("q-item-label",[a("q-chip",{attrs:{dark:"",dense:"",square:"",color:"red"}},[t._v("\n                "+t._s(e.type)+"\n              ")])],1),a("q-item-label",[a("q-chip",{attrs:{dark:"",dense:"",square:"",color:"green"}},[t._v("\n                "+t._s(t.getRange(e.range))+"\n              ")])],1)],1):t._e()],1)})),1)],1),a("q-separator"),a("q-card-actions",{staticClass:"bg-primary text-white"},[a("q-btn",{attrs:{unelevated:"",label:"Close"},on:{click:function(e){t.modalOpen=!1}}})],1)],1)],1)},Ot=[],wt=(a("ddb0"),{emits:["select"],props:{value:{required:!0,type:Boolean}},mixins:[R["a"]],data(){return{COMMAND_LIST:this.$_.cloneDeep(yt["a"]),keyword:""}},computed:{modalOpen:{get(){return this.value},set(t){this.$emit("input",t)}},searchResult(){return Object(g["c"])(this.COMMAND_LIST,this.keyword)}},methods:{getRange(t){const[e,a]=t;return a?`[ ${e}, ${a} ]`:`[ ${e} ]`}}}),Qt=wt,Rt=a("eb85"),Mt=Object(_["a"])(Qt,Ct,Ot,!1,null,null,null),Lt=Mt.exports;E()(Mt,"components",{QDialog:U["a"],QCard:H["a"],QCardSection:z["a"],QBadge:ht["a"],QSeparator:Rt["a"],QList:$["a"],QItem:F["a"],QItemSection:I["a"],QItemLabel:j["a"],QChip:Z["a"],QCardActions:X["a"],QBtn:Y["a"]});var $t={mixins:[R["a"]],components:{CommandListModal:Lt},data(){return{COMMAND_LIST:this.$_.cloneDeep(yt["a"]),modalOpen:!1}},computed:c()(c()({},Object(u["e"])("db",["theUnit","theCmdBuffer"])),{},{commandBuffer:{get(){return this.theCmdBuffer},set(t){this.SET_THE_CMD_BUFFER(t.toUpperCase())}}}),methods:c()(c()({},Object(u["d"])("db",[ot["k"]])),{},{selectCommand(t){this.modalOpen=!1,this.SET_THE_CMD_BUFFER(t)},execCommand(){this.$root.$emit("executeCommand",this.commandBuffer)}})},St=$t,Ft=Object(_["a"])(St,qt,_t,!1,null,null,null),It=Ft.exports;E()(Ft,"components",{QBadge:ht["a"],QIcon:at["a"],QInput:P["a"]});var jt={name:"MyLayout",mixins:[R["a"]],components:{ReportReader:nt,UnitManagement:mt,ResponseLog:kt,CommandManagement:It},data(){return{drawerOpen:{left:this.$q.platform.is.desktop,right:!1},height:{top:90,bottom:0}}},methods:{onResize(t){this.height.bottom=t-this.height.top}},watch:{"$q.screen.height":{immediate:!0,handler(t){this.onResize(t)}}}},At=jt,Et=a("4d5a"),Tt=a("e359"),Dt=a("65c6"),Bt=a("6ac5"),Nt=a("9404"),Ut=a("09e3"),Ht=Object(_["a"])(At,n,i,!1,null,null,null);e["default"]=Ht.exports;E()(Ht,"components",{QLayout:Et["a"],QHeader:Tt["a"],QToolbar:Dt["a"],QBtn:Y["a"],QIcon:at["a"],QToolbarTitle:Bt["a"],QDrawer:Nt["a"],QPageContainer:Ut["a"]})}}]);