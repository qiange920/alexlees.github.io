webpackJsonp([10],{195:function(e,t,n){"use strict";var r=n(265);n.n(r);t.a={name:"app"}},198:function(e,t,n){"use strict";function r(e,t){s(e,t);var n="",r=e.path;if(e.paramsPath&&(r=e.path.replace(e.paramsPath,t[e.paramsPath.slice(1)])),e.methods===T.b.GET){n+="?";for(var a in t)t[a]&&(n+=encodeURIComponent(a)+"="+encodeURIComponent(t[a])+"&");return n=n.slice(0,-1),console.log("path",r),{url:T.e.BASE_URL+r+n}}if(e.methods===T.b.POST){var c=o(t);return{url:T.e.BASE_URL+r,data:c}}}function s(e,t){if(e.paramsPath&&!t[e.paramsPath.slice(1)])throw new Error(e.paramsPath.slice(1));if(0!==g()(e.params).length){var n=!0,r=!1,s=void 0;try{for(var a,o=j()(g()(e.params));!(n=(a=o.next()).done);n=!0){var c=a.value;if(!0===e.params[c].required&&"undefined"===t[c])throw new Error("MUST post "+c);if("function"==typeof e.params[c].validator&&void 0!==t[c]){if(e.params[c].validator(t[c]))return!0;throw new Error(c+" validator 类型错误")}if(e.params[c].type!==f()(t[c])&&void 0!==t[c])throw console.log(t[c]),new Error(c+" 存在类型错误")}}catch(e){r=!0,s=e}finally{try{!n&&o.return&&o.return()}finally{if(r)throw s}}}}function a(e,t){var n={},r={},s=g()(e.params).filter(function(t){return e.params[t].default}),a=!0,o=!1,c=void 0;try{for(var u,i=j()(s);!(a=(u=i.next()).done);a=!0){var p=u.value;r[p]=e.params[p].default}}catch(e){o=!0,c=e}finally{try{!a&&i.return&&i.return()}finally{if(o)throw c}}return l()(n,r,t),console.log(n),n}function o(e){var t=[];for(var n in e){var r=encodeURIComponent(n),s=encodeURIComponent(e[n]);e[n]&&t.push(r+"="+s)}return t.join("&")}n.d(t,"c",function(){return y}),n.d(t,"b",function(){return E}),n.d(t,"f",function(){return S}),n.d(t,"g",function(){return P}),n.d(t,"a",function(){return O}),n.d(t,"d",function(){return C}),n.d(t,"j",function(){return _}),n.d(t,"h",function(){return b}),n.d(t,"i",function(){return k}),n.d(t,"e",function(){return w});var c=n(46),u=n.n(c),i=n(47),p=n.n(i),d=n(14),l=n.n(d),h=n(200),f=n.n(h),m=n(281),j=n.n(m),v=n(54),g=n.n(v),T=n(52),y=function(){var e=p()(u.a.mark(function e(){var t,n,s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=r(T.e.TOPICS,a(T.e.TOPICS,s)),console.log(t),e.prev=2,console.log(t.url),e.next=6,fetch(t.url,{method:T.e.TOPICS.methods});case 6:return n=e.sent,e.next=9,n.json();case 9:return e.abrupt("return",e.sent);case 12:e.prev=12,e.t0=e.catch(2),console.log(e.t0);case 15:case"end":return e.stop()}},e,this,[[2,12]])}));return function(){return e.apply(this,arguments)}}(),E=function(){var e=p()(u.a.mark(function e(){var t,n,s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=r(T.e.TOPIC,a(T.e.TOPIC,s)),e.prev=1,e.next=4,fetch(t.url,{method:T.e.TOPIC.methods});case 4:return n=e.sent,e.next=7,n.json();case 7:return e.abrupt("return",e.sent);case 10:e.prev=10,e.t0=e.catch(1),console.log(e.t0);case 13:case"end":return e.stop()}},e,this,[[1,10]])}));return function(){return e.apply(this,arguments)}}(),S=function(){var e=p()(u.a.mark(function e(){var t,n,s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=r(T.e.POST_TOPIC_REPLIES,a(T.e.POST_TOPIC_REPLIES,s)),e.prev=1,e.next=4,fetch(t.url,{method:T.e.POST_TOPIC_REPLIES.methods,headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"},body:t.data});case 4:return n=e.sent,e.next=7,n.json();case 7:return e.abrupt("return",e.sent);case 10:e.prev=10,e.t0=e.catch(1),console.log(e.t0);case 13:case"end":return e.stop()}},e,this,[[1,10]])}));return function(){return e.apply(this,arguments)}}(),P=function(){var e=p()(u.a.mark(function e(){var t,n,s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=r(T.e.POST_ACCESSTOKEN,a(T.e.POST_ACCESSTOKEN,s)),e.prev=1,e.next=4,fetch(t.url,{method:T.e.POST_ACCESSTOKEN.methods,body:t.data,headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"}});case 4:return n=e.sent,e.next=7,n.json();case 7:return e.abrupt("return",e.sent);case 10:e.prev=10,e.t0=e.catch(1),console.log(e.t0);case 13:case"end":return e.stop()}},e,this,[[1,10]])}));return function(){return e.apply(this,arguments)}}(),O=function(){var e=p()(u.a.mark(function e(){var t,n,s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=r(T.e.MESSAGES,a(T.e.MESSAGES,s)),e.prev=1,e.next=4,fetch(t.url,{method:T.e.MESSAGES.methods});case 4:return n=e.sent,e.next=7,n.json();case 7:return e.abrupt("return",e.sent);case 10:e.prev=10,e.t0=e.catch(1),console.log(e.t0);case 13:case"end":return e.stop()}},e,this,[[1,10]])}));return function(){return e.apply(this,arguments)}}(),C=function(){var e=p()(u.a.mark(function e(){var t,n,s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=r(T.e.USER,a(T.e.USER,s)),e.prev=1,e.next=4,fetch(t.url,{method:T.e.USER.methods});case 4:return n=e.sent,e.next=7,n.json();case 7:return e.abrupt("return",e.sent);case 10:e.prev=10,e.t0=e.catch(1),console.log(e.t0);case 13:case"end":return e.stop()}},e,this,[[1,10]])}));return function(){return e.apply(this,arguments)}}(),_=function(){var e=p()(u.a.mark(function e(){var t,n,s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=r(T.e.POST_UP_REPLY,a(T.e.POST_UP_REPLY,s)),e.prev=1,e.next=4,fetch(t.url,{method:T.e.POST_UP_REPLY.methods,body:t.data,headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"}});case 4:return n=e.sent,e.next=7,n.json();case 7:return e.abrupt("return",e.sent);case 10:e.prev=10,e.t0=e.catch(1),console.log(e.t0);case 13:case"end":return e.stop()}},e,this,[[1,10]])}));return function(){return e.apply(this,arguments)}}(),b=function(){var e=p()(u.a.mark(function e(){var t,n,s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=r(T.e.TOPIC_COLLECT,a(T.e.TOPIC_COLLECT,s)),e.prev=1,e.next=4,fetch(t.url,{method:T.e.TOPIC_COLLECT.methods,body:t.data,headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"}});case 4:return n=e.sent,e.next=7,n.json();case 7:return e.abrupt("return",e.sent);case 10:e.prev=10,e.t0=e.catch(1),console.log(e.t0);case 13:case"end":return e.stop()}},e,this,[[1,10]])}));return function(){return e.apply(this,arguments)}}(),k=function(){var e=p()(u.a.mark(function e(){var t,n,s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=r(T.e.TOPIC_DE_COLLECT,a(T.e.TOPIC_DE_COLLECT,s)),e.prev=1,e.next=4,fetch(t.url,{method:T.e.TOPIC_DE_COLLECT.methods,body:t.data,headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"}});case 4:return n=e.sent,e.next=7,n.json();case 7:return e.abrupt("return",e.sent);case 10:e.prev=10,e.t0=e.catch(1),console.log(e.t0);case 13:case"end":return e.stop()}},e,this,[[1,10]])}));return function(){return e.apply(this,arguments)}}(),w=function(){var e=p()(u.a.mark(function e(){var t,n,s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=r(T.e.USER_TOPIC_COLLECT,a(T.e.USER_TOPIC_COLLECT,s)),e.prev=1,e.next=4,fetch(t.url,{method:T.e.USER_TOPIC_COLLECT.methods});case 4:return n=e.sent,e.next=7,n.json();case 7:return e.abrupt("return",e.sent);case 10:e.prev=10,e.t0=e.catch(1),console.log(e.t0);case 13:case"end":return e.stop()}},e,this,[[1,10]])}));return function(){return e.apply(this,arguments)}}()},219:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=(n(220),n(223)),s=(n(202),n(203)),a=(n(211),n(212)),o=n(5),c=n(0),u=n.n(c),i=n(263),p=n(267),d=n(284);u.a.locale("zh-cn"),o.a.config.productionTip=!1,o.a.filter("time",function(e){return u()(e).fromNow()}),o.a.use(a.a),o.a.use(s.a),o.a.use(r.a),new o.a({el:"#app",router:p.a,store:d.a,render:function(e){return e(i.a)}});var l=!0;window.addEventListener("beforeinstallprompt",function(e){l&&(e.preventDefault(),setTimeout(function(){l=!1,e.prompt()},1e4))})},222:function(e,t){},258:function(e,t){},259:function(e,t){},262:function(e,t,n){function r(e){return n(s(e))}function s(e){var t=a[e];if(!(t+1))throw new Error("Cannot find module '"+e+"'.");return t}var a={"./af":72,"./af.js":72,"./ar":73,"./ar-dz":74,"./ar-dz.js":74,"./ar-kw":75,"./ar-kw.js":75,"./ar-ly":76,"./ar-ly.js":76,"./ar-ma":77,"./ar-ma.js":77,"./ar-sa":78,"./ar-sa.js":78,"./ar-tn":79,"./ar-tn.js":79,"./ar.js":73,"./az":80,"./az.js":80,"./be":81,"./be.js":81,"./bg":82,"./bg.js":82,"./bm":83,"./bm.js":83,"./bn":84,"./bn.js":84,"./bo":85,"./bo.js":85,"./br":86,"./br.js":86,"./bs":87,"./bs.js":87,"./ca":88,"./ca.js":88,"./cs":89,"./cs.js":89,"./cv":90,"./cv.js":90,"./cy":91,"./cy.js":91,"./da":92,"./da.js":92,"./de":93,"./de-at":94,"./de-at.js":94,"./de-ch":95,"./de-ch.js":95,"./de.js":93,"./dv":96,"./dv.js":96,"./el":97,"./el.js":97,"./en-au":98,"./en-au.js":98,"./en-ca":99,"./en-ca.js":99,"./en-gb":100,"./en-gb.js":100,"./en-ie":101,"./en-ie.js":101,"./en-il":102,"./en-il.js":102,"./en-nz":103,"./en-nz.js":103,"./eo":104,"./eo.js":104,"./es":105,"./es-do":106,"./es-do.js":106,"./es-us":107,"./es-us.js":107,"./es.js":105,"./et":108,"./et.js":108,"./eu":109,"./eu.js":109,"./fa":110,"./fa.js":110,"./fi":111,"./fi.js":111,"./fo":112,"./fo.js":112,"./fr":113,"./fr-ca":114,"./fr-ca.js":114,"./fr-ch":115,"./fr-ch.js":115,"./fr.js":113,"./fy":116,"./fy.js":116,"./gd":117,"./gd.js":117,"./gl":118,"./gl.js":118,"./gom-latn":119,"./gom-latn.js":119,"./gu":120,"./gu.js":120,"./he":121,"./he.js":121,"./hi":122,"./hi.js":122,"./hr":123,"./hr.js":123,"./hu":124,"./hu.js":124,"./hy-am":125,"./hy-am.js":125,"./id":126,"./id.js":126,"./is":127,"./is.js":127,"./it":128,"./it.js":128,"./ja":129,"./ja.js":129,"./jv":130,"./jv.js":130,"./ka":131,"./ka.js":131,"./kk":132,"./kk.js":132,"./km":133,"./km.js":133,"./kn":134,"./kn.js":134,"./ko":135,"./ko.js":135,"./ky":136,"./ky.js":136,"./lb":137,"./lb.js":137,"./lo":138,"./lo.js":138,"./lt":139,"./lt.js":139,"./lv":140,"./lv.js":140,"./me":141,"./me.js":141,"./mi":142,"./mi.js":142,"./mk":143,"./mk.js":143,"./ml":144,"./ml.js":144,"./mn":145,"./mn.js":145,"./mr":146,"./mr.js":146,"./ms":147,"./ms-my":148,"./ms-my.js":148,"./ms.js":147,"./mt":149,"./mt.js":149,"./my":150,"./my.js":150,"./nb":151,"./nb.js":151,"./ne":152,"./ne.js":152,"./nl":153,"./nl-be":154,"./nl-be.js":154,"./nl.js":153,"./nn":155,"./nn.js":155,"./pa-in":156,"./pa-in.js":156,"./pl":157,"./pl.js":157,"./pt":158,"./pt-br":159,"./pt-br.js":159,"./pt.js":158,"./ro":160,"./ro.js":160,"./ru":161,"./ru.js":161,"./sd":162,"./sd.js":162,"./se":163,"./se.js":163,"./si":164,"./si.js":164,"./sk":165,"./sk.js":165,"./sl":166,"./sl.js":166,"./sq":167,"./sq.js":167,"./sr":168,"./sr-cyrl":169,"./sr-cyrl.js":169,"./sr.js":168,"./ss":170,"./ss.js":170,"./sv":171,"./sv.js":171,"./sw":172,"./sw.js":172,"./ta":173,"./ta.js":173,"./te":174,"./te.js":174,"./tet":175,"./tet.js":175,"./tg":176,"./tg.js":176,"./th":177,"./th.js":177,"./tl-ph":178,"./tl-ph.js":178,"./tlh":179,"./tlh.js":179,"./tr":180,"./tr.js":180,"./tzl":181,"./tzl.js":181,"./tzm":182,"./tzm-latn":183,"./tzm-latn.js":183,"./tzm.js":182,"./ug-cn":184,"./ug-cn.js":184,"./uk":185,"./uk.js":185,"./ur":186,"./ur.js":186,"./uz":187,"./uz-latn":188,"./uz-latn.js":188,"./uz.js":187,"./vi":189,"./vi.js":189,"./x-pseudo":190,"./x-pseudo.js":190,"./yo":191,"./yo.js":191,"./zh-cn":192,"./zh-cn.js":192,"./zh-hk":193,"./zh-hk.js":193,"./zh-tw":194,"./zh-tw.js":194};r.keys=function(){return Object.keys(a)},r.resolve=s,e.exports=r,r.id=262},263:function(e,t,n){"use strict";function r(e){this.$style=n(264)}var s=n(195),a=n(266),o=n(197),c=r,u=o(s.a,a.a,!1,c,null,null);t.a=u.exports},264:function(e,t){e.exports={iconfont:"Eyl4tU35jcY6pY22k4zDb_0"}},265:function(e,t){},266:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("keep-alive",[n("router-view")],1)],1)},s=[],a={render:r,staticRenderFns:s};t.a=a},267:function(e,t,n){"use strict";var r=n(5),s=n(268),a=function(){return n.e(8).then(n.bind(null,298))},o=function(){return n.e(4).then(n.bind(null,299))},c=function(){return n.e(1).then(n.bind(null,300))},u=function(){return n.e(3).then(n.bind(null,301))},i=function(){return n.e(5).then(n.bind(null,302))},p=function(){return n.e(0).then(n.bind(null,303))},d=function(){return n.e(7).then(n.bind(null,304))},l=function(){return n.e(2).then(n.bind(null,305))},h=function(){return n.e(6).then(n.bind(null,306))};r.a.use(s.a),t.a=new s.a({mode:"history",scrollBehavior:function(e,t,n){if(e.hash)return{selector:e.hash}},routes:[{path:"/",component:a,children:[{path:"/",name:"Home",component:o},{path:"/category",name:"Categroy",component:c},{path:"/message",name:"Message",component:u},{path:"/me",name:"Me",component:i}]},{path:"/topic/:id",name:"Topic",component:p},{path:"/login",name:"Login",component:d},{path:"/user/:name",name:"User",component:l},{path:"/user/:name/collect",name:"Collect",component:h}]})},284:function(e,t,n){"use strict";var r=n(46),s=n.n(r),a=n(47),o=n.n(a),c=n(5),u=n(285),i=n.n(u),p=n(199),d=n(198),l=n(52);i.a.set("addLogo",!0),c.a.use(p.a),t.a=new p.a.Store({strict:!0,state:{accesstoken:i.a.get("token"),user:i.a.get("user"),addLogo:i.a.get("addLogo")},mutations:{setUser:function(e,t){e.user=t,i.a.set("user",t)},setToken:function(e,t){e.accesstoken=t,i.a.set("token",t)},setAddLogo:function(e,t){e.addLogo=t,i.a.set("addLogo",t)}},getters:{token:function(e){return e.accesstoken?e.accesstoken:""},user:function(e){return e.user?e.user:null},addLogo:function(e){return e.addLogo}},actions:{logIn:function(e,t){var n=this,r=e.commit;e.state;return o()(s.a.mark(function e(){var a;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(d.g)({accesstoken:t});case 3:if(a=e.sent,!a.success){e.next=8;break}return r("setUser",a),r("setToken",t),e.abrupt("return",{code:l.a.SUCCESS,msg:"登陆成功!"});case 8:return e.abrupt("return",{code:l.a.FAIL,msg:a.error_msg});case 11:return e.prev=11,e.t0=e.catch(0),console.error(e.t0),e.abrupt("return",{code:l.a.FAIL,msg:"网络有问题?"});case 15:case"end":return e.stop()}},e,n,[[0,11]])}))()},logOut:function(e){var t=this,n=e.commit;return o()(s.a.mark(function e(){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n("setUser",null),n("setToken",null);case 2:case"end":return e.stop()}},e,t)}))()}}})},31:function(e,t){},52:function(e,t,n){"use strict";n.d(t,"c",function(){return r}),n.d(t,"a",function(){return s}),n.d(t,"d",function(){return a}),n.d(t,"b",function(){return o});var r=["ask","share","job","good"],s={SUCCESS:0,FAIL:1},a=["问答","分享","招聘","精华"],o={POST:"POST",GET:"GET"};t.e={BASE_URL:"https://cnodejs.org/api/v1",TOPICS:{path:"/topics",methods:o.GET,params:{page:{type:"number",default:1},tab:{validator:function(e){return-1!==r.indexOf(e)}},limit:{type:"number",default:10},mdrender:{type:"boolean",default:!0}}},TOPIC:{path:"/topic/:id",paramsPath:":id",methods:o.GET,params:{mdrender:{type:"boolean",default:!0},accesstoken:{type:"string"}}},POST_TOPIC:{path:"/topics",methods:o.POST,params:{accesstoken:{type:"string",required:!0},tab:{validator:function(e){return-1!==r.indexOf(e)}},title:{type:"string"},content:{required:!0,validator:function(e){return e.length>=10}}}},UPDATE_TOPIC:{path:"/topics/update",methods:o.POST,params:{accesstoken:{type:"string",required:!0},tab:{validator:function(e){return-1!==r.indexOf(e)}},topic_id:{type:"string",required:!0},title:{type:"string"},content:{required:!0,validator:function(e){return e.length>=10}}}},TOPIC_COLLECT:{path:"/topic_collect/collect",methods:o.POST,params:{accesstoken:{type:"string",required:!0},topic_id:{type:"string",required:!0}}},TOPIC_DE_COLLECT:{path:"/topic_collect/de_collect",methods:o.POST,params:{accesstoken:{type:"string",required:!0},topic_id:{type:"string",required:!0}}},USER_TOPIC_COLLECT:{path:"/topic_collect/:loginname",methods:o.GET,paramsPath:":loginname",params:{}},POST_TOPIC_REPLIES:{path:"/topic/:topic_id/replies",paramsPath:":topic_id",methods:o.POST,params:{accesstoken:{type:"string",required:!0},content:{required:!0,validator:function(e){return e.length>=1}},reply_id:{type:"string"}}},POST_UP_REPLY:{path:"/reply/:reply_id/ups",paramsPath:":reply_id",methods:o.POST,params:{accesstoken:{type:"string",required:!0}}},USER:{path:"/user/:loginname",paramsPath:":loginname",methods:o.GET,params:{}},POST_ACCESSTOKEN:{path:"/accesstoken",methods:o.POST,params:{accesstoken:{type:"string",required:!0}}},MESSAGE_COUNT:{path:"/message/count",methods:o.GET,params:{accesstoken:{type:"string",required:!0}}},MESSAGES:{path:"/messages",methods:o.GET,params:{accesstoken:{type:"string",required:!0},mdrender:{type:"boolean"}}},POST_MARK_ALL_MESSAGE:{path:"/message/mark_all",methods:o.POST,params:{accesstoken:{type:"string",required:!0}}},POST_MARK_ONE_MESSAGE:{path:"/message/mark_one/:msg_id",pathParams:":msg_id",methods:o.POST,params:{accesstoken:{type:"string",required:!0}}}}},53:function(e,t){}},[219]);
//# sourceMappingURL=app.b5f9b1ae071ba957c9f3.js.map