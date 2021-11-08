(this["webpackJsonppunk-api"]=this["webpackJsonppunk-api"]||[]).push([[0],{22:function(e,t,c){},23:function(e,t,c){},24:function(e,t,c){},31:function(e,t,c){},32:function(e,t,c){},33:function(e,t,c){},34:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){},37:function(e,t,c){"use strict";c.r(t);var n=c(1),i=c.n(n),r=c(15),s=c.n(r),j=(c(22),c(10)),b=c(8),a=c(2),l=(c(23),c(24),c(0)),d=function(e){var t=Object(a.f)().id,c=e.beersArray.filter((function(e){return e.id==t}))[0];return Object(l.jsxs)("div",{className:"beer-info",children:[Object(l.jsx)("img",{src:c.image_url,className:"beer-info__img",alt:""}),Object(l.jsxs)("div",{className:"beer-info__column",children:[Object(l.jsx)("h2",{className:"beer-info__title",children:c.name}),Object(l.jsxs)("p",{children:[Object(l.jsx)("b",{children:"Brewed in:"})," ",c.first_brewed]}),Object(l.jsxs)("p",{children:[Object(l.jsx)("b",{children:"Yeast:"})," ",c.ingredients.yeast]}),Object(l.jsx)("p",{className:"beer-info__description",children:Object(l.jsx)("em",{children:c.description})}),Object(l.jsx)("table",{className:"beer-info__table",border:"1",cellpadding:"10",children:Object(l.jsxs)("tbody",{children:[Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:Object(l.jsx)("b",{children:"PH"})}),Object(l.jsx)("td",{children:Object(l.jsx)("b",{children:"ABV"})}),Object(l.jsx)("td",{children:Object(l.jsx)("b",{children:"IBU"})}),Object(l.jsx)("td",{children:Object(l.jsx)("b",{children:"EBC"})}),Object(l.jsx)("td",{children:Object(l.jsx)("b",{children:"SRM"})})]}),Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:c.ph}),Object(l.jsx)("td",{children:c.abv}),Object(l.jsx)("td",{children:c.ibu}),Object(l.jsx)("td",{children:c.ebc}),Object(l.jsx)("td",{children:c.srm})]})]})}),Object(l.jsxs)("p",{children:[Object(l.jsx)("b",{children:"Food Pairing:"})," ",c.food_pairing]}),Object(l.jsxs)("p",{children:[Object(l.jsx)("b",{children:"Tips:"})," ",c.brewers_tips]})]})]})},h=(c(31),function(e){var t=e.img,c=e.name,n=e.tagline,i=e.ph,r=e.abv,s=e.firstBrewed;return Object(l.jsxs)("div",{className:"beers__card",children:[Object(l.jsx)("img",{src:t,className:"beers__card__img",alt:""}),Object(l.jsx)("h3",{className:"beers__card__title",children:c}),Object(l.jsx)("p",{className:"beers__card__tagline",children:n}),Object(l.jsxs)("p",{children:["Brewed in: ",Object(l.jsx)("b",{children:s})]}),Object(l.jsxs)("h5",{children:["Ph: ",i]}),Object(l.jsxs)("h5",{children:["Abv: ",r]})]})}),O=(c(32),function(e){var t=e.beersArray.map((function(e){return Object(l.jsx)(b.b,{to:"/beerinfo/".concat(e.id),children:Object(l.jsx)(h,{img:e.image_url,name:e.name,firstBrewed:e.first_brewed,tagline:e.tagline,ph:e.ph,abv:e.abv},e.id)},e.id)}));return Object(l.jsx)("main",{className:"main",children:t})}),o=(c(33),function(e){var t=e.filterByABV,c=e.filterByPH;return Object(l.jsxs)("div",{className:"filters__section",children:[Object(l.jsx)("p",{children:"Filter Beers by:"}),Object(l.jsxs)("div",{className:"filtersList",children:[Object(l.jsxs)("div",{className:"filtersList__filter",children:[Object(l.jsx)("input",{onClick:t,type:"checkbox",id:"abv",name:"abv"}),Object(l.jsx)("label",{htmlFor:"abv",children:"High Alcohol (ABV \u203a 6.0%)"})]}),Object(l.jsxs)("div",{className:"filtersList__filter",children:[Object(l.jsx)("input",{onClick:c,type:"checkbox",id:"ph",name:"ph"}),Object(l.jsx)("label",{htmlFor:"ph",children:"High Acidity (pH \u2039 4.0%)"})]})]})]})}),x=(c(34),function(){return Object(l.jsxs)("div",{className:"header",children:[Object(l.jsxs)("h1",{children:["Your Favourite Beers",Object(l.jsx)("br",{}),"All in one place"]}),Object(l.jsx)("div",{className:"header__overlay"})]})}),u=(c(35),function(){return Object(l.jsx)("div",{className:"nav",children:Object(l.jsx)(b.b,{to:"/",children:Object(l.jsx)("h3",{children:"PUNK API"})})})}),f=(c(36),function(e){var t=e.searchTerm,c=e.handleInput;return Object(l.jsx)("div",{className:"searchBox",children:Object(l.jsx)("input",{type:"text",value:t,onChange:c,placeholder:"Start your search..."})})});var p=function(){var e=Object(n.useState)([]),t=Object(j.a)(e,2),c=t[0],i=t[1],r=Object(n.useState)(""),s=Object(j.a)(r,2),h=s[0],p=s[1],m=Object(n.useState)(!1),v=Object(j.a)(m,2),_=v[0],g=v[1],N=Object(n.useState)(!1),B=Object(j.a)(N,2),y=B[0],A=B[1];Object(n.useEffect)((function(){fetch("https://api.punkapi.com/v2/beers?per_page=80").then((function(e){return e.json()})).then((function(e){i(e)}))}),[]);var w=c.filter((function(e){var t=!0;return h&&(t=e.name.toLowerCase().includes(h)),y&&(t=t&&e.abv>6),_&&(t=t&&e.ph<4),t}));return Object(l.jsx)(b.a,{children:Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(u,{}),Object(l.jsx)(x,{}),Object(l.jsx)(f,{handleInput:function(e){var t=e.target.value.toLowerCase();p(t)},searchTerm:h}),Object(l.jsx)(o,{filterByABV:function(){A(!y)},filterByPH:function(){g(!_)}}),Object(l.jsxs)(a.c,{children:[Object(l.jsx)(a.a,{path:"/beerinfo/:id",children:c.length>0&&Object(l.jsx)(d,{beersArray:c})}),Object(l.jsx)(a.a,{path:"/",children:Object(l.jsx)(O,{beersArray:w})})]})]})})},m=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,38)).then((function(t){var c=t.getCLS,n=t.getFID,i=t.getFCP,r=t.getLCP,s=t.getTTFB;c(e),n(e),i(e),r(e),s(e)}))};s.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsx)(p,{})}),document.getElementById("root")),m()}},[[37,1,2]]]);
//# sourceMappingURL=main.8b7992dc.chunk.js.map