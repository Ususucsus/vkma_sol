(this.webpackJsonpvkma_sol=this.webpackJsonpvkma_sol||[]).push([[0],{251:function(e,t,n){e.exports=n(404)},404:function(e,t,n){"use strict";n.r(t);n(252),n(278),n(280),n(281),n(283),n(284),n(285),n(286),n(287),n(288),n(289),n(290),n(292),n(293),n(294),n(295),n(296),n(297),n(298),n(299),n(300),n(301),n(303),n(304),n(305),n(306),n(307),n(308),n(309),n(310),n(311),n(312),n(313),n(314),n(315),n(316),n(317),n(318),n(319),n(320);var a=n(0),r=n.n(a),l=n(100),o=n.n(l),c=n(35),i=n.n(c),u=n(161),s=n(38),d=n(39),m=n(41),p=n(40),h=n(73),f=n.n(h),g=n(107),E=n.n(g),C=n(106),v=n.n(C),b=(n(328),n(50)),k=n.n(b),y=n(51),P=n.n(y),S=n(101),O=n.n(S),M=n(75),I=n.n(M),j=n(49),T=n.n(j),w=n(102),A=n.n(w),x=n(63),B=n.n(x);function L(e){return e<=100?_(e):e>100?_(e%100):void 0}function D(e){return 0===e?"":1===e?"\u0430":2<=e&&e<=4?"\u044b":5<=e&&e<=20?"":void 0}function _(e){return e<=20?D(e):21<=e<=100?D(e%10):void 0}function R(e){return e<=100?W(e):e>100?W(e%100):void 0}function V(e){return 0===e?"\u043e\u0432":1===e?"":2<=e&&e<=4?"\u0430":5<=e&&e<=20?"\u043e\u0432":void 0}function W(e){return e<=20?V(e):21<=e<=100?V(e%10):void 0}var H=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).onCardIdChanged=function(e){var t=e.target.value;a.isCardIdContainsOnlyDigits(t)&&(t.length>32||a.setState((function(){return{inputCardId:t,errorHeader:null}})))},a.onMobileChanges=function(e){var t=e.target.value;a.isMobileContainsDigitsOrSpecialSymbols(t)&&(t.length>32||a.setState((function(){return{inputMobile:t,errorHeader:null}})))},a.onAddClick=function(){var e=a.state,t=e.inputCardId,n=e.inputMobile;if(0!==t.length)if(0!==n.length){var r=function(e){if(5!==e.length)return e;e="8888888"+e;for(var t=0,n=0,a=0;a<e.length;a++)a%2===0?t+=e[a]-"0":n+=e[a]-"0";var r=(3*n+t)%10,l=0;return 0!==r&&(l=10-r),e+l}(t),l=function(e){var t=e.replace(/-/g,"").replace(/\(/g,"").replace(/\)/g,"").replace(/ /g,"");return"8"===t[0]&&(t="+7"+t.slice(1)),t}(n);a.props.updateCard(l,r),a.props.goToPanel("CardInfoPanel")}else a.setState((function(){return{errorHeader:"\u041d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 \u043d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430",errorMessage:"\u041f\u043e\u043b\u0435 \u0441 \u043d\u043e\u043c\u0435\u0440\u043e\u043c \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u043e"}}));else a.setState((function(){return{errorHeader:"\u041d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 \u043d\u043e\u043c\u0435\u0440 \u043a\u0430\u0440\u0442\u044b",errorMessage:"\u041f\u043e\u043b\u0435 \u0441 \u043d\u043e\u043c\u0435\u0440\u043e\u043c \u043a\u0430\u0440\u0442\u044b \u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u043e"}}))},a.isCardIdContainsOnlyDigits=function(e){return/^\d*$/.test(e)},a.isMobileContainsDigitsOrSpecialSymbols=function(e){return/^[\d()+\- ]*$/.test(e)},a.state={inputCardId:"",inputMobile:"",errorMessage:null,errorHeader:null},a}return Object(d.a)(n,[{key:"render",value:function(){var e=this.state,t=e.inputCardId,n=e.inputMobile,a=e.errorHeader,l=e.errorMessage;return r.a.createElement(k.a,{id:"CreateCardPanel"},r.a.createElement(P.a,{left:r.a.createElement(B.a,{onClick:function(){return window.history.back()}})},"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043a\u0430\u0440\u0442\u044b"),r.a.createElement(O.a,null,null!==a?r.a.createElement(A.a,{header:a,mode:"error"},l):null,r.a.createElement(I.a,{top:"\u041d\u043e\u043c\u0435\u0440 \u043a\u0430\u0440\u0442\u044b",onChange:this.onCardIdChanged,value:t,placeholder:"12345"}),r.a.createElement(I.a,{top:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430",onChange:this.onMobileChanges,value:n,placeholder:"+79991234567"}),r.a.createElement(T.a,{size:"xl",onClick:this.onAddClick},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u0430\u0440\u0442\u0443")))}}]),n}(r.a.Component),K=n(104),N=n.n(K),F=n(105),J=n.n(F),z=n(52),G=n.n(z),U=n(44),$=n.n(U),q=n(64),Q=n.n(q),X=n(26),Y=n.n(X),Z=n(109),ee=n.n(Z),te=n(110),ne=n.n(te),ae=n(111),re=n.n(ae),le=n(43),oe=n.n(le),ce=n(65),ie=n.n(ce),ue=n(62),se=n.n(ue),de=n(155),me=n.n(de),pe=n(156),he=n.n(pe),fe=n(76),ge=n.n(fe),Ee=n(103),Ce=n.n(Ee),ve=n(74),be=n.n(ve),ke=n(114),ye=n(112),Pe=n.n(ye),Se=n(113),Oe=n.n(Se),Me=n(157),Ie=n.n(Me),je=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={},a}return Object(d.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{style:{textAlign:"center",marginTop:"16px",width:"80%",marginLeft:"auto",marginRight:"auto"}},r.a.createElement(Ie.a,{style:{marginLeft:"auto",marginRight:"auto",marginBottom:"16px",color:"var(--button_primary_background)"}}),r.a.createElement(Pe.a,{level:"2",weight:"semibold",style:{marginBottom:"8px"}},"\u0423 \u0432\u0430\u0441 \u0435\u0449\u0435 \u043d\u0435\u0442 \u043a\u0430\u0440\u0442\u044b."),r.a.createElement(Oe.a,{weight:"regular",style:{marginBottom:"32px"}},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u0430\u0440\u0442\u0443 \u043a\u043b\u0438\u0435\u043d\u0442\u0430 \u043c\u043e\u0436\u043d\u043e \u0443\u043a\u0430\u0437\u0430\u0432 \u0435\u0451 \u043d\u043e\u043c\u0435\u0440 \u0438 \u043c\u043e\u0431\u0438\u043b\u044c\u043d\u044b\u0439 \u0442\u0435\u043b\u0435\u0444\u043e\u043d"),r.a.createElement(T.a,{size:"m",onClick:function(){return e.props.goToPanel("CreateCardPanel")}},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u0430\u0440\u0442\u0443"))}}]),n}(r.a.Component),Te=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).toggleContext=function(){a.setState((function(e){return{contextOpened:!e.contextOpened}}))},a.generateModal=function(e,t,n){return r.a.createElement(ee.a,{activeModal:"this"},r.a.createElement(ne.a,{id:"this",onClose:function(){return a.props.changeModal(null)},header:r.a.createElement(re.a,{left:ke.IS_PLATFORM_ANDROID&&r.a.createElement(oe.a,{onClick:function(){return a.props.changeModal(null)}},r.a.createElement(Ce.a,null)),right:ke.IS_PLATFORM_IOS?r.a.createElement(oe.a,{onClick:function(){return a.props.changeModal(null)}},r.a.createElement(be.a,null)):null},"\u0410\u0431\u043e\u043d\u0435\u043c\u0435\u043d\u0442")},r.a.createElement(G.a,null,r.a.createElement($.a,null,r.a.createElement(Y.a,null,r.a.createElement(ie.a,{header:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043c\u0438\u043d\u0443\u0442"},e+" \u043c\u0438\u043d\u0443\u0442"+L(e))),r.a.createElement(Y.a,null,r.a.createElement(ie.a,{header:"\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043b\u0435\u043d \u0434\u043e"},t)),r.a.createElement(Y.a,null,r.a.createElement(ie.a,{header:"\u0414\u043e\u0441\u0442\u0443\u043f\u0435\u043d \u0434\u043b\u044f"},n)),r.a.createElement(Y.a,{disabled:!0})))))},a.state={contextOpened:!1},a}return Object(d.a)(n,[{key:"render",value:function(){var e=this,t=this.props.card;if(null===t)return r.a.createElement(k.a,{id:"CardInfoPanel"},r.a.createElement(P.a,null,"\u041a\u0430\u0440\u0442\u0430"),r.a.createElement(je,{goToPanel:this.props.goToPanel}));for(var n=[],a=function(a){var l=t.SaleMinutes[a],o=r.a.createElement(Y.a,{key:a,after:r.a.createElement(se.a,null),onClick:function(){return e.props.changeModal(e.generateModal(l.Minutes,l.ExpireDate,l.AccessibleFor))}},l.Minutes+" \u043c\u0438\u043d\u0443\u0442"+L(l.Minutes));n.push(o)},l=0;l<t.SaleMinutes.length;l++)a(l);for(var o,c=[],i=0;i<t.Presents.length;i++){var u=t.Presents[i],s=r.a.createElement(Y.a,{key:i,description:"\u0414\u0435\u0439\u0441\u0442\u0432\u0443\u0435\u0442 \u0434\u043e "+u.ExpireDate},u.Name);c.push(s)}return r.a.createElement(k.a,{id:"CardInfoPanel"},r.a.createElement(P.a,null,r.a.createElement(N.a,{aside:r.a.createElement(me.a,{style:{transform:"rotate(".concat(this.state.contextOpened?"180deg":"0",")")}}),onClick:this.toggleContext},"\u041a\u0430\u0440\u0442\u0430 \u2116 "+(13!==(o=t.CardId).length?o:o.slice(7,12)))),r.a.createElement(J.a,{opened:this.state.contextOpened,onClose:this.toggleContext},r.a.createElement($.a,null,r.a.createElement(Y.a,{before:r.a.createElement(he.a,null),onClick:function(){return e.props.goToPanel("CreateCardPanel")}},"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u043a\u0430\u0440\u0442\u0443"),r.a.createElement(Y.a,{before:r.a.createElement(ge.a,null),onClick:function(){return e.props.goToPanel("ContactsPanel")}},"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"))),r.a.createElement(G.a,{header:r.a.createElement(Q.a,{mode:"secondary"},"\u041e\u0441\u043d\u043e\u0432\u043d\u0430\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f")},r.a.createElement($.a,null,r.a.createElement(Y.a,{description:t.SaleComment},"\u0421\u043a\u0438\u0434\u043a\u0430 \u2014 "+t.Sale+" \u043f\u0440\u043e\u0446\u0435\u043d\u0442"+R(t.Sale)),r.a.createElement(Y.a,{description:"\u0414\u043e 28.28.2288"},"\u0421\u0443\u043c\u043c\u0430 \u043d\u0430 \u0441\u0447\u0435\u0442\u0443 \u2014 "+t.Money+" \u0440\u0443\u0431."),r.a.createElement(Y.a,{description:"\u0412\u0441\u0435\u0433\u043e \u0432 \u0441\u043e\u043b\u044f\u0440\u0438\u0438 \u043f\u0440\u043e\u0432\u0435\u0434\u0435\u043d\u043e "+t.TotalMinutes+" \u043c\u0438\u043d\u0443\u0442"+L(t.TotalMinutes)},"\u041d\u0430\u043a\u043e\u043f\u043b\u0435\u043d\u043e 42 \u0431\u0430\u043b\u043b"+R(42)))),r.a.createElement(G.a,{header:r.a.createElement(Q.a,{mode:"secondary"},"\u0410\u0431\u043e\u043d\u0435\u043c\u0435\u043d\u0442\u044b")},r.a.createElement($.a,null,n.length?n:r.a.createElement(Y.a,null,"\u0410\u0431\u043e\u043d\u0435\u043c\u0435\u043d\u0442\u043e\u0432 \u043f\u043e\u043a\u0430 \u0447\u0442\u043e \u043d\u0435\u0442"))),r.a.createElement(G.a,{header:r.a.createElement(Q.a,{mode:"secondary"},"\u041f\u043e\u0434\u0430\u0440\u043a\u0438")},r.a.createElement($.a,null,c.length?c:r.a.createElement(Y.a,null,"\u041f\u043e\u0434\u0430\u0440\u043a\u043e\u0432 \u043f\u043e\u043a\u0430 \u0447\u0442\u043e \u043d\u0435\u0442"))))}}]),n}(r.a.Component),we=n(108),Ae=n.n(we),xe=n(158),Be=n.n(xe),Le=n(159),De=n.n(Le),_e=n(160),Re=n.n(_e),Ve=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={snackbar:null},a}return Object(d.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement(k.a,{id:"ContactsPanel"},r.a.createElement(P.a,{left:r.a.createElement(B.a,{onClick:function(){return window.history.back()}})},"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"),r.a.createElement(G.a,null,r.a.createElement($.a,null,r.a.createElement(Y.a,{before:r.a.createElement(Be.a,null),onClick:function(){return document.getElementById("communityLink").click()}},"\u0421\u043e\u043e\u0431\u0449\u0435\u0441\u0442\u0432\u043e PARADISE SUN"),r.a.createElement(Y.a,{before:r.a.createElement(De.a,null),onClick:function(){return document.getElementById("telLink").click()}},"+7 917 802-13-33"),r.a.createElement(Y.a,{before:r.a.createElement(ge.a,null),onClick:function(){return document.getElementById("mailLink").click()}},"paradise.sun@mail.ru"),r.a.createElement(Y.a,{before:r.a.createElement(Re.a,null),onClick:function(){navigator.clipboard.writeText("\u0433. \u0421\u0430\u043b\u0430\u0432\u0430\u0442, \u0443\u043b. \u041a\u0430\u043b\u0438\u043d\u0438\u043d\u0430 \u0434. 82A"),e.setState((function(){return{snackbar:r.a.createElement(Ae.a,{onClose:function(){}},"\u0421\u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u043d\u043e!")}}))}},"\u0433. \u0421\u0430\u043b\u0430\u0432\u0430\u0442, \u0443\u043b. \u041a\u0430\u043b\u0438\u043d\u0438\u043d\u0430 \u0434. 82A"),r.a.createElement("a",{id:"telLink",hidden:!0,href:"tel: +79178021333"}),r.a.createElement("a",{id:"mailLink",hidden:!0,href:"mailto: paradise.sun@mail.ru"}),r.a.createElement("a",{id:"communityLink",hidden:!0,href:"https://vk.com/club27450268"}))),this.state.snackbar)}}]),n}(r.a.Component),We=n(162),He=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).updateCard=function(e,t){a.changePopout(r.a.createElement(E.a,null)),function(e,t){var n=new Headers;n.append("Content-Type","application/json"),n.append("Accept","application/json");var a=JSON.stringify({cardid:e,mobile:t}),r={method:"POST",headers:n,body:a,redirect:"follow"};return console.log(a),new Promise((function(e,t){fetch("https://rscradik.asuscomm.com:5001/api/getRecord",r).then((function(e){return!1===e.ok&&t("result is not ok"),e.json()})).then((function(t){console.log(t),e(t)})).catch((function(e){t("error")}))}))}(t,e).then((function(n){a.setState((function(){return{card:n}})),console.log(n),i.a.send("VKWebAppStorageSet",{key:"mobile",value:e}),i.a.send("VKWebAppStorageSet",{key:"cardId",value:t}),a.changePopout(null),a.goToPanel("CardInfoPanel")})).catch((function(e){console.log(e),a.changePopout(r.a.createElement(v.a,{actions:[{title:"\u041f\u043e\u043f\u0440\u043e\u0431\u043e\u0432\u0430\u0442\u044c \u0435\u0449\u0451",autoclose:!0}],onClose:function(){return a.updateCard()}},r.a.createElement("h2",null,"\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f"),r.a.createElement("p",null,"\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u043e\u0442\u0432\u0435\u0442 \u043e\u0442 \u0441\u0435\u0440\u0432\u0435\u0440\u0430")))}))},a.changePanel=function(e){a.setState((function(){return{activePanel:e}}))},a.changePopout=function(e){a.setState((function(){return{popout:e}}))},a.changeModal=function(e){a.setState((function(){return{modal:e}}))},a.goToPanel=function(e){window.history.pushState({panel:e},e),a.setState((function(t){return{activePanel:e,history:[].concat(Object(u.a)(t.history),[e])}}))},a.goBack=function(){var e=a.state.history;1===e.length?i.a.send("VKWebAppClose",{status:"success"}):e.length>1&&(e.pop(),a.setState((function(){return{activePanel:e[e.length-1]}})))},a.state={activePanel:"CardInfoPanel",popout:null,modal:null,scheme:"bright_light",history:["CardInfoPanel"],card:null},a}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("popstate",(function(){return e.goBack()})),i.a.subscribe((function(t){var n=t.detail,a=n.type,r=n.data;if(console.log("[vkb]:",a,r),"VKWebAppUpdateConfig"===a&&e.setState((function(){return{scheme:r.scheme?r.scheme:"bright_light"}})),"VKWebAppStorageGetResult"===a){for(var l=null,o=null,c=0;c<2;c++)"mobile"===r.keys[c].key?l=r.keys[c].value:"cardId"===r.keys[c].key&&(o=r.keys[c].value);console.log("get storage",l,o),l&&o&&e.updateCard(l,o)}})),i.a.send("VKWebAppStorageGet",{keys:["mobile","cardId"]})}},{key:"render",value:function(){var e=this.state,t=e.activePanel,n=e.popout,a=e.modal,l=e.scheme,o=e.card;return r.a.createElement(We.a,{isWebView:!0,scheme:l},r.a.createElement(f.a,{activePanel:t,history:this.state.history,onSwipeBack:this.goBack,popout:n,modal:a},r.a.createElement(H,{id:"CreateCardPanel",goToPanel:this.goToPanel,updateCard:this.updateCard}),r.a.createElement(Te,{id:"CardInfoPanel",goToPanel:this.goToPanel,changeModal:this.changeModal,card:o}),r.a.createElement(Ve,{id:"ContactsPanel"})))}}]),n}(r.a.Component);i.a.send("VKWebAppInit"),o.a.render(r.a.createElement(He,null),document.getElementById("root"))}},[[251,1,2]]]);
//# sourceMappingURL=main.78c9d5fc.chunk.js.map