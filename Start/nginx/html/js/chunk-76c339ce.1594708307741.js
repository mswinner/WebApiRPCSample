(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-76c339ce"],{"22fb":function(e,l,a){e.exports=a.p+"img/login_bg.a575e594.png"},"527f":function(e,l,a){"use strict";var t=a("9cc0"),n=a.n(t);n.a},5940:function(e,l,a){e.exports=a.p+"img/fmLogo.766b4257.png"},"5e68":function(e,l,a){"use strict";var t=a("b3b8"),n=a.n(t);n.a},"9cc0":function(e,l,a){},"9ed6":function(e,l,a){"use strict";a.r(l);var t=function(){var e=this,l=e.$createElement,a=e._self._c||l;return a("div",{staticClass:"login",style:"background-image: url("+e.loginbg+")"},[e.noChrome?a("div",{staticClass:"chrome"},[e._v("\n    为了良好的操作体验，请使用"),a("a",{staticStyle:{color:"blue"},attrs:{href:e.chromeHref}},[e._v("谷歌浏览器(点击直接下载)")]),e._v("（注：其他浏览器可能存在兼容性问题）\n  ")]):e._e(),e._v(" "),a("vue-particles",{staticClass:"bg-canvas",attrs:{color:"#f7b2b7",particleOpacity:.7,particlesNumber:40,shapeType:"circle",particleSize:4,linesColor:"#f7b2b7",linesWidth:1,lineLinked:!0,lineOpacity:.4,linesDistance:150,moveSpeed:3,hoverEffect:!0,hoverMode:"grab",clickEffect:!0,clickMode:"push"}}),e._v(" "),a("div",{staticClass:"main"},[a("div",{staticClass:"fm-logo"},[a("img",{attrs:{src:e.fmLogo}})]),e._v(" "),a("div",[a("div",{staticClass:"content"},[a("div",{staticClass:"logo"},[a("img",{attrs:{src:e.fangmao}})]),e._v(" "),e.showQR?a("div",[a("p",{staticClass:"fs16 pointer mb20",on:{click:function(l){e.showQR=!1}}},[a("i",{staticStyle:{"font-family":"'simsun'"}},[e._v("<")]),e._v(" 返回登录\n          ")]),e._v(" "),a("div",{staticClass:"flex-center qr-box"},[a("qrcode-vue",{staticClass:"qrcode",attrs:{size:e.size,value:e.value,renderAs:"svg",level:"H"}}),e._v(" "),a("div",{staticClass:"img"},[a("img",{attrs:{src:e.fangmao}})])],1),e._v(" "),a("p",{staticClass:"fs12 color9 ta-center mt10"},[e._v(e._s(e.msg))])]):a("div",[a("div",{staticClass:"tabs"},e._l(e.tabs,(function(l,t){return a("span",{key:t,class:{active:t===e.tabIndex},on:{click:function(l){e.tabIndex=t}}},[e._v("\n              "+e._s(l)+"\n            ")])})),0),e._v(" "),a("el-form",{ref:"loginForm",staticClass:"login-form",attrs:{model:e.loginForm,autocomplete:"on","label-position":"left"}},[a("el-form-item",{attrs:{prop:"tel",rules:[e.rules.required(),e.rules.tel]}},[a("el-input",{attrs:{placeholder:"请输入手机号",type:"text",maxlength:"11"},model:{value:e.loginForm.tel,callback:function(l){e.$set(e.loginForm,"tel",l)},expression:"loginForm.tel"}})],1),e._v(" "),a("el-form-item",{attrs:{prop:"vcode",rules:[e.rules.required(),e.rules.d6]}},[a("el-input",{attrs:{placeholder:"请输入短信验证码",type:"text",maxlength:"6"},nativeOn:{keyup:function(l){return!l.type.indexOf("key")&&e._k(l.keyCode,"enter",13,l.key,"Enter")?null:e.login(l)}},model:{value:e.loginForm.vcode,callback:function(l){e.$set(e.loginForm,"vcode",l)},expression:"loginForm.vcode"}},[a("div",{staticClass:"verification",attrs:{slot:"suffix"},slot:"suffix"},[a("i"),e._v(" "),a("p",{on:{click:e.sms}},[e._v("\n                    "+e._s(e.vText)+"\n                  ")])])])],1)],1),e._v(" "),a("el-button",{staticClass:"btn",class:{disabled:e.disabledBtn},attrs:{loading:e.disabledBtn,disabled:e.disabledBtn},on:{click:e.login}},[e._v("\n            登录\n          ")]),e._v(" "),a("div",[a("el-button",{staticClass:"btn2",on:{click:function(l){e.showQR=!0}}},[e._v("\n              "+e._s(e.msg)+"\n            ")])],1)],1)])])])],1)},n=[],s=a("a34a"),r=a.n(s),i=a("d7b0"),o=a("7ded"),u=a("22fb"),c=a.n(u),v=a("ab55"),b=a.n(v),d=a("5940"),m=a.n(d),g=a("9fe9"),p=a("db49");function f(e,l,a,t,n,s,r){try{var i=e[s](r),o=i.value}catch(u){return void a(u)}i.done?l(o):Promise.resolve(o).then(t,n)}function h(e){return function(){var l=this,a=arguments;return new Promise((function(t,n){var s=e.apply(l,a);function r(e){f(s,t,n,r,i,"next",e)}function i(e){f(s,t,n,r,i,"throw",e)}r(void 0)}))}}var y=60,_={components:{MyFooter:g["a"],QrcodeVue:i["a"]},data:function(){return{rules:p["a"].rules,loginbg:c.a,fangmao:b.a,fmLogo:m.a,vText:"发送验证码",timer:null,time:y,smsing:!1,disabledBtn:!1,loginForm:{tel:"",vcode:""},tabIndex:0,tabs:["快捷登陆"],msg:"下载P+移动客户端",showQR:!1,value:"http://pcn.fangmao.com/download/download.html",size:220}},computed:{noChrome:function(){var e=-1==navigator.userAgent.indexOf("Chrome");return e},chromeHref:function(){var e=/macintosh|mac os x/i.test(navigator.userAgent),l="https://fangyibao-res.oss-cn-hangzhou.aliyuncs.com/app_download/ChromeSetup.rar";return e&&(l="https://fangyibao-res.oss-cn-hangzhou.aliyuncs.com/app_download/googlechrome.dmg"),l}},methods:{sms:function(){var e=this;this.$refs.loginForm.validateField("tel",(function(l){var a=["目前只支持中国大陆的手机号码","不能为空"];if(-1!==a.indexOf(l))return!1;e.smsing||(e.smsing=!0,Object(o["f"])({cellphone:e.loginForm.tel}),e.timer=setInterval((function(){e.time--,e.vText="".concat(e.time,"s"),e.time<0&&(e.vText="发送验证码",e.disabledBtn=!1,clearInterval(e.timer),e.time=y,e.smsing=!1)}),1e3))}))},login:function(){var e=this;return h(r.a.mark((function l(){var a,t;return r.a.wrap((function(l){while(1)switch(l.prev=l.next){case 0:if(-1===window.location.host.indexOf("localhost")){l.next=12;break}return a="",a="666666",t="",t=117,e.$store.commit("user/SET_TOKEN",a),e.$store.commit("user/SET_USER_ID",t),l.next=9,e.$store.dispatch("settings/getUserInfo");case 9:e.$store.dispatch("settings/getUserMenu").then((function(l){e.$navigateTo({path:l[0].path})})),l.next=13;break;case 12:e.$refs.loginForm.validate(function(){var l=h(r.a.mark((function l(a){var t,n;return r.a.wrap((function(l){while(1)switch(l.prev=l.next){case 0:if(!a){l.next=13;break}return e.disabledBtn=!0,l.next=4,e.$store.dispatch("user/login",e.loginForm);case 4:if(t=l.sent,!t){l.next=12;break}return l.next=8,e.$store.dispatch("settings/getUserInfo");case 8:n=l.sent,e.$store.dispatch("settings/getUserMenu").then((function(l){2!==n.workingStatus?e.$navigateTo(l[0].path):e.$navigateTo("/enrollment")})),l.next=13;break;case 12:e.disabledBtn=!1;case 13:case"end":return l.stop()}}),l)})));return function(e){return l.apply(this,arguments)}}());case 13:case"end":return l.stop()}}),l)})))()}}},x=_,L=(a("5e68"),a("2877")),C=Object(L["a"])(x,t,n,!1,null,"b3b5f3a8",null);l["default"]=C.exports},"9fe9":function(e,l,a){"use strict";var t=function(){var e=this,l=e.$createElement,a=e._self._c||l;return a("footer",{staticClass:"footer"},[e._v(e._s(e.msg))])},n=[],s={data:function(){return{msg:"copyright © 2019 四川熊猫房猫科技有限公司"}}},r=s,i=(a("527f"),a("2877")),o=Object(i["a"])(r,t,n,!1,null,"830d7da8",null);l["a"]=o.exports},ab55:function(e,l,a){e.exports=a.p+"img/fangmao.b892d5d2.png"},b3b8:function(e,l,a){},db49:function(e,l,a){"use strict";var t={routeSetting:{liulan:"liulan"},config:{bool:[{value:!0,label:"是"},{value:!1,label:"否"}],sexes:[{name:"未知",id:0},{name:"男",id:1},{name:"女",id:2}],genderList:[{name:"先生",id:1},{name:"女士",id:2}],payWay:{1:"现金",2:"银行",3:"支付宝",4:"微信",5:"POS机"},orderStatus:{10:{name:"待审核",color:"red"},0:{name:"被驳回",color:"pink"},15:{name:"待收款",color:"orange"},16:{name:"部分收款",color:"orange"},20:{name:"已结单",color:"color3"},100:{name:"已关闭",color:"color9"}},propertyTypes:["住房","商住","别墅","写字楼","商铺"],openDays:[{value:"",label:"全部"},{value:0,label:"最近开盘"},{value:7,label:"最近7天"},{value:15,label:"最近15天"},{value:30,label:"最近30天"},{value:90,label:"最近3个月"}],saleStatusList:[{value:"",label:"全部"},{value:1,label:"待售"},{value:2,label:"即将开盘"},{value:3,label:"在售"},{value:4,label:"下期待开"},{value:5,label:"已售罄"}],suitableOperations:["餐饮美食","服饰鞋包","休闲娱乐","美容美发","生活服务","百货超市","酒店宾馆","家居建材"],decorations:["毛坯","简装","普装","精装","豪装"],orientations:["东","南","西","北","东北","西北","东南","西南"],propertyRightLimits:["40年","50年","70年"],propertyRightTypes:["商品房","经济适用房","已购公房","央产房","其他"],houseLevels:["A级","B级","C级"],houseAges:["不满两年","满两年","满五年"],reportStatusList:["待审报备","已审报备","报备失败","有效客户","无效客户","已成交"],houseStatusList:[{value:"空闲"},{value:"出租中"},{value:"自住"}],expectSaleCycleList:[{value:"越快越好"},{value:"观望，价格合适再出售"}],routineHouseViewTimeList:[{value:"周一",label:"周一",children:[{value:"上午",label:"上午"},{value:"中午",label:"中午"},{value:"下午",label:"下午"},{value:"晚上",label:"晚上"}]},{value:"周二",label:"周二",children:[{value:"上午",label:"上午"},{value:"中午",label:"中午"},{value:"下午",label:"下午"},{value:"晚上",label:"晚上"}]},{value:"周三",label:"周三",children:[{value:"上午",label:"上午"},{value:"中午",label:"中午"},{value:"下午",label:"下午"},{value:"晚上",label:"晚上"}]},{value:"周四",label:"周四",children:[{value:"上午",label:"上午"},{value:"中午",label:"中午"},{value:"下午",label:"下午"},{value:"晚上",label:"晚上"}]},{value:"周五",label:"周五",children:[{value:"上午",label:"上午"},{value:"中午",label:"中午"},{value:"下午",label:"下午"},{value:"晚上",label:"晚上"}]},{value:"周六",label:"周六",children:[{value:"上午",label:"上午"},{value:"中午",label:"中午"},{value:"下午",label:"下午"},{value:"晚上",label:"晚上"}]},{value:"周日",label:"周日",children:[{value:"上午",label:"上午"},{value:"中午",label:"中午"},{value:"下午",label:"下午"},{value:"晚上",label:"晚上"}]}],payRequireList:[{value:"全款"},{value:"接受贷款"}],householdStatusList:[{value:"有户口,可迁出"},{value:"无户口"}],sellReasonList:[{value:"变现换钱"},{value:"改善居住条件"},{value:"急等用钱"},{value:"置换新房"}],customerLevels:[{value:2,label:"一星(普通)"},{value:3,label:"二星(优质)"},{value:4,label:"三星(精准)"}],customerDemands:[{value:1,label:"二手房求购"},{value:2,label:"新房求购"},{value:3,label:"求租"}],auditStatusList:["待审报备","已审报备","报备失败"],marryStatusList:["未婚","已婚","离异"],marryStatusList2:[{label:"未婚",value:1},{label:"已婚",value:2},{label:"离异",value:3},{label:"其他",value:4}],mortgageStatusList:["有抵押","无抵押"],priceLimit:[{value:"0-40",label:"40万以下"},{value:"60-80",label:"60-80万"},{value:"80-100",label:"80-100万"},{value:"100-150",label:"100-150万"},{value:"150-200",label:"150-200万"},{value:"200-300",label:"200-300万"},{value:"300-1000000000",label:"300万以上"}],buildingAreaLimit:[{value:"0-50",label:"50㎡以下"},{value:"50-70",label:"50-70㎡"},{value:"70-90",label:"70-90㎡"},{value:"90-110",label:"90-110㎡"},{value:"110-130",label:"110-130㎡"},{value:"130-150",label:"130-150㎡"},{value:"150-200",label:"150-200㎡"},{value:"200-1000000",label:"200㎡以上"}],floorNumberLimit:[{value:"0-6",label:"6层以下"},{value:"6-12",label:"6-12层"},{value:"12-18",label:"12-18层"},{value:"18-1000",label:"18层以上"}],houseStatus:["有效","封盘","暂缓","预订","内成交","外成交"],roomNum:["一室","二室","三室","四室","四室以上"],dealStatus:["待结佣","部分结佣","已结佣","已关闭","待审业绩"],performanceTypes:["客源成交人","客源合作人","项目方抽成"],commissionStatusList:["待结佣","部分结佣","已结佣"],communityScopeList:["我关注的"],communityStatusList:["草稿","待审核","被驳回"],waterUseTypeList:["民用水","商用水"],heatingTypeList:["自采暖","小区集中供暖","市政供暖"],electricityTypeList:["民用电","商用电"],buildingStructureList:["混凝土结构","钢结构","木结构","砌体结构"],buildingTypeList:["多层","小高层","高层","超高层","花园洋房","独栋别墅","双拼别墅","联排别墅","三拼别墅","叠加别墅","四合院","板楼","塔楼","楼塔组合"],communityOfferStatusList:[{label:"未报盘",value:1},{label:"在售",value:2},{label:"封盘",value:3},{label:"无效",value:4},{label:"已成交",value:5}],invalidReasonList:["暂缓","内成交","外成交","信息有误","其他"],keyList:["实体钥匙","电子钥匙"],windowTypeList:["未知窗户类型","落地窗","普通窗","飘窗","无窗"],educationList:[{label:"大专统招",value:1},{label:"大专非统招",value:2},{label:"本科统招",value:3},{label:"本科非统招",value:4},{label:"高中/中专",value:5},{label:"硕士",value:6},{label:"研究生",value:7},{label:"博士",value:8},{label:"其他",value:9}],workingStatus:{PENDING:{label:"待入职",color:"orange"},INCUMBENCY_FORMAL:{label:"正式",color:"green"},EXPERIENCE:{label:"体验",color:"pink"},LEAVE:{label:"离职",color:"gray"},INCUMBENCY_INTERNSHIP:{label:"试用期",color:"color6"}},workingStatus2:[{label:"离职",value:"LEAVE"},{label:"待入职",value:"PENDING"},{label:"正式",value:"INCUMBENCY_FORMAL"},{label:"试用期",value:"INCUMBENCY_INTERNSHIP"},{label:"体验",value:"EXPERIENCE"}],workingStatus3:{0:"LEAVE",1:"INCUMBENCY",2:"PENDING",3:"EXPERIENCE"},scope:[{label:"全部房源",value:""},{label:"分销楼盘",value:"1"},{label:"我关注的",value:"2"}],houseType:[{label:"一室",value:1},{label:"二室",value:2},{label:"三室",value:3},{label:"四室",value:4},{label:"四室以上",value:5}],averagePriceRange:["8000以下","8000-10000","10000-15000","15000-20000","20000-30000","30000以上"],commissionRange:["2%以下","2%-3%","3%-4%","4%-5%","5%-6%","6%-7%","7%-8%","8%-9%","9%以上"],areaRange:["50㎡以下","50-70㎡","70-90㎡","90-110㎡","110-130㎡","130-150㎡","150-200㎡","200㎡以上"]},rules:{required:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"不能为空";return{required:!0,trigger:["blur","change"],message:e}},number:{message:"必须为正数",pattern:/^\d*(\.\d*)?$/,trigger:"blur"},int:{message:"必须为整数",pattern:/^\d*$/,trigger:"blur"},tel:{pattern:/^1\d{10}$/,message:"目前只支持中国大陆的手机号码",trigger:"blur"},phone:{pattern:/^\d{3}-\d{8}|^\d{4}-\d{7}|^1\d{10}$/,message:"输入正确手机或座机号码",trigger:"blur"},tel2:{pattern:/^(1\d{10}|1\d{6}\*{4}|1\d{2}\*{4}\d{4})$/,message:"目前只支持中国大陆的手机号码",trigger:"blur"},m0m29:{message:"范围0-99整数",pattern:/^\d{0,2}$/,trigger:"blur"},m0m29p2:{message:"范围0-99.99,仅保留两位小数",pattern:/^\d{0,2}?(\.\d{0,2})?$/,trigger:"blur"},m0m69:{message:"范围0-999999整数",pattern:/^\d{0,6}$/,trigger:"blur"},m0m69p2:{message:"范围0-999999.99,仅保留两位小数",pattern:/^\d{0,6}?(\.\d{0,2})?$/,trigger:"blur"},m0m89p2:{message:"范围0-99999999.99,仅保留两位小数",pattern:/^\d{0,8}?(\.\d{0,2})?$/,trigger:"blur"},m0m100p2:{message:"范围0-100.00,仅保留两位小数",pattern:/^(\d|[1-9]\d|100)(\.\d{1,2})?$/,trigger:"blur"},dnl3:{message:"1-6位字母或者数字",pattern:/^[a-zA-Z0-9]{1,3}$/,trigger:"blur"},dnl6:{message:"1-6位字母或者数字",pattern:/^[a-zA-Z0-9]{1,3}$/,trigger:"blur"},d6:{message:"请输入6位验证码",pattern:/^\d{6}$/,trigger:"blur"},idNum:{message:"身份证号格式不对",pattern:/^[1-9]\d{5}(18|19|20|(3\d))\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/,trigger:"blur"},bankNum:{message:"银行卡号格式不对",pattern:/^([1-9]{1})([\d\s]{14,24})$/,trigger:"blur"}}};l["a"]=t}}]);