(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{105:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(44),c=t.n(r),o=(t(61),t(12)),i=(t(40),t(144)),m=t(37),s=t(145),u=t(146),E=t(148),d=t(149),f=t(139),p=t(150),x=t(147),b=t(88),g=t.n(b),y=t(81),h=t.n(y),v=t(89),j=t.n(v);u.a,h.a;function w(e){return l.a.createElement(E.a,{component:"form",elevation:0,sx:Object(m.a)({padding:"2px 4px",display:"flex",alignItems:"center",width:"60%",backgroundColor:"#fff2"},e.sx)},l.a.createElement(d.a,null,l.a.createElement(h.a,{sx:{color:"#fff"}})),l.a.createElement(f.a,{placeholder:"Search Mail",type:"search","aria-label":"search mail",sx:{ml:1,flex:1,color:"#fff"}}))}function C(){return l.a.createElement(s.a,{position:"sticky"},l.a.createElement(p.a,null,l.a.createElement(d.a,{size:"large",edge:"start",color:"inherit","aria-label":"menu",sx:{mr:2}},l.a.createElement(g.a,null)),l.a.createElement(x.a,{variant:"h6",component:"div"},"Inbox"),l.a.createElement(w,{sx:{flex:1,marginLeft:"100px",marginRight:"50px"}}),l.a.createElement(d.a,{edge:"end",color:"inherit"},l.a.createElement(j.a,null))))}var P=t(151),O=t(140),k=t(90),I=t.n(k),R=t(91),T=t.n(R),F=t(86),S=t.n(F),B=t(67),L=t(141),J=S.a.chain(S.a.range(50)).map(function(e){return{id:L.a(),date:B.a.date.past(),from:B.a.company.companyName(),subject:"There are ".concat(B.a.datatype.number({min:2,max:100})," ").concat(B.a.animal.type(),"s in your area!"),isRead:B.a.datatype.boolean(),selected:!1}}).sortBy(["date"]).value();function M(e,a){switch(console.log(a),a.type){case"select-all":return e.map(function(e){return Object(m.a)({},e,{selected:a.select})});case"select-item":return e.map(function(e){return e.id==a.id?Object(m.a)({},e,{selected:a.select}):e})}}var N=l.a.createContext(null);function z(){var e=Object(n.useContext)(N);return l.a.createElement(P.a,{display:"flex"},l.a.createElement(P.a,{flexGrow:1},l.a.createElement(O.a,{"aria-label":"select all",onChange:function(a,t){e({type:"select-all",select:t})}}),l.a.createElement(d.a,{"aria-label":"refresh"},l.a.createElement(I.a,null)),l.a.createElement(d.a,{"aria-label":"more"},l.a.createElement(T.a,null))),l.a.createElement(P.a,null,l.a.createElement(x.a,null,"1-50 of 2,678")))}var D=t(138),G=t(152),W=t(92),q=t.n(W),A=t(93),H=t.n(A),K=t(94),Q=t.n(K);function U(){return l.a.createElement(E.a,{elevation:0},l.a.createElement(D.a,{value:0,textColor:"secondary",indicatorColor:"secondary"},l.a.createElement(G.a,{icon:l.a.createElement(q.a,null),iconPosition:"start",label:"Primary"}),l.a.createElement(G.a,{icon:l.a.createElement(H.a,null),iconPosition:"start",label:"Social"}),l.a.createElement(G.a,{icon:l.a.createElement(Q.a,null),iconPosition:"start",label:"Promotions"})))}var V=t(142),X=t(135),Y=t(153),Z=t(154),$=t(96),_=t.n($),ee=t(100),ae=t.n(ee),te=t(95),ne=t.n(te);function le(e){return l.a.createElement(i.a,{container:!0},l.a.createElement(i.a,{item:!0,xs:3},e.from),l.a.createElement(i.a,{item:!0,xs:7},e.subject),l.a.createElement(i.a,{item:!0,xs:2},ne()(e.date).fromNow()))}function re(e){var a=Object(n.useContext)(N),t={fontWeight:e.isRead?"bold":"normal"};return l.a.createElement(V.a,{disablePadding:!0},l.a.createElement(O.a,{"aria-label":"selected",checked:e.selected,onChange:function(t,n){a({type:"select-item",id:e.id,select:n})}}),l.a.createElement(O.a,{"aria-label":"favorited",checkedIcon:l.a.createElement(_.a,{color:"warning"}),icon:l.a.createElement(ae.a,null)}),l.a.createElement(X.a,null,l.a.createElement(Y.a,{primaryTypographyProps:t,primary:l.a.createElement(le,e)})))}function ce(e){var a=e.items;return l.a.createElement(E.a,{sx:{marginTop:2}},l.a.createElement(Z.a,null,a.map(function(e){return l.a.createElement(re,Object.assign({key:e.subject},e))})))}var oe=function(){var e=Object(n.useReducer)(M,J),a=Object(o.a)(e,2),t=a[0],r=a[1];return l.a.createElement(N.Provider,{value:r},l.a.createElement(C,null),l.a.createElement("main",null,l.a.createElement(i.a,{container:!0,alignItems:"start",sx:{padding:"0px 40px 0px 40px"}},l.a.createElement(i.a,{item:!0,xs:12},l.a.createElement(z,null)),l.a.createElement(i.a,{item:!0,xs:12},l.a.createElement(U,null)),l.a.createElement(i.a,{item:!0,xs:12},l.a.createElement(ce,{items:t})))))},ie=function(e){e&&e instanceof Function&&t.e(1).then(t.bind(null,136)).then(function(a){var t=a.getCLS,n=a.getFID,l=a.getFCP,r=a.getLCP,c=a.getTTFB;t(e),n(e),l(e),r(e),c(e)})};c.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(oe,null))),ie()},40:function(e,a,t){},52:function(e,a,t){e.exports=t(105)},61:function(e,a,t){}},[[52,3,2]]]);
//# sourceMappingURL=main.a5b22b7b.chunk.js.map