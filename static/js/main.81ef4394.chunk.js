(this.webpackJsonpcards=this.webpackJsonpcards||[]).push([[0],{11:function(e,t,n){e.exports={nav:"Navigation_nav__241z0",wrap:"Navigation_wrap__demD8",listItem:"Navigation_listItem__aBWsF",navElement:"Navigation_navElement__29Vwh",p:"Navigation_p__9Q_7E",navList:"Navigation_navList__z2UR2"}},15:function(e,t,n){e.exports={letterImg:"ConfirmPassword_letterImg__2N3rI",errorImg:"ConfirmPassword_errorImg__3qq5C"}},17:function(e,t,n){e.exports={app:"App_app__2aOdL",layout:"App_layout__2S8fS",main:"App_main__24PHL"}},21:function(e,t,n){e.exports={superInput:"CustomInputText_superInput__K8brJ",input:"CustomInputText_input__Ry5T4",errorInput:"CustomInputText_errorInput__2d0Po",error:"CustomInputText_error__3R8jT",inputWrap:"CustomInputText_inputWrap__3zwmg"}},3:function(e,t,n){e.exports={mainContainer:"Common_mainContainer__1t-zw",contentWrap:"Common_contentWrap__1Axzh",content:"Common_content__UidQH",btn:"Common_btn__1nWkw",inputEmail:"Common_inputEmail__2Um59",inputPassword:"Common_inputPassword__3GoZh",inputCentering:"Common_inputCentering__-eDhT"}},32:function(e,t,n){e.exports={loader:"Preloader_loader__2syPF"}},33:function(e,t,n){e.exports={rememberMeInput:"Login_rememberMeInput__1zYYI"}},34:function(e,t,n){e.exports={btns:"Registrations_btns__HPNCD"}},40:function(e,t,n){},66:function(e,t,n){"use strict";n.r(t);var a,r=n(1),c=n.n(r),i=n(14),s=n.n(i),o=(n(40),n(6)),l=n(7),u=n(2),j=n(17),d=n.n(j),O=o.c,b=n(5),p=function(e){var t=Object(r.useState)(e),n=Object(b.a)(t,2),a=n[0],c=n[1];return{value:a,handleValue:function(e){return c(e.target.value)},resetValue:function(){return c(e)}}},h={},m=n(4),x=n(31),_=n.n(x).a.create({baseURL:"https://neko-back.herokuapp.com/2.0",withCredentials:!0}),f=function(e){return _.post("auth/login",e)},v=function(){return _.delete("auth/me",{})},g=function(){return _.post("auth/me")},N=function(e){return _.post("auth/register",e)},I={status:"idle",error:null,isInitialized:!1},S=function(e){return{type:"APP/SET_STATUS",status:e}},w={isAuth:!1,error:null},E=function(e){return{type:"LOGIN/SET_AUTH_LOGIN_DATA",isAuth:e}},C=function(e){return{type:"LOGIN/SET_ERROR_MESSAGE",error:e}},R={_id:null,avatar:null,name:null,email:null,rememberMe:!1},T=function(e){return e.login.isAuth},A=function(e){return e.login.error},P=function(e){return e.app.isInitialized},y=function(e){return e.app.status},k=n(21),L=n.n(k),W=n(0),G=Object(r.memo)((function(e){var t=e.placeholder,n=e.typeInput,a=void 0===n?"text":n,r=e.className,c=e.value,i=e.onChange,s=e.name;return Object(W.jsx)("div",{className:L.a.inputWrap,children:Object(W.jsx)("input",{type:a,name:s,value:c,onChange:i,placeholder:t,className:null!==r&&void 0!==r?r:L.a.input,autoComplete:"off",spellCheck:!1,"aria-autocomplete":"list"})})})),D=n(32),M=n.n(D),F=n.p+"static/media/preloader1.9c1d25d2.gif",V=function(){return Object(W.jsx)("div",{children:Object(W.jsx)("img",{className:M.a.loader,src:F,alt:"preloader"})})},z=n(33),U=n.n(z);!function(e){e.REGISTRATION="/registration",e.LOGIN="/login",e.PROFILE="/profile",e.CONFIRM_PASSWORD="/confirmPassword",e.POPUP="/popup",e.CREATE_NEW_PASSWORD="/createNewPassword/*"}(a||(a={}));var Z=n(3),H=n.n(Z),$=function(){var e=Object(r.useState)(!1),t=Object(b.a)(e,2),n=t[0],c=t[1],i=p(""),s=i.value,j=i.handleValue,d=p(""),h=d.value,m=d.handleValue,x=Object(o.b)(),_=O(T),v=O(A),g=O(y);return _?Object(W.jsx)(u.a,{to:a.PROFILE}):Object(W.jsx)("div",{className:H.a.mainContainer,children:"loading"===g?Object(W.jsx)(V,{}):Object(W.jsx)("div",{className:H.a.content,children:Object(W.jsxs)("div",{className:H.a.contentWrap,children:[Object(W.jsx)("h2",{children:" Login "}),Object(W.jsx)(G,{onChange:j,value:s,placeholder:"Email",typeInput:"text"}),Object(W.jsx)(G,{placeholder:"password",typeInput:"password",value:h,onChange:m}),v?Object(W.jsxs)("div",{style:{color:"red",display:"flex",justifyContent:"center",alignItems:"center",flexWrap:"wrap"},children:[" ",v," "]}):"",Object(W.jsxs)("div",{className:U.a.rememberMeInput,children:["remember me",Object(W.jsx)("input",{type:"checkbox",checked:n,onChange:function(e){return c(e.currentTarget.checked)}})]}),Object(W.jsx)("div",{children:Object(W.jsx)(l.b,{to:a.CONFIRM_PASSWORD,children:" Forgot password "})}),Object(W.jsx)("button",{onClick:function(){var e;x((e={email:s,password:h,rememberMe:n},function(t){t(S("loading")),f(e).then((function(){t(E(!0)),t(S("succeeded"))})).catch((function(e){var n=e.response?e.response.data.error:"".concat(e.message,", more details in the console");t(C(n)),t(S("failed"))})).finally((function(){t(S("idle"))}))}))},className:H.a.btn,children:"Sign In"}),Object(W.jsx)("p",{children:" Do not have an account? "}),Object(W.jsx)(l.b,{to:a.REGISTRATION,children:" Sign Up "})]})})})},B=function(){var e=O(T),t=O(y),n=Object(o.b)();return e?Object(W.jsx)("div",{className:H.a.mainContainer,children:"loading"===t?Object(W.jsx)(V,{}):Object(W.jsxs)("div",{className:H.a.content,children:[Object(W.jsx)("h2",{children:" Profile "}),e?Object(W.jsx)("div",{children:Object(W.jsx)("button",{className:H.a.btn,onClick:function(){n((function(e){e(S("loading")),v().then((function(){e(E(!1)),e(C("")),e(S("idle"))}))}))},children:"Log out"})}):Object(W.jsx)(l.c,{to:a.LOGIN,children:"Login"})]})}):Object(W.jsx)(u.a,{to:a.LOGIN})},J=n(34),K=n.n(J),q=function(e){return _.post("auth/forgot",e)},Q=function(e){return _.post("auth/set-new-password",e)},Y=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)},X=function(e){return/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/.test(e)},ee=function(){var e=p(""),t=e.value,n=e.handleValue,c=p(""),i=c.value,s=c.handleValue,o=p(""),l=o.value,j=o.handleValue,d=Object(r.useState)(!1),O=Object(b.a)(d,2),h=O[0],m=O[1],x={email:t,password:i};return h?Object(W.jsx)(u.a,{to:a.LOGIN}):Object(W.jsx)("div",{className:H.a.mainContainer,children:Object(W.jsx)("div",{className:H.a.content,children:Object(W.jsxs)("div",{className:H.a.contentWrap,children:[Object(W.jsx)("h2",{children:"Registration"}),Object(W.jsx)(G,{placeholder:"Email",typeInput:"email",onChange:n,value:t,name:"user[email]"}),Object(W.jsx)(G,{placeholder:"Password",typeInput:"password",onChange:s,value:i,name:"user[password]"}),Object(W.jsx)(G,{placeholder:"Confirm Password",typeInput:"password",onChange:j,value:i,name:"user[password]"}),Object(W.jsx)("p",{children:" Have fun! "}),Object(W.jsxs)("div",{className:K.a.btns,children:[Object(W.jsx)("button",{className:H.a.btn,children:"Cancel"}),Object(W.jsx)("button",{className:H.a.btn,onClick:function(){i===l&&X(i)&&Y(t)&&N(x).then((function(){m(!0)}))},children:"Create"})]})]})})})},te=n(11),ne=n.n(te),ae=[{id:1,title:"registration",link:a.REGISTRATION},{id:2,title:"login",link:a.LOGIN},{id:3,title:"profile",link:a.PROFILE},{id:4,title:"confirmPassword",link:a.CONFIRM_PASSWORD},{id:5,title:"popup",link:a.POPUP},{id:6,title:"createNewPassword",link:a.CREATE_NEW_PASSWORD}],re=function(){return Object(W.jsx)("div",{className:ne.a.nav,children:Object(W.jsx)("div",{className:ne.a.wrap,children:Object(W.jsx)("div",{className:ne.a.navList,children:ae.map((function(e){var t=e.id,n=e.title,a=e.link;return Object(W.jsx)(l.c,{className:ne.a.listItem,to:a,children:Object(W.jsx)("div",{className:ne.a.navElement,children:n})},t)}))})})})},ce={errorValidation:null,errorNetwork:null},ie=function(e){return{type:"FORGOT_PASSWORD/SET_VALIDATION_ERROR_MESSAGE",errorValidation:e}},se=function(e){return e.errorMessage.errorNetwork},oe=function(e){return e.errorMessage.errorValidation},le=function(){var e=Object(r.useState)(!1),t=Object(b.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)(!1),i=Object(b.a)(c,2),s=i[0],j=i[1],d=Object(r.useState)(""),p=Object(b.a)(d,2),h=p[0],m=p[1],x=Object(o.b)(),_=O(oe),f=O(se),v={email:h,from:"test-front-admin <samutic40@gmail.com>",message:"<div style='background-color: #ffd500; \npadding: 15px; \nborder-color: #ff9900; \nwidth: 250px;\nheight: 30px'> \npassword recovery link: <a href='https://Or1ginald.github.io/gameCards/#/createNewPassword/$token$'> recovery link </a></div>"};return s?Object(W.jsx)(u.a,{to:"/popup"}):Object(W.jsx)("div",{className:H.a.mainContainer,children:n?Object(W.jsx)(V,{}):Object(W.jsx)("div",{className:H.a.content,children:Object(W.jsxs)("div",{className:H.a.contentWrap,children:[Object(W.jsx)("h2",{children:"Forgot your password?"}),_&&Object(W.jsxs)("span",{style:{color:"red"},children:[" ",_," "]}),f&&Object(W.jsxs)("span",{style:{color:"red"},children:[" ",_," "]}),Object(W.jsx)("div",{className:H.a.inputCentering,children:Object(W.jsx)("input",{placeholder:"Email",type:"email",className:H.a.inputPassword,onChange:function(e){m(e.currentTarget.value),x(ie(""))}})}),Object(W.jsx)("p",{children:" Enter your email and we will send you further instructions"}),Object(W.jsx)("div",{children:Object(W.jsx)("button",{className:H.a.btn,onClick:function(){Y(h)?(x(function(e,t,n){return function(a){q(e).then((function(){t(!1),n(!0)})).catch((function(){return a(ie("mistaken email"))}))}}(v,a,j)),m("")):x(ie("mistaken email ;-("))},children:"send instructions"})}),Object(W.jsx)("span",{children:"Did you remember your password?"}),Object(W.jsx)(l.b,{to:"/login",children:" Try logging in "})]})})})},ue=function(){var e=Object(r.useState)(!1),t=Object(b.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)(""),i=Object(b.a)(c,2),s=i[0],l=i[1],j=Object(o.b)(),d=Object(o.c)((function(e){return e.errorMessage.errorValidation})),O=Object(o.c)((function(e){return e.errorMessage.errorNetwork})),p=Object(u.f)().pathname.split("/"),h=p[p.length-1],m={password:s,resetPasswordToken:h};return n?Object(W.jsx)(u.a,{to:"/login"}):Object(W.jsx)("div",{className:H.a.mainContainer,children:Object(W.jsx)("div",{className:H.a.content,children:Object(W.jsxs)("div",{className:H.a.contentWrap,children:[Object(W.jsx)("h2",{children:"Create new password"}),d&&Object(W.jsxs)("span",{style:{color:"red"},children:[" ",d," "]}),O&&Object(W.jsxs)("span",{style:{color:"red"},children:[" ",d," "]}),Object(W.jsx)("div",{className:H.a.inputCentering,children:Object(W.jsx)("input",{placeholder:"Password",type:"password",className:H.a.inputPassword,onChange:function(e){l(e.currentTarget.value),j(ie(""))}})}),Object(W.jsx)("p",{children:" Create new password and we will send you further instructions to email"}),Object(W.jsx)("div",{children:Object(W.jsx)("button",{className:H.a.btn,onClick:function(){X(s)?(j(function(e,t){return function(n){Q(e).then((function(){t(!0)})).catch((function(e){var t=e.response?e.response.data.error:"".concat(e.message,", more details in the console");n(function(e){return{type:"FORGOT_PASSWORD/SET_NETWORK_ERROR_MESSAGE",errorNetwork:e}}(t))}))}}(m,a)),l("")):j(ie("mistaken password ;-("))},children:"Create new password"})})]})})})},je=n.p+"static/media/letter.3761fe05.png",de=n(15),Oe=n.n(de),be=function(){return Object(W.jsx)("div",{children:Object(W.jsx)("div",{className:H.a.mainContainer,children:Object(W.jsxs)("div",{className:H.a.content,children:[Object(W.jsx)("img",{className:Oe.a.letterImg,src:je,alt:"letter"}),Object(W.jsx)("h2",{children:"Check Email"}),Object(W.jsx)("p",{children:"We have sent the Email with instructions to your email "}),Object(W.jsx)("br",{}),Object(W.jsx)("br",{})]})})})},pe=(n.p,function(){return Object(W.jsx)("div",{className:H.a.mainContainer,children:Object(W.jsx)("div",{className:H.a.container,children:Object(W.jsx)("p",{style:{color:"white"},children:" Test page "})})})}),he=function(){var e=O(P),t=Object(o.b)();return Object(r.useEffect)((function(){t((function(e){g().then((function(){e(E(!0))})).finally((function(){e({type:"APP/SET_IS_INITIALIZED",isInitialized:!0})}))}))}),[]),e?Object(W.jsx)("div",{className:d.a.app,children:Object(W.jsxs)("div",{className:d.a.layout,children:[Object(W.jsx)(re,{}),Object(W.jsx)("div",{className:d.a.main,children:Object(W.jsxs)(u.d,{children:[Object(W.jsx)(u.b,{path:a.LOGIN,element:Object(W.jsx)($,{})}),Object(W.jsx)(u.b,{path:a.REGISTRATION,element:Object(W.jsx)(ee,{})}),Object(W.jsx)(u.b,{path:a.PROFILE,element:Object(W.jsx)(B,{})}),Object(W.jsx)(u.b,{path:"/*",element:Object(W.jsx)("h1",{children:"404:page NOT found"})}),Object(W.jsx)(u.b,{path:a.CONFIRM_PASSWORD,element:Object(W.jsx)(le,{})}),Object(W.jsx)(u.b,{path:a.POPUP,element:Object(W.jsx)(be,{})}),Object(W.jsx)(u.b,{path:a.CREATE_NEW_PASSWORD,element:Object(W.jsx)(ue,{})}),Object(W.jsx)(u.b,{path:"/",element:Object(W.jsx)(pe,{})})]})})]})}):Object(W.jsx)("div",{style:{position:"fixed",top:"30%",textAlign:"center",width:"100%"},children:Object(W.jsx)(V,{})})},me=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,67)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))},xe=n(18),_e=n(35),fe=Object(xe.b)({cards:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;return t.type,e},login:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN/SET_AUTH_LOGIN_DATA":return Object(m.a)(Object(m.a)({},e),{},{isAuth:t.isAuth});case"LOGIN/SET_ERROR_MESSAGE":return Object(m.a)(Object(m.a)({},e),{},{error:t.error});default:return e}},profilePage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;return"SET_USER_DATA"===t.type?Object(m.a)(Object(m.a)({},e),t.payload):e},errorMessage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FORGOT_PASSWORD/SET_VALIDATION_ERROR_MESSAGE":return Object(m.a)(Object(m.a)({},e),{},{errorValidation:t.errorValidation});case"FORGOT_PASSWORD/SET_NETWORK_ERROR_MESSAGE":return Object(m.a)(Object(m.a)({},e),{},{errorNetwork:t.errorNetwork});default:return e}},app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"APP/SET_STATUS":return Object(m.a)(Object(m.a)({},e),{},{status:t.status});case"APP/SET_ERROR":return Object(m.a)(Object(m.a)({},e),{},{error:t.error});case"APP/SET_IS_INITIALIZED":return Object(m.a)(Object(m.a)({},e),{},{isInitialized:t.isInitialized});default:return Object(m.a)({},e)}}}),ve=Object(xe.c)(fe,Object(xe.a)(_e.a));window.store=ve,s.a.render(Object(W.jsx)(c.a.StrictMode,{children:Object(W.jsx)(l.a,{children:Object(W.jsx)(o.a,{store:ve,children:Object(W.jsx)(he,{})})})}),document.getElementById("root")),me()}},[[66,1,2]]]);
//# sourceMappingURL=main.81ef4394.chunk.js.map