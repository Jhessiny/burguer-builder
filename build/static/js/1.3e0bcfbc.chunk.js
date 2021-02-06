webpackJsonp([1],{148:function(e,n,t){"use strict";function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function a(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!==typeof n&&"function"!==typeof n?e:n}function i(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}Object.defineProperty(n,"__esModule",{value:!0});var c=t(0),u=t.n(c),s=t(4),l=t(5),p=t(149),d=t(40),A=t(41),h=t(161),b=t.n(h),g=t(43),f=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}(),m=function(e){function n(){var e,t,i,c;o(this,n);for(var u=arguments.length,s=Array(u),l=0;l<u;l++)s[l]=arguments[l];return t=i=a(this,(e=n.__proto__||Object.getPrototypeOf(n)).call.apply(e,[this].concat(s))),i.state={controls:{email:{elementType:"input",elementConfig:{type:"email",placeholder:"Email"},value:"",validation:{required:!0,isEmail:!0},valid:!1,touched:!1},password:{elementType:"input",elementConfig:{type:"password",placeholder:"Password"},value:"",validation:{required:!0,minLength:6},valid:!1,touched:!1}},isSignup:!0},i.checkValidity=function(e,n){var t=!0;return n.required&&(t=""!==e.trim()&&t),n.minLength&&(t=e.length>=n.minLength&&t),n.maxLength&&(t=e.length<=n.maxLength&&t),t},i.inputChangedHandler=function(e,n){var t=Object.assign({},i.state.controls,r({},n,Object.assign({},i.state.controls[n],{value:e.target.value,valid:i.checkValidity(e.target.value,i.state.controls[n].validation),touched:!0})));i.setState({controls:t})},i.submitHandler=function(e){e.preventDefault(),i.props.onAuth(i.state.controls.email.value,i.state.controls.password.value,i.state.isSignup)},i.switchAuthModeHandler=function(){i.setState(function(e){return{isSignup:!e.isSignup}})},c=t,a(i,c)}return i(n,e),f(n,[{key:"componentDidMount",value:function(){this.props.buildingBurger||"/"===this.props.authRedirectPath||this.props.onSetAuthRedirectPath()}},{key:"render",value:function(){var e=this,n=[];for(var t in this.state.controls)n.push({id:t,config:this.state.controls[t]});var r=n.map(function(n){return u.a.createElement(p.a,{key:n.id,elementType:n.config.elementType,elementConfig:n.config.elementConfig,value:n.config.value,invalid:!n.config.valid,shouldValidate:n.config.validation,touched:n.config.touched,changed:function(t){return e.inputChangedHandler(t,n.id)}})});this.props.loading&&(r=u.a.createElement(A.a,null));var o=null;this.props.error&&(o=u.a.createElement("p",null,this.props.error.message));var a=null;return this.props.isAuthenticated&&(a=u.a.createElement(l.c,{to:this.props.authRedirectPath})),u.a.createElement("div",{className:b.a.Auth},a,o,u.a.createElement("form",{action:"",onSubmit:this.submitHandler},r,u.a.createElement(d.a,{btnType:"Success"},"SUBMIT"),u.a.createElement(d.a,{btnType:"Danger",clicked:this.switchAuthModeHandler},"SWITCH TO ",this.state.isSignup?"SIGNIN":"SIGNUP")))}}]),n}(c.Component),C=function(e){return{onAuth:function(n,t,r){return e(g.a(n,t,r))},onSetAuthRedirectPath:function(){return e(g.d("/"))}}},v=function(e){return{loading:e.auth.loading,error:e.auth.error,isAuthenticated:null!==e.auth.token,buildingBurger:e.burgerBuilder.building,authRedirectPath:e.auth.authRedirectPath}};n.default=Object(s.b)(v,C)(m)},149:function(e,n,t){"use strict";var r=t(0),o=t.n(r),a=t(150),i=t.n(a),c=function(e){var n=null,t=[i.a.InputElement];switch(e.invalid&&e.shouldValidate&&e.touched&&t.push(i.a.Invalid),e.elementType){case"input":n=o.a.createElement("input",Object.assign({className:t.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}));break;case"textarea":n=o.a.createElement("textarea",Object.assign({className:t.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}));break;case"select":n=o.a.createElement("select",{onChange:e.changed,className:t.join(" "),value:e.value},e.elementConfig.options.map(function(e){return o.a.createElement("option",{key:e.value,value:e.value},e.displayValue)}));break;default:n=o.a.createElement("input",Object.assign({className:t.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}))}return o.a.createElement("div",{className:i.a.Input},o.a.createElement("label",{htmlFor:"",className:i.a.Label},e.label),n)};n.a=c},150:function(e,n,t){var r=t(151);"string"===typeof r&&(r=[[e.i,r,""]]);var o={};o.transform=void 0;t(145)(r,o);r.locals&&(e.exports=r.locals)},151:function(e,n,t){n=e.exports=t(144)(!0),n.push([e.i,".Input__Input__1VROp{width:100%;padding:10px;-webkit-box-sizing:border-box;box-sizing:border-box}.Input__Label__1tOSX{font-weight:700;display:block;margin-bottom:8px}.Input__InputElement__3TB0k{outline:none;border:1px solid #ccc;background-color:#fff;font:inherit;padding:6px 10px;display:block;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box}.Input__InputElement__3TB0k:focus{outline:none;background-color:#ccc}.Input__Invalid__38X2d{border:1px solid red;background-color:#f7c1bb}","",{version:3,sources:["C:/Users/jhessiny/Desktop/Study-projects/React/React course/burger-basics--01-after-eject-and-css-modules/src/components/UI/Input/Input.css"],names:[],mappings:"AAAA,qBACE,WAAY,AACZ,aAAc,AACd,8BAA+B,AACvB,qBAAuB,CAChC,AAED,qBACE,gBAAkB,AAClB,cAAe,AACf,iBAAmB,CACpB,AAED,4BACE,aAAc,AACd,sBAA0B,AAC1B,sBAAwB,AACxB,aAAc,AACd,iBAAkB,AAClB,cAAe,AACf,WAAY,AACZ,8BAA+B,AACvB,qBAAuB,CAChC,AAED,kCACE,aAAc,AACd,qBAA0B,CAC3B,AAED,uBACE,qBAAsB,AACtB,wBAAqC,CACtC",file:"Input.css",sourcesContent:[".Input {\r\n  width: 100%;\r\n  padding: 10px;\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n}\r\n\r\n.Label {\r\n  font-weight: bold;\r\n  display: block;\r\n  margin-bottom: 8px;\r\n}\r\n\r\n.InputElement {\r\n  outline: none;\r\n  border: 1px solid #cccccc;\r\n  background-color: white;\r\n  font: inherit;\r\n  padding: 6px 10px;\r\n  display: block;\r\n  width: 100%;\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n}\r\n\r\n.InputElement:focus {\r\n  outline: none;\r\n  background-color: #cccccc;\r\n}\r\n\r\n.Invalid {\r\n  border: 1px solid red;\r\n  background-color: rgb(247, 193, 187);\r\n}\r\n"],sourceRoot:""}]),n.locals={Input:"Input__Input__1VROp",Label:"Input__Label__1tOSX",InputElement:"Input__InputElement__3TB0k",Invalid:"Input__Invalid__38X2d"}},161:function(e,n,t){var r=t(162);"string"===typeof r&&(r=[[e.i,r,""]]);var o={};o.transform=void 0;t(145)(r,o);r.locals&&(e.exports=r.locals)},162:function(e,n,t){n=e.exports=t(144)(!0),n.push([e.i,".Auth__Auth__1TInt{margin:20px auto;width:80%;text-align:center;-webkit-box-shadow:0 2px 3px #ccc;box-shadow:0 2px 3px #ccc;border:1px solid #eee;padding:10px;-webkit-box-sizing:border-box;box-sizing:border-box}@media (min-width:600px){.Auth__Auth__1TInt{width:500px}}","",{version:3,sources:["C:/Users/jhessiny/Desktop/Study-projects/React/React course/burger-basics--01-after-eject-and-css-modules/src/containers/Auth/Auth.css"],names:[],mappings:"AAAA,mBACE,iBAAkB,AAClB,UAAW,AACX,kBAAmB,AACnB,kCAAmC,AAC3B,0BAA2B,AACnC,sBAAuB,AACvB,aAAc,AACd,8BAA+B,AACvB,qBAAuB,CAChC,AAOD,yBACE,mBACE,WAAa,CACd,CACF",file:"Auth.css",sourcesContent:[".Auth {\r\n  margin: 20px auto;\r\n  width: 80%;\r\n  text-align: center;\r\n  -webkit-box-shadow: 0 2px 3px #ccc;\r\n          box-shadow: 0 2px 3px #ccc;\r\n  border: 1px solid #eee;\r\n  padding: 10px;\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n}\r\n\r\n/* .Auth input {\r\n    display: block;\r\n    margin: auto;\r\n  } */\r\n\r\n@media (min-width: 600px) {\r\n  .Auth {\r\n    width: 500px;\r\n  }\r\n}\r\n"],sourceRoot:""}]),n.locals={Auth:"Auth__Auth__1TInt"}}});
//# sourceMappingURL=1.3e0bcfbc.chunk.js.map