((self||this)["webpackJsonprecalendar.js"]=(self||this)["webpackJsonprecalendar.js"]||[]).push([[0],{153:function(e,t,a){},154:function(e,t,a){var n={"./en/app.json":[320,3],"./en/config.json":[321,4],"./en/pdf.json":[322,5],"./es/app.json":[323,6],"./es/config.json":[324,7],"./es/pdf.json":[325,8],"./fr/app.json":[326,9],"./fr/config.json":[327,10],"./fr/pdf.json":[328,11],"./pl/app.json":[329,12],"./pl/config.json":[330,13],"./pl/pdf.json":[331,14]};function r(e){if(!a.o(n,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=n[e],r=t[0];return a.e(t[1]).then((function(){return a.t(r,3)}))}r.keys=function(){return Object.keys(n)},r.id=154,e.exports=r},174:function(e,t,a){},177:function(e,t,a){var n={"./af.js":178,"./am.js":179,"./ar-dz.js":180,"./ar-iq.js":181,"./ar-kw.js":182,"./ar-ly.js":183,"./ar-ma.js":184,"./ar-sa.js":185,"./ar-tn.js":186,"./ar.js":187,"./az.js":188,"./be.js":189,"./bg.js":190,"./bi.js":191,"./bm.js":192,"./bn.js":193,"./bo.js":194,"./br.js":195,"./bs.js":196,"./ca.js":197,"./cs.js":198,"./cv.js":199,"./cy.js":200,"./da.js":201,"./de-at.js":202,"./de-ch.js":203,"./de.js":204,"./dv.js":205,"./el.js":206,"./en-au.js":207,"./en-ca.js":208,"./en-gb.js":209,"./en-ie.js":210,"./en-il.js":211,"./en-in.js":212,"./en-nz.js":213,"./en-sg.js":214,"./en-tt.js":215,"./en.js":216,"./eo.js":217,"./es-do.js":218,"./es-mx.js":219,"./es-pr.js":220,"./es-us.js":221,"./es.js":222,"./et.js":223,"./eu.js":224,"./fa.js":225,"./fi.js":226,"./fo.js":227,"./fr-ca.js":228,"./fr-ch.js":229,"./fr.js":230,"./fy.js":231,"./ga.js":232,"./gd.js":233,"./gl.js":234,"./gom-latn.js":235,"./gu.js":236,"./he.js":237,"./hi.js":238,"./hr.js":239,"./ht.js":240,"./hu.js":241,"./hy-am.js":242,"./id.js":243,"./is.js":244,"./it-ch.js":245,"./it.js":246,"./ja.js":247,"./jv.js":248,"./ka.js":249,"./kk.js":250,"./km.js":251,"./kn.js":252,"./ko.js":253,"./ku.js":254,"./ky.js":255,"./lb.js":256,"./lo.js":257,"./lt.js":258,"./lv.js":259,"./me.js":260,"./mi.js":261,"./mk.js":262,"./ml.js":263,"./mn.js":264,"./mr.js":265,"./ms-my.js":266,"./ms.js":267,"./mt.js":268,"./my.js":269,"./nb.js":270,"./ne.js":271,"./nl-be.js":272,"./nl.js":273,"./nn.js":274,"./oc-lnc.js":275,"./pa-in.js":276,"./pl.js":277,"./pt-br.js":278,"./pt.js":279,"./ro.js":280,"./ru.js":281,"./rw.js":282,"./sd.js":283,"./se.js":284,"./si.js":285,"./sk.js":286,"./sl.js":287,"./sq.js":288,"./sr-cyrl.js":289,"./sr.js":290,"./ss.js":291,"./sv-fi.js":292,"./sv.js":293,"./sw.js":294,"./ta.js":295,"./te.js":296,"./tet.js":297,"./tg.js":298,"./th.js":299,"./tk.js":300,"./tl-ph.js":301,"./tlh.js":302,"./tr.js":303,"./tzl.js":304,"./tzm-latn.js":305,"./tzm.js":306,"./ug-cn.js":307,"./uk.js":308,"./ur.js":309,"./uz-latn.js":310,"./uz.js":311,"./vi.js":312,"./x-pseudo.js":313,"./yo.js":314,"./zh-cn.js":315,"./zh-hk.js":316,"./zh-tw.js":317,"./zh.js":318};function r(e){var t=i(e);return a(t)}function i(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=i,e.exports=r,r.id=177},319:function(e,t,a){"use strict";a.r(t);var n=a(6),r=a(7),i=a.n(r),s=a(23),c=a(115),o=a(1),l=a.n(o),d=a(57),j=a(40),u=a.n(j),h=a(79),b=(a(153),a(116)),p=a.n(b),f=a(117),g=a.n(f),m=a(118),v=a.n(m),O=a(119),y=a.n(O),x=a(120),k=a.n(x),w=a(121),I=a.n(w),C=a(122),D=a.n(C),N=a(123),S=a.n(N);i.a.extend(p.a),i.a.extend(g.a),i.a.extend(v.a),i.a.extend(y.a),i.a.extend(k.a),i.a.extend(I.a),i.a.extend(D.a),i.a.extend(S.a);var P={type:"backend",read:function(e,t,n){a(154)("./"+e+"/"+t+".json").then((function(e){n(null,e)})).catch((function(e){n(e,null)}))}},R=a(22),L=a(25),T=a(27),F=a(26),A=a(336),W=a(17),E=a(13),M=a(124),G=a(18),z=a(28),B=a(102),U=a(78),H=a(97),K=a(20),q=a(74),Y=a(146),_=a(24);function J(){return new Worker(a.p+"static/js/pdf.worker.3e4d2a54.worker.js")}var V=a(2),Q=function(e){var t=e.blobUrl,a=e.title;return Object(V.jsx)("iframe",{title:a,src:t,width:"100%",height:"100%"})},X=a(148),Z=function(e){Object(T.a)(a,e);var t=Object(F.a)(a);function a(){var e;Object(R.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={elapsedTime:0},e.updateProgress=function(){e.setState({elapsedTime:e.state.elapsedTime+700})},e}return Object(L.a)(a,[{key:"componentDidMount",value:function(){this.intervalId=setInterval(this.updateProgress,700)}},{key:"componentWillUnmount",value:function(){clearInterval(this.intervalId)}},{key:"render",value:function(){var e=this.state.elapsedTime/this.props.expectedTime*100;return Object(V.jsx)(X.a,{animated:!0,now:e})}}]),a}(l.a.Component),$=function(e){Object(T.a)(a,e);var t=Object(F.a)(a);function a(){return Object(R.a)(this,a),t.apply(this,arguments)}return Object(L.a)(a,[{key:"renderPdfPreview",value:function(){var e=this.props,t=e.blobUrl,a=e.isGeneratingPdf,n=e.isGeneratingPreview,r=e.onDownload,i=e.t;return Object(V.jsxs)(_.a,{direction:"vertical",className:"h-100",children:[Object(V.jsx)(Q,{blobUrl:t,title:i("preview.viewer-title")}),Object(V.jsxs)(_.a,{direction:"vertical",gap:2,className:"py-3 position-sticky bg-body refresh-button",children:[Object(V.jsx)(z.a,{variant:"secondary",disabled:n||a,onClick:r,children:a?Object(V.jsxs)(V.Fragment,{children:[Object(V.jsx)(d.a,{as:"span",animation:"border",size:"sm",role:"status","aria-hidden":"true",className:"me-1"}),i("preview.generating.full")]}):i("configuration.button.download")}),a&&Object(V.jsx)(Z,{expectedTime:this.props.expectedTime})]})]})}},{key:"renderNoPreview",value:function(){var e=this.props,t=e.t;return e.isGeneratingPreview?Object(V.jsxs)("div",{className:"h-100 d-flex align-items-center justify-content-center",children:[Object(V.jsx)(d.a,{animation:"border",role:"status",size:"sm",className:"me-1"}),t("preview.generating.preview")]}):Object(V.jsxs)(_.a,{direction:"vertical",className:"h-100 d-flex align-items-center justify-content-center text-center",children:[Object(V.jsx)("p",{className:"lead",children:t("preview.empty.title")}),Object(V.jsx)("p",{children:t("preview.empty.subtitle")})]})}},{key:"render",value:function(){var e=this.props,t=e.blobUrl,a=e.isGeneratingPreview;return t&&!a?this.renderPdfPreview():this.renderNoPreview()}}]),a}(l.a.PureComponent),ee=Object(A.a)("app")($),te=a(72),ae=a.n(te),ne=a(84),re=a(45),ie=a(91),se=a(147),ce=a(144),oe=a(86),le=a(44),de=a(49),je="item",ue="lines",he="new_page",be=function(e){Object(T.a)(a,e);var t=Object(F.a)(a);function a(){var e;Object(R.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).renderRow=function(t,a){var n=t.type,r=t.value;switch(n){case je:return e.renderItem(r,a);case he:return e.renderNewPage(r,a);case ue:default:return e.renderLines(r,a)}},e}return Object(L.a)(a,[{key:"renderItem",value:function(e,t){var a=this.props,n=a.field,r=a.onChange;return Object(V.jsxs)(de.a,{children:[Object(V.jsx)(le.a,{placeholder:"Itinerary item",value:e,onChange:r,"data-index":t,"data-type":je,"data-field":n,required:!0}),this.renderRemoveButton(t)]},t)}},{key:"renderNewPage",value:function(e,t){var a=this.props.t;return Object(V.jsxs)(de.a,{children:[Object(V.jsx)(de.a.Text,{className:"flex-grow-1",children:a("configuration.itinerary.placeholder.page")}),this.renderRemoveButton(t)]},t)}},{key:"renderLines",value:function(e,t){var a=this.props,n=a.field,r=a.onChange,i=a.t;return Object(V.jsxs)(de.a,{children:[Object(V.jsx)(oe.a,{className:"flex-grow-1",controlId:"lines-"+t,label:i("configuration.itinerary.placeholder.lines"),children:Object(V.jsx)(le.a,{placeholder:i("configuration.itinerary.placeholder.lines"),type:"number",min:1,max:50,value:e,onChange:r,"data-index":t,"data-type":ue,"data-field":n,required:!0})}),this.renderRemoveButton(t)]},t)}},{key:"renderRemoveButton",value:function(e){var t=this.props,a=t.field,n=t.onRemove,r=t.t;return Object(V.jsx)(z.a,{variant:"outline-danger",onClick:n,"data-index":e,"data-field":a,children:r("configuration.itinerary.button.remove")})}},{key:"render",value:function(){var e=this.props,t=e.field,a=e.itinerary,n=e.onAdd,r=e.onCopy,i=e.t;return Object(V.jsxs)(V.Fragment,{children:[Object(V.jsxs)(_.a,{gap:2,children:[a.map(this.renderRow),0===a.length&&Object(V.jsx)(re.a,{variant:"secondary",className:"mb-0",children:i("configuration.itinerary.empty")}),Object(V.jsx)(_.a,{direction:"horizontal",gap:3,children:Object(V.jsxs)(ie.a,{children:[Object(V.jsx)(z.a,{variant:"outline-secondary",onClick:n,"data-type":je,"data-field":t,children:i("configuration.itinerary.button.item")}),Object(V.jsx)(z.a,{variant:"outline-secondary",onClick:n,"data-type":ue,"data-field":t,children:i("configuration.itinerary.button.lines")}),Object(V.jsx)(z.a,{variant:"outline-secondary",onClick:n,"data-type":he,"data-field":t,children:i("configuration.itinerary.button.page")})]})})]}),r&&Object(V.jsx)(z.a,{variant:"outline-danger",className:"mt-3",onClick:r,"data-field":t,children:i("configuration.itinerary.button.copy")})]})}}]),a}(l.a.Component),pe=Object(A.a)("app")(be),fe=a(30);function ge(e,t){return me.apply(this,arguments)}function me(){return(me=Object(ne.a)(ae.a.mark((function e(t,a){var n,r,i,s,c,o,l,d,j;return ae.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fe.PDFDocument.load(t,{updateMetadata:!1});case 3:if((n=e.sent).catalog.has(fe.PDFName.of("Names"))){e.next=6;break}return e.abrupt("return",void 0);case 6:if((r=n.catalog.lookup(fe.PDFName.of("Names"),fe.PDFDict)).has(fe.PDFName.of("EmbeddedFiles"))){e.next=9;break}return e.abrupt("return",void 0);case 9:if((i=r.lookup(fe.PDFName.of("EmbeddedFiles"),fe.PDFDict)).has(fe.PDFName.of("Names"))){e.next=12;break}return e.abrupt("return",void 0);case 12:s=i.lookup(fe.PDFName.of("Names"),fe.PDFArray),c=0,o=s.size();case 14:if(!(c<o)){e.next=25;break}if(s.lookup(c).decodeText()===a){e.next=18;break}return e.abrupt("continue",22);case 18:return l=s.lookup(c+1,fe.PDFDict),d=l.lookup(fe.PDFName.of("EF"),fe.PDFDict).lookup(fe.PDFName.of("F"),fe.PDFStream),j=Object(fe.decodePDFRawStream)(d).decode(),e.abrupt("return",JSON.parse(new TextDecoder("utf-8").decode(j)));case 22:c+=2,e.next=14;break;case 25:e.next=30;break;case 27:return e.prev=27,e.t0=e.catch(0),e.abrupt("return",void 0);case 30:return e.abrupt("return",void 0);case 31:case"end":return e.stop()}}),e,null,[[0,27]])})))).apply(this,arguments)}var ve=["year","month","firstDayOfWeek","monthCount","weekendDays","isLeftHanded","isMonthOverviewEnabled","habits","monthItinerary","isWeekOverviewEnabled","todos","dayItineraries","isWeekRetrospectiveEnabled","weekRetrospectiveItinerary","specialDates"],Oe="config.json";function ye(e){return ve.reduce((function(t,a){return Object(n.a)(Object(n.a)({},t),{},Object(E.a)({},a,e[a]))}),{})}var xe=function e(){Object(R.a)(this,e),this.year=i()().year(),this.month=0,this.firstDayOfWeek=i.a.localeData().firstDayOfWeek(),this.weekendDays=[0,6],this.isLeftHanded=!1,this.monthCount=12,this.fontFamily="Lato",this.fontDefinition={family:this.fontFamily,fonts:[{src:"/fonts/Lato/Lato-Regular.ttf"},{src:"/fonts/Lato/Lato-Italic.ttf",fontStyle:"italic"},{src:"/fonts/Lato/Lato-Bold.ttf",fontWeight:700},{src:"/fonts/Lato/Lato-BoldItalic.ttf",fontStyle:"italic",fontWeight:700}]},this.isMonthOverviewEnabled=!0,this.habits=[Object(s.c)("habits.example1",{ns:"config"}),Object(s.c)("habits.example2",{ns:"config"}),Object(s.c)("habits.example3",{ns:"config"}),Object(s.c)("habits.example4",{ns:"config"})],this.monthItinerary=[{type:je,value:Object(s.c)("month.goal",{ns:"config"})},{type:ue,value:2},{type:je,value:Object(s.c)("month.notes",{ns:"config"})},{type:ue,value:50}],this.isWeekOverviewEnabled=!0,this.todos=[Object(s.c)("todos.example1",{ns:"config"}),Object(s.c)("todos.example2",{ns:"config"})];var t=this.firstDayOfWeek;this.dayItineraries=Object(W.a)(Array(7).keys()).map((function(){var e={dayOfWeek:t,items:[{type:ue,value:50}],isEnabled:!0};return t=++t%7,e})),this.isWeekRetrospectiveEnabled=!0,this.weekRetrospectiveItinerary=[{type:ue,value:50}],this.pageSize=["157mm","209mm"],this.specialDates={"01-01":[Object(s.c)("special-dates.example1",{ns:"config"}),Object(s.c)("special-dates.example2",{ns:"config"})],"03-01":[Object(s.c)("special-dates.example3",{ns:"config"})],"13-01":[Object(s.c)("special-dates.example4",{ns:"config"}),Object(s.c)("special-dates.example5",{ns:"config"})],"14-01":[Object(s.c)("special-dates.example6",{ns:"config"})]}};function ke(e){var t=Object.assign(new xe,e);switch(t.version){case"v1":return function(e){return e.dayItineraries=e.dayItineraries.map((function(e){return Object.assign({isEnabled:!0},e)})),e}(t);case"v2":default:return t}}var we="EMPTY",Ie="LOADING",Ce="ERROR",De="SUCCESS",Ne="basic",Se="advanced",Pe="blank",Re="minimalistic",Le=function(e){Object(T.a)(a,e);var t=Object(F.a)(a);function a(){var e;Object(R.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={status:we},e.handleTemplateSelect=function(t){var a=e.props.t,n=new xe,r=n.firstDayOfWeek;switch(t.target.dataset.template){case Ne:break;case Se:n.dayItineraries=Object(W.a)(Array(7).keys()).map((function(){var t={dayOfWeek:r,items:e.generateAdvancedDayItems(r),isEnabled:!0};return r=++r%7,t})),n.weekRetrospectiveItinerary=[{type:je,value:a("templates.advanced.retrospective.wins",{ns:"config"})},{type:ue,value:7},{type:je,value:a("templates.advanced.retrospective.discoveries",{ns:"config"})},{type:ue,value:7},{type:je,value:a("templates.advanced.retrospective.fails",{ns:"config"})},{type:ue,value:15}];break;case Pe:n.specialDates={},n.habits=[],n.monthItinerary=[],n.todos=[],n.dayItineraries=Object(W.a)(Array(7).keys()).map((function(){var e={dayOfWeek:r,items:[],isEnabled:!0};return r=++r%7,e})),n.weekRetrospectiveItinerary=[];break;case Re:n.specialDates={},n.habits=[],n.isMonthOverviewEnabled=!1,n.monthItinerary=[],n.isWeekOverviewEnabled=!0,n.todos=[],n.dayItineraries=Object(W.a)(Array(7).keys()).map((function(){var e={dayOfWeek:r,items:[],isEnabled:!1};return r=++r%7,e})),n.isWeekRetrospectiveEnabled=!1,n.weekRetrospectiveItinerary=[];break;default:return}e.props.onConfigChange(n)},e.handleFileChange=function(t){e.setState({status:Ie});var a=t.target.files[0],n=new FileReader;n.onload=e.handleFileLoad,n.readAsArrayBuffer(a)},e.handleFileLoad=function(){var t=Object(ne.a)(ae.a.mark((function t(a){var n;return ae.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,ge(a.target.result,Oe);case 2:if(n=t.sent){t.next=6;break}return e.setState({status:Ce}),t.abrupt("return");case 6:e.setState({status:De}),e.props.onConfigChange(ke(n));case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.renderButton=function(t){var a=t.template,n=t.style,r=e.props.t;return Object(V.jsx)(se.a,{placement:"bottom",overlay:Object(V.jsx)(ce.a,{children:r("configuration.selector.template.".concat(a,".description"))}),children:Object(V.jsx)(z.a,{variant:n,"data-template":a,onClick:e.handleTemplateSelect,children:r("configuration.selector.template.".concat(a,".label"))})},a)},e}return Object(L.a)(a,[{key:"generateAdvancedDayItems",value:function(e){for(var t=[],a=8;a<=20;a+=2)t.push({type:je,value:a.toString().padStart(2,0)+":00"}),t.push({type:ue,value:2});return t.push({type:ue,value:20}),1===e&&(t.push({type:he,value:""}),t.push({type:je,value:this.props.t("templates.advanced.day.monday",{ns:"config"})}),t.push({type:ue,value:50})),t}},{key:"renderStatusMessage",value:function(){var e=this.props.t;switch(this.state.status){case Ie:return Object(V.jsx)(re.a,{variant:"info",className:"mt-2 mb-0",children:e("configuration.selector.upload.loading")});case Ce:return Object(V.jsx)(re.a,{variant:"danger",className:"mt-2 mb-0",children:e("configuration.selector.upload.error")});case De:return Object(V.jsx)(re.a,{variant:"success",className:"mt-2 mb-0",children:e("configuration.selector.upload.success")});case we:default:return null}}},{key:"render",value:function(){var e=this.props.t;return Object(V.jsxs)(_.a,{children:[Object(V.jsx)(K.a.Label,{children:e("configuration.selector.template.label")}),Object(V.jsx)(ie.a,{"aria-label":"Config templates",children:[{template:Ne,style:"info"},{template:Se,style:"primary"},{template:Pe,style:"blank"},{template:Re,style:"dark"}].map(this.renderButton)}),Object(V.jsxs)(K.a.Group,{controlId:"configurationFile",className:"mt-3",children:[Object(V.jsx)(K.a.Label,{children:e("configuration.selector.upload.label")}),Object(V.jsx)(K.a.Control,{type:"file",accept:".pdf",onChange:this.handleFileChange}),this.renderStatusMessage()]})]})}}]),a}(l.a.Component),Te=Object(A.a)(["app","config"])(Le),Fe=function(e){Object(T.a)(a,e);var t=Object(F.a)(a);function a(){var e;Object(R.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).renderItem=function(t,a){var n=e.props,r=n.field,i=n.onChange,s=n.t;return Object(V.jsxs)(de.a,{children:[Object(V.jsx)(le.a,{placeholder:s("configuration.items-list.placeholder"),value:t,onChange:i,"data-index":a,"data-field":r,required:!0}),e.renderRemoveButton(a)]},a)},e}return Object(L.a)(a,[{key:"renderRemoveButton",value:function(e){var t=this.props,a=t.field,n=t.onRemove,r=t.t;return Object(V.jsx)(z.a,{variant:"outline-danger",onClick:n,"data-index":e,"data-field":a,children:r("configuration.items-list.button.remove")})}},{key:"render",value:function(){var e=this.props,t=e.items,a=e.field,n=e.onAdd,r=e.t,i=e.title;return Object(V.jsxs)(G.a.Item,{eventKey:a,children:[Object(V.jsx)(G.a.Header,{children:i}),Object(V.jsxs)(G.a.Body,{children:[Object(V.jsxs)(_.a,{gap:2,children:[t.map(this.renderItem),0===t.length&&Object(V.jsx)(re.a,{variant:"secondary",className:"mb-0",children:r("configuration.items-list.empty")})]}),Object(V.jsx)(_.a,{direction:"horizontal",className:"mt-3",children:Object(V.jsx)(z.a,{variant:"outline-secondary",onClick:n,"data-field":a,children:r("configuration.items-list.button.item")})})]})]})}}]),a}(l.a.Component),Ae=Object(A.a)("app")(Fe),We=a(96),Ee="DD-MM",Me=function(e){Object(T.a)(a,e);var t=Object(F.a)(a);function a(){var e;Object(R.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={date:"",value:""},e.onChange=function(t){var a=t.target.dataset.field;e.setState(Object(E.a)({},a,t.target.value))},e.onAddClick=function(t){var a=i()(e.state.date,"YYYY-MM-DD").format(Ee);e.props.onAdd(a,e.state.value),e.setState({date:"",value:""})},e.renderItem=function(t){var a=e.props.items[t],n=i()(t,Ee);return Object(V.jsx)(q.a.Item,{children:Object(V.jsxs)(_.a,{direction:"horizontal",gap:3,children:[Object(V.jsx)("b",{className:"special-date",children:n.format("MMMM DD")}),Object(V.jsx)("div",{children:a.map((function(e,a){return Object(V.jsx)("div",{children:e},t+a)}))}),e.renderRemoveButton(t)]})},t)},e}return Object(L.a)(a,[{key:"renderItems",value:function(e){return Object(V.jsx)(q.a,{children:e.map(this.renderItem)})}},{key:"renderRemoveButton",value:function(e){var t=this.props,a=t.onRemove,n=t.t;return Object(V.jsx)(z.a,{className:"ms-auto",variant:"outline-danger",onClick:a,"data-key":e,children:n("configuration.special-dates.button.remove")})}},{key:"render",value:function(){var e=this.state,t=e.date,a=e.value,n=this.props,r=n.items,i=n.t,s=Object.keys(r);return Object(V.jsxs)(G.a.Item,{eventKey:"specialDates",children:[Object(V.jsx)(G.a.Header,{children:Object(V.jsxs)(_.a,{direction:"horizontal",className:"w-100",children:[i("configuration.special-dates.title"),Object(V.jsx)(We.a,{bg:"info",className:"ms-auto me-3",children:s.length})]})}),Object(V.jsxs)(G.a.Body,{children:[Object(V.jsx)("p",{children:i("configuration.special-dates.description")}),Object(V.jsx)(_.a,{gap:2,children:s?this.renderItems(s):Object(V.jsx)(re.a,{variant:"secondary",className:"mb-0",children:i("configuration.special-dates.empty")})}),Object(V.jsx)(_.a,{direction:"horizontal",className:"mt-3",children:Object(V.jsxs)(de.a,{children:[Object(V.jsx)(le.a,{className:"flex-grow-0 date-field",value:t,onChange:this.onChange,type:"date","data-field":"date"}),Object(V.jsx)(le.a,{placeholder:i("configuration.special-dates.placeholder"),value:a,onChange:this.onChange,"data-field":"value"}),Object(V.jsx)(z.a,{variant:"outline-secondary",disabled:!t||!a,onClick:this.onAddClick,children:i("configuration.special-dates.button.item")})]})})]})]})}}]),a}(l.a.Component),Ge=Object(A.a)("app")(Me),ze=a(145);var Be=Object(A.a)("app")((function(e){var t=e.children,a=e.id,n=e.onToggle,r=e.t,i=e.title,s=e.toggledOn,c=r(s?"configuration.toggle-form.enabled":"configuration.toggle-form.disabled");return Object(V.jsxs)(G.a.Item,{eventKey:a,children:[Object(V.jsx)(G.a.Header,{children:Object(V.jsxs)(_.a,{direction:"horizontal",className:"w-100",children:[i,Object(V.jsx)(We.a,{bg:s?"success":"secondary",className:"ms-auto me-3",children:c})]})}),Object(V.jsx)(G.a.Body,{children:Object(V.jsxs)(_.a,{children:[Object(V.jsx)(ze.a,{className:"mb-1",id:a,type:"checkbox",variant:s?"outline-success":"outline-secondary",checked:s,onChange:n,children:c}),t]})})]})}));function Ue(){var e=i.a.weekdays(),t=i.a.weekdaysMin(),a=i.a.weekdaysShort(),n=i.a.localeData().firstDayOfWeek(),r=Object(W.a)(Array(7).keys());return[].concat(Object(W.a)(r.slice(n)),Object(W.a)(r.slice(0,n))).map((function(n){return{full:e[n],short:a[n],min:t[n],index:n}}))}a(173),a(174);var He="day-itinerary-",Ke=function(e){Object(T.a)(a,e);var t=Object(F.a)(a);function a(e){var r;return Object(R.a)(this,a),(r=t.call(this,e)).state=Object(n.a)({isGeneratingPdf:!1,isGeneratingPreview:!1,blobUrl:null,lastPreviewTime:1e4,lastFullTime:null},ye(r.props.initialState)),r.handleConfigChange=function(e){r.setState(Object(n.a)({},ye(e)))},r.handleFieldChange=function(e){var t="checkbox"!==e.target.type?e.target.value:e.target.checked;if(r.setState(Object(E.a)({},e.target.id,t)),"firstDayOfWeek"===e.target.id){var a=Number(e.target.value);i.a.updateLocale(s.b.language,{weekStart:a});var n=r.state.dayItineraries.findIndex(r.isDayOfWeek(a));if(-1===n)return;var c=[].concat(Object(W.a)(r.state.dayItineraries.slice(n)),Object(W.a)(r.state.dayItineraries.slice(0,n)));r.setState({dayItineraries:c})}},r.isDayOfWeek=function(e){return function(t){return t.dayOfWeek===e}},r.handleToggle=function(e){r.setState(Object(E.a)({},e.target.id,e.target.checked))},r.handleDayItineraryToggle=function(e){var t=Number(e.target.id.replace(He,"")),a=Object(W.a)(r.state.dayItineraries);a[t].isEnabled=e.target.checked,r.setState({dayItineraries:a})},r.handleWeekendChange=function(e){var t=Number(e.target.dataset.index),a=Object(W.a)(r.state.weekendDays),n=a.indexOf(t);e.target.checked?-1===n&&a.push(t):-1!==n&&a.splice(n,1),r.setState({weekendDays:a})},r.handleDownload=function(e){r.setState({isGeneratingPdf:!0}),r.generatePdf(!1)},r.handleItemAdd=function(e){var t=e.target.dataset.field,a=Object(W.a)(r.state[t]);a.push(""),r.setState(Object(E.a)({},t,a))},r.handleItemChange=function(e){var t=e.target.dataset.field,a=Object(W.a)(r.state[t]);a[e.target.dataset.index]=e.target.value,r.setState(Object(E.a)({},t,a))},r.handleItemRemove=function(e){var t=e.target.dataset.field,a=Object(W.a)(r.state[t]);a.splice(e.target.dataset.index,1),r.setState(Object(E.a)({},t,a))},r.handleItineraryAdd=function(e){var t=e.target.dataset.field,a=Object(W.a)(r.state[t]);a.push({type:e.target.dataset.type,value:""}),r.setState(Object(E.a)({},t,a))},r.handleItineraryChange=function(e){var t=e.target.dataset.field,a=Object(W.a)(r.state[t]);a[e.target.dataset.index]={type:e.target.dataset.type,value:e.target.value},r.setState(Object(E.a)({},t,a))},r.handleItineraryRemove=function(e){var t=e.target.dataset.field,a=Object(W.a)(r.state[t]);a.splice(e.target.dataset.index,1),r.setState(Object(E.a)({},t,a))},r.handlePreview=function(e){e.preventDefault(),r.setState({isGeneratingPreview:!0}),r.generatePdf(!0)},r.handlePdfWorkerMessage=function(e){var t=e.data.blob,a=r.state.isGeneratingPdf;if(r.state.isGeneratingPreview){var n=(new Date).getTime()-r.startTime.getTime();r.setState({blobUrl:URL.createObjectURL(t),lastPreviewTime:n})}if(r.setState({isGeneratingPdf:!1,isGeneratingPreview:!1}),a){var i=(new Date).getTime()-r.startTime.getTime();r.setState({lastFullTime:i}),Object(M.saveAs)(t,"recalendar.pdf")}},r.handlePdfGeneration=function(e){e.blob,e.url;var t=e.loading,a=(e.error,r.props.t);return a(t?"loading":"download-ready")},r.handleDayItineraryChange=function(e){var t=Object(W.a)(r.state.dayItineraries),a=e.target.dataset,n=a.field,i=a.index,s=a.type;t[n].items[i]={type:s,value:e.target.value},r.setState({dayItineraries:t})},r.handleDayItineraryRemove=function(e){var t=Object(W.a)(r.state.dayItineraries),a=e.target.dataset,n=a.field,i=a.index;t[n].items.splice(i,1),r.setState({dayItineraries:t})},r.handleDayItineraryCopy=function(e){var t=e.target.dataset.field,a=Object(W.a)(r.state.dayItineraries[t].items),i=r.state.dayItineraries.map((function(e){return Object(n.a)(Object(n.a)({},e),{},{items:Object(W.a)(a),isEnabled:r.state.dayItineraries[t].isEnabled})}));r.setState({dayItineraries:i})},r.handleDayItineraryAdd=function(e){var t=Object(W.a)(r.state.dayItineraries),a=e.target.dataset,n=a.field,i=a.type;t[n].items.push({type:i,value:""}),r.setState({dayItineraries:t})},r.handleSpecialDateAdd=function(e,t){var a=Object.assign({},r.state.specialDates);a[e]||(a[e]=[]),a[e].push(t),r.setState({specialDates:a})},r.handleSpecialDateRemove=function(e){var t=e.target.dataset.key,a=Object.assign({},r.state.specialDates);delete a[t],r.setState({specialDates:a})},r.renderDayItinerary=function(e,t){var a=e.full;return Object(V.jsx)(Be,{id:He+t,title:a,onToggle:r.handleDayItineraryToggle,toggledOn:r.state.dayItineraries[t].isEnabled,children:Object(V.jsx)(pe,{field:t.toString(),itinerary:r.state.dayItineraries[t].items,onAdd:r.handleDayItineraryAdd,onChange:r.handleDayItineraryChange,onRemove:r.handleDayItineraryRemove,onCopy:r.handleDayItineraryCopy})},a)},r.pdfWorker=new J,r.pdfWorker.onmessage=r.handlePdfWorkerMessage,r}return Object(L.a)(a,[{key:"componentDidUpdate",value:function(e,t){t.blobUrl&&t.blobUrl!==this.state.blobUrl&&URL.revokeObjectURL(t.blobUrl)}},{key:"generatePdf",value:function(e){this.startTime=new Date,this.pdfWorker.postMessage(Object(n.a)({isPreview:e,language:s.b.language},ye(this.state)))}},{key:"renderMonths",value:function(){return i.a.localeData().months().map((function(e,t){return Object(V.jsx)("option",{value:t,children:e},t)}))}},{key:"renderDaysOfWeek",value:function(){return Ue().map((function(e){var t=e.full,a=e.index;return Object(V.jsx)("option",{value:a,children:t},t)}))}},{key:"renderWeekendSelection",value:function(){var e=this;return Ue().map((function(t){var a=t.full,n=t.index;return Object(V.jsx)(q.a.Item,{value:n,children:Object(V.jsx)(K.a.Check,{id:"weekend-"+n,type:"checkbox",label:a,"data-index":n,checked:e.state.weekendDays.includes(n),onChange:e.handleWeekendChange})},a)}))}},{key:"renderConfigurationForm",value:function(){var e=this.props.t,t=this.state,a=t.isGeneratingPdf,n=t.isGeneratingPreview;return Object(V.jsxs)(K.a,{onSubmit:this.handlePreview,children:[Object(V.jsxs)(G.a,{defaultActiveKey:"start",className:"my-3",children:[Object(V.jsxs)(G.a.Item,{eventKey:"start",children:[Object(V.jsx)(G.a.Header,{children:e("configuration.selector.label")}),Object(V.jsx)(G.a.Body,{children:Object(V.jsx)(Te,{onConfigChange:this.handleConfigChange})})]}),Object(V.jsxs)(G.a.Item,{eventKey:"general",children:[Object(V.jsx)(G.a.Header,{children:e("configuration.general.label")}),Object(V.jsxs)(G.a.Body,{children:[Object(V.jsxs)(K.a.Group,{controlId:"year",children:[Object(V.jsx)(K.a.Label,{children:e("configuration.general.year")}),Object(V.jsx)(K.a.Control,{type:"number",value:this.state.year,onChange:this.handleFieldChange})]}),Object(V.jsxs)(K.a.Group,{controlId:"isLeftHanded",className:"mt-2",children:[Object(V.jsx)(K.a.Check,{label:e("configuration.general.left-handed.label"),type:"checkbox",checked:this.state.isLeftHanded,value:this.state.isLeftHanded,onChange:this.handleFieldChange}),Object(V.jsx)(K.a.Text,{className:"text-muted",children:e("configuration.general.left-handed.description")})]}),Object(V.jsxs)(K.a.Group,{controlId:"month",children:[Object(V.jsx)(K.a.Label,{children:e("configuration.general.starting-month.label")}),Object(V.jsx)(K.a.Select,{value:this.state.month,onChange:this.handleFieldChange,children:this.renderMonths()}),Object(V.jsx)(K.a.Text,{className:"text-muted",children:e("configuration.general.starting-month.description")})]}),Object(V.jsxs)(K.a.Group,{controlId:"firstDayOfWeek",children:[Object(V.jsx)(K.a.Label,{children:e("configuration.general.first-day-of-week")}),Object(V.jsx)(K.a.Select,{value:this.state.firstDayOfWeek,onChange:this.handleFieldChange,children:this.renderDaysOfWeek()})]}),Object(V.jsxs)(K.a.Group,{controlId:"monthCount",children:[Object(V.jsx)(K.a.Label,{children:e("configuration.general.month-count.label")}),Object(V.jsx)(K.a.Control,{type:"number",value:this.state.monthCount,onChange:this.handleFieldChange,min:1,max:12}),Object(V.jsx)(K.a.Text,{className:"text-muted",children:e("configuration.general.month-count.description")})]}),Object(V.jsx)(K.a.Label,{children:e("configuration.general.weekend")}),Object(V.jsx)(q.a,{children:this.renderWeekendSelection()})]})]}),Object(V.jsx)(Ge,{items:this.state.specialDates,onAdd:this.handleSpecialDateAdd,onRemove:this.handleSpecialDateRemove}),Object(V.jsxs)(Be,{id:"isMonthOverviewEnabled",title:e("configuration.month.title"),onToggle:this.handleToggle,toggledOn:this.state.isMonthOverviewEnabled,children:[Object(V.jsx)("p",{className:"mb-0",children:e("configuration.month.description")}),Object(V.jsxs)(G.a,{className:"mt-3",defaultActiveKey:"habits",children:[Object(V.jsx)(Ae,{field:"habits",title:e("configuration.month.habits.title"),items:this.state.habits,onAdd:this.handleItemAdd,onChange:this.handleItemChange,onRemove:this.handleItemRemove}),Object(V.jsxs)(G.a.Item,{eventKey:"monthItinerary",children:[Object(V.jsx)(G.a.Header,{children:e("configuration.month.itinerary.title")}),Object(V.jsx)(G.a.Body,{children:Object(V.jsx)(pe,{field:"monthItinerary",itinerary:this.state.monthItinerary,onAdd:this.handleItineraryAdd,onChange:this.handleItineraryChange,onRemove:this.handleItineraryRemove})})]})]})]}),Object(V.jsxs)(Be,{id:"isWeekOverviewEnabled",title:e("configuration.week.title"),onToggle:this.handleToggle,toggledOn:this.state.isWeekOverviewEnabled,children:[Object(V.jsx)("p",{className:"mb-0",children:e("configuration.week.description")}),Object(V.jsx)(G.a,{className:"mt-3",defaultActiveKey:"todos",children:Object(V.jsx)(Ae,{field:"todos",title:e("configuration.week.todos.title"),items:this.state.todos,onAdd:this.handleItemAdd,onChange:this.handleItemChange,onRemove:this.handleItemRemove})})]}),Object(V.jsxs)(G.a.Item,{eventKey:"dayItineraries",children:[Object(V.jsx)(G.a.Header,{children:e("configuration.day.title")}),Object(V.jsx)(G.a.Body,{children:Object(V.jsx)(G.a,{defaultActiveKey:"0",children:Ue().map(this.renderDayItinerary)})})]}),Object(V.jsxs)(Be,{id:"isWeekRetrospectiveEnabled",title:e("configuration.week.retrospective.title"),onToggle:this.handleToggle,toggledOn:this.state.isWeekRetrospectiveEnabled,children:[Object(V.jsx)("p",{className:"mb-0",children:e("configuration.week.retrospective.description")}),Object(V.jsx)(G.a,{className:"mt-3",defaultActiveKey:"weekRetrospectiveItinerary",children:Object(V.jsxs)(G.a.Item,{eventKey:"weekRetrospectiveItinerary",children:[Object(V.jsx)(G.a.Header,{children:e("configuration.week.retrospective.itinerary.title")}),Object(V.jsx)(G.a.Body,{children:Object(V.jsx)(pe,{field:"weekRetrospectiveItinerary",itinerary:this.state.weekRetrospectiveItinerary,onAdd:this.handleItineraryAdd,onChange:this.handleItineraryChange,onRemove:this.handleItineraryRemove})})]})})]})]}),Object(V.jsxs)(_.a,{direction:"vertical",gap:2,className:"pt-3 position-sticky bg-body refresh-button",children:[Object(V.jsx)(z.a,{variant:"primary",className:"w-100",disabled:n||a,type:"submit",children:n?Object(V.jsxs)(V.Fragment,{children:[Object(V.jsx)(d.a,{as:"span",animation:"border",size:"sm",role:"status","aria-hidden":"true",className:"me-1"}),e("configuration.button.generating")]}):e("configuration.button.refresh")}),n&&Object(V.jsx)(Z,{expectedTime:this.state.lastPreviewTime}),Object(V.jsx)(K.a.Text,{className:"text-muted pb-3",children:e("configuration.generation-description")})]})]})}},{key:"render",value:function(){var e=this.props.t;return Object(V.jsx)(H.a,{className:"h-100",fluid:!0,children:Object(V.jsxs)(Y.a,{className:"h-100",children:[Object(V.jsx)(U.a,{children:this.renderConfigurationForm()}),Object(V.jsx)(U.a,{children:Object(V.jsx)("div",{className:"pt-3 pb-3 position-sticky top-0 vh-100",children:Object(V.jsxs)(B.a,{className:"h-100",children:[Object(V.jsxs)(B.a.Header,{children:[e("preview.title")," ",Object(V.jsx)("small",{className:"text-muted",children:e("preview.subtitle")})]}),Object(V.jsx)(B.a.Body,{className:"pb-0",children:Object(V.jsx)(ee,{blobUrl:this.state.blobUrl,expectedTime:this.state.lastFullTime||12*this.state.lastPreviewTime,isGeneratingPdf:this.state.isGeneratingPdf,isGeneratingPreview:this.state.isGeneratingPreview,onDownload:this.handleDownload})})]})})})]})})}}]),a}(l.a.PureComponent),qe=Object(A.a)(["app"])(Ke),Ye=a(47),_e=a(80),Je=function(e){Object(T.a)(a,e);var t=Object(F.a)(a);function a(){var e;Object(R.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={language:s.b.language},e.handleLanguageSelection=function(e){var t=e.target.value;Object(s.a)(t)},e.handleLanguageChange=function(t){e.setState({language:t})},e}return Object(L.a)(a,[{key:"componentDidMount",value:function(){s.b.on("languageChanged",this.handleLanguageChange)}},{key:"componentWillUnmount",value:function(){s.b.off("languageChanged",this.handleLanguageChange)}},{key:"render",value:function(){var e=this.props.t;return Object(V.jsx)(_e.a,{bg:"dark",variant:"dark",expand:"md",children:Object(V.jsxs)(H.a,{fluid:!0,children:[Object(V.jsx)(_e.a.Brand,{href:"/",children:"ReCalendar"}),Object(V.jsx)(_e.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(V.jsxs)(_e.a.Collapse,{id:"basic-navbar-nav",children:[Object(V.jsxs)(Ye.a,{className:"me-auto",variant:"pills",children:[Object(V.jsx)(Ye.a.Item,{children:Object(V.jsx)(Ye.a.Link,{href:"/",children:e("navigation.home")})}),Object(V.jsx)(Ye.a.Item,{children:Object(V.jsx)(Ye.a.Link,{href:"/create",active:!0,children:e("navigation.configuration")})}),Object(V.jsx)(Ye.a.Item,{children:Object(V.jsx)(Ye.a.Link,{href:"/features",children:e("navigation.features")})}),Object(V.jsx)(Ye.a.Item,{children:Object(V.jsx)(Ye.a.Link,{href:"/faq",children:e("navigation.faq")})})]}),Object(V.jsxs)(_.a,{direction:"horizontal",children:[Object(V.jsx)(K.a.Label,{column:!0,className:"text-light me-3",htmlFor:"languagePicker",children:e("language.label")}),Object(V.jsxs)(K.a.Select,{"aria-label":e("language.label"),className:"language-select",value:this.state.language,onChange:this.handleLanguageSelection,children:[Object(V.jsx)("option",{value:"en",children:e("language.english")}),Object(V.jsx)("option",{value:"fr",children:e("language.french")}),Object(V.jsx)("option",{value:"es",children:e("language.spanish")}),Object(V.jsx)("option",{value:"pl",children:e("language.polish")})]})]})]})]})})}}]),a}(l.a.Component),Ve=Object(A.a)(["app"])(Je),Qe=function(e){Object(T.a)(a,e);var t=Object(F.a)(a);function a(){return Object(R.a)(this,a),t.apply(this,arguments)}return Object(L.a)(a,[{key:"componentDidMount",value:function(){this.setState({config:new xe})}},{key:"render",value:function(){return this.state&&this.state.config?Object(V.jsxs)(V.Fragment,{children:[Object(V.jsx)(Ve,{}),Object(V.jsx)(qe,{initialState:this.state.config})]}):null}}]),a}(l.a.Component),Xe=Object(A.a)(["app","config"])(Qe);s.b.use(P).use(c.a).use(h.e).init(Object(n.a)({},{debug:!1,fallbackLng:"en",supportedLngs:["en","pl","fr","es"],ns:["app","pdf","config"],interpolation:{escapeValue:!1}})),s.b.on("languageChanged",(function(e){a(177)("./"+e+".js"),i.a.locale(e),i.a.updateLocale(e,{weekStart:1})}));var Ze=Object(V.jsx)(d.a,{className:"position-absolute top-50 start-50",animation:"border",variant:"primary",role:"status",children:Object(V.jsx)("span",{className:"visually-hidden",children:"Loading..."})});u.a.render(Object(V.jsx)(l.a.StrictMode,{children:Object(V.jsx)(o.Suspense,{fallback:Ze,children:Object(V.jsx)(Xe,{})})}),document.getElementById("root"))}},[[319,1,2]]]);
//# sourceMappingURL=main.90680f12.chunk.js.map