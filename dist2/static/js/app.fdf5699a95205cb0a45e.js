webpackJsonp([1],{"7r9Y":function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("xd7I"),n={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("router-view"),t._v(" "),s("footer",[s("router-link",{staticClass:"home",attrs:{"active-class":"homeActive",to:"/home"}},[s("dl",[s("dt",[s("span")]),s("dd",[t._v("首页")])])]),t._v(" "),s("router-link",{staticClass:"market",attrs:{"active-class":"marketActive",to:"/market"}},[s("dl",[s("dt",[s("span")]),s("dd",[t._v("闪送超市")])])]),t._v(" "),s("router-link",{staticClass:"cart",attrs:{"active-class":"cartActive",to:"/cart"}},[s("dl",[s("dt",[s("span")]),s("dd",[t._v("购物车")])])]),t._v(" "),s("router-link",{staticClass:"mine",attrs:{"active-class":"mineActive",to:"/mine"}},[s("dl",[s("dt",[s("span")]),s("dd",[t._v("我的")])])])],1)],1)},staticRenderFns:[]};var i=s("C7Lr")({name:"App"},n,!1,function(t){s("SdqK")},"data-v-2940ff8e",null).exports,r=s("aozt"),o=s.n(r),c=s("4DWU"),l=s.n(c),_=(s("epTE"),s("3XdE")),d={name:"Home",methods:{func:function(){console.log("--------------")},jump:function(t){this.$router.push({path:"/home/"+t,query:{a:1}})}},data:function(){return{main_wheels:[],main_navs:[],main_mustbuys:[],main_shops:[],main_shows:[]}},created:function(){},mounted:function(){var t=this;this.axios.get("/api/goods/home/").then(function(e){var s=e.data;if(console.log(s),200==s.code){var a=s.data;t.main_wheels=a.main_wheels,t.main_navs=a.main_navs,t.main_mustbuys=a.main_mustbuys,t.main_shops=a.main_shops,t.main_shows=a.main_shows}},function(t){console.log(t)})},updated:function(){new Swiper("#swiperMenu",{slidesPerView:3})}},u={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"home"}},[s("h3",{staticClass:"header"},[t._v("首页")]),t._v(" "),s("div",{staticClass:"block"},[s("el-carousel",{attrs:{height:"150px","indicator-position":"none"}},t._l(t.main_wheels,function(t){return s("el-carousel-item",{key:t.id},[s("img",{attrs:{src:t.img,alt:""}})])}),1)],1),t._v(" "),s("div",{staticClass:"topMenu"},[s("nav",[s("ul",t._l(t.main_navs,function(e){return s("li",{key:e.id},[s("img",{attrs:{src:e.img,alt:e.name}}),t._v(" "),s("span",[t._v(t._s(e.name))])])}),0)])]),t._v(" "),s("div",{staticClass:"swiper-container",attrs:{id:"swiperMenu"}},[s("ul",{staticClass:"swiper-wrapper"},t._l(t.main_mustbuys,function(t){return s("li",{key:t.id,staticClass:"swiper-slide"},[s("img",{attrs:{src:t.img,alt:t.name}})])}),0)]),t._v(" "),s("div",{staticClass:"shop_container"},[s("h2",[s("img",{attrs:{src:t.main_shops.length?t.main_shops[0].img:""}})]),t._v(" "),s("fieldset",t._l(t.main_shops.slice(1,3),function(t){return s("a",{key:t.id,attrs:{href:"#"}},[s("img",{attrs:{src:t.img,alt:t.name}})])}),0),t._v(" "),s("ul",t._l(t.main_shops.slice(3,7),function(e){return s("li",{key:e.id},[s("img",{attrs:{src:e.img,alt:e.name}}),t._v(" "),s("span",[t._v(t._s(e.name))])])}),0),t._v(" "),s("ol",t._l(t.main_shops.slice(7),function(t){return s("li",{key:t.id},[s("a",{attrs:{href:"#"}},[s("img",{attrs:{src:t.img,alt:t.name}})])])}),0)]),t._v(" "),s("ul",t._l(t.main_shows,function(e){return s("li",{key:e.id,staticClass:"mainInfo"},[s("section",[s("h3",[t._v(t._s(e.name)+"\n                    "),s("a",{attrs:{href:"#"}},[t._v("更多>")]),t._v(" "),s("span")]),t._v(" "),s("div",[s("a",{attrs:{href:"#"}},[s("img",{attrs:{src:e.img,alt:e.name}})])]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#"}},[s("img",{attrs:{src:e.img1,alt:e.longname1}}),t._v(" "),s("p",{staticClass:"description"},[t._v(t._s(e.longname1))]),t._v(" "),s("span",[t._v(t._s(e.price1))]),t._v(" "),s("s",[t._v(t._s(e.marketprice1))])]),t._v(" "),t._m(0,!0)]),t._v(" "),s("li",[s("a",{attrs:{href:"#"}},[s("img",{attrs:{src:e.img2,alt:e.longname2}}),t._v(" "),s("p",{staticClass:"description"},[t._v(t._s(e.longname2))]),t._v(" "),s("span",[t._v(t._s(e.price2))]),t._v(" "),s("s",[t._v(t._s(e.marketprice2))])]),t._v(" "),t._m(1,!0)]),t._v(" "),s("li",[s("a",{attrs:{href:"#"}},[s("img",{attrs:{src:e.img3,alt:e.longname3}}),t._v(" "),s("p",{staticClass:"description"},[t._v(t._s(e.longname3))]),t._v(" "),s("span",[t._v(t._s(e.price3))]),t._v(" "),s("s",[t._v(t._s(e.marketprice3))])]),t._v(" "),t._m(2,!0)])])])])}),0)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("button",[e("span",[this._v("+")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("button",[e("span",[this._v("+")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("button",[e("span",[this._v("+")])])}]};var p=s("C7Lr")(d,u,!1,function(t){s("dFCW")},"data-v-15fea932",null).exports,v=s("4YfN"),m=s.n(v),h={name:"Market",methods:{fetchMarket:function(){var t=this,e={typeid:this.typeid,childcid:this.childcid,order_rule:this.order_rule};this.axios.get("/api/goods/market/",{params:e}).then(function(e){var s=e.data;if(console.log(s.data.goods_list),200==s.code){var a=s.data;t.goods_list=a.goods_list,t.order_rule_list=a.order_rule_list,t.foodtype_childname_list=a.foodtype_childname_list}})},fetchTypeMark:function(t){this.childcid=t.child_value,this.fetchMarket(),this.toggleTypeModal()},fetchRuleMark:function(t){this.order_rule=t.order_value,this.fetchMarket(),this.toggleRuleModal()},selected:function(t){this.typeid=t.typeid,this.childcid="0",this.order_rule="0",this.fetchMarket()},toggleTypeModal:function(){this.typeVisiable=!this.typeVisiable,this.ruleVisiable=!1},toggleRuleModal:function(){this.ruleVisiable=!this.ruleVisiable,this.typeVisiable=!1},subShopping:function(t){console.log(t)},addShopping:function(t){var e=this,s={token:this.token,goodsid:t.id};console.log(this.token),this.axios.post("/api/cart/cart/add_cart/",m()({},s)).then(function(t){var s=t.data;console.log(s),200==s.code?e.$message({type:"success",message:s.msg}):e.$message({type:"error",message:s.msg})})}},data:function(){return{foodtypes:[],goods_list:[],order_rule_list:[],foodtype_childname_list:[],typeVisiable:!1,ruleVisiable:!1,typeid:"104749",order_rule:"0",childcid:"0",token:localStorage.getItem("axf_token")}},mounted:function(){var t=this;this.axios.get("/api/goods/foodtype/").then(function(e){var s=e.data;if(console.log(s),200==s.code){var a=s.data;t.foodtypes=a,t.typeid=a[0].typeid}}),this.fetchMarket()}},f={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"market"}},[s("h3",{staticClass:"header"},[t._v("闪送超市")]),t._v(" "),s("aside",[s("ul",t._l(t.foodtypes,function(e){return s("li",{key:e.typeid,on:{click:function(s){return t.selected(e)}}},[s("a",[t._v(t._s(e.typename))]),t._v(" "),s("span",{directives:[{name:"show",rawName:"v-show",value:t.typeid==e.typeid,expression:"typeid == item.typeid"}],staticClass:"yellowSlide"})])}),0)]),t._v(" "),s("section",[s("nav",[s("ul",[s("li",{attrs:{id:"all_types"},on:{click:function(e){return t.toggleTypeModal()}}},[t._m(0)]),t._v(" "),s("li",{attrs:{id:"sort_rule"},on:{click:function(e){return t.toggleRuleModal()}}},[t._m(1)])])]),t._v(" "),s("menu",[s("ul",t._l(t.goods_list,function(e){return s("li",{key:e.id},[s("a",{attrs:{href:"#"}},[s("img",{attrs:{src:e.productimg,alt:e.productlongname}}),t._v(" "),s("div",{staticClass:"shoppingInfo"},[s("h6",[t._v(t._s(e.productlongname))]),t._v(" "),t._m(2,!0),t._v(" "),s("p",{staticClass:"unit"},[t._v(t._s(e.specifics))]),t._v(" "),s("p",{staticClass:"price"},[s("span",[t._v(t._s(e.price))]),t._v(" "),s("s",[t._v(t._s(e.marketprice))])])])]),t._v(" "),s("section",[s("el-button",{staticClass:"steps",attrs:{icon:"el-icon-minus",circle:"",disabled:""},on:{click:function(s){return t.subShopping(e)}}}),t._v(" "),s("span",[t._v(t._s(e.productnum))]),t._v(" "),s("el-button",{staticClass:"steps",attrs:{icon:"el-icon-plus",circle:"",disabled:!1},on:{click:function(s){return t.addShopping(e)}}})],1)])}),0),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.typeVisiable,expression:"typeVisiable"}],attrs:{id:"all_types_container"}},[s("div",t._l(t.foodtype_childname_list,function(e){return s("a",{key:e.id,on:{click:function(s){return t.fetchTypeMark(e)}}},[s("button",{class:t.childcid==e.child_value?"btn btn-success":"btn btn-default"},[t._v(t._s(e.child_name))])])}),0)]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.ruleVisiable,expression:"ruleVisiable"}],attrs:{id:"sort_rule_container"}},[s("div",t._l(t.order_rule_list,function(e){return s("a",{key:e.id,on:{click:function(s){return t.fetchRuleMark(e)}}},[s("button",{class:t.order_rule==e.order_value?"btn btn-success":"btn btn-default"},[t._v(t._s(e.order_name))])])}),0)])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("span",[this._v("全部分类 "),e("span",{staticClass:"glyphicon glyphicon-chevron-down"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",[this._v("综合排序 "),e("span",{staticClass:"glyphicon glyphicon-chevron-down"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"detailTag"},[e("span",[this._v("精选")]),this._v(" "),e("span")])}]};var g=s("C7Lr")(h,f,!1,function(t){s("XDTI")},"data-v-da5766c6",null).exports,y={name:"Cart",methods:{change_select:function(t){var e=this,s={token:this.token};this.axios({url:"/api/cart/cart/"+t.id+"/",method:"patch",data:s}).then(function(t){var s=t.data;console.log(s),200===s.code?e.$router.go(0):e.$message({type:"error",message:s.msg})})},change_all_select:function(){var t=this,e={token:this.token};this.axios({url:"/api/cart/cart/change_select/",method:"patch",data:e}).then(function(e){var s=e.data;console.log(s),200===s.code?t.$router.go(0):t.$message({type:"error",message:s.msg})})},jump:function(t){this.$router.push({path:"/home/"+t,query:{a:1}})},createOrder:function(){var t=this,e=localStorage.getItem("axf_token");this.axios.post("/api/orders/orders/?token="+e).then(function(e){var s=e.data;200==e.data.code?(t.$message({type:"success",message:"下单成功"}),t.$router.push({path:"/mine"})):t.$message({type:"error",message:s.msg})})},addShopping:function(t){var e=this,s={token:this.token,goodsid:t.id};this.axios.post("/api/cart/cart/add_cart/",m()({},s)).then(function(t){var s=t.data;console.log(s),200==s.code?(e.$message({type:"success",message:s.msg}),e.$router.go(0),console.log(data)):e.$message({type:"error",message:s.msg})})},subShopping:function(t){var e=this,s={token:this.token,goodsid:t.id};this.axios.post("/api/cart/cart/sub_cart/",m()({},s)).then(function(t){var s=t.data;console.log(s),200==s.code?(e.$message({type:"success",message:s.msg}),e.$router.go(0),console.log(data)):e.$message({type:"error",message:s.msg})})}},data:function(){return{carts:[],token:localStorage.getItem("axf_token"),total_price:0}},mounted:function(){var t=this,e={token:this.token};this.axios.get("/api/cart/cart/",{params:e}).then(function(e){var s=e.data;if(console.log(s),200==s.code){var a=s.data;t.carts=a.carts,t.total_price=a.total_price}})}},k={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"cart"}},[s("h3",[t._v("购物车")]),t._v(" "),s("div",{staticClass:"full"},[s("section",[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),s("ul",t._l(t.carts,function(e){return s("li",{key:e.id,staticClass:"menuList"},[s("div",{staticClass:"confirm"},[s("span",{on:{click:function(s){return t.change_select(e)}}},[e.c_is_select?s("span",[t._v("√")]):s("span")])]),t._v(" "),s("a",{attrs:{href:"#"}},[s("img",{attrs:{src:e.c_goods.productimg,alt:e.c_goods.productlongname}}),t._v(" "),s("p",[t._v(t._s(e.c_goods.productlongname))]),t._v(" "),s("p",{staticClass:"presentPrice"},[t._v(t._s(e.c_goods.price))])]),t._v(" "),s("section",[s("button",{staticClass:"subShopping",on:{click:function(s){return t.subShopping(e.c_goods)}}},[t._v("-")]),t._v(" "),s("span",[t._v(t._s(e.c_goods_num))]),t._v(" "),s("button",{staticClass:"addShopping",on:{click:function(s){return t.addShopping(e.c_goods)}}},[t._v("+")])])])}),0),t._v(" "),s("div",{staticClass:"payTheBill"},[s("div",{staticClass:"all_select"},[s("span",{on:{click:function(e){return t.change_all_select()}}},[s("span",[t._v("√")])])]),t._v(" "),s("p",[s("span",[t._v("全选")]),t._v(" "),s("span",[t._v("共计:")]),t._v(" "),s("span",{attrs:{id:"total_price"}},[t._v(t._s(t.total_price))])]),t._v(" "),s("span",{attrs:{id:"make_order"},on:{click:function(e){return t.createOrder()}}},[t._v("下单")])])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("收  货  人: 童大宝")]),this._v(" "),e("li",[this._v("电       话: 12345678912")]),this._v(" "),e("li",[this._v("地       址: 大宝的家庭住址，不告诉你")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"bill"},[e("p",[this._v("闪送超市")]),this._v(" "),e("p",[this._v("0元起送满30免运费22:00前可送达")]),this._v(" "),e("a",{attrs:{href:"#"}},[this._v("凑单专区")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"delivery"},[e("span",[this._v("收货时间")]),this._v(" "),e("span",[this._v("一小时内送达")]),this._v(" "),e("a",{attrs:{href:"#"}},[this._v("可预订>")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"delivery"},[e("span",[this._v("收获备注")]),this._v(" "),e("input",{attrs:{type:"text",placeholder:"可输入100字以内的特殊要求"}})])}]};var C=s("C7Lr")(y,k,!1,function(t){s("oNQ5")},"data-v-4fa9373a",null).exports,w={name:"Market",methods:{jump:function(t){this.$router.push({path:"/"+t})},logout:function(){localStorage.removeItem("axf_token"),this.$router.push({path:"/login"})}},data:function(){return{user_info:"",token:localStorage.getItem("axf_token"),orders_not_pay_num:0,orders_not_send_num:0}},mounted:function(){var t=this;this.axios.get("/api/user/auth/?token="+this.token).then(function(e){if(console.log(e.data),200==e.data.code){var s=e.data.data;t.user_info=s.user_info,t.orders_not_pay_num=s.orders_not_pay_num,t.orders_not_send_num=s.orders_not_send_num}},function(t){})}},b={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"mine"}},[s("div",{staticClass:"fixed"},[s("span",[s("span",{staticClass:"glyphicon glyphicon-user"})]),t._v(" "),t.token?s("p",[t._v(t._s(t.user_info.u_username))]):s("p",{attrs:{id:"not_login"},on:{click:function(e){return t.jump("login")}}},[t._v("未登录")]),t._v(" "),t._m(0),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:!t.token,expression:"!token"}],attrs:{id:"regis"},on:{click:function(e){return t.jump("register")}}},[t._v("注册")]),t._v(" "),t._m(1)]),t._v(" "),s("div",{staticClass:"mine"},[s("p",[s("span",[t._v("全部订单")]),t._v(" "),s("router-link",{attrs:{to:"/orders"}},[t._v("全部订单")])],1),t._v(" "),s("nav",{attrs:{id:"nav"}},[s("ul",[s("li",{attrs:{id:"not_pay"}},[s("span",{directives:[{name:"show",rawName:"v-show",value:!0,expression:"true"}],staticClass:"badge"},[t._v("\n                      "+t._s(t.orders_not_pay_num)+"\n                    ")]),t._v(" "),t._m(2)]),t._v(" "),s("li",[s("span",{directives:[{name:"show",rawName:"v-show",value:!0,expression:"true"}],staticClass:"badge"},[t._v("\n                      "+t._s(t.orders_not_send_num)+"\n                    ")]),t._v(" "),t._m(3)]),t._v(" "),t._m(4),t._v(" "),t._m(5)])]),t._v(" "),t._m(6),t._v(" "),s("p",{directives:[{name:"show",rawName:"v-show",value:t.token,expression:"token"}]},[s("a",{on:{click:function(e){return t.logout()}}},[t._v("退出")])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("span",{staticClass:"glyphicon glyphicon-fire"}),this._v(" "),e("span",[this._v("等级")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("span",{staticClass:"glyphicon glyphicon-heart"}),this._v(" "),e("span",[this._v("商品收藏")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("dl",[e("dt",[e("span",{staticClass:"glyphicon glyphicon-usd"})]),this._v(" "),e("dd",[this._v("待付款")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("dl",[e("dt",[e("span",{staticClass:"glyphicon glyphicon-envelope"})]),this._v(" "),e("dd",[this._v("待收货")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("dl",[e("dt",[e("span",{staticClass:"glyphicon glyphicon-pencil"})]),this._v(" "),e("dd",[this._v("待评价")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("dl",[e("dt",[e("span",{staticClass:"glyphicon glyphicon-retweet"})]),this._v(" "),e("dd",[this._v("退款/售后")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("menu",[s("ul",[s("li",[s("dl",[s("dt",[s("span",{staticClass:"glyphicon glyphicon-bullhorn"})]),t._v(" "),s("dd",[t._v("积分商城")])])]),t._v(" "),s("li",[s("dl",[s("dt",[s("span",{staticClass:"glyphicon glyphicon-credit-card"})]),t._v(" "),s("dd",[t._v("优惠卷")])])]),t._v(" "),s("li",[s("dl",[s("dt",[s("span",{staticClass:"glyphicon glyphicon-import"})]),t._v(" "),s("dd",[t._v("收货地址")])])]),t._v(" "),s("li",[s("dl",[s("dt",[s("span",{staticClass:"glyphicon glyphicon-phone-alt"})]),t._v(" "),s("dd",[t._v("客服反馈")])])]),t._v(" "),s("li",[s("dl",[s("dt",[s("span",{staticClass:"glyphicon glyphicon-asterisk"})]),t._v(" "),s("dd",[t._v("关于我们")])])])])])}]};var x=s("C7Lr")(w,b,!1,function(t){s("quiB")},"data-v-543bc828",null).exports,$={name:"reigster",methods:{back:function(){this.$router.back()},jump:function(t){this.$router.push({path:"/"+t})},reigst:function(){var t=this,e={u_username:this.userName,u_password:this.password,u_password2:this.password2,u_email:this.email};this.axios.post("/api/user/auth/register/",m()({},e)).then(function(e){console.log(e.data);var s=e.data;200==s.code?s.data.user_id&&t.$router.push({path:"/login"}):t.$message({type:"error",message:s.msg})})},func:function(){return!1}},data:function(){return{userName:"",email:"",password:"",password2:""}},mounted:function(){}},E={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("header",[s("span",{staticClass:"glyphicon glyphicon-chevron-left",on:{click:function(e){return t.back()}}})]),t._v(" "),s("div",{staticClass:"container"},[s("div",[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"username_input"}},[t._v("用户名")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.userName,expression:"userName"}],staticClass:"form-control",attrs:{name:"username",type:"text",id:"username_input",placeholder:"请输入用户名"},domProps:{value:t.userName},on:{input:function(e){e.target.composing||(t.userName=e.target.value)}}}),t._v(" "),s("span",{attrs:{id:"username_info"}})]),t._v(" "),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"email_input"}},[t._v("邮箱")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control",attrs:{name:"email",type:"text",id:"email_input",placeholder:"请输入邮箱"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),t._v(" "),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"password_input"}},[t._v("密码")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",attrs:{name:"password",type:"password",id:"password_input",placeholder:"请输入密码"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),t._v(" "),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"password_confirm_input"}},[t._v("确认密码")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.password2,expression:"password2"}],staticClass:"form-control",attrs:{type:"password",id:"password_confirm_input",placeholder:"请再次输入密码"},domProps:{value:t.password2},on:{input:function(e){e.target.composing||(t.password2=e.target.value)}}})]),t._v(" "),s("button",{staticClass:"btn btn-success btn-block",on:{click:function(e){return t.reigst()}}},[t._v("注册")])])])])},staticRenderFns:[]};var N=s("C7Lr")($,E,!1,function(t){s("yfSM")},"data-v-dfab37c2",null).exports,S={name:"login",methods:{back:function(){this.$router.back()},login:function(){var t=this,e={u_username:this.userName,u_password:this.password};this.axios.post("/api/user/auth/login/",m()({},e)).then(function(e){if(console.log(e.data.data.token),200==e.data.code){t.$message({type:"success",message:"登录成功"});var s=e.data.data.token;console.log(s),localStorage.setItem("axf_token",s),t.$router.push({path:"/"})}else t.$message({type:"error",message:e.data.msg})})}},data:function(){return{userName:"",password:""}},mounted:function(){}},M={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("header",[s("span",{staticClass:"glyphicon glyphicon-chevron-left",on:{click:function(e){return t.back()}}})]),t._v(" "),s("div",{staticClass:"container"},[s("form",{attrs:{method:"post"},on:{submit:function(t){t.preventDefault()}}},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"username_input"}},[t._v("用户名")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.userName,expression:"userName"}],staticClass:"form-control",attrs:{name:"username",type:"text",id:"username_input",placeholder:"用户名/邮箱"},domProps:{value:t.userName},on:{input:function(e){e.target.composing||(t.userName=e.target.value)}}})]),t._v(" "),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"password_input"}},[t._v("密码")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",attrs:{name:"password",type:"password",id:"password_input",placeholder:"请输入密码"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),t._v(" "),s("button",{staticClass:"btn btn-success btn-block",attrs:{type:"submit"},on:{click:function(e){return t.login()}}},[t._v("登录")])])])])},staticRenderFns:[]};var I=s("C7Lr")(S,M,!1,function(t){s("7r9Y")},"data-v-41703dba",null).exports,R={name:"List",data:function(){return{order_goods:"",order_all:!0,order_pay:"",order_send:""}},mounted:function(){var t=this,e={token:localStorage.getItem("axf_token")};this.axios.get("/api/orders/orders/",{params:e}).then(function(e){var s=e.data;200==s.code&&(console.log(s.data[0].order_goods_info),t.order_goods=s.data)}).catch(function(t){console.log(t)})},methods:{order_select:function(t){var e=this;if("all"==t){var s={o_status:"all",token:localStorage.getItem("axf_token")};this.order_all=!0,this.order_pay=!1,this.order_send=!1}else if("not_pay"==t){s={o_status:"not_pay",token:localStorage.getItem("axf_token")};this.order_all=!1,this.order_pay=!0,this.order_send=!1}else{s={o_status:"not_send",token:localStorage.getItem("axf_token")};this.order_all=!1,this.order_pay=!1,this.order_send=!0}this.axios.get("/api/orders/orders/",{params:s}).then(function(t){console.log(t.data);var s=t.data;e.order_goods=s.data})}}},V={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("label",{staticClass:"list_order",attrs:{id:"info_f304ba748b4cc1faa1cdc419651b5c17_0_0__1_0"}}),t._v(" "),s("div",{staticClass:"viewport"},[t._m(0),t._v(" "),s("nav",{staticClass:"ol_select_bar"},[s("ul",[s("a",{class:{hover:t.order_all},on:{click:function(e){return t.order_select("all")}}},[s("li",[t._v("全部")])]),t._v(" "),s("a",{class:{hover:t.order_pay},on:{click:function(e){return t.order_select("not_pay")}}},[s("li",[t._v("待付款")])]),t._v(" "),s("a",{class:{hover:t.order_send},on:{click:function(e){return t.order_select("not_send")}}},[s("li",[t._v("待收货")])])])]),t._v(" "),t._l(t.order_goods,function(e){return s("div",{staticClass:"block"},[s("div",{staticClass:"order_list"},[s("div",{staticClass:"cart_item prd_ebook"},[t._l(e.order_goods_info,function(e){return s("a",{attrs:{onclick:""}},[s("div",{},[s("img",{staticClass:"fl pro_pic",attrs:{src:e.o_goods.productimg,alt:""}})]),t._v(" "),s("div",{staticClass:"detail"},[t._m(1,!0),t._v(" "),s("p",{staticClass:"fl prd_tit"},[t._v("\n                "+t._s(e.o_goods.productname)+"\n              ")])])])}),t._v(" "),s("div",{staticClass:"detail2"},[s("span",[t._v("　总价：")]),s("span",{staticClass:"order_price"},[t._v("￥"+t._s(e.o_price))])]),t._v(" "),s("div",{staticClass:"detail3"},[e.o_status?s("a",[t._v("确认收货")]):s("a",[t._v("支付")])])],2)])])})],2)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("header",{staticClass:"navbar"},[e("div",{staticClass:"nav_main"},[e("a",[this._v("商品订单")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"fr prd_state"},[e("div",{staticClass:"prd_state_title"})])}]};var T=s("C7Lr")(R,V,!1,function(t){s("zn+j")},"data-v-78c0e804",null).exports;a.default.use(_.a);var L=new _.a({routes:[{path:"/home",name:"Home",component:p},{path:"/market",name:"Market",component:g},{path:"/cart",name:"Cart",component:C},{path:"/mine",name:"Mine",component:x},{path:"/register",name:"register",component:N},{path:"/login",name:"login",component:I},{path:"/",redirect:"/home"},{path:"/orders",component:T}]}),F=(s("kDzl"),o.a.create({baseURL:"http://47.106.78.215:8092"}));a.default.config.productionTip=!1,a.default.prototype.axios=F,a.default.use(l.a),new a.default({el:"#app",router:L,components:{App:i},template:"<App/>"})},SdqK:function(t,e){},XDTI:function(t,e){},dFCW:function(t,e){},epTE:function(t,e){},kDzl:function(t,e){},oNQ5:function(t,e){},quiB:function(t,e){},yfSM:function(t,e){},"zn+j":function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.fdf5699a95205cb0a45e.js.map