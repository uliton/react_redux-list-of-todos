(this["webpackJsonpreact_redux-list-of-todos"]=this["webpackJsonpreact_redux-list-of-todos"]||[]).push([[0],{23:function(e,t,n){},24:function(e,t,n){},26:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var c=n(7),r=n.n(c),s=n(4),a=n(0),o=(n(23),n(24),n(5)),u=n(11),i=n(2),l=n.n(i),d=n(13),j=n.n(d),b=(n(26),"https://mate.academy/students-api"),p=function(){var e=Object(o.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(b,"/todos"));case 2:return t=e.sent,e.abrupt("return",t.json());case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O=function(){var e=Object(o.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(b,"/users/").concat(t));case 2:return n=e.sent,e.abrupt("return",n.json());case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h="SET_TODOS",f="SET_USER",x="REMOVE_USER",m=function(e){return e.todos},v=function(e){return e.user},_=n(1),y=function(){var e=Object(s.b)(),t=Object(a.useState)(""),n=Object(u.a)(t,2),c=n[0],r=n[1],i=Object(a.useState)("all"),d=Object(u.a)(i,2),b=d[0],x=d[1],v=Object(s.c)(m).filter((function(e){return e.title.includes(c)}));Object(a.useEffect)((function(){var t=function(){var t=Object(o.a)(l.a.mark((function t(){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p();case 2:n=t.sent,e({type:h,payload:n});case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}),[]);var y=function(){var t=Object(o.a)(l.a.mark((function t(n){var c;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O(n);case 2:c=t.sent,e({type:f,payload:c});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(_.jsxs)("div",{className:"TodoList",children:[Object(_.jsx)("h2",{children:"Todos:"}),Object(_.jsx)("input",{type:"text",placeholder:"Enter title",value:c,onChange:function(e){r(e.target.value)}}),Object(_.jsxs)("select",{value:b,onChange:function(e){return x(e.target.value)},children:[Object(_.jsx)("option",{value:"all",children:"all"}),Object(_.jsx)("option",{value:"active",children:"active"}),Object(_.jsx)("option",{value:"completed",children:"completed"})]}),Object(_.jsx)("div",{className:"TodoList__list-container",children:Object(_.jsx)("ul",{className:"TodoList__list",children:function(e){switch(b){case"active":return e.filter((function(e){return!1===e.completed}));case"completed":return e.filter((function(e){return!0===e.completed}));default:return e}}(v).map((function(e){return Object(_.jsxs)("li",{className:j()("TodoList__item",{"TodoList__item--checked":e.completed,"TodoList__item--unchecked":!e.completed}),children:[Object(_.jsxs)("label",{children:[Object(_.jsx)("input",{type:"checkbox",readOnly:!0}),Object(_.jsx)("p",{children:e.title})]}),Object(_.jsx)("button",{className:" TodoList__user-button TodoList__user-button--selected button ",type:"button",onClick:function(){y(e.userId)},children:"User #".concat(e.userId)})]},e.id)}))})})]})},N=(n(28),function(){var e=Object(s.c)(v),t=Object(s.b)();return e?Object(_.jsxs)("div",{className:"CurrentUser",children:[Object(_.jsx)("h2",{className:"CurrentUser__title",children:Object(_.jsx)("span",{children:"Selected user: ".concat(e.id)})}),Object(_.jsx)("h3",{className:"CurrentUser__name",children:e.name}),Object(_.jsx)("p",{className:"CurrentUser__email",children:e.email}),Object(_.jsx)("p",{className:"CurrentUser__phone",children:e.phone}),Object(_.jsx)("button",{type:"button",className:" TodoList__user-button TodoList__user-button--selected button",onClick:function(){t({type:x})},children:"Clear"})]}):Object(_.jsx)("p",{children:"No selected user"})}),T=function(){return Object(_.jsxs)("div",{className:"App",children:[Object(_.jsx)("div",{className:"App__sidebar",children:Object(_.jsx)(y,{})}),Object(_.jsx)("div",{className:"App__content",children:Object(_.jsx)("div",{className:"App__content-container",children:Object(_.jsx)(N,{})})})]})},w=n(15),k=n(3),C=n(14),L={todos:[],user:null},E=Object(C.a)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return Object(k.a)(Object(k.a)({},e),{},{todos:Object(w.a)(t.payload)});case f:return Object(k.a)(Object(k.a)({},e),{},{user:t.payload});case x:return Object(k.a)(Object(k.a)({},e),{},{user:null});default:return e}}));r.a.render(Object(_.jsx)(s.a,{store:E,children:Object(_.jsx)(T,{})}),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.f6d4951a.chunk.js.map