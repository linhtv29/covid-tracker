(this["webpackJsonpcovid-tracker"]=this["webpackJsonpcovid-tracker"]||[]).push([[0],{379:function(e,t,n){},380:function(e,t,n){},383:function(e,t,n){},404:function(e,t,n){e.exports={confirmed:"Highlight_confirmed__387dm",recovered:"Highlight_recovered__-behj",death:"Highlight_death__E3lRW"}},503:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(48),i=n.n(r),o=(n(379),n(106)),s=n.n(o),l=n(248),u=n(108),d=(n(380),n(87)),j=n.n(d),h=(n(381),n(361)),f=n.n(h),b=n(509),p=(n(382),n(510)),x=n(156),O=n(82),v=(n(383),n(27)),m=p.a.Option,g=b.a.Text,y=function(e){var t=e.countries,n=e.handleOnChange;return Object(v.jsx)("div",{style:{margin:"16px 0"},children:Object(v.jsx)(x.a,{justify:"start",children:Object(v.jsxs)(O.a,{xl:6,xs:24,children:[Object(v.jsx)(g,{type:"secondary",children:"Qu\u1ed1c Gia:"}),Object(v.jsx)(p.a,{defaultValue:"Viet Nam",style:{display:"block"},onChange:n,children:t.map((function(e){return Object(v.jsx)(m,{className:"",value:e.Slug,children:e.Country},e.ISO2)}))})]})})})},S=n(251),C=n.n(S),Y=n(347),T=n(508),D=(n(404),n(348)),k=n.n(D),N=b.a.Text,M={confirmed:{paddingTop:"5px",borderLeft:"10px solid #c9302c",maxHight:"50px"},recovered:{paddingTop:"5px",borderLeft:"10px solid #28a745"},death:{paddingTop:"5px",borderLeft:"10px solid grey"}},_=function(e){var t=e.summary;return Object(v.jsx)("div",{children:Object(v.jsx)(x.a,{gutter:32,children:t.map((function(e){return Object(v.jsx)(O.a,{xl:8,xs:24,children:Object(v.jsxs)(T.a,{bodyStyle:M[e.type],children:[Object(v.jsx)(N,{style:{display:"block"},children:e.title}),Object(v.jsx)(N,{strong:!0,style:{fontSize:16},children:Object(v.jsx)(k.a,{end:e.count,separator:" ",duration:2})})]})})}))})})},w=n(349),L=n(511),F=n(512),B=function(e){var t=e.report,n=Object(a.useState)([]),c=Object(u.a)(n,2),r=c[0],i=c[1],o=Object(a.useState)("all"),s=Object(u.a)(o,2),l=s[0],d=s[1],h=Object(a.useState)([]),f=Object(u.a)(h,2),b=f[0],p=f[1];Object(a.useEffect)((function(){switch(l){case"all":i(t);break;case"30":i(t.slice(Math.max(t.length-30,1)));break;case"7":i(t.slice(Math.max(t.length-7,1)));break;default:i(t)}}),[l,t]),Object(a.useEffect)((function(){var e=r.map((function(e){return{date:j()(e.Date).format("DD/MM/YYYY"),value:e.Confirmed,lineName:"S\u1ed1 ca nhi\u1ec5m"}})),t=r.map((function(e){return{date:j()(e.Date).format("DD/MM/YYYY"),value:e.Recovered,lineName:"Kh\u1ecfi"}})),n=r.map((function(e){return{date:j()(e.Date).format("DD/MM/YYYY"),value:e.Deaths,lineName:"T\u1eed vong"}}));p(e.concat(t,n))}),[r]);var x={data:b,height:350,xField:"date",yField:"value",seriesField:"lineName",legend:{position:"top"},label:{style:{fill:"#aaa"}},smooth:!0,color:["#c9302c","#28a745","grey"]};return Object(v.jsxs)("div",{children:[Object(v.jsx)("div",{style:{margin:"16px 0 0",display:"flex",justifyContent:"center"},children:Object(v.jsxs)(F.a.Group,{onChange:function(e){d(e.target.value)},children:[Object(v.jsx)(F.a.Button,{value:"all",children:"T\u1ea4T C\u1ea2"}),Object(v.jsx)(F.a.Button,{value:"30",children:"30 NG\xc0Y"}),Object(v.jsx)(F.a.Button,{value:"7",children:"7 NG\xc0Y"})]})}),Object(v.jsx)(L.a,Object(w.a)({},x))]})},E=b.a.Text;j.a.locale("vi");var G=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)("vietnam"),i=Object(u.a)(r,2),o=i[0],d=i[1],h=Object(a.useState)([]),b=Object(u.a)(h,2),p=b[0],x=b[1];Object(a.useEffect)((function(){(function(){var e=Object(l.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.a.get("https://api.covid19api.com/countries");case 2:t=e.sent,c(Object(Y.sortBy)(t.data,"Country"));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(a.useEffect)((function(){(function(){var e=Object(l.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n=o,C.a.get("https://api.covid19api.com/dayone/country/".concat(n,"?from=2021-01-01T00:00:00&to=").concat(j()().utc(0).format()));case 2:(t=e.sent).data.pop(),x(t.data);case 5:case"end":return e.stop()}var n}),e)})));return function(){return e.apply(this,arguments)}})()()}),[o]);var O=[];if(p.length){console.log("report",p);var m=p[p.length-1];console.log("lastdata",m),O=[{title:"S\u1ed1 ca nhi\u1ec5m",count:m.Confirmed,type:"confirmed"},{title:"Kh\u1ecfi",count:m.Recovered,type:"recovered"},{title:"T\u1eed vong",count:m.Deaths,type:"death"}]}return Object(v.jsxs)("div",{className:"wrapper",children:[Object(v.jsxs)("div",{className:"header",children:[Object(v.jsx)(f.a,{children:"S\u1ed1 li\u1ec7u Covid-19"}),Object(v.jsx)(E,{type:"secondary",level:4,children:j()().format("LLL")})]}),Object(v.jsx)(y,{countries:n,handleOnChange:function(e){d(e)}}),Object(v.jsx)(_,{summary:O}),Object(v.jsx)(B,{report:p})]})},H=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,513)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))};i.a.render(Object(v.jsx)(c.a.StrictMode,{children:Object(v.jsx)(G,{})}),document.getElementById("root")),H()}},[[503,1,2]]]);
//# sourceMappingURL=main.194d89a3.chunk.js.map