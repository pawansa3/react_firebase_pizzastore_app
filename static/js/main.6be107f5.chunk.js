(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{117:function(e,t,a){e.exports=a(226)},123:function(e,t,a){},124:function(e,t,a){},226:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(81),l=a.n(c);a(122),a(123),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var o=a(86),s=a(19),i=a(20),m=a(22),u=a(21),p=a(23),d=(a(124),r.a.createContext()),E=d.Provider,h=d.Consumer,g=a(30),f=a(33),b=a(230),v=a(231),y=a(232),N=a(27),C=function(){return r.a.createElement(v.a,{collapseOnSelect:!0,expand:"lg",bg:"",variant:"dark"},r.a.createElement(g.c,{to:"/",className:"navbar-brand"},r.a.createElement("img",{src:"images/logo.png",alt:"logo"})),r.a.createElement(v.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),r.a.createElement(v.a.Collapse,{id:"responsive-navbar-nav"},r.a.createElement(y.a,{className:"mr-auto"}),r.a.createElement(y.a,null,r.a.createElement(g.c,{to:"/cart",className:"nav-link"},r.a.createElement(N.a,{icon:"cart-arrow-down"})," ",r.a.createElement("b",null,"Go to Cart")),r.a.createElement(g.c,{to:"/contact",className:"nav-link"},r.a.createElement(N.a,{icon:"phone"}),"  ",r.a.createElement("b",null,"Contact")))))},O=a(227),z=a(228),k=function(){return r.a.createElement(O.a,null,r.a.createElement(z.a,{md:12},r.a.createElement("p",{className:"supreme"},r.a.createElement("img",{src:"images/left-line.png",alt:""})," SUPREME ",r.a.createElement("img",{src:"images/right-line.png",alt:""})),r.a.createElement("p",{className:"slogan"},"THINK PIZZA. THINK PIZZA HUT.")))},j=a(233),I=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(z.a,{md:4},r.a.createElement("img",{src:this.props.details.image,alt:"",className:"img-responsive"}),r.a.createElement(j.a,null,r.a.createElement(j.a.Item,{className:"supreme_title"},"Supreme"),r.a.createElement(j.a.Item,{className:"pizza_name"},r.a.createElement("b",null,this.props.details.name)),r.a.createElement(j.a.Item,{className:"pizza_desc"},this.props.details.desc),r.a.createElement(j.a.Item,{className:"pizza_size"},r.a.createElement("b",null,"Crust: "),this.props.details.crust," | ",r.a.createElement("b",null,"Size: "),this.props.details.size),r.a.createElement(j.a.Item,{className:"pizza_price"},r.a.createElement("b",null,this.props.details.price," "),r.a.createElement("button",{className:"btn pizza_add",onClick:function(){return e.props.addToCart(e.props.index)}}," Add to cart"))))}}]),t}(r.a.Component),w=function(e){return r.a.createElement(O.a,null,Object.keys(e.details).map(function(t){return r.a.createElement(I,{key:t,index:t,details:e.details[t],addToCart:e.addToCart})}))},x=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("hr",{className:"line"}),r.a.createElement(k,null),r.a.createElement(h,null,function(e){return r.a.createElement(w,{details:e.foodItems,addToCart:e.actions.addToCart})}),r.a.createElement("hr",{className:"line"}))}}]),t}(n.Component),S=a(229),T=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).renderCart=function(e){var t=a.props.details[e],n=a.props.cartItems[e];return t?r.a.createElement("tr",{key:e},r.a.createElement("td",null,r.a.createElement("h4",null,t.name,r.a.createElement("strong",{id:"mark-non-veg"},"\xa0\xa0")),r.a.createElement("img",{src:t.image,alt:"",style:{height:"50px"},className:"text-center img-responsive"})),r.a.createElement("td",{className:"pizza_size"},r.a.createElement("b",null,"Crust: "),t.crust," | ",r.a.createElement("b",null,"Size: "),t.size),r.a.createElement("td",null," ",r.a.createElement("div",{className:"counter"},r.a.createElement("button",{className:"counter-action decrement",onClick:function(){return a.props.changeQty(e,-1)}},r.a.createElement(N.a,{icon:"minus"})),r.a.createElement("span",{className:"counter-score"},n),r.a.createElement("button",{className:"counter-action increment",onClick:function(){return a.props.changeQty(e,1)}},r.a.createElement(N.a,{icon:"plus"})))),r.a.createElement("td",{className:"pizza_price"},"Rs. ",t.price)):null},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=Object.keys(this.props.cartItems),a=t.reduce(function(t,a){var n=e.props.details[a];return t+e.props.cartItems[a]*n.price},0);return r.a.createElement(r.a.Fragment,null,r.a.createElement(S.a,{responsive:!0,hover:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Item"),r.a.createElement("th",null,"Customize"),r.a.createElement("th",null,"Quantity"),r.a.createElement("th",null,"Price"))),r.a.createElement("tbody",null,t.map(this.renderCart))),r.a.createElement("hr",{className:"line"}),r.a.createElement(O.a,null,r.a.createElement(z.a,{md:{span:3,offset:9}},r.a.createElement("h4",{className:"order_total"},"Order Total: Rs. ",a),r.a.createElement(g.b,{to:"/checkout",className:"btn checkout"},"Checkout"))))}}]),t}(r.a.Component),A=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",{className:"supreme"},r.a.createElement("img",{src:"images/left-line.png",alt:""})," CART ",r.a.createElement("img",{src:"images/right-line.png",alt:""})),r.a.createElement(h,null,function(e){return r.a.createElement(T,{cartItems:e.cart,details:e.foodItems,changeQty:e.actions.changeQty})}))},Q=a(46),_=a.n(Q),P=a(85),R=a(116),B=a.n(R),H=a(68);a(218);var W=H.initializeApp({apiKey:"AIzaSyBg3GwybBpEekI90QogrSWXZ6ILwNagyTM",authDomain:"online-pizza-store-1.firebaseapp.com",databaseURL:"https://online-pizza-store-1.firebaseio.com",projectId:"online-pizza-store-1",storageBucket:"online-pizza-store-1.appspot.com",messagingSenderId:"2994884818"}),F=B.a.createClass(W.database()),L=function(e){return r.a.createElement("div",{className:"login"},r.a.createElement("p",{className:"textColor"},"Sign in to place order."),r.a.createElement("button",{className:"gmail",onClick:function(){return e.authenticate("Google")}},"Log In With Gmail"))},Z=a(68);a(221);var G=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={uid:null},a.authHandler=function(){var e=Object(P.a)(_.a.mark(function e(t){return _.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a.setState({uid:t.user.uid}),console.log(a.state.uid,t.user.email);case 2:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.authenticate=function(e){var t=new(Z.auth["".concat(e,"AuthProvider")]);W.auth().signInWithPopup(t).then(a.authHandler)},a.logout=Object(P.a)(_.a.mark(function e(){return _.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Z.auth().signOut();case 2:a.setState({uid:null});case 3:case"end":return e.stop()}},e)})),a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;Z.auth().onAuthStateChanged(function(t){t&&e.authHandler({user:t})})}},{key:"render",value:function(){var e=r.a.createElement("button",{onClick:this.logout},"Log Out!");return this.state.uid?r.a.createElement("div",null,r.a.createElement("p",{className:"textColor"},"You are now Logged in! Your order has been placed!"," "),e):r.a.createElement(L,{authenticate:this.authenticate})}}]),t}(r.a.Component),M=function(){return r.a.createElement("h1",{className:"error"},r.a.createElement(N.a,{icon:"exclamation-triangle",size:"5x"}),r.a.createElement("br",null)," ",r.a.createElement("br",null),r.a.createElement("p",null,"404 Error ",r.a.createElement(N.a,{icon:"exclamation"})," Page Not Found."))},U=function(){return r.a.createElement("div",null,r.a.createElement("p",{className:"textColor"},"Contact No. +91 999-999-9999"),r.a.createElement("p",{className:"textColor"},"Email Address: info@onlinepizza.com"))},D=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={foodItems:{},cart:{}},a.addToCart=function(e){var t=Object(o.a)({},a.state.cart);t[e]=t[e]+1||1,a.setState({cart:t})},a.changeQty=function(e,t){var n=Object(o.a)({},a.state.cart);n[e]=n[e]+t,n[e]<=0&&delete n[e],a.setState({cart:n})},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.foodItemsRef=F.syncState("FoodItems",{context:this,state:"foodItems"})}},{key:"componentWillUnmount",value:function(){F.removeBinding(this.foodItemsRef)}},{key:"render",value:function(){return r.a.createElement(E,{value:{foodItems:this.state.foodItems,cart:this.state.cart,actions:{addToCart:this.addToCart,changeQty:this.changeQty}}},r.a.createElement(g.a,null,r.a.createElement(b.a,null,r.a.createElement(C,null),r.a.createElement(f.c,null,r.a.createElement(f.a,{exact:!0,path:"/",component:x}),r.a.createElement(f.a,{path:"/cart",component:A}),r.a.createElement(f.a,{path:"/contact",component:U}),r.a.createElement(f.a,{path:"/checkout",component:G}),r.a.createElement(f.a,{component:M})))))}}]),t}(n.Component),K=a(45),J=a(34);a(223).config(),K.b.add(J.a,J.e,J.f,J.d,J.b,J.c),l.a.render(r.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[117,1,2]]]);
//# sourceMappingURL=main.6be107f5.chunk.js.map