(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,,,,function(e,a,t){e.exports=t(30)},,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},,,,function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(12),i=t.n(r),o=(t(21),t(33)),s=t(32),l=t(5),m=t(6),d=t(9),u=t(7),h=t(10),g=(t(22),t(23),function(e){return c.a.createElement("div",{className:"container"},e.cardImgs.sort(function(e,a){return.5-Math.random()}).map(function(a){return c.a.createElement("div",{key:a.id,style:{backgroundImage:"url(".concat(a.src,")"),height:"170px"},value:a.id,onClick:function(){return e.handleSelect(a.id)}})}))}),f=(t(24),function(){return c.a.createElement("div",{id:"push-down"},c.a.createElement("div",{className:"jumbotron jumbotron-fluid"},c.a.createElement("div",{className:"container"},c.a.createElement("h1",{className:"display-4"},"Clicky Game!"),c.a.createElement("p",{className:"lead"},"Click on an image to earn points, but don't click on any more than once!"))))}),p=t(31),v=(t(25),t(26),function(e){return c.a.createElement("div",{className:"both-scores"},c.a.createElement("div",null,e.score),c.a.createElement("p",{className:"both-scores"},"||"),c.a.createElement("div",null,e.highscore))}),E=function(e){function a(){return Object(l.a)(this,a),Object(d.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(h.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"NavBar"},c.a.createElement("ul",{className:"nav-list"},c.a.createElement(p.a,{to:"/"},c.a.createElement("li",{className:"Welcome nav-item"},"Clicky Game")),c.a.createElement("div",{className:"score-container"},c.a.createElement(v,{className:"score-container",score:this.score,highscore:this.highscore}))))}}]),a}(n.Component),b=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(t=Object(d.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(c)))).state={clickedPhotos:[],score:0,highScore:0},t.handleSelect=function(e){console.log(e),t.state.clickedPhotos.push(e),console.log(t.state.clickedPhotos),t.state.clickedPhotos.includes(e)&&console.log("its alive")},t}return Object(h.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(E,{score:this.score,highscore:this.highScore}),c.a.createElement(f,null),c.a.createElement(g,{cardImgs:[{src:"./images/8ffe4079fc18f9ef746442b25217599f.png",id:1},{src:"./images/30d887ea247e773973d95281a4f87588.png",id:2},{src:"./images/58f37709a4fa116215a9240d.png",id:3},{src:"./images/104-1049974_self-promoting-jerry-rick-and-morty-png.png",id:4},{src:"./images/21986aecb5f72825562820781f1ce1b2.jpg",id:5},{src:"./images/c3kqudP.jpg",id:6},{src:"./images/cromulon.png",id:7},{src:"./images/download.jpg",id:8},{src:"./images/Jessica-0.jpg",id:9},{src:"./images/kisspng-fan-art-character-rick-and-morty-5ac4653d578b40.5710493615228204133586.jpg",id:10},{src:"./images/rick-and-morty-302-2.jpg",id:11},{src:"./images/S2e4_beth_scream.png",id:12}],handleSelect:this.handleSelect}))}}]),a}(c.a.Component);var k=function(){return c.a.createElement(o.a,null,c.a.createElement(s.a,null,c.a.createElement(b,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[15,1,2]]]);
//# sourceMappingURL=main.82759ee2.chunk.js.map