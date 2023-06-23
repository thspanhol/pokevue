(function(){"use strict";var e={56:function(e,t,n){var o=n(963),a=n(252);function r(e,t,n,o,r,s){var i=(0,a.up)("router-view");return(0,a.wg)(),(0,a.j4)(i)}var s=n(582),i=n(154),u=(0,a.aZ)({name:"App",created:function(){this.getPokemons()},methods:{getPokemons:function(){return(0,s.mG)(this,void 0,Promise,(function(){var e,t;return(0,s.Jh)(this,(function(n){switch(n.label){case 0:return e=[],[4,i.Z.get("https://pokeapi.co/api/v2/pokemon?limit=151").then((function(t){return e=t.data.results||t.data.pokemon})).catch((function(e){return console.log(e)}))];case 1:return n.sent(),t=e.map((function(e){return e.url||e.pokemon.url})),[4,i.Z.all(t.map((function(e){return i.Z.get(e)}))).then((function(t){return e=t}))];case 2:return n.sent(),this.$store.commit("storePokedex",e),[2]}}))}))}}}),l=n(744);const c=(0,l.Z)(u,[["render",r]]);var p=c,m=n(201),d=n(577),f={className:"screen"},g={className:"nav"},k=(0,a._)("img",{alt:"Fidelidex.me",src:"fidelidex.png"},null,-1),h={className:"btns"},y=["onClick"],v={key:0,alt:"loading",src:"https://raw.githubusercontent.com/thspanhol/pokedex/main/public/poke-loading.gif",className:"loading"},w={key:1,className:"list"},_={className:"card"},b=["alt","src"],C={className:"name"},D={className:"types"};function A(e,t,n,r,s,i){var u=this,l=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("div",f,[(0,a._)("div",g,[k,(0,a.wy)((0,a._)("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=function(t){return e.input_name=t}),placeholder:"Search Pokemon for Name"},null,512),[[o.nr,e.input_name]]),(0,a._)("div",h,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(Object.keys(this.colours),(function(t){return(0,a.wg)(),(0,a.iD)("button",{key:t,onClick:function(n){return e.selectType(t)},style:(0,d.j5)({background:u.selectedType===t?u.colours[t]:"#0C7155"})},(0,d.zw)(t[0].toUpperCase()+t.substring(1)),13,y)})),128))])]),151!==e.$store.state.pokedex.length?((0,a.wg)(),(0,a.iD)("img",v)):((0,a.wg)(),(0,a.iD)("div",w,[(0,a._)("div",_,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.$store.state.pokedex.filter((function(e){return e.data.name.startsWith(u.input_name.toLowerCase())})).filter((function(t){var n=1===t.data.types.length?t.data.types[0].type.name:t.data.types[0].type.name+t.data.types[1].type.name;return n.includes(e.selectedType)})),(function(t){return(0,a.wg)(),(0,a.j4)(l,{key:t.data.id,onClick:function(n){return e.selectPokemon(t.data)},to:t.data.name},{default:(0,a.w5)((function(){return[(0,a._)("img",{alt:t.data.name,src:Object.values(t.data.sprites.other)[2].front_default},null,8,b),(0,a._)("div",C,[(0,a._)("h2",null,(0,d.zw)(t.data.name[0].toUpperCase()+t.data.name.substring(1)),1),(0,a._)("h2",null,(0,d.zw)("#"+"00".concat(t.data.id).slice(-3)),1)]),(0,a._)("div",D,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(t.data.types,(function(e){return(0,a.wg)(),(0,a.iD)("h3",{key:e.type.name,style:(0,d.j5)({background:u.colours[e.type.name],textDecoration:"underline"+u.colours[e.type.name]})},(0,d.zw)(e.type.name[0].toUpperCase()+e.type.name.substring(1)),5)})),128))])]})),_:2},1032,["onClick","to"])})),128)),(0,a.wy)((0,a._)("h2",null," Nenhum Pokémon Encontrado. ",512),[[o.F8,0===e.$store.state.pokedex.filter((function(e){return e.data.name.startsWith(u.input_name.toLowerCase())})).filter((function(t){var n=1===t.data.types.length?t.data.types[0].type.name:t.data.types[0].type.name+t.data.types[1].type.name;return n.includes(e.selectedType)})).length]])])]))])}var N=(0,a.aZ)({name:"PokedexPage",data:function(){return{colours:{normal:"#A8A77A",fire:"#EE8130",water:"#6390F0",electric:"#F7D02C",grass:"#7AC74C",ice:"#96D9D6",fighting:"#C22E28",poison:"#A33EA1",ground:"#E2BF65",flying:"#A98FF3",psychic:"#F95587",bug:"#A6B91A",rock:"#B6A136",ghost:"#735797",dragon:"#6F35FC",steel:"#B7B7CE",fairy:"#D685AD"},input_name:"",selectedType:""}},methods:{selectPokemon:function(e){this.$store.commit("storePokemon",e)},selectType:function(e){this.selectedType===e?this.selectedType="":this.selectedType=e}}});const x=(0,l.Z)(N,[["render",A]]);var F=x,P={className:"page"},$={className:"info"},j={className:"image"},O=["alt","src"],E={className:"stats"},T={className:"gameStatus"},B=["alt","src"],Z=(0,a._)("h2",null,"Game Status",-1),z=["alt","src"],U={className:"numbers"};function H(e,t,n,o,r,s){var i=this,u=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("div",P,[(0,a._)("div",$,[(0,a._)("div",j,[(0,a._)("h1",null,(0,d.zw)(e.$store.state.pokemon.name[0].toUpperCase()+e.$store.state.pokemon.name.substring(1)),1),(0,a._)("h2",null,(0,d.zw)("#"+"00".concat(e.$store.state.pokemon.id).slice(-3)),1),(0,a._)("div",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.$store.state.pokemon.types,(function(e){return(0,a.wg)(),(0,a.iD)("h3",{key:e.type.name,style:(0,d.j5)({background:i.colours[e.type.name]})},(0,d.zw)(e.type.name),5)})),128))]),(0,a._)("img",{alt:e.$store.state.pokemon.name,src:Object.values(e.$store.state.pokemon.sprites.other)[2].front_default},null,8,O)]),(0,a._)("div",E,[(0,a._)("div",T,[(0,a._)("img",{className:"firstchibi",alt:e.$store.state.pokemon.name+"-game_sprite",src:e.$store.state.pokemon.sprites.back_default},null,8,B),Z,(0,a._)("img",{className:"secoundchibi",alt:e.$store.state.pokemon.name+"-game_sprite",src:e.$store.state.pokemon.sprites.front_default},null,8,z)]),(0,a._)("div",U,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.$store.state.pokemon.stats,(function(t){return(0,a.wg)(),(0,a.iD)("div",{key:t.stat.name},[(0,a._)("h3",null,(0,d.zw)(t.stat.name[0].toUpperCase()+t.stat.name.substring(1)),1),(0,a._)("div",{className:"skill",style:(0,d.j5)({border:"1px solid"+i.colours[e.$store.state.pokemon.types[0].type.name]})},[(0,a._)("div",{className:"skill_level",style:(0,d.j5)({width:t.base_stat/1.6+"%",background:i.colours[e.$store.state.pokemon.types[0].type.name]})},null,4)],4)])})),128))]),(0,a.Wm)(u,{to:"/",className:"link"},{default:(0,a.w5)((function(){return[(0,a.Uk)("Back")]})),_:1})])])])}var K=(0,a.aZ)({name:"PokemonPage",data:function(){return{colours:{normal:"#A8A77A",fire:"#EE8130",water:"#6390F0",electric:"#F7D02C",grass:"#7AC74C",ice:"#96D9D6",fighting:"#C22E28",poison:"#A33EA1",ground:"#E2BF65",flying:"#A98FF3",psychic:"#F95587",bug:"#A6B91A",rock:"#B6A136",ghost:"#735797",dragon:"#6F35FC",dark:"#705746",steel:"#B7B7CE",fairy:"#D685AD"}}}});const Y=(0,l.Z)(K,[["render",H]]);var S=Y,W=[{path:"/",name:"Pokedex",component:F},{path:"/:pokemon",name:"pokemon",component:S}],G=(0,m.p7)({history:(0,m.PO)("/"),routes:W}),L=G,J=n(907),M=(0,J.MT)({state:{pokedex:{},pokemon:{}},getters:{},mutations:{storePokedex:function(e,t){e.pokedex=t},storePokemon:function(e,t){e.pokemon=t}},actions:{},modules:{}});(0,o.ri)(p).use(M).use(L).mount("#app")}},t={};function n(o){var a=t[o];if(void 0!==a)return a.exports;var r=t[o]={exports:{}};return e[o](r,r.exports,n),r.exports}n.m=e,function(){var e=[];n.O=function(t,o,a,r){if(!o){var s=1/0;for(c=0;c<e.length;c++){o=e[c][0],a=e[c][1],r=e[c][2];for(var i=!0,u=0;u<o.length;u++)(!1&r||s>=r)&&Object.keys(n.O).every((function(e){return n.O[e](o[u])}))?o.splice(u--,1):(i=!1,r<s&&(s=r));if(i){e.splice(c--,1);var l=a();void 0!==l&&(t=l)}}return t}r=r||0;for(var c=e.length;c>0&&e[c-1][2]>r;c--)e[c]=e[c-1];e[c]=[o,a,r]}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,o){var a,r,s=o[0],i=o[1],u=o[2],l=0;if(s.some((function(t){return 0!==e[t]}))){for(a in i)n.o(i,a)&&(n.m[a]=i[a]);if(u)var c=u(n)}for(t&&t(o);l<s.length;l++)r=s[l],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(c)},o=self["webpackChunkpokevue"]=self["webpackChunkpokevue"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(56)}));o=n.O(o)})();
//# sourceMappingURL=app.2018be96.js.map