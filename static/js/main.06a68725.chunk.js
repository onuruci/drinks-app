(this["webpackJsonpdrinks-app"]=this["webpackJsonpdrinks-app"]||[]).push([[0],{51:function(t,e,n){},57:function(t,e,n){},64:function(t,e,n){"use strict";n.r(e);var r=n(0),i=n.n(r),c=n(22),s=n.n(c),a=(n(51),n(87)),o=n(89),l=n(90),u=n(91),j=n(2),d=Object(a.a)((function(t){return{root:{flexGrow:1},menuButton:{marginRight:t.spacing(2)},title:{flexGrow:1}}}));function h(){var t=d();return Object(j.jsx)("div",{className:t.root,children:Object(j.jsx)(o.a,{position:"static",children:Object(j.jsx)(l.a,{children:Object(j.jsx)(u.a,{variant:"h4",className:t.title,children:"Cocktail Finder"})})})})}var b=n(11),g=n(67),x=n(93),f=n(92),p=Object(a.a)({root:{flexGrow:1}});function O(){var t=p(),e=i.a.useState(0),n=Object(b.a)(e,2),r=n[0],c=n[1];return Object(j.jsx)(g.a,{className:t.root,children:Object(j.jsxs)(x.a,{value:r,onChange:function(t,e){c(e)},indicatorColor:"primary",textColor:"primary",centered:!0,children:[Object(j.jsx)(f.a,{href:"/",label:"Get a Random Cocktail"}),Object(j.jsx)(f.a,{href:"/drinkbyname",label:"Find Cocktails by Name"})]})})}var m=n(35),k=n(7),v=n(17),y=n.n(v),w=n(20);var S=function(t){var e=t.item,n=t.drinkImage,r=t.ingredients,i={font:"Roboto",justifyContent:"center",alignItems:"center",width:"100%",alignSelf:"center",textAlign:"center"},c={width:"50%"};return Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{style:i,children:Object(j.jsx)("h1",{style:i,children:e})}),Object(j.jsx)("div",{style:{alignSelf:"center",height:"auto",justifyContent:"center",alignItems:"center",textAlign:"center",display:"block",margin:"auto",width:"100%"},children:Object(j.jsx)("img",{src:n,alt:e,style:{width:"25%",height:"auto"}})}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)("div",{style:{font:"Roboto",justifyContent:"center",alignItems:"center",width:"80%",alignSelf:"center",textAlign:"center",display:"flex",backgroundColor:"lightblue",marginLeft:"auto",marginRight:"auto",flexWrap:"wrap"},children:r.map((function(t){return Object(j.jsxs)("div",{style:c,children:[Object(j.jsx)("h4",{children:t.ms}),"    ",Object(j.jsx)("h2",{children:t.dr})]},t.id)}))})]})};var I=function(t){var e=t.instructions;return Object(j.jsxs)("div",{style:{font:"Roboto",justifyContent:"center",width:"80%",alignSelf:"center",marginLeft:"auto",marginRight:"auto",marginTop:"30px",alignItems:"center"},children:[Object(j.jsx)("h1",{style:{marginLeft:"auto",marginRight:"auto",textAlign:"center"},children:"Recipe"}),Object(j.jsx)("br",{}),Object(j.jsx)("h4",{children:e})]})};var C=function(){var t=Object(r.useState)(""),e=Object(b.a)(t,2),n=e[0],i=e[1],c=Object(r.useState)(""),s=Object(b.a)(c,2),a=s[0],o=s[1],l=Object(r.useState)([]),u=Object(b.a)(l,2),d=u[0],h=u[1],g=Object(r.useState)(""),x=Object(b.a)(g,2),f=x[0],p=x[1];function O(t){return new Promise((function(e){return setTimeout(e,t)}))}function m(){return(m=Object(w.a)(y.a.mark((function t(){var e,n,r,c;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i("Loading.."),t.prev=1,t.next=4,fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php");case 4:return e=t.sent,t.next=7,e.json();case 7:return n=t.sent,console.log(n),t.next=11,O(500);case 11:for(i(n.drinks[0].strDrink),o(n.drinks[0].strDrinkThumb),console.log(n.drinks[0].strInstructions),p(n.drinks[0].strInstructions),r=1,c=[];null!==n.drinks[0]["strIngredient"+r.toString()];)c.push({id:r,dr:n.drinks[0]["strIngredient"+r.toString()],ms:n.drinks[0]["strMeasure"+r.toString()]}),r++;h([].concat(c)),console.log(c),t.next=25;break;case 22:t.prev=22,t.t0=t.catch(1),i("Error");case 25:case"end":return t.stop()}}),t,null,[[1,22]])})))).apply(this,arguments)}return Object(r.useEffect)((function(){!function(){m.apply(this,arguments)}()}),[]),Object(j.jsxs)("div",{children:[Object(j.jsx)(S,{item:n,drinkImage:a,ingredients:d}),Object(j.jsx)(I,{instructions:f})]})};n(57);var D=function(t){var e=t.drinkId,n=t.name,r=t.drinkImage,i="/drink/"+e;return Object(j.jsx)(m.b,{to:i,style:{textDecoration:"none"},children:Object(j.jsxs)("div",{className:"drinkbox",style:{marginLeft:"5%",marginTop:"15px",paddingLeft:"auto",paddingRight:"auto"},children:[Object(j.jsx)("h1",{children:n}),Object(j.jsx)("div",{style:{alignSelf:"center",height:"350px",justifyContent:"center",alignItems:"center",textAlign:"center",marginRight:"12px",width:"350px",fontsize:"auto"},children:Object(j.jsx)("img",{src:r,alt:n,style:{width:"250px",height:"auto",marginLeft:"auto",marginRight:"auto"}})})]})})};var R=function(t){var e,n=t.drinks;return""!==n&&null!==n?(console.log(n[0].strDrink),e=Object(j.jsxs)("div",{style:{alignSelf:"center",height:"auto",justifyContent:"center",alignItems:"center",textAlign:"center",display:"flex",flexWrap:"wrap",margin:"auto"},children:[" ",n.map((function(t){return Object(j.jsx)(D,{drinkId:t.idDrink,name:t.strDrink,drinkImage:t.strDrinkThumb},t.idDrink)}))," "]})):(console.log("main"),console.log(n),e=Object(j.jsx)("h1",{children:"No Drink Found"})),Object(j.jsx)("div",{children:e})},L=n(42),T=n.n(L);var F=function(){var t=Object(r.useState)(""),e=Object(b.a)(t,2),n=e[0],i=e[1],c=Object(r.useState)(""),s=Object(b.a)(c,2),a=s[0],o=s[1],l={marginLeft:"auto",marginRight:"auto",marginTop:"3%",font:"Roboto",justifyContent:"center",alignItems:"center",width:"100%",alignSelf:"center",textAlign:"center"},u=Object(r.useState)(Object(j.jsx)("div",{style:l,children:Object(j.jsx)("h1",{children:"Search for Drinks"})})),d=Object(b.a)(u,2),h=d[0],g=d[1];function x(t){return new Promise((function(e){return setTimeout(e,t)}))}function f(t){return p.apply(this,arguments)}function p(){return(p=Object(w.a)(y.a.mark((function t(e){var r,i;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,g(Object(j.jsx)("div",{style:l,children:Object(j.jsx)("h1",{children:"Loading.."})})),console.log(n),t.next=5,fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s="+e);case 5:return r=t.sent,t.next=8,r.json();case 8:return i=t.sent,console.log(i),t.next=12,x(300);case 12:o(i.drinks),console.log(a),g(Object(j.jsx)(R,{drinks:i.drinks})),t.next=22;break;case 17:t.prev=17,t.t0=t.catch(0),console.log(t.t0),o(""),g(Object(j.jsx)("div",{style:l,children:Object(j.jsx)("h1",{children:"No Drink Found"})}));case 22:case"end":return t.stop()}}),t,null,[[0,17]])})))).apply(this,arguments)}function O(){return(O=Object(w.a)(y.a.mark((function t(){return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(n),t.next=3,f(n);case 3:i("");case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(r.useEffect)((function(){f("a")}),[]),Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{style:l,children:[Object(j.jsx)("input",{type:"text",value:n,onChange:function(t){i(t.target.value)},placeholder:"Search"}),Object(j.jsx)(T.a,{onClick:function(){return O.apply(this,arguments)},children:Object(j.jsx)("input",{type:"submit"})})]}),h]})};var A=function(t){var e=t.match,n=(t.location,Object(r.useState)("")),i=Object(b.a)(n,2),c=i[0],s=i[1],a=Object(r.useState)(""),o=Object(b.a)(a,2),l=o[0],u=o[1],d=Object(r.useState)([]),h=Object(b.a)(d,2),g=h[0],x=h[1],f=Object(r.useState)(""),p=Object(b.a)(f,2),O=p[0],m=p[1],k=e.params.drinkId;function v(t){return new Promise((function(e){return setTimeout(e,t)}))}function C(){return(C=Object(w.a)(y.a.mark((function t(){var e,n,r,i;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s("Loading.."),t.prev=1,t.next=4,fetch("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i="+k);case 4:return e=t.sent,t.next=7,e.json();case 7:return n=t.sent,console.log(n),t.next=11,v(500);case 11:for(s(n.drinks[0].strDrink),u(n.drinks[0].strDrinkThumb),console.log(n.drinks[0].strInstructions),m(n.drinks[0].strInstructions),r=1,i=[];null!==n.drinks[0]["strIngredient"+r.toString()];)i.push({id:r,dr:n.drinks[0]["strIngredient"+r.toString()],ms:n.drinks[0]["strMeasure"+r.toString()]}),r++;x([].concat(i)),t.next=24;break;case 21:t.prev=21,t.t0=t.catch(1),s("Error");case 24:case"end":return t.stop()}}),t,null,[[1,21]])})))).apply(this,arguments)}return Object(r.useEffect)((function(){!function(){C.apply(this,arguments)}()}),[]),Object(j.jsxs)("div",{children:[Object(j.jsx)(S,{item:c,drinkImage:l,ingredients:g}),Object(j.jsx)(I,{instructions:O})]})};var N=function(){return Object(j.jsxs)(m.a,{children:[Object(j.jsx)(h,{}),Object(j.jsx)(O,{}),Object(j.jsxs)(k.c,{children:[Object(j.jsx)(k.a,{path:"/drinks-app/",component:C}),Object(j.jsx)(k.a,{exact:!0,path:"/drinkbyname",component:F}),Object(j.jsx)(k.a,{exact:!0,path:"/drink/:drinkId",component:A})]})]})},E=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,95)).then((function(e){var n=e.getCLS,r=e.getFID,i=e.getFCP,c=e.getLCP,s=e.getTTFB;n(t),r(t),i(t),c(t),s(t)}))};s.a.render(Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(N,{})}),document.getElementById("root")),E()}},[[64,1,2]]]);
//# sourceMappingURL=main.06a68725.chunk.js.map