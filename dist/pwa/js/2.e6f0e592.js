(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{ae51:function(t,e,a){"use strict";var r=a("ded3"),n=a.n(r),s=a("2f62");e["a"]={computed:n()(n()({},Object(s["e"])("db",["loading","darker"])),{},{darkerClass(){return this.darker?"bg-dark text-white":"bg-white text-grey-9"}})}},f241:function(t,e,a){"use strict";a.r(e);var r,n,s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-layout",{attrs:{view:"lHr LpR lFr"}},[a("q-header",[a("q-toolbar",{staticClass:"bg-primary text-white"},[a("q-btn",{attrs:{flat:"",dense:"",round:""},on:{click:function(e){t.drawerOpen.left=!t.drawerOpen.left}}},[a("q-icon",{attrs:{name:"menu"}})],1),a("q-toolbar-title",[t._v("\n        "+t._s(t.$config.app.title)+"\n        "),a("q-item-label",{staticClass:"text-white",attrs:{caption:""}},[t._v("\n          "+t._s(t.$config.app.subTitle)+" v."+t._s(t.$config.app.version)+"\n        ")])],1),t.$q.fullscreen.isCapable?a("q-btn",{attrs:{flat:"",dense:"",round:""},on:{click:function(e){return t.$q.fullscreen.toggle()}}},[a("q-icon",{attrs:{name:t.$q.fullscreen.isActive?"fullscreen_exit":"fullscreen"}})],1):t._e(),a("q-btn",{attrs:{flat:"",dense:"",round:""},on:{click:function(e){t.drawerOpen.right=!t.drawerOpen.right}}},[a("q-icon",{attrs:{name:"more_vert"}})],1)],1)],1),a("q-drawer",{attrs:{"content-class":t.darkerClass,bordered:""},model:{value:t.drawerOpen.left,callback:function(e){t.$set(t.drawerOpen,"left",e)},expression:"drawerOpen.left"}},[a("q-splitter",{staticStyle:{height:"100vh"},attrs:{value:150,unit:"px",horizontal:""},scopedSlots:t._u([{key:"before",fn:function(){return[a("unit-management")]},proxy:!0},{key:"after",fn:function(){return[a("report-reader")]},proxy:!0}])})],1),a("q-drawer",{attrs:{side:"right","content-class":t.darkerClass,bordered:""},model:{value:t.drawerOpen.right,callback:function(e){t.$set(t.drawerOpen,"right",e)},expression:"drawerOpen.right"}},[a("q-splitter",{staticStyle:{height:"100vh"},attrs:{value:128,unit:"px",horizontal:""},scopedSlots:t._u([{key:"before",fn:function(){return[a("command-management")]},proxy:!0},{key:"after",fn:function(){return[a("response-log")]},proxy:!0}])})],1),a("q-page-container",[a("router-view")],1)],1)},i=[],l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"shadow-1"},[a("div",{staticClass:"q-pa-xs bg-purple text-white text-subtitle1"},[t._v("\n    Report Reader\n    "),t.theReport?a("q-chip",{attrs:{color:t.fullFrame?"green":"light-green",dark:"",dense:"",square:""}},[t._v("\n      "+t._s(t.fullFrame?"FULL":"SIMPLE")+"\n    ")]):t._e()],1),a("q-virtual-scroll",{staticClass:"fill-height",attrs:{items:t.reportFields,separator:""},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.item;e.index;return[a("q-item",{key:r,attrs:{clickable:t.hasHistory(r),active:t.historyField==r,"active-class":"bg-primary text-white",dark:t.darker},on:{click:function(e){return t.openHistory(r)}}},[a("q-item-section",[a("q-item-label",{attrs:{lines:"1"}},[t._v("\n            "+t._s(t.getSubField(r,"title"))+"\n          ")]),a("q-item-label",{attrs:{lines:"2",caption:""}},[t._v("\n            "+t._s(t.theReportData[r].out)+"\n            "+t._s(t.getSubField(r,"unit"))+"\n          ")])],1),a("q-item-section",{attrs:{side:""}},[a("q-icon",{attrs:{name:t.realtimeField(r)?"cloud_download":"cloud_off",color:t.realtimeField(r)?"green":"red"}})],1)],1)]}},{key:"after",fn:function(){return[0==t.reportFields.length?a("q-banner",{attrs:{dark:t.darker},scopedSlots:t._u([{key:"avatar",fn:function(){return[a("q-icon",{attrs:{name:"info"}})]},proxy:!0}],null,!1,1899737995)},[t._v("\n        No active report yet\n      ")]):t._e()]},proxy:!0}])}),t.historyField?a("report-history-modal",{attrs:{field:t.historyField},on:{close:function(e){t.historyField=null}}}):t._e()],1)},o=[],c=a("ded3"),d=a.n(c),h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-dialog",{attrs:{maximized:t.$q.platform.is.mobile,"full-height":"","full-width":""},on:{hide:function(e){return t.$emit("close")}},model:{value:t.modalOpen,callback:function(e){t.modalOpen=e},expression:"modalOpen"}},[a("q-card",{attrs:{dark:t.darker}},[a("q-card-section",{staticClass:"bg-primary text-white"},[t._v("\n      REPORT HISTORY - "+t._s(this.theField.title)+"\n      "),t.chart.data?a("q-chip",{attrs:{dark:"",dense:"",square:""}},[t._v("\n        "+t._s(t.chart.data.labels.length)+"\n      ")]):t._e()],1),a("q-separator"),a("q-card-section",{staticClass:"scroll q-ma-sm",staticStyle:{height:"calc(100vh - 177px)"}},[a("div",{staticClass:"row"},[a("div",{class:t.eventGroup?"col-xs-12 col-sm-12 col-md-8 col-lg-9":"col-12"},[a("div",{staticClass:"q-pa-sm"},[a("line-chart",{staticStyle:{height:"calc(100vh - 360px)"},attrs:{param:t.chart,update:t.history.update,dark:t.darker}}),a("q-range",{attrs:{min:t.range.min,max:t.range.max,disable:t.range.disable,"drag-range":t.control.drag,snap:"",square:""},model:{value:t.range.value,callback:function(e){t.$set(t.range,"value",e)},expression:"range.value"}}),a("div",{staticClass:"row justify-between items-center content-center"},[a("div",{staticClass:"col-auto"},[a("q-toggle",{staticClass:"q-ma-xs",attrs:{label:"Begin Zero",dark:t.darker},model:{value:t.control.beginAtZero,callback:function(e){t.$set(t.control,"beginAtZero",e)},expression:"control.beginAtZero"}}),a("q-toggle",{staticClass:"q-ma-xs",attrs:{disable:t.control.maximize,label:"Lock Window",dark:t.darker},model:{value:t.control.drag,callback:function(e){t.$set(t.control,"drag",e)},expression:"control.drag"}}),a("q-toggle",{staticClass:"q-ma-xs",attrs:{disable:t.control.maximize,label:"Follow Data",dark:t.darker},model:{value:t.control.follow,callback:function(e){t.$set(t.control,"follow",e)},expression:"control.follow"}}),a("q-toggle",{staticClass:"q-ma-xs",attrs:{label:"Max Range",dark:t.darker},model:{value:t.control.maximize,callback:function(e){t.$set(t.control,"maximize",e)},expression:"control.maximize"}})],1),a("div",{staticClass:"col-auto"},[a("q-input",{staticClass:"q-ma-xs",staticStyle:{width:"130px"},attrs:{value:t.rangeSample,dark:t.darker,type:"number",prefix:"Sample :",disable:"","hide-bottom-space":"",filled:"",dense:""}})],1)])],1)]),t.eventGroup?a("div",{staticClass:"col-xs-12 col-sm-12 col-md-4 col-lg-3"},[a("div",{staticClass:"q-pa-sm scroll",staticStyle:{"max-height":"calc(100vh - 210px)"}},[a("event-group-reader",{attrs:{"current-value":t.currentValue}})],1)]):t._e()])]),a("q-separator"),a("q-card-actions",{staticClass:"bg-primary text-white absolute-bottom"},[a("q-btn",{attrs:{unelevated:"",label:"Close"},on:{click:function(e){t.modalOpen=!1}}})],1)],1)],1)},u=[],p=(a("26e9"),a("d87e")),m=a("2f62"),b=a("1a0d"),f=a("110e"),g=a("2ef0"),x=a("ab1c"),v=a("1fca"),k={extends:v["a"],props:{param:{type:Object,required:!0},update:{type:Object,required:!0},dark:{type:Boolean,default:!1}},mounted(){this.render()},methods:{render(){this.renderChart(this.param.data,this.param.options)}},watch:{"update.data":function(t){this.$data._chart.update()},"update.options":function(t){this.render()}}},_=k,q=a("2877"),y=Object(q["a"])(_,r,n,!1,null,null,null),C=y.exports,O=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-list",{attrs:{dark:t.darker,bordered:""}},t._l(t.devEvents,(function(e,r){return a("q-expansion-item",{key:r,attrs:{label:r+" ",caption:"("+e.length+") times","header-class":"text-"+(t.activeEvent(r)?"green":"grey"),dark:t.darker,"expand-separator":""}},[a("q-virtual-scroll",{staticClass:"fill-height",attrs:{items:e,separator:""},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.item;e.index;return[a("q-item",{key:r+"-"+n.time,attrs:{dark:t.darker}},[a("q-item-section",[a("q-item-label",{attrs:{caption:""}},[t._v("\n              "+t._s(n.time)+"\n            ")])],1)],1)]}}],null,!0)})],1)})),1)},w=[],Q=a("95e6"),S=a("ae51"),M={props:{currentValue:Number},mixins:[S["a"]],data(){return{EVENT_LIST:this.$_.cloneDeep(Q["a"])}},computed:d()({},Object(m["c"])("db",[p["b"]])),methods:{activeEvent(t){let e=Q["a"].find((({name:e})=>e===t)).bit;return Object(Q["b"])(this.currentValue,e)}}},R=M,L=a("1c1c"),$=a("3b73"),I=a("a12b"),j=a("66e5"),F=a("4074"),E=a("0170"),A=a("eebe"),T=a.n(A),D=Object(q["a"])(R,O,w,!1,null,null,null),B=D.exports;T()(D,"components",{QList:L["a"],QExpansionItem:$["a"],QVirtualScroll:I["a"],QItem:j["a"],QItemSection:F["a"],QItemLabel:E["a"]});var U={props:{field:{required:!0}},mixins:[S["a"]],components:{LineChart:C,EventGroupReader:B},data(){return{currentValue:0,modalOpen:!1,chart:Object(g["cloneDeep"])(f["a"]),tmp:{max:null,sample:null,follow:!1,drag:!1},range:{disable:!1,sample:10,min:0,max:null,value:{min:0,max:null}},control:{beginAtZero:!1,maximize:!0,follow:!1,drag:!1},history:{update:{data:!1,options:!1}}}},computed:d()(d()({},Object(m["c"])("db",[p["d"],p["b"]])),{},{theField(){return Object(b["d"])(x["a"],this.field)},eventGroup(){return"eventsGroup"===this.field&&Object.keys(this.devEvents).length>0},rangeSample(){let{iMin:t,iMax:e}=this.findRange(this.range.value);return e-t+1}}),methods:{getLabel(t){let{labels:e}=this.chart.data;return t>=0?e[t]:e[e.length-1]},findRange({min:t,max:e}){let{labels:a}=this.chart.data,r=t?a.findIndex((e=>e>=t)):0,n=e?this.$_.findLastIndex(a,(t=>t<=e)):a.length-1;return{iMin:r,iMax:n}},findRangeX({iMin:t,iMax:e}){let{labels:a}=this.chart.data,r=a[t],n=a[e];return{xMin:r,xMax:n}},findRangeY({iMin:t,iMax:e}){let{data:a}=this.chart.data.datasets[0],r=a.filter(((a,r)=>r>=t&&r<=e)),n=this.$_.min(r),s=this.$_.max(r);return this.control.beginAtZero&&(n>0?n=0:s=0),s==n&&(n>=0?s+=1:n-=1),{yMin:n,yMax:s}},applyRange(t){let{iMin:e,iMax:a}=this.findRange(this.range.value),{xMax:r}=this.findRangeX({iMin:e,iMax:a}),n=a-e;(this.control.maximize||this.control.follow)&&(a=this.chart.data.labels.length-1,r=this.getLabel(a),this.control.maximize&&(e=0)),t?t--:(t=a-e,this.control.drag&&(t=n,this.control.follow||(r=this.getLabel(e+t)))),this.range.value={min:this.getLabel(a-t),max:r}},scaleChart(){let{iMin:t,iMax:e}=this.findRange(this.range.value),{xMin:a,xMax:r}=this.findRangeX({iMin:t,iMax:e}),{yMin:n,yMax:s}=this.findRangeY({iMin:t,iMax:e});this.currentValue=r,this.chart.options.scales.xAxes[0].ticks.max=r,this.chart.options.scales.xAxes[0].ticks.min=a,this.chart.options.scales.yAxes[0].ticks.max=s,this.chart.options.scales.yAxes[0].ticks.min=n,this.chart.options.scales.yAxes[0].ticks.beginAtZero=this.control.beginAtZero,this.history.update.options=!this.history.update.options,this.$nextTick((()=>this.modalOpen=!0))},grabLabelsAndDatasets(t){let e=[],a=[];return t.forEach((t=>{t[this.field]&&(e.push(t[this.field].val),a.push(t.logDatetime.val))})),{datasets:e.reverse(),labels:a.reverse()}},writeChart(t){let{labels:e,datasets:a}=this.grabLabelsAndDatasets(t);t.length>1?(this.chart.data.labels=e,this.chart.data.datasets[0].data=a):(this.chart.data.labels.push(e[0]),this.chart.data.datasets[0].data.push(a[0])),this.range.min=this.getLabel(0),this.range.max=this.getLabel(-1),this.history.update.data=!this.history.update.data},prepareChart(){let{title:t,unit:e}=this.theField;this.chart.data.datasets[0].label=t,this.chart.options.scales.yAxes[0].scaleLabel.labelString=e||"Value",this.history.update.options=!this.history.update.options},changeColor(t){this.chart.options.legend.labels.fontColor=t,this.chart.options.scales.xAxes[0].ticks.fontColor=t,this.chart.options.scales.xAxes[0].scaleLabel.fontColor=t,this.chart.options.scales.xAxes[0].gridLines.color=t,this.chart.options.scales.yAxes[0].ticks.fontColor=t,this.chart.options.scales.yAxes[0].scaleLabel.fontColor=t,this.chart.options.scales.yAxes[0].gridLines.color=t}},mounted(){this.prepareChart(),this.writeChart(this.devReports),this.applyRange()},watch:{devReports:{handler(t){let e=t[0];e[this.field]&&(this.writeChart([e]),this.applyRange())}},"control.maximize":{immediate:!0,handler(t){let e=null;t?(this.tmp.max=this.range.value.max,this.tmp.sample=this.rangeSample,this.tmp.drag=this.control.drag,this.tmp.follow=this.control.follow,this.range.disable=!0,this.control.follow=!1,this.control.drag=!1):(this.range.disable=!1,this.control.follow=this.tmp.follow,this.control.drag=this.tmp.drag,this.range.value.max=this.tmp.max,e=this.tmp.sample),this.applyRange(e)}},"range.value":{deep:!0,handler(t){this.scaleChart()}},"control.beginAtZero":{handler(t){this.scaleChart()}},darker:{immediate:!0,handler(t){this.changeColor(t?"#FFF":"#666"),this.history.update.options=!this.history.update.options}}}},N=U,z=a("24e8"),H=a("f09f"),V=a("a370"),Z=a("b047"),G=a("eb85"),P=a("7bbf"),X=a("9564"),Y=a("27f9"),J=a("4b7e"),W=a("9c40"),K=Object(q["a"])(N,h,u,!1,null,null,null),tt=K.exports;T()(K,"components",{QDialog:z["a"],QCard:H["a"],QCardSection:V["a"],QChip:Z["a"],QSeparator:G["a"],QRange:P["a"],QToggle:X["a"],QInput:Y["a"],QCardActions:J["a"],QBtn:W["a"]});var et={mixins:[S["a"]],components:{ReportHistoryModal:tt},data(){return{historyField:null}},computed:d()(d()(d()({},Object(m["e"])("db",["theReport"])),Object(m["c"])("db",[p["d"]])),{},{theReportData(){return d()(d()({},Object(x["b"])(this.theReport,this.devReports)),this.theReport)},reportFields(){return Object.keys(this.$_.omit(this.theReportData,"hex"))},fullFrame(){return this.theReport.frameID.val===this.$config.frame.id.FULL}}),methods:{openHistory(t){this.hasHistory(t)&&(this.historyField=t)},hasHistory(t){let{chartable:e}=Object(b["d"])(x["a"],t),a=this.devReports.filter((({[t]:e})=>e));return e&&a.length>=2},realtimeField(t){let{required:e}=Object(b["d"])(x["a"],t);return this.theReport.frameID.val===this.$config.frame.id.FULL||e},getSubField(t,e){return Object(b["d"])(x["a"],t)[e]}}},at=et,rt=a("0016"),nt=a("54e1"),st=Object(q["a"])(at,l,o,!1,null,null,null),it=st.exports;T()(st,"components",{QChip:Z["a"],QVirtualScroll:I["a"],QItem:j["a"],QItemSection:F["a"],QItemLabel:E["a"],QIcon:rt["a"],QBanner:nt["a"]});var lt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"shadow-1"},[a("div",{staticClass:"q-pa-xs bg-purple text-white text-subtitle1"},[t._v("\n    Unit Management\n    "),t.units.length>0?a("q-badge",{attrs:{color:"red",align:"top"}},[t._v("\n      "+t._s(t.units.length)+"\n    ")]):t._e()],1),a("q-virtual-scroll",{staticClass:"fill-height",attrs:{items:t.units,separator:""},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.item,n=e.index;return[a("q-item",{key:n,attrs:{active:r===t.theUnit,"active-class":"bg-primary text-white",dark:t.darker,clickable:"",dense:""},on:{click:function(e){return t.setTheUnit(r)}}},[a("q-item-section",[a("q-item-label",{staticClass:"text-subtitle2"},[t._v("\n            "+t._s(r.toString())+"\n          ")])],1),a("q-item-section",{attrs:{side:""}},[a("q-chip",{attrs:{dark:!t.darker,dense:"",square:""}},[t._v("\n            "+t._s(t.getTotalReports(r))+"\n          ")])],1)],1)]}},{key:"after",fn:function(){return[0==t.units.length?a("q-banner",{attrs:{dark:t.darker},scopedSlots:t._u([{key:"avatar",fn:function(){return[a("q-icon",{attrs:{name:"info"}})]},proxy:!0}],null,!1,1899737995)},[t._v("\n        No unit yet\n      ")]):t._e()]},proxy:!0}])})],1)},ot=[],ct=a("a7bc"),dt={mixins:[S["a"]],computed:d()(d()({},Object(m["e"])("db",["units","theUnit"])),Object(m["c"])("db",[p["e"]])),methods:d()(d()({},Object(m["d"])("db",[ct["n"]])),{},{setTheUnit(t){this.loading||this.SET_THE_UNIT(t)}})},ht=dt,ut=a("58a81"),pt=Object(q["a"])(ht,lt,ot,!1,null,null,null),mt=pt.exports;T()(pt,"components",{QBadge:ut["a"],QVirtualScroll:I["a"],QItem:j["a"],QItemSection:F["a"],QItemLabel:E["a"],QChip:Z["a"],QBanner:nt["a"],QIcon:rt["a"]});var bt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"shadow-1"},[a("div",{staticClass:"q-pa-xs bg-purple text-white text-subtitle1"},[t._v("\n    Response Log\n    "),t.devCommands.length>0?a("q-badge",{attrs:{color:"red",align:"top"}},[t._v("\n      "+t._s(t.devCommands.length)+"\n    ")]):t._e()],1),a("q-virtual-scroll",{staticClass:"fill-height",attrs:{items:t.devCommands,separator:""},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.item,n=e.index;return[a("q-item",{key:n,attrs:{dark:t.darker,clickable:""},on:{click:function(e){return t.applyCommand(r.payload)}}},[a("q-item-section",[a("q-item-label",{attrs:{lines:"1"}},[t._v(t._s(r.payload))]),a("q-item-label",{attrs:{lines:"2",caption:""}},[t._v("\n            "+t._s(r.message)+"\n          ")])],1),a("q-item-section",{attrs:{side:""}},[a("q-chip",{attrs:{color:t.parseResCode(r.resCode).color,dark:"",dense:"",square:""}},[t._v("\n            "+t._s(t.parseResCode(r.resCode).title)+"\n          ")])],1)],1)]}},{key:"after",fn:function(){return[0==t.devCommands.length?a("q-banner",{attrs:{dark:t.darker},scopedSlots:t._u([{key:"avatar",fn:function(){return[a("q-icon",{attrs:{name:"info"}})]},proxy:!0}],null,!1,1899737995)},[t._v("\n        No response yet\n      ")]):t._e()]},proxy:!0}])})],1)},ft=[],gt=a("595a"),xt={mixins:[S["a"]],computed:d()(d()({},Object(m["e"])("db",["loading"])),Object(m["c"])("db",[p["a"]])),methods:d()(d()({},Object(m["d"])("db",[ct["k"]])),{},{applyCommand(t){this.loading||this.SET_THE_CMD_BUFFER(t)},parseResCode(t){return Object(gt["a"])(t)}})},vt=xt,kt=Object(q["a"])(vt,bt,ft,!1,null,null,null),_t=kt.exports;T()(kt,"components",{QBadge:ut["a"],QVirtualScroll:I["a"],QItem:j["a"],QItemSection:F["a"],QItemLabel:E["a"],QChip:Z["a"],QBanner:nt["a"],QIcon:rt["a"]});var qt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"shadow-1"},[a("div",{staticClass:"q-pa-xs bg-purple text-white text-subtitle1"},[t._v("\n    Command Management\n    "),t.COMMAND_LIST.length>0?a("q-icon",{staticClass:"cursor-pointer",attrs:{name:"info"},nativeOn:{click:function(e){t.modalOpen=!0}}}):t._e()],1),a("div",{staticClass:"q-pa-sm"},[a("q-input",{attrs:{label:"Input Command:",hint:"Press ENTER to send.",type:"text","stack-label":"",dark:t.darker,disable:t.loading||!t.theUnit,readonly:t.loading,loading:t.loading},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.execCommand()}},scopedSlots:t._u([{key:"append",fn:function(){return[a("q-icon",{staticClass:"cursor-pointer",attrs:{name:"send"},on:{click:function(e){return t.execCommand()}}})]},proxy:!0}]),model:{value:t.commandBuffer,callback:function(e){t.commandBuffer=e},expression:"commandBuffer"}})],1),a("command-list-modal",{on:{select:t.selectCommand},model:{value:t.modalOpen,callback:function(e){t.modalOpen=e},expression:"modalOpen"}})],1)},yt=[],Ct=a("95f8"),Ot=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-dialog",{attrs:{maximized:t.$q.platform.is.mobile,"full-width":"","full-height":""},model:{value:t.modalOpen,callback:function(e){t.modalOpen=e},expression:"modalOpen"}},[a("q-card",{attrs:{dark:t.darker}},[a("q-card-section",{staticClass:"bg-primary text-white"},[t._v("\n      COMMAND LIST\n      "),t.COMMAND_LIST.length>0?a("q-badge",{attrs:{color:"red",align:"top"}},[t._v("\n        "+t._s(t.COMMAND_LIST.length)+"\n      ")]):t._e()],1),a("q-separator"),a("q-card-section",{staticClass:"scroll",staticStyle:{height:"calc(100vh - 155px)"}},[a("q-virtual-scroll",{staticClass:"fill-height",attrs:{items:t.searchResult,separator:""},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.item,n=e.index;return[a("q-item",{key:n,attrs:{dark:t.darker,clickable:""},on:{click:function(e){return t.$emit("select",r.command)}}},[a("q-item-section",[a("q-item-label",{attrs:{lines:"1"}},[t._v(t._s(r.command))]),a("q-item-label",{attrs:{lines:"2",caption:""}},[t._v(t._s(r.desc))])],1),r.type?a("q-item-section",{attrs:{side:""}},[a("q-item-label",{attrs:{lines:"1"}},[a("q-chip",{attrs:{dark:"",dense:"",square:"",color:"red"}},[t._v("\n                  "+t._s(r.type)+"\n                ")])],1),a("q-item-label",{attrs:{lines:"2"}},[a("q-chip",{attrs:{dark:"",dense:"",square:"",color:"green"}},[t._v("\n                  "+t._s(t.getRange(r.range))+"\n                ")])],1)],1):t._e()],1)]}}])})],1),a("q-separator"),a("q-card-actions",{staticClass:"absolute-bottom bg-primary text-white"},[a("q-btn",{attrs:{unelevated:"",label:"Close"},on:{click:function(e){t.modalOpen=!1}}})],1)],1)],1)},wt=[],Qt=(a("ddb0"),{emits:["select"],props:{value:{required:!0,type:Boolean}},mixins:[S["a"]],data(){return{COMMAND_LIST:this.$_.cloneDeep(Ct["a"]),keyword:""}},computed:{modalOpen:{get(){return this.value},set(t){this.$emit("input",t)}},searchResult(){return Object(b["c"])(this.COMMAND_LIST,this.keyword)}},methods:{getRange(t){const[e,a]=t;return a?`[ ${e}, ${a} ]`:`[ ${e} ]`}}}),St=Qt,Mt=Object(q["a"])(St,Ot,wt,!1,null,null,null),Rt=Mt.exports;T()(Mt,"components",{QDialog:z["a"],QCard:H["a"],QCardSection:V["a"],QBadge:ut["a"],QSeparator:G["a"],QVirtualScroll:I["a"],QItem:j["a"],QItemSection:F["a"],QItemLabel:E["a"],QChip:Z["a"],QCardActions:J["a"],QBtn:W["a"]});var Lt={mixins:[S["a"]],components:{CommandListModal:Rt},data(){return{COMMAND_LIST:this.$_.cloneDeep(Ct["a"]),modalOpen:!1}},computed:d()(d()({},Object(m["e"])("db",["theUnit","theCmdBuffer"])),{},{commandBuffer:{get(){return this.theCmdBuffer},set(t){this.SET_THE_CMD_BUFFER(t.toUpperCase())}}}),methods:d()(d()({},Object(m["d"])("db",[ct["k"]])),{},{selectCommand(t){this.modalOpen=!1,this.SET_THE_CMD_BUFFER(t)},execCommand(){this.$root.$emit("executeCommand",this.commandBuffer)}})},$t=Lt,It=Object(q["a"])($t,qt,yt,!1,null,null,null),jt=It.exports;T()(It,"components",{QIcon:rt["a"],QInput:Y["a"]});var Ft={name:"MyLayout",mixins:[S["a"]],components:{ReportReader:it,UnitManagement:mt,ResponseLog:_t,CommandManagement:jt},data(){return{drawerOpen:{left:this.$q.platform.is.desktop,right:!1}}}},Et=Ft,At=a("4d5a"),Tt=a("e359"),Dt=a("65c6"),Bt=a("6ac5"),Ut=a("9404"),Nt=a("8562"),zt=a("09e3"),Ht=Object(q["a"])(Et,s,i,!1,null,null,null);e["default"]=Ht.exports;T()(Ht,"components",{QLayout:At["a"],QHeader:Tt["a"],QToolbar:Dt["a"],QBtn:W["a"],QIcon:rt["a"],QToolbarTitle:Bt["a"],QItemLabel:E["a"],QDrawer:Ut["a"],QSplitter:Nt["a"],QPageContainer:zt["a"]})}}]);